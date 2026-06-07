"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type AccountState = { error?: string; ok?: string } | undefined;

export async function updateAccount(
  _prev: AccountState,
  formData: FormData
): Promise<AccountState> {
  const fullName = String(formData.get("fullName") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();

  if (phone && phone.replace(/\D/g, "").length < 10)
    return { error: "Enter a valid phone number with area code." };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Please sign in again." };

  // Keep the account (auth metadata) and the profile row in sync.
  const { error: metaErr } = await supabase.auth.updateUser({
    data: { full_name: fullName, company, phone },
  });
  if (metaErr) return { error: metaErr.message };

  const { error: profileErr } = await supabase
    .from("profiles")
    .update({ full_name: fullName, company })
    .eq("id", user.id);
  if (profileErr) return { error: profileErr.message };

  revalidatePath("/account");
  revalidatePath("/portal");
  return { ok: "Saved." };
}

export async function changePassword(
  _prev: AccountState,
  formData: FormData
): Promise<AccountState> {
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirm") || "");

  if (password.length < 8)
    return { error: "Use at least 8 characters for your password." };
  if (password !== confirm) return { error: "Those passwords don't match." };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Please sign in again." };

  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { error: error.message };

  return { ok: "Password updated." };
}
