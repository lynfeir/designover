import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password — Design over Atlanta",
};

export default async function ForgotPage() {
  // Already signed in? No need to reset.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/portal");

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
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
