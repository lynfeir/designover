import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Design over Atlanta",
  description:
    "Meet Hunter Weeks — carpenter turned coder. Custom websites from $200 and business automation tools that eliminate manual work. Based in Atlanta, GA.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO — Dark, editorial, left-aligned ─── */}
      <section className="relative py-24 lg:py-32 bg-forest overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase block mb-6">
            About
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-3xl">
            A Carpenter Who Taught
            <br />
            Himself to Code
          </h1>
          <p className="text-white/40 text-base lg:text-lg max-w-xl mt-6 leading-relaxed">
            A web developer who understands CNC machines. The only person in the room who does both.
          </p>
        </div>
      </section>

      {/* ─── MEET HUNTER — Split-screen, photo edge-to-edge ─── */}
      <section className="bg-bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Text side */}
            <div className="flex-1 px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">
                Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-heading leading-tight mb-6 tracking-tight">
                Hunter Weeks
              </h2>
              <p className="text-text-body text-base leading-relaxed mb-4 max-w-lg">
                I&apos;m a carpenter who taught himself to code. I&apos;ve stood at the workbench cutting cabinet parts and sat at the desk writing the software that automates the cuts. I started Design over Atlanta because I kept seeing two problems nobody was solving: small businesses overpaying for websites, and shops wasting thousands of hours on manual computer work that should be automated.
              </p>
              <p className="text-text-body text-base leading-relaxed mb-4 max-w-lg">
                A web developer doesn&apos;t understand CNC machines. A CNC consultant doesn&apos;t code. A SaaS company doesn&apos;t know what it&apos;s like to stand at the bench. I do all three &mdash; and that&apos;s what makes DOA different. I build custom websites starting at $200 and automation tools that replace the manual busywork costing your business real money.
              </p>
              <p className="text-text-body text-base leading-relaxed mb-8 max-w-lg">
                Every web project starts with a free demo. You see it working before you spend a dollar. For automation, I scope the ROI first &mdash; if it won&apos;t save you money, I won&apos;t build it.
              </p>
              <div className="flex gap-6 flex-wrap mb-8">
                {["Carpenter Turned Coder", "150+ Projects", "Atlanta, GA"].map(
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
          <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase block mb-3">
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
                title: "Carpenter Who Codes",
                desc: "I work on the shop floor AND write the software. A web developer doesn\u2019t understand your machines. A consultant doesn\u2019t code. I do both.",
              },
              {
                title: "Direct Access",
                desc: "No account managers or middlemen. You talk to Hunter — the person actually designing and building your project. Faster answers, fewer miscommunications.",
              },
              {
                title: "ROI or Nothing",
                desc: "We don\u2019t build tools for fun. Every automation project starts with an ROI analysis. If it won\u2019t save you money, we won\u2019t take the job.",
              },
              {
                title: "48-Hour Delivery",
                desc: "Most websites delivered in 24-48 hours. Design work in 24-72 hours. We move fast because your business can\u2019t wait.",
              },
              {
                title: "You Own Everything",
                desc: "Source files, code, assets — it's all yours. No vendor lock-in, no proprietary systems you can't leave.",
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
          <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase block mb-3">
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
            <p className="text-white/40 text-base max-w-md mb-10 leading-relaxed">
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
                className="border border-white/15 hover:border-white/40 text-white/50 hover:text-white font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all"
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
