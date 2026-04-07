"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import ParallaxSection from "@/components/ParallaxSection";
import CountUp from "@/components/CountUp";

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO — Dark, editorial, left-aligned ─── */}
      <section className="relative py-24 lg:py-32 bg-secondary overflow-hidden">
        <ParallaxSection speed={0.15}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <span className="text-primary text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-6"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
              About
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-semibold text-white leading-tight tracking-tight max-w-3xl">
              I Build Systems That Help
              <br />
              Businesses Run Better
            </h1>
            <p className="font-[family-name:var(--font-ui)] text-muted-fg text-base lg:text-lg max-w-xl mt-6 leading-relaxed">
              I started with websites and custom tools, then realized most business
              problems come down to broken workflow, scattered information, and too
              much time spent on tasks that should already be systemized.
            </p>
          </div>
        </ParallaxSection>
      </section>

      {/* ─── MEET HUNTER — Split-screen, photo edge-to-edge ─── */}
      <section className="bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Text side */}
            <div className="flex-1 px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
              <span className="font-[family-name:var(--font-ui)] text-primary text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-4"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
                Founder
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6 tracking-tight">
                Hunter Weeks
              </h2>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg text-base leading-relaxed mb-4 max-w-lg">
                I started by building websites, booking systems, and custom
                workflow tools. Over time, I saw the same pattern inside
                businesses: good people were losing hours to repetitive computer
                tasks, important information wasn&apos;t moving where it needed
                to go, and growth was being held back by messy processes instead
                of lack of effort.
              </p>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg text-base leading-relaxed mb-4 max-w-lg">
                That shifted the way I work. Now, I don&apos;t just build
                websites or software for the sake of it. I look at where a
                business is slowing down, where communication breaks, where
                admin is eating up valuable time, and then build practical
                systems that make the operation cleaner, faster, and easier to
                grow.
              </p>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg text-base leading-relaxed mb-4 max-w-lg">
                My background includes hands-on production environments and
                technical build work, which helps me understand operations in a
                grounded way. That experience includes CNC machinery and
                shop-floor workflow, but the bigger value is that I know how to
                bridge real-world operations with smart digital systems.
              </p>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg text-base leading-relaxed mb-8 max-w-lg">
                Every website starts with a free demo. Every automation project
                starts with value. If there&apos;s no clear business reason to
                build it, I won&apos;t recommend it.
              </p>
              <div className="flex gap-6 flex-wrap mb-8">
                {["Operations-Focused", "150+ Projects", "Atlanta, GA"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-ui)] text-primary text-[10px] font-bold tracking-[0.2em] uppercase"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="tel:4707583549"
                  className="btn-shimmer text-background font-bold px-7 py-3.5 text-sm tracking-wider uppercase transition-colors"
                >
                  Call (470) 758-3549
                </a>
                <Link
                  href="/contact"
                  className="font-[family-name:var(--font-ui)] border border-foreground/15 hover:border-foreground/40 text-foreground/50 hover:text-foreground font-medium px-7 py-3.5 text-sm tracking-wider uppercase transition-all"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* Decorative accent — geometric pattern */}
            <div className="hidden lg:flex lg:w-[35%] items-center justify-center relative min-h-[400px]">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="w-[220px] h-[220px] border border-primary/10 rotate-45 relative">
                <div className="absolute inset-4 border border-primary/20 rotate-12 pulse-glow" />
                <div className="absolute inset-10 border border-foreground/5 -rotate-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT SETS US APART — Left-aligned, border accent cards ─── */}
      <section className="py-20 lg:py-28 bg-card overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="font-[family-name:var(--font-ui)] text-primary text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
            Why Us
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-14 lg:mb-16">
            What Sets Design over Atlanta Apart
          </h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                title: "Demo Before You Pay",
                desc: "Every website project starts with a fully functional demo — no deposit, no commitment. You see it working before a single dollar changes hands.",
              },
              {
                title: "Operational Perspective",
                desc: "I don\u2019t just think about code or design. I look at how the business actually runs \u2014 where work gets delayed, where information gets missed, and what should be simplified before anything new gets built.",
              },
              {
                title: "Direct Access",
                desc: "No account managers or middlemen. You talk to Hunter — the person actually designing and building your project. Faster answers, fewer miscommunications.",
              },
              {
                title: "Value First",
                desc: "We don\u2019t build tools for fun. Every automation project starts with an ROI analysis. If it won\u2019t save you money, we won\u2019t take the job.",
              },
              {
                title: "Fast Delivery",
                desc: "Most websites delivered in 24-48 hours. Design work in 24-72 hours. We move fast because your business can\u2019t wait.",
              },
              {
                title: "You Own Everything",
                desc: "Source files, code, assets \u2014 it\u2019s all yours. No vendor lock-in, no proprietary systems you can\u2019t leave.",
              },
              {
                title: "Reluctant by Design",
                desc: "Not every process needs new software. If your current method is already the best fit, we\u2019ll say so. We only recommend changes when they create real gains in speed, visibility, consistency, or cost.",
              },
            ].map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="border-l-2 border-primary/30 pl-6 py-4"
              >
                <h4 className="text-base font-bold text-foreground mb-2">
                  {v.title}
                </h4>
                <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm leading-relaxed m-0">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS — Inline pairs, editorial style ─── */}
      <section className="py-16 lg:py-20 bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="pt-6 border-t border-border/30 flex gap-10 lg:gap-16 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground tracking-tight">
                <CountUp end={150} suffix="+" />
              </span>
              <span className="font-[family-name:var(--font-ui)] text-muted-fg text-[10px] uppercase tracking-[0.15em]">
                projects delivered
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground tracking-tight">
                <CountUp end={5} suffix="+" />
              </span>
              <span className="font-[family-name:var(--font-ui)] text-muted-fg text-[10px] uppercase tracking-[0.15em]">
                years in business
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground tracking-tight">
                <CountUp end={48} suffix="hr" />
              </span>
              <span className="font-[family-name:var(--font-ui)] text-muted-fg text-[10px] uppercase tracking-[0.15em]">
                delivery
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground tracking-tight">
                <CountUp end={8} suffix="+" />
              </span>
              <span className="font-[family-name:var(--font-ui)] text-muted-fg text-[10px] uppercase tracking-[0.15em]">
                industries served
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS — Editorial: one large quote, others smaller ─── */}
      <section className="py-20 lg:py-28 bg-card overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="font-[family-name:var(--font-ui)] text-primary text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-primary rotate-45" />
            Client Feedback
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-14 lg:mb-16">
            What People Say After Working With Us
          </h2>

          {/* Featured testimonial — large */}
          <div className="max-w-3xl mb-16">
            <span className="float-quote text-[7rem] lg:text-[10rem] font-semibold leading-none text-primary/[0.08] block -mb-14 lg:-mb-20 select-none">
              &ldquo;
            </span>
            <blockquote className="font-[family-name:var(--font-display)] text-xl lg:text-3xl font-semibold text-foreground leading-snug mb-8 relative z-10">
              Hunter built our booking system in under a week. Our receptionist used to spend half the day on the phone — now customers book online and get automatic confirmations. We saved a part-time salary.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-px h-8 bg-primary" />
              <div>
                <div className="font-bold text-foreground text-sm">
                  Sarah Martinez
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs">
                  CEO, TechForward Solutions
                </div>
              </div>
            </div>
          </div>

          {/* Supporting testimonials — smaller, grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-border/30">
            {[
              {
                quote:
                  "The demo site looked so good we approved it the same day. Final product was even better. Our online orders are up 60% since launch.",
                name: "Michael Johnson",
                role: "Owner, Peachtree Bistro",
              },
              {
                quote:
                  "Business cards and brochures were done in 24 hours. Clean, professional, and exactly what we needed for our trade show.",
                name: "Emily Parker",
                role: "Founder, Atlanta Wellness Co.",
              },
              {
                quote:
                  "I've paid agencies 10x more for worse results. Hunter is fast, the pricing is transparent, and the quality is genuinely excellent. Been on the monthly plan for over a year.",
                name: "David Lee",
                role: "Product Manager, Georgia Gourmet",
              },
            ].map((t) => (
              <div key={t.name}>
                <p className="font-[family-name:var(--font-ui)] text-muted-fg italic text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-px h-6 bg-primary/40" />
                  <div>
                    <div className="text-foreground font-semibold text-sm">
                      {t.name}
                    </div>
                    <p className="font-[family-name:var(--font-ui)] text-muted-fg text-xs m-0">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Dark, dramatic, left-aligned ─── */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-[3.5rem] font-semibold text-white leading-[0.95] tracking-tight mb-6">
              Let&apos;s Find What&apos;s
              <br />
              Costing You Money
            </h2>
            <p className="font-[family-name:var(--font-ui)] text-muted-fg text-base max-w-md mb-10 leading-relaxed">
              Free website demo or a quick automation audit. No pressure, no commitments.
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
                className="font-[family-name:var(--font-ui)] border border-white/25 hover:border-white/40 text-muted-fg hover:text-white font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all"
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
