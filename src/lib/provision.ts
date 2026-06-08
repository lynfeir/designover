import { createAdminClient } from "@/lib/supabase/admin";
import type { IntakeSubmission } from "@/lib/supabase/types";

/**
 * Attaches any briefs submitted with this email to the account, then makes
 * sure the client has a dashboard project. Built from their latest brief when
 * there is one, otherwise a generic starter. Runs with the service role.
 *
 * Called on sign-up, on account-creation from the intake form, and as a
 * safety net every time a client opens the portal (so a brief sent after
 * signup still shows up). Idempotent.
 */
export async function claimAndProvision(
  userId: string,
  email?: string | null,
  company?: string | null
): Promise<void> {
  const admin = createAdminClient();

  // 1. Claim any unowned briefs sent with this email.
  if (email) {
    await admin
      .from("intake_submissions")
      .update({ user_id: userId })
      .is("user_id", null)
      .ilike("email", email.trim());
  }

  // 2. Already has a project? Nothing more to build.
  const { data: existing } = await admin
    .from("client_projects")
    .select("id")
    .eq("client_id", userId)
    .limit(1);
  if (existing && existing.length > 0) return;

  // 3. Build the project from their most recent brief, if any.
  const { data: subs } = await admin
    .from("intake_submissions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .returns<IntakeSubmission[]>();
  const brief = subs?.[0];

  const name =
    brief?.project_name?.trim() ||
    (company?.trim()
      ? `${company.trim()} Website`
      : brief?.company?.trim()
        ? `${brief.company.trim()} Website`
        : "Your Project");

  const features = Array.isArray(brief?.features) ? brief.features : [];
  const summary =
    brief?.description?.trim() ||
    "Your workspace is ready. Share your brief and we'll turn it into a live demo within 48 hours.";

  const { data: project, error } = await admin
    .from("client_projects")
    .insert({
      client_id: userId,
      name,
      status: "discovery",
      project_type: brief?.project_type || "website",
      summary,
      features,
      progress: brief ? 10 : 5,
    })
    .select("id")
    .single();
  if (error || !project) return;

  const briefed = !!brief;
  const milestones = [
    {
      title: "Kickoff",
      detail: briefed
        ? "Brief received. We're reviewing what you need."
        : "Tell us what you're building and what success looks like.",
      status: briefed ? "done" : "active",
      position: 1,
    },
    {
      title: "Free 48-hour demo",
      detail: "We build a live preview of your site, no payment.",
      status: briefed ? "active" : "pending",
      position: 2,
    },
    {
      title: "Build & refine",
      detail: "We dial in every detail with you until it's right.",
      status: "pending",
      position: 3,
    },
    {
      title: "Launch",
      detail: "Your site goes live and full ownership is yours.",
      status: "pending",
      position: 4,
    },
    {
      title: "Ongoing care",
      detail: "Updates, new features, and support as you grow.",
      status: "pending",
      position: 5,
    },
  ];

  await admin
    .from("project_milestones")
    .insert(milestones.map((m) => ({ ...m, project_id: project.id })));
}

/** Backwards-compatible wrapper. */
export async function provisionStarterDashboard(
  userId: string,
  company?: string | null
): Promise<void> {
  return claimAndProvision(userId, null, company);
}
