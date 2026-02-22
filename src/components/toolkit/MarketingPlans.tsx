"use client";

import { useState } from "react";

interface Plan {
  title: string;
  description: string;
  duration: string;
  steps: string[];
}

const PLANS: Plan[] = [
  {
    title: "30-Day Launch Plan",
    description: "Social posting schedule and outreach targets for your first month.",
    duration: "30 days",
    steps: [
      "Week 1: Set up all social profiles (IG, FB, X, LinkedIn). Post brand announcement with logo + \"We're live!\" graphic.",
      "Week 1: Create Google Business Profile. Add photos, hours, services, and request first 5 reviews from friends/family.",
      "Week 2: Post 3x/week — alternate between service highlights, client testimonials, and behind-the-scenes.",
      "Week 2: Join 5 local Facebook groups. Introduce yourself (no hard sell). Offer free advice.",
      "Week 3: Run first paid ad ($5/day, 7 days). Target local businesses within 25 miles. Use the \"$200 custom website\" ad.",
      "Week 3: Cold DM 20 local businesses on Instagram. Personalized message about their current website.",
      "Week 4: Post a case study or before/after. Share on all platforms.",
      "Week 4: Follow up with all leads. Send \"just checking in\" messages to anyone who showed interest.",
      "Week 4: Review analytics. Double down on what worked. Plan Month 2.",
    ],
  },
  {
    title: "Referral Growth Plan",
    description: "Word-of-mouth flywheel to grow through client referrals.",
    duration: "Ongoing",
    steps: [
      "Set up referral program: $50 credit per successful referral. Both sides benefit ($50 off for the new client too).",
      "Create referral cards (downloadable from toolkit). Share link via text, email, and social.",
      "After every completed project, send a thank-you email with referral link embedded.",
      "Create a \"Refer a Friend\" highlight on Instagram with step-by-step instructions.",
      "Monthly: Post referral reminder on stories. Feature top referrers.",
      "Milestone bonuses: 3 referrals = bonus service (free logo touch-up). 5 referrals = free redesign.",
      "Track all referrals in a simple spreadsheet: Referrer, Referred, Date, Status, Credit Applied.",
      "Quarterly: Reach out to past clients and ask if they know anyone who needs a website.",
    ],
  },
  {
    title: "Local SEO Plan",
    description: "Get found on Google by local businesses in your area.",
    duration: "60 days",
    steps: [
      "Claim and fully optimize Google Business Profile: photos, description with keywords, services list, Q&A.",
      "Get listed on 10 local directories: Yelp, BBB, Thumbtack, Alignable, Nextdoor, Chamber of Commerce, etc.",
      "Ask every happy client for a Google review. Provide a direct link. Target: 10 reviews in 60 days.",
      "Add location pages to website: \"Web Design in Atlanta\", \"Web Design in Decatur\", etc.",
      "Write 4 blog posts targeting local keywords: \"best web designer in Atlanta\", \"affordable websites Atlanta GA\".",
      "Ensure NAP (Name, Address, Phone) is consistent across all listings.",
      "Set up Google Search Console. Monitor impressions and clicks weekly.",
      "Respond to every review (positive and negative) within 24 hours.",
      "Build 5 local backlinks: sponsor a local event, guest post on a local blog, partner with a complementary business.",
    ],
  },
  {
    title: "Social Media Content Calendar",
    description: "12 weeks of post ideas organized by day and platform.",
    duration: "3 months",
    steps: [
      "Monday — Motivation: Share a business tip or inspirational quote with branded graphic.",
      "Tuesday — Tutorial: Quick design or web tip (\"3 things every small business website needs\").",
      "Wednesday — Work in Progress: Show a current project (blurred if needed). Build anticipation.",
      "Thursday — Throwback/Testimonial: Client review, before/after, or project flashback.",
      "Friday — Feature: Highlight a specific service. Pricing, benefits, CTA.",
      "Saturday — Story Only: Poll, Q&A, or behind-the-scenes. Keep it casual and engaging.",
      "Sunday — Rest or Repost: Repost best-performing content from the week.",
      "Monthly themes: Month 1 = Introduction & Credibility. Month 2 = Services Deep Dive. Month 3 = Social Proof & Urgency.",
      "Hashtag strategy: Use 5-10 per post. Mix branded (#DesignOverAtlanta) with local (#AtlantaBusiness #ATLDesign) and niche (#WebDesignTips #SmallBizWebsite).",
      "Engagement rule: For every post you make, engage with 10 other accounts (like, comment, follow). Build community.",
    ],
  },
  {
    title: "Email Outreach Templates",
    description: "Cold outreach, follow-ups, and proposal templates ready to customize.",
    duration: "Use anytime",
    steps: [
      "Cold Outreach: \"Hi [Name], I visited [their website] and noticed [specific issue]. I help small businesses in Atlanta with affordable custom websites starting at $200. Would you be open to a quick chat or a free demo?\"",
      "Follow-Up (3 days later): \"Hey [Name], just circling back. I know you're busy — I put together a quick concept for [their business] at no cost. Want me to send it over?\"",
      "After Demo: \"Hey [Name], hope you liked the preview! Here's a recap of what we discussed: [brief summary]. Ready to move forward? We can have your site live within [X] days.\"",
      "Proposal Template: Include scope, timeline, pricing ($200 base + $3/mo hosting), what's included, what's not, and payment terms.",
      "Post-Launch Check-In (1 week): \"Hi [Name], how's everything going with the new site? Any tweaks needed? Also — if you know anyone else who could use a website, our referral program gives you $50 credit.\"",
      "Quarterly Maintenance Offer: \"Hi [Name], it's been [X] months since we launched your site. Want us to freshen it up? We offer update packages starting at $50.\"",
      "Re-engagement (for cold leads): \"Hi [Name], I reached out a while back about your website. We've since completed [X] projects and our prices are still starting at $200. Still interested?\"",
    ],
  },
];

export default function MarketingPlans() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {PLANS.map((plan, i) => (
        <div
          key={i}
          className="border border-terra/10 rounded-xl bg-white overflow-hidden transition-all"
        >
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-bg-sage/40 transition-colors cursor-pointer"
          >
            <div>
              <h3 className="text-lg font-bold text-text-heading">{plan.title}</h3>
              <p className="text-text-muted text-sm mt-1">{plan.description}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-text-muted bg-terra/10 px-3 py-1 rounded-full">
                {plan.duration}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-text-muted transition-transform ${expanded === i ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </button>
          {expanded === i && (
            <div className="px-6 pb-6 border-t border-terra/10">
              <ol className="mt-4 space-y-3">
                {plan.steps.map((step, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <span className="text-terra font-bold shrink-0 w-6 text-right">{j + 1}.</span>
                    <span className="text-text-muted leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
