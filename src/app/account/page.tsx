import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/login/actions";
import AccountSettings from "@/components/account/AccountSettings";
import type { Profile } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Account — Design over Atlanta",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/account");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single<Profile>();

  const meta = (user.user_metadata ?? {}) as Record<string, string>;

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/30 sticky top-0 z-40 glass">
        <div className="max-w-[820px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-ui)] font-bold tracking-tight text-foreground"
          >
            Design <span className="text-primary">over</span> Atlanta
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href={profile?.role === "admin" ? "/admin" : "/portal"}
              className="font-[family-name:var(--font-ui)] text-xs uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors"
            >
              ← Dashboard
            </Link>
            <form action={signOut}>
              <button
                type="submit"
                className="font-[family-name:var(--font-ui)] text-xs uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-[820px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="mb-8">
          <span className="font-[family-name:var(--font-mono)] text-primary text-xs tracking-[0.3em] uppercase block mb-3">
            Account
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-semibold tracking-tight">
            Account settings.
          </h1>
        </div>

        <AccountSettings
          email={user.email ?? ""}
          fullName={profile?.full_name || meta.full_name || ""}
          company={profile?.company || meta.company || ""}
          phone={meta.phone || ""}
        />
      </div>
    </main>
  );
}
