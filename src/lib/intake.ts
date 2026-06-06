/**
 * Single source of truth for the project intake form — project types, page
 * options, and the grouped feature checklist. The intake form, the admin
 * lead view, and the client portal all read from here so labels never drift.
 */

export const PROJECT_TYPES = [
  {
    value: "website",
    label: "Website",
    blurb: "A custom, fast site built to convert visitors into customers.",
  },
  {
    value: "automation",
    label: "Automation / Tool",
    blurb: "A system that removes the repetitive work eating your time.",
  },
  {
    value: "both",
    label: "Website + Systems",
    blurb: "The full build — site, automation, and the glue between them.",
  },
  {
    value: "design",
    label: "Graphic Design",
    blurb: "Brand identity, print, and social graphics that look sharp.",
  },
] as const;

export type ProjectTypeValue = (typeof PROJECT_TYPES)[number]["value"];

export const PAGE_OPTIONS = [
  "Home",
  "About",
  "Services",
  "Contact",
  "Pricing",
  "Portfolio / Gallery",
  "Blog / News",
  "Shop / Store",
  "Booking",
  "FAQ",
  "Testimonials",
  "Team",
  "Careers",
  "Custom Landing Page",
];

export const BUDGET_OPTIONS = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

export const TIMELINE_OPTIONS = [
  "ASAP (48-hour demo)",
  "1 – 2 weeks",
  "This month",
  "1 – 3 months",
  "Flexible",
];

export interface FeatureGroup {
  name: string;
  blurb: string;
  features: { key: string; label: string; hint?: string }[];
}

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    name: "Foundations",
    blurb: "The baseline every serious site needs.",
    features: [
      { key: "custom_domain", label: "Custom domain", hint: "yourbusiness.com" },
      { key: "responsive", label: "Mobile responsive" },
      { key: "seo", label: "SEO setup", hint: "rank on Google" },
      { key: "analytics", label: "Visitor analytics" },
      { key: "fast_hosting", label: "Fast hosting" },
      { key: "ssl_security", label: "SSL & security" },
    ],
  },
  {
    name: "Content & Media",
    blurb: "Tell your story and keep it fresh.",
    features: [
      { key: "cms", label: "Edit content yourself (CMS)" },
      { key: "blog", label: "Blog / news section" },
      { key: "gallery", label: "Photo gallery" },
      { key: "video", label: "Video embeds" },
      { key: "copywriting", label: "Copywriting help" },
    ],
  },
  {
    name: "Commerce",
    blurb: "Take payments and sell online.",
    features: [
      { key: "store", label: "Online store" },
      { key: "cart", label: "Shopping cart" },
      { key: "card_payments", label: "Card payments (Stripe)" },
      { key: "subscriptions", label: "Subscriptions / memberships" },
      { key: "invoicing", label: "Invoicing" },
      { key: "coupons", label: "Coupons & discounts" },
    ],
  },
  {
    name: "Booking & Scheduling",
    blurb: "Let customers book without the phone tag.",
    features: [
      { key: "booking", label: "Appointment booking" },
      { key: "calendar_sync", label: "Calendar sync" },
      { key: "reminders", label: "Automated reminders" },
      { key: "intake_forms", label: "Intake forms" },
      { key: "booking_payments", label: "Pay at booking" },
    ],
  },
  {
    name: "Accounts & Portal",
    blurb: "Logins for your team or your customers.",
    features: [
      { key: "user_auth", label: "User login / signup" },
      { key: "customer_portal", label: "Customer portal" },
      { key: "admin_dashboard", label: "Admin dashboard" },
      { key: "roles", label: "Role permissions" },
    ],
  },
  {
    name: "Automation & Systems",
    blurb: "Where we kill the manual work.",
    features: [
      { key: "workflow_automation", label: "Workflow automation" },
      { key: "notifications", label: "Email / SMS notifications" },
      { key: "crm", label: "CRM integration" },
      { key: "lead_routing", label: "Lead routing" },
      { key: "reporting", label: "Reporting dashboards" },
      { key: "ai_assistant", label: "AI assistant / chatbot" },
      { key: "api_integrations", label: "API / Zapier integrations" },
      { key: "doc_generation", label: "Document generation" },
    ],
  },
  {
    name: "Marketing & Growth",
    blurb: "Turn traffic into leads.",
    features: [
      { key: "contact_form", label: "Contact form" },
      { key: "newsletter", label: "Newsletter signup" },
      { key: "live_chat", label: "Live chat" },
      { key: "reviews", label: "Reviews & testimonials" },
      { key: "referral", label: "Referral program" },
      { key: "lead_magnet", label: "Pop-ups / lead magnets" },
    ],
  },
  {
    name: "Branding & Design",
    blurb: "Look consistent everywhere.",
    features: [
      { key: "logo", label: "Logo design" },
      { key: "brand_guidelines", label: "Brand guidelines" },
      { key: "illustrations", label: "Custom illustrations" },
      { key: "social_graphics", label: "Social media graphics" },
      { key: "print", label: "Print materials" },
      { key: "motion", label: "Animations / motion" },
    ],
  },
];

/** Flat key → label lookup for rendering selected features anywhere. */
export const FEATURE_LABELS: Record<string, string> = Object.fromEntries(
  FEATURE_GROUPS.flatMap((g) => g.features.map((f) => [f.key, f.label]))
);

export const TOTAL_FEATURE_COUNT = FEATURE_GROUPS.reduce(
  (n, g) => n + g.features.length,
  0
);
