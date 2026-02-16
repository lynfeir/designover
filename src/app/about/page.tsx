import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Design over Atlanta",
  description:
    "Meet Hunter Weeks, founder of Design over Atlanta. Custom websites from $200, graphic design, and AI tools for businesses worldwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-dark text-text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(43,123,191,0.06),transparent_70%)] pointer-events-none" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(43,123,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,191,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(180deg, transparent 0%, black 40%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 40%, black 60%, transparent 100%)",
          }}
        />
        {/* Arch accent */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(160deg, transparent 45%, rgba(43,123,191,0.03) 46%, rgba(43,123,191,0.03) 48%, transparent 49%)",
          clipPath: "ellipse(55% 100% at 50% 100%)",
        }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About</h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            One person, no layers. You work directly with the person building
            your site, designing your graphics, and wiring up your AI tools.
          </p>
          <div className="gradient-line w-20 mx-auto mt-6" />
        </div>
      </section>

      {/* Meet Hunter */}
      <section className="relative py-24 bg-bg-dark overflow-hidden">
        {/* Arch accent line */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(155deg, transparent 55%, rgba(43,123,191,0.02) 56%, rgba(43,123,191,0.02) 58%, transparent 59%)",
          clipPath: "ellipse(55% 100% at 50% 100%)",
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                {/* Grid behind headshot */}
                <div
                  className="absolute -inset-6 opacity-[0.02] pointer-events-none rounded-2xl"
                  style={{
                    backgroundImage: "linear-gradient(rgba(43,123,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,191,1) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden border border-border-dark aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  <Image
                    src="/headshot.png"
                    alt="Hunter Weeks — Founder of Design over Atlanta"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Subtle accent shapes */}
                <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-xl border border-accent/10 pointer-events-none" />
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl border border-[#E8A838]/8 pointer-events-none" />
              </div>
            </div>
            <div className="reveal">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-3">
                Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-6">
                Hunter Weeks
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                I started Design over Atlanta because I got tired of watching
                small businesses overpay for mediocre websites and design work.
                Most agencies charge thousands for a templated WordPress site and
                call it custom. I thought that was a bad deal.
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                So I built something simpler: hand-coded websites starting at
                $200 &mdash; when other companies would charge $2,000 or more for the
                same quality. Clean graphic design delivered fast. And AI-powered
                tools that let businesses automate the busywork.
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                And hosting? Just $3/mo while competitors charge $20+.
                Your entire website pays for itself in savings within months.
                Every web project starts with a free demo. You see it working
                before you spend a dollar.
              </p>
              <div className="flex gap-3 flex-wrap mb-6">
                {["5+ Years in Business", "150+ Projects", "Atlanta, GA"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-accent-soft text-accent px-3 py-1.5 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="tel:4707583549"
                  className="gradient-cta text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
                >
                  Call (470) 758-3549
                </a>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="relative py-24 bg-bg-white overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.012]"
          style={{
            backgroundImage: "linear-gradient(#2B7BBF 1px, transparent 1px), linear-gradient(90deg, #2B7BBF 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 10%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              What Sets Design over Atlanta Apart
            </h2>
            <div className="gradient-line w-20 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "Demo Before You Pay",
                desc: "Every website project starts with a fully functional demo — no deposit, no commitment. You see it working before a single dollar changes hands.",
                accent: "#2B7BBF",
              },
              {
                icon: "💰",
                title: "Unbeatable Pricing",
                desc: "Websites from $200 when agencies charge $2,000+. Hosting from $3/mo when others charge $20. No hidden fees, no inflated markup.",
                accent: "#4A8C2A",
              },
              {
                icon: "🤝",
                title: "Direct Access",
                desc: "No account managers or middlemen. You talk to Hunter — the person actually designing and building your project. Faster answers, fewer miscommunications.",
                accent: "#E8A838",
              },
              {
                icon: "🤖",
                title: "AI That Saves You Money",
                desc: "If there's a bottleneck in your workflow where you're paying someone to do repetitive tasks, we can build an automated system that does it for a fraction of the cost.",
                accent: "#4FA3D9",
              },
              {
                icon: "🚀",
                title: "Fast Delivery",
                desc: "Most design work delivered in 24–72 hours. Websites in 3–7 days. Rush options available when you need something yesterday.",
                accent: "#1B4D72",
              },
              {
                icon: "📂",
                title: "You Own Everything",
                desc: "Source files, code, assets — it's all yours. No vendor lock-in, no proprietary systems you can't leave.",
                accent: "#3A7BC8",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="reveal bg-bg-light border border-border-light rounded-2xl p-7 transition-all hover:shadow-md hover:border-border-light/80 relative overflow-hidden group"
              >
                {/* Grid on hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.015] transition-opacity duration-700"
                  style={{
                    backgroundImage: `linear-gradient(${v.accent} 1px, transparent 1px), linear-gradient(90deg, ${v.accent} 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Corner accent triangle */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, transparent 50%, ${v.accent}05 50%)` }}
                />
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
      <section className="relative py-20 bg-bg-dark overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.012]"
          style={{
            backgroundImage: "linear-gradient(rgba(43,123,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,191,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "150+", label: "Projects Delivered" },
              { num: "5+", label: "Years in Business" },
              { num: "48hr", label: "Avg Turnaround" },
              { num: "100%", label: "Demo-First Policy" },
            ].map((s) => (
              <div key={s.label} className="reveal">
                <span className="step-number block text-3xl font-extrabold text-accent mb-1 inline-block">
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
      <section className="relative py-24 bg-bg-white overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.01]"
          style={{
            backgroundImage: "linear-gradient(#2B7BBF 1px, transparent 1px), linear-gradient(90deg, #2B7BBF 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 30%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 30%, black 10%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              What People Say After Working With Us
            </h2>
            <div className="gradient-line w-20 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "Hunter built our booking system in under a week. Our receptionist used to spend half the day on the phone — now customers book online and get automatic confirmations. We saved a part-time salary.",
                name: "Sarah Martinez",
                role: "CEO, TechForward Solutions",
                initials: "SM",
                accent: "#2B7BBF",
              },
              {
                quote:
                  "The demo site looked so good we approved it the same day. Final product was even better. Our online orders are up 60% since launch.",
                name: "Michael Johnson",
                role: "Owner, Peachtree Bistro",
                initials: "MJ",
                accent: "#E8A838",
              },
              {
                quote:
                  "Business cards and brochures were done in 24 hours. Clean, professional, and exactly what we needed for our trade show.",
                name: "Emily Parker",
                role: "Founder, Atlanta Wellness Co.",
                initials: "EP",
                accent: "#4A8C2A",
              },
              {
                quote:
                  "I've paid agencies 10x more for worse results. Hunter is fast, the pricing is transparent, and the quality is genuinely excellent. Been on the monthly plan for over a year.",
                name: "David Lee",
                role: "Product Manager, Georgia Gourmet",
                initials: "DL",
                accent: "#4FA3D9",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal bg-bg-light border border-border-light rounded-2xl p-8 relative overflow-hidden group hover-tilt"
              >
                {/* Grid on hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.012] transition-opacity duration-700"
                  style={{
                    backgroundImage: `linear-gradient(${t.accent} 1px, transparent 1px), linear-gradient(90deg, ${t.accent} 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, transparent 50%, ${t.accent}05 50%)` }}
                />
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
      <section className="relative py-20 bg-bg-dark text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_50%,rgba(43,123,191,0.08),transparent_70%)] pointer-events-none" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.012]"
          style={{
            backgroundImage: "linear-gradient(rgba(43,123,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,191,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 40% 50% at 50% 50%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 40% 50% at 50% 50%, black 20%, transparent 70%)",
          }}
        />
        {/* Arch accents */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            linear-gradient(155deg, transparent 35%, rgba(43,123,191,0.03) 36%, rgba(43,123,191,0.03) 38%, transparent 39%),
            linear-gradient(155deg, transparent 60%, rgba(79,163,217,0.02) 61%, rgba(79,163,217,0.02) 63%, transparent 64%)
          `,
          clipPath: "ellipse(55% 100% at 50% 100%)",
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-accent/10 text-sm font-mono tracking-wider block mb-4">&lt;start_project&gt;</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 text-lg">
            Get a free demo or a same-day quote. No pressure, no commitments.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="gradient-cta text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(232,168,56,0.3)]"
            >
              Get Your Free Demo
            </Link>
            <a
              href="tel:4707583549"
              className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Call (470) 758-3549
            </a>
          </div>
          <span className="text-accent/10 text-sm font-mono tracking-wider block mt-6">&lt;/start_project&gt;</span>
        </div>
      </section>
    </>
  );
}
