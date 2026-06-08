"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { claimAndProvision } from "@/lib/provision";

export type AuthState = { error?: string } | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function destinationFor(userId: string): Promise<string> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();
  return data?.role === "admin" ? "/admin" : "/portal";
}

export async function signIn(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const wanted = String(formData.get("redirect") || "");

  if (!email || !password) return { error: "Email and password are required." };
  if (!EMAIL_RE.test(email)) return { error: "Enter a valid email address." };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return { error: "That email and password don't match." };

  // Only allow internal, single-slash paths (blocks //evil.com open redirects).
  const safeRedirect = wanted.startsWith("/") && !wanted.startsWith("//");
  const dest = safeRedirect ? wanted : await destinationFor(data.user.id);
  redirect(dest);
}

export async function signUp(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const fullName = String(formData.get("fullName") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (!email || !password)
    return { error: "Email and password are required." };
  if (!EMAIL_RE.test(email)) return { error: "Enter a valid email address." };
  if (phone.replace(/\D/g, "").length < 10)
    return { error: "Enter a valid phone number with area code." };
  if (password.length < 8)
    return { error: "Use at least 8 characters for your password." };

  // Create the client account already confirmed so they can sign in
  // immediately — no email round-trip.
  const admin = createAdminClient();
  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName, company, phone, role: "client" },
  });

  if (createError) {
    const msg = createError.message?.toLowerCase().includes("already")
      ? "An account with that email already exists. Try signing in."
      : createError.message || "Could not create your account.";
    return { error: msg };
  }

  // Build their dashboard from the template so they never land on a blank page.
  // Best-effort: the portal re-provisions on first load if this fails, so a
  // hiccup here should never block sign-up.
  if (created?.user) {
    try {
      await claimAndProvision(created.user.id, email, company);
    } catch (e) {
      console.error("Dashboard provisioning failed (portal will retry):", e);
    }
  }

  const supabase = await createClient();
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (signInError)
    return { error: "Account created. Please sign in to continue." };

  redirect("/portal");
}

export async function updatePassword(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirm") || "");

  if (password.length < 8)
    return { error: "Use at least 8 characters for your password." };
  if (password !== confirm) return { error: "Those passwords don't match." };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user)
    return { error: "Your reset link expired. Request a new one from /forgot." };

  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { error: error.message };

  redirect("/portal");
}

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
