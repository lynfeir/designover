"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export default function PricingSection() {
  return (
    <section id="plans" className="relative py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-20"
        >
          <motion.div variants={fadeUp}>
            <span className="font-[family-name:var(--font-ui)] text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Monthly Plans
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Hosting That Pays
              <br className="hidden sm:block" />
              <span className="text-gold-gradient"> for Itself</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-ui)] text-muted-fg text-sm max-w-sm mt-4 lg:mt-0 lg:text-right">
            Most hosting companies charge $20&ndash;$30/mo for basic hosting
            alone. Our plans start at{" "}
            <strong className="font-[family-name:var(--font-mono)] text-foreground">$12/mo</strong>.
          </motion.p>
        </motion.div>

        {/* Savings comparison */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pb-10 border-b border-border/30"
        >
          <div>
            <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-[0.15em] mb-1">
              Typical Elsewhere
            </div>
            <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-foreground/50 line-through decoration-destructive/30">
              $25/mo
            </div>
            <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs">$300/year</div>
          </div>
          <div className="text-2xl text-muted-fg hidden sm:block">&rarr;</div>
          <div>
            <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-[0.15em] mb-1">
              Our Starter Plan
            </div>
            <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-success">$12/mo</div>
            <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs">$144/year</div>
          </div>
          <div className="text-2xl text-muted-fg hidden sm:block">=</div>
          <div>
            <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-[0.15em] mb-1">
              You Save
            </div>
            <div className="font-[family-name:var(--font-mono)] text-2xl font-bold text-primary">$156/yr</div>
            <div className="font-[family-name:var(--font-ui)] text-success text-xs font-semibold">52% less</div>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Starter */}
          <motion.div
            variants={fadeUp}
            className="bg-card border border-border/30 p-8 flex flex-col transition-all duration-500 hover:border-primary/20 hover:shadow-card"
          >
            <div className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.15em] text-muted-fg mb-4">
              Starter
            </div>
            <div className="font-[family-name:var(--font-mono)] text-5xl font-bold text-foreground leading-none mb-1">
              $12<span className="text-base font-normal text-muted-fg">/mo</span>
            </div>
            <div className="font-[family-name:var(--font-ui)] text-xs text-muted-fg mb-8">Just $144/year</div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Fast, secure hosting",
                "SSL certificate included",
                "Monthly site backup",
                "Email support (48hr response)",
                "Uptime monitoring",
              ].map((f) => (
                <li key={f} className="font-[family-name:var(--font-ui)] text-muted-fg text-sm flex items-start gap-2.5">
                  <span className="text-success font-bold text-xs mt-0.5 shrink-0">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center border border-border/30 hover:border-primary text-foreground hover:text-primary font-[family-name:var(--font-ui)] font-semibold py-3 transition-all text-sm uppercase tracking-wider"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Professional — highlighted */}
          <motion.div
            variants={fadeUp}
            className="relative bg-card border border-primary/30 p-8 flex flex-col shadow-gold transition-all duration-500 hover:shadow-[0_0_60px_oklch(72%_0.14_75/0.2)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 btn-shimmer" />
            <div className="font-[family-name:var(--font-ui)] flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
              Professional
            </div>
            <div className="font-[family-name:var(--font-mono)] text-5xl font-bold text-foreground leading-none mb-1">
              $29<span className="text-base font-normal text-muted-fg">/mo</span>
            </div>
            <div className="font-[family-name:var(--font-ui)] text-xs text-muted-fg mb-8">Support + monthly updates</div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Starter",
                "Priority support (same-day)",
                "2 hours of site updates/mo",
                "Performance & SEO monitoring",
                "Analytics dashboard",
                "Quarterly strategy check-in",
              ].map((f) => (
                <li key={f} className="font-[family-name:var(--font-ui)] text-muted-fg text-sm flex items-start gap-2.5">
                  <span className="text-primary font-bold text-xs mt-0.5 shrink-0">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold py-3 text-sm tracking-[0.1em] uppercase"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Growth */}
          <motion.div
            variants={fadeUp}
            className="bg-card border border-border/30 p-8 flex flex-col transition-all duration-500 hover:border-primary/20 hover:shadow-card"
          >
            <div className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.15em] text-muted-fg mb-4">
              Growth
            </div>
            <div className="font-[family-name:var(--font-mono)] text-5xl font-bold text-foreground leading-none mb-1">
              $49<span className="text-base font-normal text-muted-fg">/mo</span>
            </div>
            <div className="font-[family-name:var(--font-ui)] text-xs text-muted-fg mb-8">Dedicated partner for growth</div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Professional",
                "Dedicated Slack/phone support",
                "5 hours of updates/mo",
                "Priority automation support",
                "Advanced analytics & reporting",
                "Monthly tool health checks",
                "99.9% uptime SLA",
              ].map((f) => (
                <li key={f} className="font-[family-name:var(--font-ui)] text-muted-fg text-sm flex items-start gap-2.5">
                  <span className="text-success font-bold text-xs mt-0.5 shrink-0">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center border border-border/30 hover:border-primary text-foreground hover:text-primary font-[family-name:var(--font-ui)] font-semibold py-3 transition-all text-sm uppercase tracking-wider"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        {/* Automation callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 glass p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-foreground font-semibold text-xl mb-2">
              Need Business Automation?
            </h3>
            <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm max-w-lg">
              Custom systems start at $200/month or a one-time project fee. We
              scope value first. If your current process is already the best
              fit, we&apos;ll say so. If a new system won&apos;t create real
              savings, clarity, or control, we won&apos;t build it.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold text-sm px-7 py-3.5 tracking-[0.1em] uppercase"
          >
            Get a Free ROI Analysis
          </Link>
        </motion.div>

        {/* Bottom note */}
        <p className="font-[family-name:var(--font-ui)] text-muted-fg text-xs mt-8 max-w-xl">
          No contracts. Cancel anytime. All plans include hosting, SSL, and
          backups. Compare that to the $20&ndash;$30/mo most companies charge
          for hosting alone &mdash; before you even get support.
        </p>
      </div>
    </section>
  );
}
