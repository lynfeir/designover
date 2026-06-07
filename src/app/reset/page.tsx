import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Set New Password — Design over Atlanta",
};

export default async function ResetPage() {
  // The reset link signs the user in via /auth/callback first, so a valid
  // session means the link was good. No session means it expired or was opened
  // on a different device.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/forgot?error=expired");

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="px-6 lg:px-10 py-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-ui)] font-bold tracking-tight text-foreground"
        >
          Design <span className="text-primary">over</span> Atlanta
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center px-6 pb-24">
        <ResetPasswordForm />
      </div>
    </main>
  );
}
