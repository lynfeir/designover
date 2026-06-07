/**
 * Seeds the Design over Atlanta backend:
 *   1. Admin account (you)
 *   2. Fit4Lyfe example client account
 *   3. Fit4Lyfe project + milestones + an example brief
 *
 * Run AFTER applying supabase/migrations/0001_init.sql:
 *   node --env-file=.env.local scripts/setup-db.mjs
 *
 * Idempotent — safe to run repeatedly.
 */
import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!URL || !SERVICE) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const DEMO_CLIENT_EMAIL = "demo@fit4lyfe.net";
const DEMO_CLIENT_PASSWORD = "Fit4Lyfe2026!";

const db = createClient(URL, SERVICE, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function findUserByEmail(email) {
  // Small project — one page is plenty.
  const { data, error } = await db.auth.admin.listUsers({ page: 1, perPage: 200 });
  if (error) throw error;
  return data.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
}

async function ensureUser(email, password, meta) {
  const existing = await findUserByEmail(email);
  if (existing) {
    await db.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
      user_metadata: meta,
    });
    console.log(`• updated user ${email}`);
    return existing.id;
  }
  const { data, error } = await db.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: meta,
  });
  if (error) throw error;
  console.log(`• created user ${email}`);
  return data.user.id;
}

async function ensureProfile(id, fields) {
  const { error } = await db
    .from("profiles")
    .upsert({ id, ...fields }, { onConflict: "id" });
  if (error) throw error;
}

async function main() {
  // ── 1. Admin (you) ──
  if (ADMIN_EMAIL && ADMIN_PASSWORD) {
    const adminId = await ensureUser(ADMIN_EMAIL, ADMIN_PASSWORD, {
      full_name: "Hunter Weeks",
      company: "Design over Atlanta",
      phone: "(470) 758-3549",
      role: "admin",
    });
    await ensureProfile(adminId, {
      email: ADMIN_EMAIL,
      full_name: "Hunter Weeks",
      company: "Design over Atlanta",
      role: "admin",
    });
    console.log(`✓ admin ready: ${ADMIN_EMAIL}`);
  } else {
    console.warn("! ADMIN_EMAIL / ADMIN_PASSWORD not set — skipping admin seed.");
  }

  // ── 2. Fit4Lyfe example client ──
  const clientId = await ensureUser(DEMO_CLIENT_EMAIL, DEMO_CLIENT_PASSWORD, {
    full_name: "Brooke Brum",
    company: "Fit4Lyfe",
    phone: "(470) 555-0123",
    role: "client",
  });
  await ensureProfile(clientId, {
    email: DEMO_CLIENT_EMAIL,
    full_name: "Brooke Brum",
    company: "Fit4Lyfe",
    role: "client",
  });
  console.log(`✓ example client ready: ${DEMO_CLIENT_EMAIL}`);

  // ── 3. Fit4Lyfe project ──
  const features = [
    "responsive",
    "seo",
    "analytics",
    "cms",
    "booking",
    "calendar_sync",
    "reminders",
    "user_auth",
    "customer_portal",
    "card_payments",
    "subscriptions",
    "newsletter",
    "social_graphics",
  ];

  const { data: project, error: projErr } = await db
    .from("client_projects")
    .upsert(
      {
        client_id: clientId,
        name: "Fit4Lyfe",
        slug: "fit4lyfe",
        status: "launched",
        project_type: "website",
        summary:
          "A membership-driven fitness brand site with class booking, subscriptions, and a member portal — built to turn casual visitors into paying members.",
        live_url: "https://www.fit4lyfe.net/",
        features,
        progress: 100,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "slug" }
    )
    .select("id")
    .single();
  if (projErr) throw projErr;
  console.log(`✓ project ready: Fit4Lyfe (${project.id})`);

  // ── milestones (reset + insert) ──
  await db.from("project_milestones").delete().eq("project_id", project.id);
  const milestones = [
    {
      title: "Discovery",
      detail: "Mapped the membership model, class schedule, and brand voice.",
      status: "done",
      position: 1,
    },
    {
      title: "Free 48-hour demo",
      detail: "Delivered a live homepage and booking preview, no payment.",
      status: "done",
      position: 2,
    },
    {
      title: "Build & refine",
      detail: "Member portal, subscriptions, and booking flow built and tuned.",
      status: "done",
      position: 3,
    },
    {
      title: "Launch",
      detail: "Site live at fit4lyfe.net with full ownership handed over.",
      status: "done",
      position: 4,
    },
    {
      title: "Ongoing care",
      detail: "Monthly updates, new class types, and seasonal campaigns.",
      status: "active",
      position: 5,
    },
  ];
  const { error: msErr } = await db
    .from("project_milestones")
    .insert(milestones.map((m) => ({ ...m, project_id: project.id })));
  if (msErr) throw msErr;
  console.log(`✓ ${milestones.length} milestones set`);

  // ── example brief ──
  const { data: existingBrief } = await db
    .from("intake_submissions")
    .select("id")
    .eq("user_id", clientId)
    .eq("project_name", "Fit4Lyfe")
    .maybeSingle();

  if (!existingBrief) {
    const { error: briefErr } = await db.from("intake_submissions").insert({
      user_id: clientId,
      name: "Brooke Brum",
      email: DEMO_CLIENT_EMAIL,
      company: "Fit4Lyfe",
      project_type: "website",
      project_name: "Fit4Lyfe",
      description:
        "A fitness membership brand that needs online class booking, recurring subscriptions, and a clean member portal.",
      goals:
        "Convert casual visitors into paying members and cut down on manual scheduling.",
      budget: "$1,500 – $5,000",
      timeline: "This month",
      pages: ["Home", "About", "Pricing", "Booking", "Contact"],
      features,
      status: "won",
    });
    if (briefErr) throw briefErr;
    console.log("✓ example brief created");
  } else {
    console.log("• example brief already present");
  }

  console.log("\nDone. Example client login:");
  console.log(`   ${DEMO_CLIENT_EMAIL} / ${DEMO_CLIENT_PASSWORD}`);
}

main().catch((e) => {
  console.error("\nSetup failed:", e.message || e);
  process.exit(1);
});
