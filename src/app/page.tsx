import Link from "next/link";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-dark text-text-white min-h-[calc(100vh-72px)] flex items-center overflow-hidden mesh-bg">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-[fadeLeft_0.7s_ease_both]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-text-white">
                Websites, Design &amp;{" "}
                <span className="gradient-text">AI&nbsp;Tools</span> That Work
                for Your Business
              </h1>
              <p className="text-text-muted text-lg max-w-lg mb-8 leading-relaxed">
                Custom sites starting at $200 &mdash; a fraction of what agencies charge.
                Hosting from just $3/mo while others charge $20+. Every project
                starts with a free demo &mdash; no commitment.
              </p>
              <div className="flex gap-3 flex-wrap mb-12">
                <Link
                  href="/contact"
                  className="gradient-cta text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(233,30,140,0.25)]"
                >
                  Get Your Free Demo
                </Link>
                <Link
                  href="/services"
                  className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
                >
                  View Services
                </Link>
              </div>
              <div className="flex gap-8 pt-6 border-t border-border-dark flex-wrap">
                {[
                  { num: "150+", label: "Projects" },
                  { num: "$200", label: "Sites From" },
                  { num: "$3/mo", label: "Hosting From" },
                  { num: "100%", label: "Demo First" },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="block text-2xl font-extrabold text-text-white">
                      {s.num}
                    </span>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden lg:flex items-center justify-center animate-[fadeRight_0.7s_ease_both_0.15s]">
              <div className="bg-bg-card border border-border-dark rounded-2xl p-8 w-full max-w-md shadow-2xl">
                <div className="inline-flex items-center gap-2 bg-emerald-soft text-emerald text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full" />
                  Your demo is ready
                </div>
                <h3 className="text-text-white text-lg font-semibold mb-2">
                  yourbusiness.com
                </h3>
                <p className="text-text-muted text-sm mb-5">
                  Live preview &mdash; click through every page before you pay a cent.
                </p>
                <div className="bg-[#130a1e] rounded-xl overflow-hidden border border-border-dark">
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-white/[0.02] border-b border-border-dark">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <span className="ml-3 bg-white/[0.05] rounded px-3 py-0.5 text-[11px] text-text-muted flex-1">
                      yourbusiness.com
                    </span>
                  </div>
                  <div className="p-5 space-y-2.5 min-h-[140px]">
                    <div className="h-2 rounded bg-accent-soft w-[40%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[85%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[55%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[85%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[35%]" />
                    <div className="h-2 rounded bg-magenta-soft w-[60%] mt-3" />
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[8%] -right-4 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <svg className="w-4 h-4 inline mr-1 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> Logo ready
              </div>
              <div
                className="absolute bottom-[15%] -left-6 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg"
                style={{ animation: "float 6s ease-in-out infinite 2s" }}
              >
                <svg className="w-4 h-4 inline mr-1 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> AI booking live
              </div>
              <div
                className="absolute top-[45%] -right-10 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg"
                style={{ animation: "float 6s ease-in-out infinite 4s" }}
              >
                <svg className="w-4 h-4 inline mr-1 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> Mobile-first
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-dark text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              Three Services. One Partner.
            </h2>
            <p className="text-text-body text-lg">
              Everything a growing business needs to look professional, reach
              customers, and run leaner &mdash; without juggling multiple vendors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-6 h-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.79 1.708-5.274" /></svg>,
                bg: "bg-accent-soft",
                title: "Custom Websites",
                desc: "Fully custom, mobile-first sites built to convert visitors into customers. No templates. Starts at just $200 — agencies charge $2,000+ for the same thing.",
                tag: "From $200",
                tagColor: "text-accent-dark bg-accent-soft",
              },
              {
                icon: <svg className="w-6 h-6 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
                bg: "bg-magenta-soft",
                title: "Graphic Design",
                desc: "Business cards, brochures, flyers, advertisements, social graphics — whatever your business needs to look sharp and stay consistent.",
                tag: "From $99",
                tagColor: "text-[#E91E8C] bg-magenta-soft",
              },
              {
                icon: <svg className="w-6 h-6 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
                bg: "bg-amber-soft",
                title: "AI Business Tools",
                desc: "Automated booking systems, smart intake forms, workflow bots — replace that extra hire with a system that runs 24/7.",
                tag: "Custom Quote",
                tagColor: "text-[#F5A623] bg-amber-soft",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="reveal bg-white border border-border-light rounded-2xl p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(155,89,182,0.1)]"
              >
                <div
                  className={`w-13 h-13 rounded-xl flex items-center justify-center text-xl mb-5 ${s.bg}`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{s.title}</h3>
                <p className="text-text-body text-[0.95rem] flex-1 leading-relaxed">
                  {s.desc}
                </p>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-4 w-fit ${s.tagColor}`}
                >
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center border border-border-light text-text-dark font-semibold px-6 py-3 rounded-lg transition-all hover:border-accent hover:text-accent-dark"
            >
              See Full Service Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Demo-First Promise */}
      <section className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal relative bg-gradient-to-br from-[#2d1b3d] to-bg-card border border-border-dark rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="absolute top-[-50%] right-[-10%] w-72 h-72 bg-[radial-gradient(circle,rgba(233,30,140,0.1),transparent_70%)] pointer-events-none" />
            <div>
              <h3 className="text-2xl font-bold text-text-white mb-2">
                Every project starts with a free demo.
              </h3>
              <p className="text-text-muted text-base">
                See your site live &mdash; fully designed and functional &mdash; before you
                spend a dollar. If you love it, we move forward. If not, no hard
                feelings.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 gradient-cta text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Request Your Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#E91E8C] text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              Sites We&apos;ve Built
            </h2>
            <p className="text-text-body text-lg">
              Real businesses, real results. Every one of these started as a free
              demo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "BookNST",
                url: "https://booknst.com",
                desc: "Booking platform with a smooth user flow and modern, conversion-focused design.",
                color: "#9B59B6",
                colorSoft: "rgba(155,89,182,0.12)",
              },
              {
                name: "Pine Crest Camp",
                url: "https://pinecrestcamp.life/",
                desc: "Summer camp site built for parents — clean, inviting, and packed with info.",
                color: "#4A8C2A",
                colorSoft: "rgba(74,140,42,0.12)",
              },
              {
                name: "Alchemy Auto Spa",
                url: "https://carwash-hazel-two.vercel.app",
                desc: "Premium car wash experience — sleek branding with an easy online booking system.",
                color: "#F5A623",
                colorSoft: "rgba(245,166,35,0.12)",
              },
              {
                name: "Fit4Lyfe",
                url: "https://www.fit4lyfe.net/",
                desc: "Fitness & wellness brand with bold visuals and seamless booking integration.",
                color: "#E91E8C",
                colorSoft: "rgba(233,30,140,0.12)",
              },
            ].map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group bg-white border border-border-light rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(155,89,182,0.12)]"
              >
                {/* Browser frame mockup */}
                <div className="bg-[#1a0a24] border-b border-border-dark">
                  <div className="flex items-center gap-1.5 px-4 py-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <span className="ml-3 bg-white/[0.06] rounded px-3 py-0.5 text-[11px] text-text-muted flex-1 truncate">
                      {project.url.replace(/https?:\/\//, "")}
                    </span>
                  </div>
                  <div className="px-5 py-8 flex items-center justify-center min-h-[140px]">
                    <div className="text-center">
                      <div
                        className="text-2xl font-extrabold mb-1"
                        style={{ color: project.color }}
                      >
                        {project.name}
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="text-text-muted text-xs">Live Site</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-text-dark group-hover:text-accent-dark transition-colors">
                      {project.name}
                    </h3>
                    <svg
                      className="w-4 h-4 text-text-body opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                  <p className="text-text-body text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mt-3"
                    style={{
                      color: project.color,
                      backgroundColor: project.colorSoft,
                    }}
                  >
                    View Live Site →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-dark text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              From Brief to Launch in Four Steps
            </h2>
            <p className="text-text-body text-lg">
              No surprises, no scope creep. Every project follows the same clear
              path.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                title: "Discovery",
                desc: "Share your goals, audience, and timeline. We ask the right questions to nail the scope.",
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
                desc: "Final files delivered or site goes live. You get everything — source files, assets, full ownership.",
              },
            ].map((s) => (
              <div key={s.n} className="reveal text-center p-8">
                <div className="text-5xl font-black text-accent/[0.12] mb-3 leading-none">
                  {s.n}
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2">{s.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <PricingSection />

      {/* Testimonials */}
      <section className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#E91E8C] text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "The attention to detail is incredible. Every animation, every interaction feels purposeful. Our users love the new experience!",
                name: "Cindy Evanoff",
                role: "Manager, Pine Crest Camp",
                initials: "CE",
              },
              {
                quote:
                  "Hunter delivered beyond expectations. Our landing page loads instantly and converts 3x better than our previous site. Absolute wizard with code!",
                name: "Brooke Brum",
                role: "CEO, Fit4Lyfe",
                initials: "BB",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal relative bg-bg-card border border-border-dark rounded-2xl p-8"
              >
                <span className="absolute top-2 left-5 text-6xl font-black text-[#E91E8C]/20 leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-text-muted italic text-[0.95rem] mb-5 relative z-10 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-magenta-soft text-[#E91E8C] flex items-center justify-center text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-text-white font-semibold text-sm">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_50%,rgba(123,45,142,0.1),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4">
            Ready to See What We Can Build for You?
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 text-lg">
            Get a free demo site &mdash; fully designed and clickable &mdash; with zero
            commitment. If you love it, we&apos;ll make it yours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="gradient-cta text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Get Your Free Demo
            </Link>
            <a
              href="tel:4707583549"
              className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
            >
              Call (470) 758-3549
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
