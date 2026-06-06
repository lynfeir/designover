import type { Metadata } from "next";
import Image from "next/image";
import IntakeForm from "@/components/IntakeForm";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Start a Project — Design over Atlanta",
  description:
    "Tell us what you need built. Pick your features, set your scope, and get a free 48-hour demo plan back within a day.",
};

export default async function StartPage() {
  // Prefill contact details if a client is signed in.
  let initialName = "";
  let initialEmail = "";
  let initialCompany = "";

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      initialEmail = user.email ?? "";
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, company")
        .eq("id", user.id)
        .single();
      initialName = profile?.full_name ?? "";
      initialCompany = profile?.company ?? "";
    }
  } catch {
    // not signed in — anonymous intake is fine
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Cinematic ambient backdrop */}
      <Image
        src="/cinematic/ambient-bloom.webp"
        alt=""
        fill
        sizes="100vw"
        quality={55}
        className="object-cover opacity-25 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-beams pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 pb-28">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="font-[family-name:var(--font-mono)] text-primary text-xs tracking-[0.35em] uppercase block mb-5">
            Project Intake
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight mb-5">
            Let&apos;s scope your{" "}
            <span className="text-gold-gradient">build</span>.
          </h1>
          <p className="text-muted-fg text-lg leading-relaxed font-[family-name:var(--font-ui)]">
            Six quick steps. Check off exactly what you need, set your budget,
            and we&apos;ll send back a free demo plan within 24 hours.
          </p>
        </div>

        <IntakeForm
          initialName={initialName}
          initialEmail={initialEmail}
          initialCompany={initialCompany}
        />
      </div>
    </main>
  );
}
