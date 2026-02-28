import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Design over Atlanta",
  description:
    "Custom websites from $200 delivered in 48 hours, plus business automation tools that eliminate manual work. Free demo before you pay.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-cream text-text-heading py-20 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Services</h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Two tiers. One goal: stop your business from bleeding money on
            things a computer should handle.
          </p>
          <div className="h-[3px] w-20 bg-terra rounded mx-auto mt-6" />
        </div>
      </section>

      {/* Websites */}
      <section id="websites" className="relative py-24 bg-bg-sage overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
                Tier 1 — Websites
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
                Custom Websites in 48 Hours, Starting at $200
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                Your competitor is showing up online. You&apos;re not. Every site is
                hand-coded and designed to your business. No cookie-cutter
                templates. Mobile-first, fast-loading, and SEO-ready from day
                one. You see a fully working demo before you pay anything.
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
              <div className="flex gap-3 items-center flex-wrap">
                <span className="bg-terra-soft text-terra px-4 py-1.5 rounded-full text-sm font-bold">
                  From $200
                </span>
                <span className="text-text-body text-sm">
                  24&ndash;48 hour turnaround
                </span>
              </div>
            </div>
            <div className="reveal bg-white border border-border-light shadow-sm card-hover rounded-2xl p-8 relative overflow-hidden">
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

      {/* Graphic Design */}
      <section id="design" className="relative py-24 bg-bg-sage overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal lg:order-2">
              <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
                02 — Graphic Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
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
              <div className="flex gap-3 items-center flex-wrap">
                <span className="bg-terra-soft text-terra px-4 py-1.5 rounded-full text-sm font-bold">
                  From $99
                </span>
                <span className="text-text-body text-sm">
                  24&ndash;72 hour turnaround
                </span>
              </div>
            </div>
            <div className="reveal lg:order-1 bg-white border border-border-light shadow-sm card-hover rounded-2xl p-8 relative overflow-hidden">
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

      {/* Business Automation */}
      <section id="ai-tools" className="relative py-24 bg-bg-sage overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <span className="text-honey text-xs font-bold uppercase tracking-[0.12em] block mb-3">
                Tier 2 — Business Automation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
                We Find the Work That&apos;s Costing You Money &mdash; And We Kill It
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                You&apos;re paying someone $30/hr to do something a computer should
                handle. That&apos;s $62,400 a year. We build the fix &mdash; custom
                automation tools that eliminate manual computer work.
              </p>
              <div className="mb-6">
                <h4 className="font-bold text-text-dark mb-2">What We Automate</h4>
                <p className="text-text-body text-sm leading-loose m-0">
                  CNC file automation · Booking systems · Workflow bots ·
                  Data processing tools · Custom internal dashboards ·
                  Scheduling automation · Customer self-service portals ·
                  Notification &amp; reminder systems
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-text-dark mb-2">Industries We Serve</h4>
                <p className="text-text-body text-sm leading-loose m-0">
                  Cabinet shops · Contractors · HVAC · Auto shops ·
                  Restaurants · Real estate · Medical offices · Landscaping
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-text-dark mb-2">Pricing</h4>
                <p className="text-text-body text-sm leading-loose m-0">
                  One-time builds: $5,000&ndash;$25,000 | Monthly subscription: $200&ndash;$1,000/mo
                </p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <span className="bg-honey-soft text-honey px-4 py-1.5 rounded-full text-sm font-bold">
                  From $200/mo
                </span>
                <span className="text-text-body text-sm">
                  Scoped to your workflow
                </span>
              </div>
            </div>
            <div className="reveal bg-white border border-border-light shadow-sm card-hover rounded-2xl p-8 relative overflow-hidden">
              <h4 className="font-bold text-text-dark mb-5 relative z-10">How It Works</h4>
              <div className="flex flex-col gap-5">
                {[
                  {
                    n: "1",
                    title: "Identify the bottleneck",
                    desc: "Where does manual work slow you down? CNC file prep, scheduling, data entry, invoicing — we find the friction point.",
                  },
                  {
                    n: "2",
                    title: "Build the solution",
                    desc: "We design and build a custom automation tool — a booking system, a workflow bot, an internal dashboard — that fits directly into your existing process.",
                  },
                  {
                    n: "3",
                    title: "Launch & support",
                    desc: "We deploy it, train your team, and keep it running smoothly. The manual work stops. The savings start.",
                  },
                ].map((s) => (
                  <div key={s.n} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-honey-soft flex items-center justify-center text-xs font-bold text-honey shrink-0">
                      {s.n}
                    </div>
                    <div>
                      <div className="font-semibold text-text-dark text-sm">
                        {s.title}
                      </div>
                      <p className="text-text-body text-xs mt-0.5 leading-relaxed m-0">
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

      {/* Why Our Pricing Wins */}
      <section className="relative py-20 bg-bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="reveal max-w-5xl mx-auto text-center">
            <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              The Math
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-6">
              Why Clients Switch to Us
            </h2>

            {/* Web Comparison */}
            <h3 className="text-lg font-bold text-text-dark mb-4">Website Costs</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="bg-white border border-border-light shadow-sm card-hover rounded-2xl p-8 relative overflow-hidden">
                <div className="text-xs uppercase tracking-wider text-text-muted mb-2 relative z-10">
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
              <div className="bg-white border border-terra/15 rounded-2xl p-8 relative overflow-hidden shadow-sm card-hover">
                <div className="text-xs uppercase tracking-wider text-text-muted mb-2 relative z-10">
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
            <div className="grid sm:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white border border-border-light shadow-sm card-hover rounded-2xl p-8 relative overflow-hidden">
                <div className="text-xs uppercase tracking-wider text-text-muted mb-2 relative z-10">
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
              <div className="bg-white border border-terra/15 rounded-2xl p-8 relative overflow-hidden shadow-sm card-hover">
                <div className="text-xs uppercase tracking-wider text-text-muted mb-2 relative z-10">
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
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <PricingSection />

      {/* CTA */}
      <section className="relative py-20 bg-bg-cream text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
            Stop Paying for Work a Computer Should Do
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 text-lg">
            Get a free demo site or tell us what&apos;s eating your time.
            Same-day response guaranteed.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-terra hover:bg-terra-dark text-white font-semibold btn-hover px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1"
            >
              Get Your Free Demo
            </Link>
            <a
              href="tel:4707583549"
              className="border border-border hover:border-terra text-text-heading hover:text-terra font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Call (470) 758-3549
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
