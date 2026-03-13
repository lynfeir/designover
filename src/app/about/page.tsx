import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Design over Atlanta",
  description:
    "Meet Hunter Weeks — founder of Design over Atlanta. Custom websites, business systems, and automation that help companies remove bottlenecks and run better. Based in Atlanta, GA.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO — Dark, editorial, left-aligned ─── */}
      <section className="relative py-24 lg:py-32 bg-forest overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-6"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
            About
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-3xl">
            I Build Systems That Help
            <br />
            Businesses Run Better
          </h1>
          <p className="text-white/65 text-base lg:text-lg max-w-xl mt-6 leading-relaxed">
            I started with websites and custom tools, then realized most business
            problems come down to broken workflow, scattered information, and too
            much time spent on tasks that should already be systemized.
          </p>
        </div>
      </section>

      {/* ─── MEET HUNTER — Split-screen, photo edge-to-edge ─── */}
      <section className="bg-bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Text side */}
            <div className="flex-1 px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-4"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-heading leading-tight mb-6 tracking-tight">
                Hunter Weeks
              </h2>
              <p className="text-text-body text-base leading-relaxed mb-4 max-w-lg">
                I started by building websites, booking systems, and custom
                workflow tools. Over time, I saw the same pattern inside
                businesses: good people were losing hours to repetitive computer
                tasks, important information wasn&apos;t moving where it needed
                to go, and growth was being held back by messy processes instead
                of lack of effort.
              </p>
              <p className="text-text-body text-base leading-relaxed mb-4 max-w-lg">
                That shifted the way I work. Now, I don&apos;t just build
                websites or software for the sake of it. I look at where a
                business is slowing down, where communication breaks, where
                admin is eating up valuable time, and then build practical
                systems that make the operation cleaner, faster, and easier to
                grow.
              </p>
              <p className="text-text-body text-base leading-relaxed mb-4 max-w-lg">
                My background includes hands-on production environments and
                technical build work, which helps me understand operations in a
                grounded way. That experience includes CNC machinery and
                shop-floor workflow, but the bigger value is that I know how to
                bridge real-world operations with smart digital systems.
              </p>
              <p className="text-text-body text-base leading-relaxed mb-8 max-w-lg">
                Every website starts with a free demo. Every automation project
                starts with value. If there&apos;s no clear business reason to
                build it, I won&apos;t recommend it.
              </p>
              <div className="flex gap-6 flex-wrap mb-8">
                {["Operations-Focused", "150+ Projects", "Atlanta, GA"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-terra text-[10px] font-bold tracking-[0.2em] uppercase"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="tel:4707583549"
                  className="bg-terra hover:bg-terra-dark text-white font-bold px-7 py-3.5 text-sm tracking-wider uppercase transition-colors"
                >
                  Call (470) 758-3549
                </a>
                <Link
                  href="/contact"
                  className="border border-text-heading/15 hover:border-text-heading/40 text-text-heading/50 hover:text-text-heading font-medium px-7 py-3.5 text-sm tracking-wider uppercase transition-all"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* Photo side — extends to edge */}
            <div className="lg:w-[42%] relative min-h-[380px] lg:min-h-[600px]">
              <Image
                src="/hunterheadshot.png"
                alt="Hunter Weeks — Founder of Design over Atlanta"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT SETS US APART — Left-aligned, border accent cards ─── */}
      <section className="py-20 lg:py-28 bg-bg-sage overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
            Why Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-heading tracking-tight mb-14 lg:mb-16">
            What Sets Design over Atlanta Apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <div
                key={v.title}
                className="border-l-2 border-terra/30 pl-6 py-4"
              >
                <h4 className="text-base font-bold text-text-heading mb-2">
                  {v.title}
                </h4>
                <p className="text-text-body text-sm leading-relaxed m-0">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS — Inline pairs, editorial style ─── */}
      <section className="py-16 lg:py-20 bg-bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="pt-6 border-t border-border flex gap-10 lg:gap-16 flex-wrap">
            {[
              ["150+", "projects delivered"],
              ["5+", "years in business"],
              ["48hr", "delivery"],
              ["8+", "industries served"],
            ].map(([num, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-text-heading tracking-tight">
                  {num}
                </span>
                <span className="text-text-muted text-[10px] uppercase tracking-[0.15em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS — Editorial: one large quote, others smaller ─── */}
      <section className="py-20 lg:py-28 bg-bg-sage overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3"><span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
            Client Feedback
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-heading tracking-tight mb-14 lg:mb-16">
            What People Say After Working With Us
          </h2>

          {/* Featured testimonial — large */}
          <div className="max-w-3xl mb-16">
            <span className="text-[7rem] lg:text-[10rem] font-black leading-none text-terra/[0.08] block -mb-14 lg:-mb-20 select-none">
              &ldquo;
            </span>
            <blockquote className="text-xl lg:text-3xl font-semibold text-text-heading leading-snug mb-8 relative z-10">
              Hunter built our booking system in under a week. Our receptionist used to spend half the day on the phone — now customers book online and get automatic confirmations. We saved a part-time salary.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-px h-8 bg-terra" />
              <div>
                <div className="font-bold text-text-heading text-sm">
                  Sarah Martinez
                </div>
                <div className="text-text-muted text-xs">
                  CEO, TechForward Solutions
                </div>
              </div>
            </div>
          </div>

          {/* Supporting testimonials — smaller, grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-border">
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
                <p className="text-text-body italic text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-px h-6 bg-terra/40" />
                  <div>
                    <div className="text-text-heading font-semibold text-sm">
                      {t.name}
                    </div>
                    <p className="text-text-muted text-xs m-0">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Dark, dramatic, left-aligned ─── */}
      <section className="relative py-20 lg:py-28 bg-forest overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-[3.5rem] font-black text-white leading-[0.95] tracking-tight mb-6">
              Let&apos;s Find What&apos;s
              <br />
              Costing You Money
            </h2>
            <p className="text-white/65 text-base max-w-md mb-10 leading-relaxed">
              Free website demo or a quick automation audit. No pressure, no commitments.
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
                className="border border-white/25 hover:border-white/40 text-white/70 hover:text-white font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all"
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
