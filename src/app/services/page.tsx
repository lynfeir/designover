import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Design over Atlanta",
  description:
    "Custom websites from $200 delivered in 48 hours, plus business systems and automation that remove bottlenecks and reduce manual work. Free demo before you pay.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO — Dark, editorial, left-aligned ─── */}
      <section className="relative py-24 lg:py-32 bg-forest overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-6"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            Two Services. One Goal.
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Build a stronger business by improving how customers move in,
            how work moves through, and how information gets handled behind
            the scenes.
          </p>
        </div>
      </section>

      {/* ─── WEBSITES — Tier 1, light background ─── */}
      <section id="websites" className="py-20 lg:py-28 bg-bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                Tier 1 — Websites
              </span>
              <h2 className="text-3xl lg:text-[3.2rem] font-bold text-text-heading leading-[1.05] mb-6 tracking-tight">
                Custom Websites in 48 Hours, Starting at $200
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                Your website should support the way your business sells, books,
                communicates, and grows. We build custom websites that are fast,
                clear, easy to navigate, and designed around the action you want
                customers to take. You see a fully working demo before you pay
                anything.
              </p>
              <p className="text-text-body leading-relaxed mb-4">
                <strong className="text-text-dark">Our base price is $200.</strong> Most web design
                companies charge $2,000&ndash;$5,000+ for a comparable site. You get the same
                quality at a fraction of the cost &mdash; and you see it working before paying.
              </p>
              <div className="mb-6">
                <h4 className="font-bold text-text-dark mb-2">What&apos;s Included</h4>
                <p className="text-text-body text-sm leading-loose m-0">
                  Custom responsive design · Mobile optimization · Contact forms
                  · SEO fundamentals · Analytics setup · Full source code
                  ownership · Free demo before purchase
                </p>
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="text-terra text-sm font-bold">
                  From $200
                </span>
                <span className="text-text-body text-sm">
                  24&ndash;48 hour turnaround
                </span>
              </div>
            </div>
            <div className="bg-white border border-border-light shadow-sm p-8 relative overflow-hidden">
              <h4 className="font-bold text-text-dark mb-5 relative z-10">
                Website Project Examples
              </h4>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Landing Page",
                    desc: "Single page, contact form, mobile-ready",
                    price: "$200",
                  },
                  {
                    title: "Business Website",
                    desc: "3–5 pages, SEO, analytics",
                    price: "$400–$800",
                  },
                  {
                    title: "E-commerce / Advanced",
                    desc: "Product pages, checkout, integrations",
                    price: "$1,200+",
                  },
                  {
                    title: "Full Custom Build",
                    desc: "Dashboards, portals, complex features",
                    price: "Custom",
                  },
                ].map((p, i) => (
                  <div
                    key={p.title}
                    className={`flex justify-between items-center py-3 ${
                      i < 3 ? "border-b border-border-light" : ""
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-text-dark text-sm">
                        {p.title}
                      </div>
                      <div className="text-text-body text-xs">{p.desc}</div>
                    </div>
                    <span className="text-terra font-bold text-sm whitespace-nowrap">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRAPHIC DESIGN — Tier 1B, sage background ─── */}
      <section id="design" className="py-20 lg:py-28 bg-bg-sage overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="lg:order-2">
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                02 — Graphic Design
              </span>
              <h2 className="text-3xl lg:text-[3.2rem] font-bold text-text-heading leading-[1.05] mb-6 tracking-tight">
                Graphics That Make Your Business Look Sharp
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                Professional design for everything your business puts in front
                of customers &mdash; from business cards to billboard ads. Fast
                turnaround, print-ready files, full commercial rights.
              </p>
              <div className="mb-6">
                <h4 className="font-bold text-text-dark mb-2">What We Design</h4>
                <p className="text-text-body text-sm leading-loose m-0">
                  Business cards · Brochures · Flyers &amp; posters ·
                  Advertisements (digital + print) · Social media graphics ·
                  Logos &amp; brand kits · Menus · Signage · Presentation decks
                </p>
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="text-terra text-sm font-bold">
                  From $99
                </span>
                <span className="text-text-body text-sm">
                  24&ndash;72 hour turnaround
                </span>
              </div>
            </div>
            <div className="lg:order-1 bg-white border border-border-light shadow-sm p-8 relative overflow-hidden">
              <h4 className="font-bold text-text-dark mb-5 relative z-10">
                Common Design Projects
              </h4>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Business Card Design",
                    desc: "Front + back, print-ready",
                    price: "$99",
                  },
                  {
                    title: "Brochure / Flyer",
                    desc: "Single or multi-fold, print-ready",
                    price: "$149–$299",
                  },
                  {
                    title: "Ad Design (Digital/Print)",
                    desc: "Multiple sizes, campaign-ready",
                    price: "$149–$399",
                  },
                  {
                    title: "Full Brand Kit",
                    desc: "Logo + cards + guidelines + social",
                    price: "$599+",
                  },
                ].map((p, i) => (
                  <div
                    key={p.title}
                    className={`flex justify-between items-center py-3 ${
                      i < 3 ? "border-b border-border-light" : ""
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-text-dark text-sm">
                        {p.title}
                      </div>
                      <div className="text-text-body text-xs">{p.desc}</div>
                    </div>
                    <span className="text-terra font-bold text-sm whitespace-nowrap">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS AUTOMATION — Tier 2, dark forest (high-value) ─── */}
      <section id="ai-tools" className="relative py-20 lg:py-28 bg-forest overflow-hidden">
        <div className="absolute top-[15%] left-[3%] w-[80px] h-[80px] border border-terra/[0.08] rotate-45 pointer-events-none hidden lg:block" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                Tier 2 — Business Systems &amp; Automation
              </span>
              <h2 className="text-3xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                We Fix the Parts of the Business That Don&apos;t Flow
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                When information is scattered, repetitive tasks pile up, and
                staff spend their day handling avoidable admin, growth gets
                harder than it should be. We build custom systems that organize
                workflows, reduce manual work, improve visibility, and help your
                business run with more control.
              </p>
              <div className="mb-6">
                <h4 className="font-bold text-white mb-2">What We Build</h4>
                <p className="text-white/70 text-sm leading-loose m-0">
                  Booking systems · Lead intake flows · Internal dashboards ·
                  Approvals &amp; task routing · Quoting workflows ·
                  Scheduling systems · Reporting tools · Client portals ·
                  Data processing · Follow-up automation ·
                  Notification systems · Operations tracking
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-white mb-2">Who This Is For</h4>
                <p className="text-white/70 text-sm leading-loose m-0">
                  Service businesses · Local businesses · Operations-heavy teams ·
                  Growing companies with repetitive admin · Companies that need
                  better visibility across their workflow
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-white mb-2">Pricing</h4>
                <p className="text-white/70 text-sm leading-loose m-0">
                  One-time builds: $5,000&ndash;$25,000 | Monthly subscription: $200&ndash;$1,000/mo
                </p>
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="text-terra text-sm font-bold">
                  From $200/mo
                </span>
                <span className="text-white/65 text-sm">
                  Scoped to your workflow
                </span>
              </div>
            </div>
            <div className="bg-white/[0.05] border border-white/10 p-8 relative overflow-hidden">
              <h4 className="font-bold text-white mb-5 relative z-10">How It Works</h4>
              <div className="flex flex-col gap-5">
                {[
                  {
                    n: "1",
                    title: "Find the bottleneck",
                    desc: "Where is work slowing down, getting missed, or being handled manually more often than it should?",
                  },
                  {
                    n: "2",
                    title: "Design the right fix",
                    desc: "We map whether the answer is automation, better structure, a customer-facing system, an internal dashboard, or leaving the current process alone.",
                  },
                  {
                    n: "3",
                    title: "Launch with clarity",
                    desc: "We implement the system, train your team, and make sure it improves speed, visibility, and consistency.",
                  },
                ].map((s) => (
                  <div key={s.n} className="flex gap-3">
                    <div className="w-8 h-8 bg-terra/20 flex items-center justify-center text-xs font-bold text-terra shrink-0">
                      {s.n}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {s.title}
                      </div>
                      <p className="text-white/65 text-xs mt-0.5 leading-relaxed m-0">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY OUR PRICING WINS — left-aligned, editorial ─── */}
      <section className="py-20 lg:py-28 bg-bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
              The Math
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-text-heading tracking-tight leading-tight">
              Why Clients Switch to Us
            </h2>
          </div>

          {/* Web Comparison */}
          <h3 className="text-lg font-bold text-text-dark mb-4">Website Costs</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-14 max-w-3xl">
            <div className="bg-white border border-border-light shadow-sm p-8 relative overflow-hidden">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2 relative z-10">
                Typical Agency
              </div>
              <div className="text-2xl font-extrabold text-error mb-1">
                $2,000&ndash;$5,000+
              </div>
              <div className="text-text-muted text-sm mb-3">Website design</div>
              <div className="text-2xl font-extrabold text-error mb-1">
                $20/mo
              </div>
              <div className="text-text-muted text-sm">Hosting</div>
              <div className="border-t border-border-light mt-4 pt-4">
                <div className="text-text-muted text-sm">
                  Year 1 total: <span className="text-error font-bold">$2,240+</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-terra/15 p-8 relative overflow-hidden shadow-sm">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2 relative z-10">
                Design over Atlanta
              </div>
              <div className="text-2xl font-extrabold text-success mb-1">
                $200
              </div>
              <div className="text-text-muted text-sm mb-3">Website design</div>
              <div className="text-2xl font-extrabold text-success mb-1">
                $3/mo
              </div>
              <div className="text-text-muted text-sm">Hosting</div>
              <div className="border-t border-border-light mt-4 pt-4">
                <div className="text-text-muted text-sm">
                  Year 1 total: <span className="text-success font-bold">$236</span>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Comparison */}
          <h3 className="text-lg font-bold text-text-dark mb-4">Automation Costs</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-3xl">
            <div className="bg-white border border-border-light shadow-sm p-8 relative overflow-hidden">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2 relative z-10">
                Hiring for Manual Work
              </div>
              <div className="text-2xl font-extrabold text-error mb-1">
                $30/hr
              </div>
              <div className="text-text-muted text-sm mb-3">Employee wage</div>
              <div className="text-2xl font-extrabold text-error mb-1">
                40 hrs/wk
              </div>
              <div className="text-text-muted text-sm">Repetitive tasks</div>
              <div className="border-t border-border-light mt-4 pt-4">
                <div className="text-text-muted text-sm">
                  Annual cost: <span className="text-error font-bold">$62,400/year</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-terra/15 p-8 relative overflow-hidden shadow-sm">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-2 relative z-10">
                Our Automation Tool
              </div>
              <div className="text-2xl font-extrabold text-success mb-1">
                $200/mo
              </div>
              <div className="text-text-muted text-sm mb-3">Automation subscription</div>
              <div className="text-2xl font-extrabold text-success mb-1">
                24/7
              </div>
              <div className="text-text-muted text-sm">Always running</div>
              <div className="border-t border-border-light mt-4 pt-4">
                <div className="text-text-muted text-sm">
                  Annual cost: <span className="text-success font-bold">$2,400/year</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-text-muted text-base">
            Same quality. Same result. <strong className="text-terra">10x less cost</strong> on websites.{" "}
            <strong className="text-terra">Save $60,000+/year</strong> on automation.
          </p>
          <p className="text-text-muted text-sm mt-3 max-w-2xl">
            The goal isn&apos;t to replace good people. It&apos;s to stop using
            skilled people for repetitive computer tasks that should already be
            systemized.
          </p>
        </div>
      </section>

      {/* Monthly Plans */}
      <PricingSection />

      {/* ─── CTA — Dark, editorial, left-aligned ─── */}
      <section className="relative py-20 lg:py-28 bg-forest overflow-hidden">
        <div className="absolute top-[15%] left-[3%] w-[80px] h-[80px] border border-terra/[0.08] rotate-45 pointer-events-none hidden lg:block" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-[3.5rem] font-black text-white leading-[0.95] tracking-tight mb-6">
              Stop Paying for Work
              <br />
              a Computer
              <br />
              <span className="text-terra">Should Do.</span>
            </h2>
            <p className="text-white/65 max-w-md mb-10 text-base leading-relaxed">
              Get a free demo site or tell us what&apos;s eating your time.
              Same-day response guaranteed.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="bg-terra hover:bg-terra-light text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition-colors"
              >
                Get Your Free Demo
              </Link>
              <a
                href="tel:4707583549"
                className="border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all"
              >
                (470) 758-3549
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
