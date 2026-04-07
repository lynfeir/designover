"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  sectionVariants,
  staggerContainer,
  fadeUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  viewport,
} from "@/lib/motion";
import CountUp from "@/components/CountUp";
import PricingSection from "@/components/PricingSection";
import ParallaxSection from "@/components/ParallaxSection";

/* ── Word-by-word stagger for headlines ── */
function AnimatedHeadline({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  return (
    <motion.span
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              },
            },
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ── Typewriter effect for tagline ── */
function Typewriter({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span className={`font-[family-name:var(--font-mono)] ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.04, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ── 3D Tilt Card ── */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* ━━━━ HERO — Multi-layered cinematic ━━━━ */}
      <section className="relative min-h-screen flex flex-col justify-end bg-background overflow-hidden">
        {/* Background layers — parallax */}
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="/hero-workspace.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-30 scale-110"
              priority
            />
          </div>
        </ParallaxSection>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />

        {/* Animated beams */}
        <div className="absolute inset-0 bg-beams pointer-events-none" />

        {/* Dot pattern */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] dot-pattern opacity-40 pointer-events-none hidden lg:block" />

        {/* Geometric accents — parallax at different speeds */}
        <ParallaxSection speed={0.5} className="absolute top-[15%] right-[8%] w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] pointer-events-none hidden md:block">
          <div className="w-full h-full border border-primary/[0.08] rotate-45" />
        </ParallaxSection>
        <ParallaxSection speed={0.7} className="absolute top-[28%] right-[18%] w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] pointer-events-none hidden lg:block">
          <div className="w-full h-full border border-foreground/[0.04] rotate-45" />
        </ParallaxSection>
        <ParallaxSection speed={0.4} className="absolute bottom-[25%] right-[35%] w-[50px] h-[50px] pointer-events-none hidden lg:block">
          <div className="w-full h-full border border-primary/[0.06] rotate-45 pulse-glow" />
        </ParallaxSection>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pb-16 lg:pb-24 pt-32">
          <Typewriter
            text="Design or Automation"
            className="text-primary text-xs tracking-[0.35em] uppercase mb-8 block"
          />

          <h1 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] text-foreground uppercase max-w-5xl">
            <AnimatedHeadline words={["We", "Find", "What's"]} />
            <br />
            <AnimatedHeadline words={["Costing", "You", "Money"]} />
            <br />
            <span className="text-gold-gradient">
              <AnimatedHeadline words={["&", "We", "Fix", "It"]} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20"
          >
            <p className="text-muted-fg max-w-sm text-base leading-relaxed font-[family-name:var(--font-ui)]">
              Custom websites and business systems built to remove bottlenecks,
              reduce manual work, and help your company run cleaner as it grows.
              Every project starts with a free demo or ROI review.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-8 py-4 text-sm tracking-[0.15em] uppercase transition-transform hover:scale-105"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="/services"
                className="border border-foreground/20 hover:border-primary/50 text-foreground/60 hover:text-primary font-[family-name:var(--font-ui)] font-medium px-8 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-300"
              >
                How We Save You Money
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-16 lg:mt-24 pt-6 border-t border-foreground/10 flex gap-10 lg:gap-16 flex-wrap"
          >
            {[
              { num: "$200", label: "sites from" },
              { num: "48hr", label: "delivery" },
              { num: "$62K", label: "avg savings" },
              { num: "150+", label: "shipped" },
            ].map(({ num, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-mono)] text-foreground text-xl font-bold tracking-tight">
                  {num}
                </span>
                <span className="font-[family-name:var(--font-ui)] text-muted-fg text-[10px] uppercase tracking-[0.2em]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator — animated chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/50 -mt-2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ━━━━ SERVICE 01: Websites ━━━━ */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-24 lg:py-36 bg-background"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
            <motion.div variants={fadeIn} className="shrink-0 hidden lg:block">
              <ParallaxSection speed={0.6}>
                <span className="font-[family-name:var(--font-display)] text-[12rem] xl:text-[16rem] font-semibold leading-none text-primary/[0.04] select-none block -mb-10">
                  01
                </span>
              </ParallaxSection>
            </motion.div>
            <motion.div variants={fadeUp} className="max-w-2xl pt-4">
              <span className="font-[family-name:var(--font-ui)] text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Tier One
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-[3.5rem] font-semibold leading-[1.05] mb-6 tracking-tight">
                Custom Websites
              </h2>
              <p className="text-muted-fg text-lg leading-relaxed mb-8 max-w-xl font-[family-name:var(--font-ui)]">
                Your website should do more than exist. It should help customers
                take the next step, reduce back-and-forth, and support how your
                business actually runs. We build fast, custom sites that look
                sharp, load fast, and make your operation easier to manage.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/contact"
                  className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-7 py-3.5 text-sm tracking-[0.1em] uppercase"
                >
                  Get a Free Demo
                </Link>
                <span className="text-muted-fg text-sm font-[family-name:var(--font-ui)]">
                  From{" "}
                  <strong className="font-[family-name:var(--font-mono)] text-foreground text-2xl font-bold">
                    $200
                  </strong>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ━━━━ SERVICE 02: Automation — dark band ━━━━ */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative py-20 lg:py-28 bg-secondary overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ boxShadow: "var(--shadow-glow)" }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <motion.div variants={slideInLeft} className="flex-1">
              <span className="font-[family-name:var(--font-ui)] text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Tier Two
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-[3.5rem] font-semibold text-foreground leading-[1.05] mb-6 tracking-tight">
                Business Systems &amp; Automation
              </h2>
              <p className="text-muted-fg text-lg leading-relaxed mb-8 max-w-xl font-[family-name:var(--font-ui)]">
                If your team is spending valuable time on repetitive computer
                work, disconnected information, or preventable admin, that&apos;s
                where we step in. We build custom systems for booking, internal
                workflows, approvals, reporting, task routing, customer
                communication, and process visibility.
              </p>
              <Link
                href="/contact"
                className="inline-block btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-7 py-3.5 text-sm tracking-[0.1em] uppercase"
              >
                Get a Free ROI Analysis
              </Link>
            </motion.div>

            {/* ROI math */}
            <motion.div variants={slideInRight} className="shrink-0 lg:text-right">
              <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-[0.2em] mb-3">
                The math
              </div>
              <div className="font-[family-name:var(--font-mono)] text-foreground/40 text-2xl lg:text-3xl font-bold line-through decoration-destructive/30 mb-1">
                $62,400/yr
              </div>
              <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-wider mb-6">
                employee doing it manually
              </div>
              <div className="font-[family-name:var(--font-mono)] text-primary text-5xl lg:text-7xl font-bold leading-none">
                $200
                <span className="text-xl lg:text-2xl text-primary/60">
                  /mo
                </span>
              </div>
              <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-wider mt-2">
                our tool does it 24/7
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ━━━━ SERVICE 03: Design ━━━━ */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-20 lg:py-28 bg-card"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-20 items-start">
            <motion.div variants={fadeIn} className="shrink-0 hidden lg:block">
              <span className="font-[family-name:var(--font-display)] text-[12rem] xl:text-[16rem] font-semibold leading-none text-accent/[0.06] select-none block -mb-10">
                03
              </span>
            </motion.div>
            <motion.div variants={fadeUp} className="max-w-2xl lg:ml-auto pt-4">
              <span className="font-[family-name:var(--font-ui)] text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Also
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-[3.5rem] font-semibold leading-[1.05] mb-6 tracking-tight lg:text-right">
                Graphic Design
              </h2>
              <p className="text-muted-fg text-lg leading-relaxed mb-8 max-w-xl lg:text-right lg:ml-auto font-[family-name:var(--font-ui)]">
                Business cards, brochures, flyers, advertisements, social
                graphics &mdash; whatever your business needs to look sharp and
                stay consistent.
              </p>
              <div className="flex items-center gap-6 flex-wrap lg:justify-end">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent/80 text-background font-[family-name:var(--font-ui)] font-bold px-7 py-3.5 text-sm tracking-[0.1em] uppercase transition-colors"
                >
                  Request a Quote
                </Link>
                <span className="text-muted-fg text-sm font-[family-name:var(--font-ui)]">
                  From{" "}
                  <strong className="font-[family-name:var(--font-mono)] text-foreground text-2xl font-bold">
                    $99
                  </strong>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ━━━━ DEMO PROMISE — gold accent band ━━━━ */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(72% 0.14 75), oklch(62% 0.17 38))" }}>
        {/* Corner brackets */}
        <div className="absolute top-5 left-5 lg:top-8 lg:left-8 w-8 h-8 border-t-2 border-l-2 border-background/30 pointer-events-none" />
        <div className="absolute top-5 right-5 lg:top-8 lg:right-8 w-8 h-8 border-t-2 border-r-2 border-background/30 pointer-events-none" />
        <div className="absolute bottom-5 left-5 lg:bottom-8 lg:left-8 w-8 h-8 border-b-2 border-l-2 border-background/30 pointer-events-none" />
        <div className="absolute bottom-5 right-5 lg:bottom-8 lg:right-8 w-8 h-8 border-b-2 border-r-2 border-background/30 pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10"
        >
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-semibold text-background leading-tight mb-4">
              Every project starts with a free demo.
            </h2>
            <p className="text-background/80 text-base max-w-lg font-[family-name:var(--font-ui)]">
              See your site live &mdash; fully designed and functional &mdash;
              within 48 hours, before you spend a dollar. If you love it, we
              move forward. If not, no hard feelings.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-background hover:bg-background/90 text-primary font-[family-name:var(--font-ui)] font-bold px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all hover:scale-105"
          >
            Request Your Demo
          </Link>
        </motion.div>
      </section>

      {/* ━━━━ PORTFOLIO — Editorial case-study grid ━━━━ */}
      <section className="py-28 lg:py-40 bg-background relative overflow-hidden">
        {/* Subtle diagonal grain */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              oklch(72% 0.14 75 / 0.3) 2px,
              oklch(72% 0.14 75 / 0.3) 3px
            )`,
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Section header — asymmetric with oversized issue number */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-20 lg:mb-28"
          >
            <motion.div variants={fadeUp} className="flex items-start gap-6 lg:gap-10">
              <span
                className="font-[family-name:var(--font-display)] text-[8rem] lg:text-[12rem] font-light leading-none select-none"
                style={{ color: "oklch(72% 0.14 75 / 0.08)" }}
              >
                &sect;
              </span>
              <div className="pt-6 lg:pt-10">
                <span className="font-[family-name:var(--font-mono)] text-primary text-[10px] tracking-[0.4em] uppercase block mb-3">
                  Selected Work
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-[4.5rem] font-semibold leading-[0.95] tracking-tight">
                  Sites We&apos;ve
                  <br />
                  <span className="italic font-light">Shipped</span>
                </h2>
                <div className="mt-5 w-16 h-px bg-primary" />
              </div>
            </motion.div>
          </motion.div>

          {/* ── FEATURED — BookNest ── */}
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            href="https://booknst.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block mb-16 lg:mb-24"
          >
            <div className="relative overflow-hidden border border-border/10 transition-all duration-700 hover:border-primary/20"
              style={{ background: "linear-gradient(160deg, oklch(10% 0.02 240), oklch(14% 0.03 250), oklch(10% 0.01 270))" }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left — oversized index */}
                <div className="lg:w-32 shrink-0 flex items-center justify-center py-6 lg:py-0 border-b lg:border-b-0 lg:border-r border-border/10">
                  <span className="font-[family-name:var(--font-mono)] text-primary/20 text-7xl lg:text-8xl font-light group-hover:text-primary/40 transition-colors duration-700">
                    01
                  </span>
                </div>

                {/* Right — content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <div className="font-[family-name:var(--font-mono)] text-muted-fg text-[10px] uppercase tracking-[0.3em] mb-3">
                      SaaS &middot; Book Tracking
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-foreground text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                      <span className="inline-block group-hover:translate-x-3 transition-transform duration-500">
                        BookNest
                      </span>
                    </h3>
                    <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mt-3 max-w-md leading-relaxed">
                      A platform where readers collect, review, and highlight
                      their favorite reads. Full-stack with auth, profiles, and
                      social features.
                    </p>
                  </div>

                  {/* Hover-reveal arrow */}
                  <div className="shrink-0 w-14 h-14 border border-border/20 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <svg className="w-5 h-5 text-muted-fg group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Gold accent line — draws on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-primary transition-all duration-700 ease-out" />
            </div>
          </motion.a>

          {/* ── GRID — Asymmetric 2-col with staggered heights ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5"
          >
            {/* Left — tall card */}
            <motion.a
              variants={slideInLeft}
              href="https://pinecrestcamp.life/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="relative h-72 lg:h-[26rem] overflow-hidden border border-border/10 transition-all duration-700 hover:border-primary/20"
                style={{ background: "linear-gradient(170deg, oklch(10% 0.02 155), oklch(14% 0.04 145), oklch(8% 0.01 270))" }}
              >
                {/* Index watermark */}
                <span className="absolute top-5 right-6 font-[family-name:var(--font-mono)] text-[5rem] lg:text-[7rem] font-light leading-none text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors duration-700 select-none">
                  02
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                  <div className="font-[family-name:var(--font-mono)] text-primary/50 text-[9px] uppercase tracking-[0.3em] mb-2">
                    Recreation
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-foreground text-3xl lg:text-4xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    Pine Crest Camp
                  </h3>
                  <p className="font-[family-name:var(--font-ui)] text-muted-fg/60 text-xs mt-2 max-w-xs leading-relaxed opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Trust-first design with a registration flow that converts
                    worried parents into happy campers.
                  </p>
                  {/* Gold underline draw */}
                  <div className="mt-4 h-px w-0 group-hover:w-24 bg-primary transition-all duration-600 ease-out" />
                </div>
              </div>
            </motion.a>

            {/* Right — stacked pair */}
            <div className="flex flex-col gap-5">
              <motion.a
                variants={slideInRight}
                href="https://carwash-hazel-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group block flex-1"
              >
                <div
                  className="relative h-full min-h-[10rem] overflow-hidden border border-border/10 transition-all duration-700 hover:border-primary/20"
                  style={{ background: "linear-gradient(160deg, oklch(10% 0.02 250), oklch(14% 0.03 240), oklch(8% 0.01 270))" }}
                >
                  <span className="absolute top-4 right-5 font-[family-name:var(--font-mono)] text-[4rem] font-light leading-none text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors duration-700 select-none">
                    03
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="font-[family-name:var(--font-mono)] text-primary/50 text-[9px] uppercase tracking-[0.3em] mb-2">
                      Auto &middot; Luxury
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-foreground text-2xl lg:text-3xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      Alchemy Auto Spa
                    </h3>
                    <div className="mt-3 h-px w-0 group-hover:w-20 bg-primary transition-all duration-600 ease-out" />
                  </div>
                </div>
              </motion.a>

              <motion.a
                variants={slideInRight}
                href="https://www.fit4lyfe.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block flex-1"
              >
                <div
                  className="relative h-full min-h-[10rem] overflow-hidden border border-border/10 transition-all duration-700 hover:border-primary/20"
                  style={{ background: "linear-gradient(160deg, oklch(14% 0.03 70), oklch(10% 0.02 60), oklch(8% 0.01 270))" }}
                >
                  <span className="absolute top-4 right-5 font-[family-name:var(--font-mono)] text-[4rem] font-light leading-none text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors duration-700 select-none">
                    04
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <div className="font-[family-name:var(--font-mono)] text-primary/50 text-[9px] uppercase tracking-[0.3em] mb-2">
                      Fitness
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-foreground text-2xl lg:text-3xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      Fit4Lyfe
                    </h3>
                    <div className="mt-3 h-px w-0 group-hover:w-20 bg-primary transition-all duration-600 ease-out" />
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* ── BOTTOM ROW — 3-col equal ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {[
              {
                idx: "05",
                name: "RAFVAC Solutions",
                url: "https://rafvacsolutions.com/",
                niche: "HVAC",
                bg: "linear-gradient(170deg, oklch(10% 0.02 230), oklch(14% 0.04 240), oklch(8% 0.01 270))",
              },
              {
                idx: "06",
                name: "Top Notch Roofing",
                url: "https://topnotch-omega.vercel.app/",
                niche: "Construction",
                bg: "linear-gradient(170deg, oklch(14% 0.03 30), oklch(10% 0.02 25), oklch(8% 0.01 270))",
              },
              {
                idx: "07",
                name: "Baasit Sumra",
                url: "http://baasitsumra.fitness/",
                niche: "Coaching",
                bg: "linear-gradient(170deg, oklch(10% 0.02 170), oklch(14% 0.03 160), oklch(8% 0.01 270))",
              },
            ].map((p) => (
              <motion.a
                key={p.name}
                variants={fadeUp}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="relative h-52 lg:h-60 overflow-hidden border border-border/10 transition-all duration-700 hover:border-primary/20"
                  style={{ background: p.bg }}
                >
                  <span className="absolute top-4 right-5 font-[family-name:var(--font-mono)] text-[4rem] font-light leading-none text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors duration-700 select-none">
                    {p.idx}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-[family-name:var(--font-mono)] text-primary/50 text-[9px] uppercase tracking-[0.3em] mb-2">
                      {p.niche}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-foreground text-xl lg:text-2xl font-semibold tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                      {p.name}
                    </h3>
                    <div className="mt-3 h-px w-0 group-hover:w-16 bg-primary transition-all duration-600 ease-out" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* ── Metrics strip ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-20 lg:mt-28 pt-8 border-t border-border/20 flex justify-between flex-wrap gap-y-6"
          >
            {[
              { val: "7", label: "live sites shown" },
              { val: "150+", label: "total shipped" },
              { val: "100%", label: "demo-first" },
              { val: "5+", label: "years running" },
            ].map(({ val, label }) => (
              <div key={label} className="flex items-baseline gap-2.5">
                <span className="font-[family-name:var(--font-mono)] text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                  {val}
                </span>
                <span className="font-[family-name:var(--font-ui)] text-muted-fg text-[10px] uppercase tracking-[0.2em]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━━ STATS — Full-width with counting numbers ━━━━ */}
      <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ boxShadow: "var(--shadow-glow)" }} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {[
            { end: 200, prefix: "$", suffix: "", label: "Starting Price" },
            { end: 48, prefix: "", suffix: "hr", label: "Delivery Time" },
            { end: 62, prefix: "$", suffix: "K", label: "Avg. Savings" },
            { end: 150, prefix: "", suffix: "+", label: "Projects Shipped" },
          ].map(({ end, prefix, suffix, label }) => (
            <motion.div key={label} variants={fadeUp} className="text-center">
              <div className="font-[family-name:var(--font-mono)] text-primary text-5xl lg:text-7xl font-bold leading-none mb-3">
                <CountUp end={end} prefix={prefix} suffix={suffix} />
              </div>
              <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-[0.2em]">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ━━━━ FOUNDER — Split screen ━━━━ */}
      <section className="bg-card overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Text side */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex-1 px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-center"
            >
              <span className="font-[family-name:var(--font-ui)] text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                The Builder
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-semibold leading-tight mb-6 tracking-tight">
                Hunter Weeks
              </h2>
              <p className="text-muted-fg text-base leading-relaxed mb-4 max-w-lg font-[family-name:var(--font-ui)]">
                I started by building websites, booking systems, and workflow
                tools. Over time, I realized most businesses don&apos;t lose
                time because people are lazy &mdash; they lose time because
                information gets stuck, tasks get repeated, and employees spend
                too much of their day doing work a computer should already be
                handling.
              </p>
              <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mb-8 max-w-lg">
                5+ years, 150+ projects. If there&apos;s no clear value in
                changing something, we won&apos;t push it.
              </p>
              <Link
                href="/about"
                className="text-primary font-[family-name:var(--font-ui)] font-bold text-sm tracking-[0.15em] uppercase hover:text-primary-hover transition-colors inline-flex items-center gap-2 w-fit underline-draw"
              >
                Full Story
                <span className="text-lg">&rarr;</span>
              </Link>
            </motion.div>

            {/* Decorative accent — replaces photo */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="hidden lg:flex lg:w-[35%] items-center justify-center relative min-h-[400px]"
            >
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="w-[200px] h-[200px] border border-primary/10 rotate-45 relative">
                <div className="absolute inset-4 border border-primary/20 rotate-12 pulse-glow" />
                <div className="absolute inset-10 border border-foreground/5 -rotate-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━ PROCESS — Diamond step markers ━━━━ */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="py-24 lg:py-32 bg-background overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp}>
            <span className="font-[family-name:var(--font-ui)] text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Process
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-semibold mb-16 lg:mb-24 tracking-tight">
              Brief to Launch in Four Steps
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[28px] left-[56px] right-[56px] h-px bg-border/30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-8">
              {[
                {
                  n: "01",
                  title: "Discovery",
                  desc: "Tell us where the business feels slow, messy, or harder than it should. We identify whether the right fix is a website, an internal system, an automation, or no change at all.",
                },
                {
                  n: "02",
                  title: "Free Demo",
                  desc: "We build a working preview of your site or design. You review it hands-on, no payment required.",
                },
                {
                  n: "03",
                  title: "Refine",
                  desc: "Approve, tweak, or pivot. We iterate fast until every detail is dialed in.",
                },
                {
                  n: "04",
                  title: "Launch",
                  desc: "Final files delivered or site goes live. You get everything \u2014 source files, assets, full ownership.",
                },
              ].map((s) => (
                <motion.div key={s.n} variants={fadeUp} className="relative">
                  {/* Diamond step marker — pulse glow on hover */}
                  <div className="w-14 h-14 bg-card border border-primary/20 flex items-center justify-center rotate-45 mb-8 relative z-10 transition-all hover:border-primary/50 hover:pulse-glow">
                    <span className="-rotate-45 font-[family-name:var(--font-mono)] text-primary font-bold text-xs">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-foreground text-xl mb-3">
                    {s.title}
                  </h3>
                  <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm leading-relaxed max-w-xs">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ━━━━ PRICING ━━━━ */}
      <PricingSection />

      {/* ━━━━ TESTIMONIALS — Infinite scroll ━━━━ */}
      <section className="py-24 lg:py-32 bg-card overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Oversized quotation mark — floating */}
            <span className="font-[family-name:var(--font-display)] text-[8rem] lg:text-[12rem] font-semibold leading-none text-primary/[0.08] block -mb-16 lg:-mb-24 select-none float-quote">
              &ldquo;
            </span>
            <blockquote className="font-[family-name:var(--font-display)] text-xl lg:text-3xl font-semibold text-foreground leading-snug mb-8 relative z-10 italic">
              The attention to detail is incredible. Every animation, every
              interaction feels purposeful. Our users love the new experience!
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-px h-8 bg-primary" />
              <div>
                <div className="font-[family-name:var(--font-ui)] font-bold text-foreground text-sm">
                  Cindy Evanoff
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs">
                  Manager, Pine Crest Camp
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second testimonial */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-14 pt-10 border-t border-border/30"
          >
            <p className="font-[family-name:var(--font-display)] text-foreground/80 text-lg italic leading-relaxed mb-4 max-w-xl">
              &ldquo;Hunter delivered beyond expectations. Our landing page
              loads instantly and converts 3x better than our previous site.
              Absolute wizard with code!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-px h-6 bg-accent" />
              <div>
                <div className="font-[family-name:var(--font-ui)] font-semibold text-foreground text-sm">
                  Brooke Brum
                </div>
                <div className="font-[family-name:var(--font-ui)] text-muted-fg text-xs">
                  CEO, Fit4Lyfe
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━━ CTA — Dark, dramatic ━━━━ */}
      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        {/* Beams */}
        <div className="absolute inset-0 bg-beams pointer-events-none" />
        {/* Geometric accents */}
        <div className="absolute top-[12%] right-[8%] w-[200px] h-[200px] border border-primary/[0.06] rotate-45 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-[15%] right-[22%] w-[80px] h-[80px] border border-foreground/[0.03] rotate-45 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] dot-pattern opacity-20 pointer-events-none hidden lg:block" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12"
        >
          <div className="max-w-3xl">
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-4xl lg:text-[4rem] font-semibold text-foreground leading-[0.95] tracking-tight mb-6"
            >
              Your Competitor
              <br />
              Is Online.
              <br />
              <span className="text-gold-gradient">Are You?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-[family-name:var(--font-ui)] text-muted-fg text-base max-w-md mb-10 leading-relaxed">
              Get a free demo site or a workflow review &mdash; with zero
              commitment. We&apos;ll show you where your business is losing
              time and how to fix it.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-8 py-4 text-sm tracking-[0.15em] uppercase transition-transform hover:scale-105"
              >
                Get Your Free Demo
              </Link>
              <a
                href="tel:4707583549"
                className="border border-foreground/20 hover:border-primary/50 text-foreground/60 hover:text-primary font-[family-name:var(--font-ui)] font-medium px-8 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-300"
              >
                (470) 758-3549
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
