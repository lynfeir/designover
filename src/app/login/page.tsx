import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AuthForm from "@/components/auth/AuthForm";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Client Login — Design over Atlanta",
  description: "Sign in to your Design over Atlanta client portal.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string; redirect?: string }>;
}) {
  const params = await searchParams;
  const mode = params.mode === "signup" ? "signup" : "signin";
  const redirectTo = params.redirect ?? "";

  // Already signed in → straight to the right dashboard.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();
    redirect(data?.role === "admin" ? "/admin" : "/portal");
  }

  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Cinematic panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-12 xl:p-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/cinematic/craft-wireframe.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-beams pointer-events-none" />

        <Link
          href="/"
          className="relative z-10 font-[family-name:var(--font-ui)] font-bold text-lg tracking-tight text-foreground"
        >
          Design <span className="text-primary">over</span> Atlanta
        </Link>

        <div className="relative z-10 max-w-md">
          <h2 className="font-[family-name:var(--font-display)] text-4xl xl:text-5xl font-semibold leading-tight tracking-tight mb-5">
            Your project,
            <br />
            <span className="text-gold-gradient">in one place.</span>
          </h2>
          <p className="text-muted-fg text-base leading-relaxed font-[family-name:var(--font-ui)]">
            Track your build from discovery to launch, review demos the moment
            they&apos;re ready, and keep every detail in one calm dashboard.
          </p>
        </div>

        <div className="relative z-10 font-[family-name:var(--font-mono)] text-xs text-muted-fg tracking-wider">
          designoveratlanta.com
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center px-6 py-24 lg:py-12">
        <AuthForm initialMode={mode} redirectTo={redirectTo} />
      </div>
    </main>
  );
}
