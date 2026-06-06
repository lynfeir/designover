import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/login/actions";
import { FEATURE_LABELS } from "@/lib/intake";
import type {
  ClientProject,
  IntakeSubmission,
  ProjectMilestone,
  Profile,
} from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Your Portal — Design over Atlanta",
};

const STATUS_LABEL: Record<string, string> = {
  discovery: "Discovery",
  demo: "Demo Ready",
  in_progress: "In Progress",
  review: "In Review",
  launched: "Launched",
  active: "Active",
  paused: "Paused",
  new: "New",
  reviewing: "Reviewing",
  quoted: "Quoted",
  won: "Won",
  archived: "Archived",
};

function fmtDate(s: string) {
  return new Date(s).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PortalPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/portal");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single<Profile>();

  // Admins get the admin view.
  if (profile?.role === "admin") redirect("/admin");

  const { data: projects } = await supabase
    .from("client_projects")
    .select("*")
    .eq("client_id", user.id)
    .order("created_at", { ascending: false })
    .returns<ClientProject[]>();

  const projectIds = (projects ?? []).map((p) => p.id);
  const { data: milestones } = projectIds.length
    ? await supabase
        .from("project_milestones")
        .select("*")
        .in("project_id", projectIds)
        .order("position", { ascending: true })
        .returns<ProjectMilestone[]>()
    : { data: [] as ProjectMilestone[] };

  const { data: submissions } = await supabase
    .from("intake_submissions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .returns<IntakeSubmission[]>();

  const firstName = (profile?.full_name || user.email || "there").split(" ")[0];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 sticky top-0 z-40 glass">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-ui)] font-bold tracking-tight text-foreground"
          >
            Design <span className="text-primary">over</span> Atlanta
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/start"
              className="hidden sm:inline-block font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.15em] text-primary hover:text-primary-hover transition-colors"
            >
              + New Project
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
        {/* Greeting */}
        <div className="mb-12">
          <span className="font-[family-name:var(--font-mono)] text-primary text-xs tracking-[0.3em] uppercase block mb-3">
            Client Portal
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-semibold tracking-tight">
            Welcome back, {firstName}.
          </h1>
        </div>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.25em] text-foreground/70 mb-5">
            Your Projects
          </h2>

          {(projects?.length ?? 0) === 0 ? (
            <EmptyCard
              title="No active projects yet."
              body="Once you start a project, you'll track every milestone right here."
              cta={{ href: "/start", label: "Start a project" }}
            />
          ) : (
            <div className="space-y-5">
              {projects!.map((p) => {
                const ms = (milestones ?? []).filter(
                  (m) => m.project_id === p.id
                );
                return (
                  <div
                    key={p.id}
                    className="glass rounded-2xl p-7 lg:p-9 border border-border/30"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-semibold">
                            {p.name}
                          </h3>
                          <StatusBadge status={p.status} />
                        </div>
                        {p.summary && (
                          <p className="text-muted-fg text-sm max-w-xl leading-relaxed font-[family-name:var(--font-ui)]">
                            {p.summary}
                          </p>
                        )}
                      </div>
                      {p.live_url && (
                        <a
                          href={p.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.15em] text-primary border border-primary/30 hover:border-primary/60 px-4 py-2 rounded-full transition-colors"
                        >
                          View Live ↗
                        </a>
                      )}
                    </div>

                    {/* Progress */}
                    <div className="mb-7">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-[family-name:var(--font-mono)] text-xs text-muted-fg uppercase tracking-wider">
                          Progress
                        </span>
                        <span className="font-[family-name:var(--font-mono)] text-sm text-primary">
                          {p.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-border/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Milestones */}
                    {ms.length > 0 && (
                      <ol className="relative border-l border-border/40 ml-1 space-y-5">
                        {ms.map((m) => (
                          <li key={m.id} className="pl-6 relative">
                            <span
                              className={`absolute -left-[7px] top-1 w-3 h-3 rotate-45 border ${
                                m.status === "done"
                                  ? "bg-primary border-primary"
                                  : m.status === "active"
                                    ? "border-primary bg-primary/30 pulse-glow"
                                    : "border-border/60 bg-background"
                              }`}
                            />
                            <div className="flex items-center gap-3">
                              <span
                                className={`font-[family-name:var(--font-ui)] text-sm font-semibold ${
                                  m.status === "pending"
                                    ? "text-foreground/50"
                                    : "text-foreground"
                                }`}
                              >
                                {m.title}
                              </span>
                              {m.status === "active" && (
                                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-primary">
                                  in progress
                                </span>
                              )}
                            </div>
                            {m.detail && (
                              <p className="text-muted-fg text-xs mt-1 font-[family-name:var(--font-ui)] max-w-md">
                                {m.detail}
                              </p>
                            )}
                          </li>
                        ))}
                      </ol>
                    )}

                    {/* Feature tags */}
                    {p.features?.length > 0 && (
                      <div className="mt-7 pt-6 border-t border-border/20 flex flex-wrap gap-2">
                        {p.features.slice(0, 12).map((f) => (
                          <span
                            key={f}
                            className="font-[family-name:var(--font-ui)] text-[11px] text-foreground/60 border border-border/40 rounded-full px-3 py-1"
                          >
                            {FEATURE_LABELS[f] ?? f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Submitted briefs */}
        <section>
          <h2 className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.25em] text-foreground/70 mb-5">
            Your Briefs
          </h2>
          {(submissions?.length ?? 0) === 0 ? (
            <EmptyCard
              title="No briefs submitted."
              body="Your project intake briefs will appear here for reference."
              cta={{ href: "/start", label: "Submit a brief" }}
            />
          ) : (
            <div className="space-y-3">
              {submissions!.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/30 bg-card/30 px-5 py-4"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-ui)] font-semibold text-foreground">
                        {s.project_name || "Untitled brief"}
                      </span>
                      <StatusBadge status={s.status} />
                    </div>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-muted-fg">
                      {s.features?.length ?? 0} features · {s.project_type ?? "—"}{" "}
                      · {fmtDate(s.created_at)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "launched" || status === "won" || status === "active"
      ? "text-success border-success/40 bg-success/10"
      : status === "archived" || status === "paused"
        ? "text-muted-fg border-border/40 bg-card/40"
        : "text-primary border-primary/40 bg-primary-soft";
  return (
    <span
      className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] border rounded-full px-2.5 py-1 ${tone}`}
    >
      {STATUS_LABEL[status] ?? status}
    </span>
  );
}

function EmptyCard({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta: { href: string; label: string };
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border/40 bg-card/20 px-8 py-12 text-center">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-muted-fg text-sm mb-6 max-w-sm mx-auto font-[family-name:var(--font-ui)]">
        {body}
      </p>
      <Link
        href={cta.href}
        className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-7 py-3 text-sm tracking-[0.15em] uppercase inline-block"
      >
        {cta.label}
      </Link>
    </div>
  );
}
