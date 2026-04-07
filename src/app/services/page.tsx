"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, slideInRight, viewport } from "@/lib/motion";
import ParallaxSection from "@/components/ParallaxSection";
import PricingSection from "@/components/PricingSection";

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO — Dark, editorial, left-aligned ─── */}
      <section className="relative py-24 lg:py-32 bg-secondary overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-primary font-[family-name:var(--font-ui)] text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-6"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
              Services
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
              Two Services. One Goal.
            </h1>
            <p className="font-[family-name:var(--font-ui)] text-white/70 text-lg max-w-xl leading-relaxed">
              Build a stronger business by improving how customers move in,
              how work moves through, and how information gets handled behind
              the scenes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── WEBSITES — Tier 1, light background ─── */}
      <section id="websites" className="py-20 lg:py-28 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-primary font-[family-name:var(--font-ui)] text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
                Tier 1 — Websites
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-[3.2rem] font-bold text-foreground leading-[1.05] mb-6 tracking-tight">
                Custom Websites in 48 Hours, Starting at $399
              </h2>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg leading-relaxed mb-4">
                Your website should support the way your business sells, books,
                communicates, and grows. We build custom websites that are fast,
                clear, easy to navigate, and designed around the action you want
                customers to take. You see a fully working demo before you pay
                anything.
              </p>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg leading-relaxed mb-4">
                <strong className="text-foreground">Our base price is $399.</strong> Most web design
                companies charge $2,000&ndash;$5,000+ for a comparable site. You get the same
                quality at a fraction of the cost &mdash; and you see it working before paying.
              </p>
              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-foreground mb-2">What&apos;s Included</h4>
                <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm leading-loose m-0">
                  Custom responsive design · Mobile optimization · Contact forms
                  · SEO fundamentals · Analytics setup · Full source code
                  ownership · Free demo before purchase
                </p>
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="font-[family-name:var(--font-mono)] text-primary text-sm font-bold">
                  From $399
                </span>
                <span className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">
                  24&ndash;48 hour turnaround
                </span>
              </div>
            </div>
            <div className="tilt-card bg-card border border-border/30 p-8 relative overflow-hidden">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-foreground mb-5 relative z-10">
                Website Project Examples
              </h4>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="flex flex-col gap-4">
                {[
                  {
                    title: "Landing Page",
                    desc: "Single page, contact form, mobile-ready",
                    price: "$399",
                  },
                  {
                    title: "Business Website",
                    desc: "3–5 pages, SEO, analytics",
                    price: "$800–$1,500",
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
                  <motion.div variants={fadeUp} key={p.title}>
                    <div
                      className={`flex justify-between items-center py-3 ${
                        i < 3 ? "border-b border-border/30" : ""
                      }`}
                    >
                      <div>
                        <div className="font-[family-name:var(--font-ui)] font-semibold text-foreground text-sm">
                          {p.title}
                        </div>
                        <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs">{p.desc}</div>
                      </div>
                      <span className="font-[family-name:var(--font-mono)] text-primary font-bold text-sm whitespace-nowrap">
                        {p.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRAPHIC DESIGN — Tier 1B, sage background ─── */}
      <section id="design" className="py-20 lg:py-28 bg-card overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="lg:order-2">
              <span className="text-primary font-[family-name:var(--font-ui)] text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
                02 — Graphic Design
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-[3.2rem] font-bold text-foreground leading-[1.05] mb-6 tracking-tight">
                Graphics That Make Your Business Look Sharp
              </h2>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg leading-relaxed mb-4">
                Professional design for everything your business puts in front
                of customers &mdash; from business cards to billboard ads. Fast
                turnaround, print-ready files, full commercial rights.
              </p>
              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-foreground mb-2">What We Design</h4>
                <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm leading-loose m-0">
                  Business cards · Brochures · Flyers &amp; posters ·
                  Advertisements (digital + print) · Social media graphics ·
                  Logos &amp; brand kits · Menus · Signage · Presentation decks
                </p>
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="font-[family-name:var(--font-mono)] text-primary text-sm font-bold">
                  From $99
                </span>
                <span className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">
                  24&ndash;72 hour turnaround
                </span>
              </div>
            </div>
            <div className="tilt-card lg:order-1 bg-card border border-border/30 p-8 relative overflow-hidden">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-foreground mb-5 relative z-10">
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
                      i < 3 ? "border-b border-border/30" : ""
                    }`}
                  >
                    <div>
                      <div className="font-[family-name:var(--font-ui)] font-semibold text-foreground text-sm">
                        {p.title}
                      </div>
                      <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs">{p.desc}</div>
                    </div>
                    <span className="font-[family-name:var(--font-mono)] text-primary font-bold text-sm whitespace-nowrap">
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
      <section id="ai-tools" className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute top-[15%] left-[3%] w-[80px] h-[80px] border border-primary/[0.08] rotate-45 pointer-events-none hidden lg:block" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-primary font-[family-name:var(--font-ui)] text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
                Tier 2 — Business Systems &amp; Automation
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                We Fix the Parts of the Business That Don&apos;t Flow
              </h2>
              <p className="font-[family-name:var(--font-ui)] text-white/70 leading-relaxed mb-4">
                When information is scattered, repetitive tasks pile up, and
                staff spend their day handling avoidable admin, growth gets
                harder than it should be. We build custom systems that organize
                workflows, reduce manual work, improve visibility, and help your
                business run with more control.
              </p>
              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-white mb-2">What We Build</h4>
                <p className="font-[family-name:var(--font-ui)] text-white/70 text-sm leading-loose m-0">
                  Booking systems · Lead intake flows · Internal dashboards ·
                  Approvals &amp; task routing · Quoting workflows ·
                  Scheduling systems · Reporting tools · Client portals ·
                  Data processing · Follow-up automation ·
                  Notification systems · Operations tracking
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-white mb-2">Who This Is For</h4>
                <p className="font-[family-name:var(--font-ui)] text-white/70 text-sm leading-loose m-0">
                  Service businesses · Local businesses · Operations-heavy teams ·
                  Growing companies with repetitive admin · Companies that need
                  better visibility across their workflow
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-white mb-2">Pricing</h4>
                <p className="font-[family-name:var(--font-ui)] text-white/70 text-sm leading-loose m-0">
                  One-time builds: $5,000&ndash;$25,000 | Monthly subscription: $200&ndash;$1,000/mo
                </p>
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="font-[family-name:var(--font-mono)] text-primary text-sm font-bold">
                  From $200/mo
                </span>
                <span className="font-[family-name:var(--font-ui)] text-white/65 text-sm">
                  Scoped to your workflow
                </span>
              </div>
            </div>
            <div className="glass border border-border/30 p-8 relative overflow-hidden">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-white mb-5 relative z-10">How It Works</h4>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="flex flex-col gap-5">
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
                  <motion.div variants={fadeUp} key={s.n}>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {s.n}
                      </div>
                      <div>
                        <div className="font-[family-name:var(--font-ui)] font-semibold text-white text-sm">
                          {s.title}
                        </div>
                        <p className="font-[family-name:var(--font-ui)] text-white/65 text-xs mt-0.5 leading-relaxed m-0">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY OUR PRICING WINS — left-aligned, editorial ─── */}
      <section className="py-20 lg:py-28 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-primary font-[family-name:var(--font-ui)] text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
              The Math
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Why Clients Switch to Us
            </h2>
          </div>

          {/* Web Comparison */}
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground mb-4">Website Costs</h3>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <div className="grid sm:grid-cols-2 gap-6 mb-14 max-w-3xl">
              <div className="bg-card border border-border/30 p-8 relative overflow-hidden">
                <div className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-[0.15em] text-muted-fg mb-2 relative z-10">
                  Typical Agency
                </div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-destructive mb-1">
                  $2,000&ndash;$5,000+
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mb-3">Website design</div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-destructive mb-1">
                  $25/mo
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">Hosting</div>
                <div className="border-t border-border/30 mt-4 pt-4">
                  <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">
                    Year 1 total: <span className="font-[family-name:var(--font-mono)] text-destructive font-bold">$2,300+</span>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 p-8 relative overflow-hidden">
                <div className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-[0.15em] text-muted-fg mb-2 relative z-10">
                  Design over Atlanta
                </div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-success mb-1">
                  $399
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mb-3">Website design</div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-success mb-1">
                  $12/mo
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">Hosting</div>
                <div className="border-t border-border/30 mt-4 pt-4">
                  <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">
                    Year 1 total: <span className="font-[family-name:var(--font-mono)] text-success font-bold">$543</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Automation Comparison */}
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground mb-4">Automation Costs</h3>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-3xl">
              <div className="bg-card border border-border/30 p-8 relative overflow-hidden">
                <div className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-[0.15em] text-muted-fg mb-2 relative z-10">
                  Hiring for Manual Work
                </div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-destructive mb-1">
                  $30/hr
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mb-3">Employee wage</div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-destructive mb-1">
                  40 hrs/wk
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">Repetitive tasks</div>
                <div className="border-t border-border/30 mt-4 pt-4">
                  <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">
                    Annual cost: <span className="font-[family-name:var(--font-mono)] text-destructive font-bold">$62,400/year</span>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 p-8 relative overflow-hidden">
                <div className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-[0.15em] text-muted-fg mb-2 relative z-10">
                  Our Automation Tool
                </div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-success mb-1">
                  $200/mo
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mb-3">Automation subscription</div>
                <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-success mb-1">
                  24/7
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">Always running</div>
                <div className="border-t border-border/30 mt-4 pt-4">
                  <div className="font-[family-name:var(--font-ui)] text-muted-fg text-sm">
                    Annual cost: <span className="font-[family-name:var(--font-mono)] text-success font-bold">$2,400/year</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <p className="font-[family-name:var(--font-ui)] text-muted-fg text-base">
            Same quality. Same result. <strong className="text-primary">10x less cost</strong> on websites.{" "}
            <strong className="text-primary">Save $60,000+/year</strong> on automation.
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
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute top-[15%] left-[3%] w-[80px] h-[80px] border border-primary/[0.08] rotate-45 pointer-events-none hidden lg:block" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-[3.5rem] font-semibold text-white leading-[0.95] tracking-tight mb-6">
                Stop Paying for Work
                <br />
                a Computer
                <br />
                <span className="text-primary">Should Do.</span>
              </h2>
              <p className="font-[family-name:var(--font-ui)] text-white/65 max-w-md mb-10 text-base leading-relaxed">
                Get a free demo site or tell us what&apos;s eating your time.
                Same-day response guaranteed.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/contact"
                  className="btn-shimmer text-background font-bold px-8 py-4 text-sm tracking-wider uppercase transition-colors"
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
