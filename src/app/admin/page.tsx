import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/login/actions";
import LeadCard from "@/components/admin/LeadCard";
import type { IntakeSubmission, Profile } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Admin — Design over Atlanta",
};

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/admin");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single<Profile>();

  if (profile?.role !== "admin") redirect("/portal");

  const { data: leads } = await supabase
    .from("intake_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<IntakeSubmission[]>();

  const { data: clients } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "client")
    .order("created_at", { ascending: false })
    .returns<Profile[]>();

  const all = leads ?? [];
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const newThisWeek = all.filter(
    (l) => new Date(l.created_at).getTime() > weekAgo
  ).length;
  const openLeads = all.filter(
    (l) => l.status === "new" || l.status === "reviewing"
  ).length;
  const totalFeatures = all.reduce(
    (n, l) => n + (l.features?.length ?? 0),
    0
  );

  const stats = [
    { label: "Total Leads", value: all.length },
    { label: "Open", value: openLeads },
    { label: "New (7d)", value: newThisWeek },
    { label: "Clients", value: clients?.length ?? 0 },
  ];

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/30 sticky top-0 z-40 glass">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-ui)] font-bold tracking-tight text-foreground"
          >
            Design <span className="text-primary">over</span> Atlanta
            <span className="ml-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-primary/70">
              admin
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/portal"
              className="hidden sm:inline-block font-[family-name:var(--font-ui)] text-xs uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors"
            >
              Portal view
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

      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="mb-10">
          <span className="font-[family-name:var(--font-mono)] text-primary text-xs tracking-[0.3em] uppercase block mb-3">
            Lead Desk
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-semibold tracking-tight">
            Incoming work.
          </h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl px-6 py-5 border border-border/30"
            >
              <div className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-bold text-primary leading-none mb-2">
                {s.value}
              </div>
              <div className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-[0.2em] text-muted-fg">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Leads */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.25em] text-foreground/70 mb-5">
            All Briefs
          </h2>
          {all.length === 0 ? (
            <p className="text-muted-fg text-sm font-[family-name:var(--font-ui)] rounded-xl border border-dashed border-border/40 bg-card/20 px-6 py-10 text-center">
              No briefs yet. They&apos;ll land here the moment someone submits
              the intake form.
            </p>
          ) : (
            <div className="space-y-3">
              {all.map((lead) => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          )}
        </section>

        {/* Clients */}
        <section>
          <h2 className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.25em] text-foreground/70 mb-5">
            Clients
          </h2>
          {(clients?.length ?? 0) === 0 ? (
            <p className="text-muted-fg text-sm font-[family-name:var(--font-ui)]">
              No client accounts yet.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {clients!.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl border border-border/30 bg-card/30 px-5 py-4"
                >
                  <div className="font-[family-name:var(--font-ui)] font-semibold text-foreground">
                    {c.full_name || "—"}
                  </div>
                  <div className="font-[family-name:var(--font-mono)] text-xs text-muted-fg break-all">
                    {c.email}
                  </div>
                  {c.company && (
                    <div className="font-[family-name:var(--font-ui)] text-xs text-muted-fg/80 mt-1">
                      {c.company}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
