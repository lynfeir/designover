"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { SubmissionStatus } from "@/lib/supabase/types";

async function requireAdmin(): Promise<boolean> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  return data?.role === "admin";
}

export async function updateSubmissionStatus(
  id: string,
  status: SubmissionStatus
): Promise<{ error?: string }> {
  if (!(await requireAdmin())) return { error: "Not authorized." };

  const admin = createAdminClient();
  const { error } = await admin
    .from("intake_submissions")
    .update({ status })
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/admin");
  return {};
}
