"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { provisionStarterDashboard } from "@/lib/provision";

export type AuthState = { error?: string } | undefined;

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
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const wanted = String(formData.get("redirect") || "");

  if (!email || !password) return { error: "Email and password are required." };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return { error: "That email and password don't match." };

  const dest =
    wanted && wanted.startsWith("/")
      ? wanted
      : await destinationFor(data.user.id);
  redirect(dest);
}

export async function signUp(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const fullName = String(formData.get("fullName") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password)
    return { error: "Email and password are required." };
  if (password.length < 8)
    return { error: "Use at least 8 characters for your password." };

  // Create the client account already confirmed so they can sign in
  // immediately — no email round-trip.
  const admin = createAdminClient();
  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName, company, role: "client" },
  });

  if (createError) {
    const msg = createError.message?.toLowerCase().includes("already")
      ? "An account with that email already exists. Try signing in."
      : createError.message || "Could not create your account.";
    return { error: msg };
  }

  // Build their dashboard from the template so they never land on a blank page.
  if (created?.user) {
    await provisionStarterDashboard(created.user.id, company);
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

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
