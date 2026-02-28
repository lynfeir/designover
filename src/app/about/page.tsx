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
      {/* Hero */}
      <section className="relative bg-bg-cream text-text-heading py-20 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About</h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            A carpenter who taught himself to code. A web developer who understands CNC machines. The only person in the room who does both.
          </p>
          <div className="h-[3px] w-20 bg-terra rounded mx-auto mt-6" />
        </div>
      </section>

      {/* Meet Hunter */}
      <section className="relative py-24 bg-bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  <Image
                    src="/hunterheadshot.png"
                    alt="Hunter Weeks — Founder of Design over Atlanta"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Subtle accent shapes */}
                <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-xl border border-terra/15 pointer-events-none" />
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl border border-terra/15 pointer-events-none" />
              </div>
            </div>
            <div className="reveal">
              <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
                Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-6">
                Hunter Weeks
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                I&apos;m a carpenter who taught himself to code. I&apos;ve stood at the workbench cutting cabinet parts and sat at the desk writing the software that automates the cuts. I started Design over Atlanta because I kept seeing two problems nobody was solving: small businesses overpaying for websites, and shops wasting thousands of hours on manual computer work that should be automated.
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                A web developer doesn&apos;t understand CNC machines. A CNC consultant doesn&apos;t code. A SaaS company doesn&apos;t know what it&apos;s like to stand at the bench. I do all three &mdash; and that&apos;s what makes DOA different. I build custom websites starting at $200 and automation tools that replace the manual busywork costing your business real money.
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                Every web project starts with a free demo. You see it working before you spend a dollar. For automation, I scope the ROI first &mdash; if it won&apos;t save you money, I won&apos;t build it.
              </p>
              <div className="flex gap-3 flex-wrap mb-6">
                {["Carpenter Turned Coder", "150+ Projects", "Atlanta, GA"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-accent-soft text-terra px-3 py-1.5 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="tel:4707583549"
                  className="bg-terra hover:bg-terra-dark text-white font-semibold rounded-lg btn-hover text-sm px-5 py-2.5 transition-all"
                >
                  Call (470) 758-3549
                </a>
                <Link
                  href="/contact"
                  className="border border-border hover:border-terra text-text-heading hover:text-terra font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="relative py-24 bg-bg-sage overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              What Sets Design over Atlanta Apart
            </h2>
            <div className="h-[3px] w-20 bg-terra rounded mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "Demo Before You Pay",
                desc: "Every website project starts with a fully functional demo — no deposit, no commitment. You see it working before a single dollar changes hands.",
              },
              {
                icon: "💰",
                title: "Carpenter Who Codes",
                desc: "I work on the shop floor AND write the software. A web developer doesn\u2019t understand your machines. A consultant doesn\u2019t code. I do both.",
              },
              {
                icon: "🤝",
                title: "Direct Access",
                desc: "No account managers or middlemen. You talk to Hunter — the person actually designing and building your project. Faster answers, fewer miscommunications.",
              },
              {
                icon: "🤖",
                title: "ROI or Nothing",
                desc: "We don\u2019t build tools for fun. Every automation project starts with an ROI analysis. If it won\u2019t save you money, we won\u2019t take the job.",
              },
              {
                icon: "🚀",
                title: "48-Hour Delivery",
                desc: "Most websites delivered in 24-48 hours. Design work in 24-72 hours. We move fast because your business can\u2019t wait.",
              },
              {
                icon: "📂",
                title: "You Own Everything",
                desc: "Source files, code, assets — it's all yours. No vendor lock-in, no proprietary systems you can't leave.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="reveal bg-white border border-border-light shadow-sm card-hover rounded-2xl p-7 transition-all relative overflow-hidden group"
              >
                <h4 className="text-base font-bold text-text-dark mb-2 relative z-10">
                  {v.icon} {v.title}
                </h4>
                <p className="text-text-body text-sm leading-relaxed m-0 relative z-10">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 bg-bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "150+", label: "Projects Delivered" },
              { num: "5+", label: "Years in Business" },
              { num: "24-48hr", label: "Delivery" },
              { num: "8+", label: "Industries Served" },
            ].map((s) => (
              <div key={s.label} className="reveal">
                <span className="block text-3xl font-extrabold text-terra mb-1 inline-block">
                  {s.num}
                </span>
                <span className="text-xs text-text-muted uppercase tracking-wider block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-bg-sage overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              What People Say After Working With Us
            </h2>
            <div className="h-[3px] w-20 bg-terra rounded mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "Hunter built our booking system in under a week. Our receptionist used to spend half the day on the phone — now customers book online and get automatic confirmations. We saved a part-time salary.",
                name: "Sarah Martinez",
                role: "CEO, TechForward Solutions",
                initials: "SM",
                accent: "#C4704B",
              },
              {
                quote:
                  "The demo site looked so good we approved it the same day. Final product was even better. Our online orders are up 60% since launch.",
                name: "Michael Johnson",
                role: "Owner, Peachtree Bistro",
                initials: "MJ",
                accent: "#C4704B",
              },
              {
                quote:
                  "Business cards and brochures were done in 24 hours. Clean, professional, and exactly what we needed for our trade show.",
                name: "Emily Parker",
                role: "Founder, Atlanta Wellness Co.",
                initials: "EP",
                accent: "#C4704B",
              },
              {
                quote:
                  "I've paid agencies 10x more for worse results. Hunter is fast, the pricing is transparent, and the quality is genuinely excellent. Been on the monthly plan for over a year.",
                name: "David Lee",
                role: "Product Manager, Georgia Gourmet",
                initials: "DL",
                accent: "#C4704B",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal bg-white border border-border-light shadow-sm card-hover rounded-2xl p-8 relative overflow-hidden group"
              >
                <span className="absolute top-2 left-10 text-5xl font-black leading-none select-none" style={{ color: `${t.accent}12` }}>
                  &ldquo;
                </span>
                <p className="text-text-body italic text-sm mb-5 relative z-10 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${t.accent}15`, color: t.accent }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-text-dark font-semibold text-sm">
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

      {/* CTA */}
      <section className="relative py-20 bg-bg-cream text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
            Let&apos;s Find What&apos;s Costing You Money
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 text-lg">
            Free website demo or a quick automation audit. No pressure, no commitments.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-terra hover:bg-terra-dark text-white font-semibold rounded-lg btn-hover px-7 py-3.5 transition-all"
            >
              Get Your Free Demo
            </Link>
            <a
              href="tel:4707583549"
              className="border border-border hover:border-terra text-text-heading hover:text-terra font-semibold px-7 py-3.5 rounded-lg transition-all"
            >
              Call (470) 758-3549
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
