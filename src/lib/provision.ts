import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Gives a client account a starter dashboard from a template the first time
 * it's needed: one project plus the standard milestone path. Idempotent — if
 * the client already has a project, it does nothing. Called on sign-up and as
 * a safety net when an existing client opens an empty portal.
 */
export async function provisionStarterDashboard(
  userId: string,
  company?: string | null
): Promise<void> {
  const admin = createAdminClient();

  const { data: existing } = await admin
    .from("client_projects")
    .select("id")
    .eq("client_id", userId)
    .limit(1);
  if (existing && existing.length > 0) return;

  const name = company?.trim() ? `${company.trim()} Website` : "Your Project";

  const { data: project, error } = await admin
    .from("client_projects")
    .insert({
      client_id: userId,
      name,
      status: "discovery",
      project_type: "website",
      summary:
        "Your workspace is ready. Share your brief and we'll turn it into a live demo within 48 hours.",
      features: [],
      progress: 5,
    })
    .select("id")
    .single();
  if (error || !project) return;

  const milestones = [
    {
      title: "Kickoff",
      detail: "Tell us what you're building and what success looks like.",
      status: "active",
      position: 1,
    },
    {
      title: "Free 48-hour demo",
      detail: "We build a live preview of your site, no payment.",
      status: "pending",
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
