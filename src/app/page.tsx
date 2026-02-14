import Link from "next/link";
import Image from "next/image";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      {/* ══ HERO — Slash Architecture ══ */}
      <section className="relative bg-bg-dark text-text-white min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Diagonal gradient slash */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7B2D8E]/10 via-transparent to-[#E91E8C]/5" />
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(155,89,182,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(ellipse 80% 60% at 70% 40%, black 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 70% 40%, black 20%, transparent 70%)",
            }}
          />
          {/* Floating orbs */}
          <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#7B2D8E] opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#E91E8C] opacity-[0.04] blur-[100px]" />
          {/* Diagonal slash line */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: "linear-gradient(160deg, transparent 45%, rgba(233,30,140,0.04) 46%, rgba(233,30,140,0.04) 47%, transparent 48%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="animate-[fadeLeft_0.7s_ease_both]">
              {/* Code bracket accent */}
              <div className="relative inline-block mb-4">
                <span className="text-accent/20 text-sm font-mono tracking-wider">&lt;design&gt;</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.08] mb-6 text-text-white">
                Websites, Design &amp;{" "}
                <span className="shimmer-text">AI&nbsp;Tools</span>
                <br />
                That Work for Your Business
              </h1>
              <p className="text-text-muted text-lg max-w-lg mb-8 leading-relaxed">
                Custom sites starting at $200 &mdash; a fraction of what agencies charge.
                Hosting from just $3/mo while others charge $20+. Every project
                starts with a free demo &mdash; no commitment.
              </p>
              <div className="flex gap-3 flex-wrap mb-12">
                <Link
                  href="/contact"
                  className="relative gradient-cta text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(233,30,140,0.3)] group"
                >
                  <span className="relative z-10">Get Your Free Demo</span>
                </Link>
                <Link
                  href="/services"
                  className="border border-white/20 hover:border-accent-light/40 hover:bg-white/[0.04] text-text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
                >
                  View Services
                </Link>
              </div>
              {/* Stats bar with slash accents */}
              <div className="flex gap-8 pt-6 border-t border-border-dark flex-wrap">
                {[
                  { num: "150+", label: "Projects" },
                  { num: "$200", label: "Sites From" },
                  { num: "$3/mo", label: "Hosting From" },
                  { num: "100%", label: "Demo First" },
                ].map((s) => (
                  <div key={s.label} className="relative">
                    <span className="step-number block text-2xl font-extrabold text-text-white">
                      {s.num}
                    </span>
                    <span className="text-xs text-text-muted uppercase tracking-wider mt-1 block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <span className="text-accent/20 text-sm font-mono tracking-wider">&lt;/design&gt;</span>
              </div>
            </div>

            {/* Right — Visual with browser stack */}
            <div className="relative hidden lg:flex items-center justify-center animate-[fadeRight_0.7s_ease_both_0.15s]">
              {/* Faint grid behind the card */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(155,89,182,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,89,182,1) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="perspective-container">
                <div className="device-tilt bg-bg-card border border-border-dark rounded-2xl p-8 w-full max-w-md shadow-2xl relative">
                  <div className="inline-flex items-center gap-2 bg-emerald-soft text-emerald text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse" />
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
              </div>

              {/* Floating chips — no slash-card to avoid overflow:hidden clipping */}
              <div
                className="absolute top-[10%] right-0 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg z-10"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <svg className="w-4 h-4 inline mr-1 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> Logo ready
              </div>
              <div
                className="absolute bottom-[18%] left-0 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg z-10"
                style={{ animation: "float 6s ease-in-out infinite 2s" }}
              >
                <svg className="w-4 h-4 inline mr-1 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> AI booking live
              </div>
              <div
                className="absolute top-[48%] right-[-4px] bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg z-10"
                style={{ animation: "float 6s ease-in-out infinite 4s" }}
              >
                <svg className="w-4 h-4 inline mr-1 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> Mobile-first
              </div>
            </div>
          </div>
        </div>

        {/* Bottom diagonal slash transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "80px" }}>
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-bg-light"
            style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
      </section>

      {/* ══ SERVICES — Layered shape cards ══ */}
      <section className="relative py-24 bg-bg-light overflow-hidden section-slash">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(123,45,142,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(180deg, black 0%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 80%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-dark text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              Three Services. <span className="gradient-text">One Partner.</span>
            </h2>
            <p className="text-text-body text-lg">
              Everything a growing business needs to look professional, reach
              customers, and run leaner &mdash; without juggling multiple vendors.
            </p>
            <div className="gradient-line w-20 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-6 h-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.79 1.708-5.274" /></svg>,
                bg: "bg-accent-soft",
                accent: "#9B59B6",
                title: "Custom Websites",
                desc: "Fully custom, mobile-first sites built to convert visitors into customers. No templates. Starts at just $200 — agencies charge $2,000+ for the same thing.",
                tag: "From $200",
                tagColor: "text-accent-dark bg-accent-soft",
              },
              {
                icon: <svg className="w-6 h-6 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
                bg: "bg-magenta-soft",
                accent: "#E91E8C",
                title: "Graphic Design",
                desc: "Business cards, brochures, flyers, advertisements, social graphics — whatever your business needs to look sharp and stay consistent.",
                tag: "From $99",
                tagColor: "text-[#E91E8C] bg-magenta-soft",
              },
              {
                icon: <svg className="w-6 h-6 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>,
                bg: "bg-amber-soft",
                accent: "#F5A623",
                title: "AI Business Tools",
                desc: "Automated booking systems, smart intake forms, workflow bots — replace that extra hire with a system that runs 24/7.",
                tag: "Custom Quote",
                tagColor: "text-[#F5A623] bg-amber-soft",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="reveal hover-tilt bg-white border border-border-light rounded-2xl p-8 flex flex-col relative overflow-hidden group"
              >
                {/* Grid line texture — barely visible */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.02]"
                  style={{
                    backgroundImage: `linear-gradient(${s.accent} 1px, transparent 1px), linear-gradient(90deg, ${s.accent} 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Corner accent triangle */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, transparent 50%, ${s.accent}06 50%)` }}
                />
                {/* Bracket accent */}
                <span className="absolute top-2 left-3 text-2xl font-bold leading-none select-none font-mono opacity-[0.04]" style={{ color: s.accent }}>{`{`}</span>
                <div
                  className={`w-13 h-13 rounded-xl flex items-center justify-center text-xl mb-5 ${s.bg} relative z-10`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2 relative z-10">{s.title}</h3>
                <p className="text-text-body text-[0.95rem] flex-1 leading-relaxed relative z-10">
                  {s.desc}
                </p>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-4 w-fit relative z-10 ${s.tagColor}`}
                >
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center border border-border-light text-text-dark font-semibold px-6 py-3 rounded-lg transition-all hover:border-accent hover:text-accent-dark hover:-translate-y-0.5"
            >
              See Full Service Details →
            </Link>
          </div>
        </div>

        {/* Diagonal transition to dark */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "80px" }}>
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-bg-dark"
            style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%, 0 100%)" }}
          />
        </div>
      </section>

      {/* ══ DEMO-FIRST PROMISE — Shape panel ══ */}
      <section className="py-20 bg-bg-dark relative overflow-hidden">
        {/* Background diagonal */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(165deg, transparent 40%, rgba(233,30,140,0.03) 41%, rgba(233,30,140,0.03) 60%, transparent 61%)",
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="reveal relative bg-gradient-to-br from-[#2d1b3d] to-bg-card border border-border-dark rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden slash-stripe">
            {/* Bracket decorators */}
            <span className="absolute top-4 left-6 text-5xl font-bold text-accent/10 leading-none select-none font-mono">{`{`}</span>
            <span className="absolute bottom-4 right-6 text-5xl font-bold text-accent/10 leading-none select-none font-mono">{`}`}</span>
            {/* Glow orb */}
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
              className="shrink-0 gradient-cta text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(233,30,140,0.3)]"
            >
              Request Your Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ══ MEET THE FOUNDER — Personal trust element ══ */}
      <section className="py-20 bg-bg-dark relative overflow-hidden">
        {/* Diagonal accent line */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(155deg, transparent 55%, rgba(155,89,182,0.02) 56%, rgba(155,89,182,0.02) 58%, transparent 59%)",
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="reveal flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Headshot with layered depth */}
            <div className="relative shrink-0">
              {/* Grid behind headshot */}
              <div
                className="absolute -inset-6 opacity-[0.03] pointer-events-none rounded-2xl"
                style={{
                  backgroundImage: "linear-gradient(rgba(155,89,182,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,89,182,1) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-accent/15 shadow-2xl relative">
                <Image
                  src="/headshot_square_preview_1024.png"
                  alt="Hunter Weeks — Founder of Design over Atlanta"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Subtle accent shapes */}
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-xl border border-accent/10 pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl border border-[#E91E8C]/8 pointer-events-none" />
            </div>
            {/* Copy */}
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-2">
                Meet the Founder
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-white mb-3">
                Hunter Weeks
              </h3>
              <p className="text-text-muted text-base leading-relaxed mb-4 max-w-lg">
                No account managers. No middlemen. You work directly with me &mdash;
                the person writing your code, designing your graphics, and building your AI tools.
                5+ years, 150+ projects, and every single one started with a free demo.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/about"
                  className="border border-white/20 hover:border-accent-light/40 hover:bg-white/[0.04] text-text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                >
                  Learn More About Me →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO — Cinematic Device Showcase ══ */}
      <section className="relative py-28 bg-bg-dark overflow-hidden">
        {/* Multi-layer background composition */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dot grid fading from top */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(155,89,182,0.06) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              maskImage: "linear-gradient(180deg, black 0%, transparent 40%)",
              WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 40%)",
            }}
          />
          {/* Crossed diagonal slashes */}
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(160deg, transparent 20%, rgba(233,30,140,0.025) 21%, rgba(233,30,140,0.025) 23%, transparent 24%),
              linear-gradient(160deg, transparent 75%, rgba(245,166,35,0.02) 76%, rgba(245,166,35,0.02) 78%, transparent 79%)
            `,
          }} />
          {/* Large glow orb */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#7B2D8E] opacity-[0.03] blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#E91E8C] text-xs font-bold uppercase tracking-[0.15em] block mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-white mb-5">
              Sites We&apos;ve <span className="shimmer-text">Shipped</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Real businesses. Real revenue. Every project started with a free demo
              and ended with a client who never looked back.
            </p>
            <div className="gradient-line w-24 mx-auto mt-6" />
          </div>

          {/* Portfolio showcase — staggered alternating layout */}
          <div className="space-y-20">
            {[
              {
                name: "BookNest",
                url: "https://booknst.com",
                tagline: "Your library, beautifully organized",
                desc: "A book tracking platform where readers collect, review, and highlight their favorite reads. Notes along the journey, summaries on demand, and a personal library that grows with you.",
                niche: "SaaS / Book Tracking",
                tags: ["Next.js", "Reading Platform", "Mobile-First", "SEO"],
                color: "#9B59B6",
                colorSoft: "rgba(155,89,182,0.10)",
                colorGlow: "rgba(155,89,182,0.15)",
                stat: "Personal library system",
                reverse: false,
                scene: "booking",
              },
              {
                name: "Pine Crest Camp",
                url: "https://pinecrestcamp.life/",
                tagline: "Where summer memories start",
                desc: "Built for parents making one of the biggest decisions of their summer. Clean information architecture, trust-first design, and a registration flow that converts worried parents into happy campers.",
                niche: "Recreation / Camp",
                tags: ["Family-Focused", "Trust Design", "Registration", "Info-Rich"],
                color: "#4A8C2A",
                colorSoft: "rgba(74,140,42,0.10)",
                colorGlow: "rgba(74,140,42,0.15)",
                stat: "Registration-optimized",
                reverse: true,
                scene: "camp",
              },
              {
                name: "Alchemy Auto Spa",
                url: "https://carwash-hazel-two.vercel.app",
                tagline: "Premium detail, premium feel",
                desc: "A luxury car care brand that needed a digital presence matching the quality of their service. Sleek dark design, online booking integration, and service packages that sell themselves.",
                niche: "Auto / Luxury",
                tags: ["Dark Theme", "Booking System", "Brand Design", "Luxury"],
                color: "#F5A623",
                colorSoft: "rgba(245,166,35,0.10)",
                colorGlow: "rgba(245,166,35,0.15)",
                stat: "Online booking enabled",
                reverse: false,
                scene: "autospa",
              },
              {
                name: "Fit4Lyfe",
                url: "https://www.fit4lyfe.net/",
                tagline: "Bold brand, bold results",
                desc: "Fitness brand with the energy to match. High-impact visuals, seamless class booking integration, and a design system that scales across merch, social, and print.",
                niche: "Fitness / Wellness",
                tags: ["Bold Visuals", "Class Booking", "Brand System", "Responsive"],
                color: "#E91E8C",
                colorSoft: "rgba(233,30,140,0.10)",
                colorGlow: "rgba(233,30,140,0.15)",
                stat: "Full brand + web system",
                reverse: true,
                scene: "fitness",
              },
              {
                name: "RAFVAC Solutions",
                url: "https://rafvacsolutions.com/",
                tagline: "Precision climate, every time",
                desc: "A 25+ year HVAC powerhouse serving Central Pennsylvania. EPA-certified technicians, emergency availability, and a digital presence that matches the reliability of their service — from residential comfort to commercial refrigeration.",
                niche: "HVAC / Services",
                tags: ["Service Business", "Lead Gen", "Trust Design", "Responsive"],
                color: "#2196F3",
                colorSoft: "rgba(33,150,243,0.10)",
                colorGlow: "rgba(33,150,243,0.15)",
                stat: "24/7 service visibility",
                reverse: false,
                scene: "hvac",
              },
              {
                name: "Top Notch Roofing",
                url: "https://topnotch-omega.vercel.app/",
                tagline: "Built from the top down",
                desc: "Full-service roofing contractor serving metro Atlanta with GAF and Owens Corning certifications. Clean professional design with portfolio galleries, insurance claim guidance, and conversion-focused CTAs throughout.",
                niche: "Roofing / Construction",
                tags: ["Contractor Site", "Portfolio Gallery", "Certifications", "Lead Gen"],
                color: "#FF6B35",
                colorSoft: "rgba(255,107,53,0.10)",
                colorGlow: "rgba(255,107,53,0.15)",
                stat: "Certified contractor showcase",
                reverse: true,
                scene: "roofing",
              },
              {
                name: "Baasit Sumra Fitness",
                url: "http://baasitsumra.fitness/_",
                tagline: "Train every discipline",
                desc: "Multi-discipline fitness coaching combining strength training, martial arts mastery, yoga, and speed development. Dark cinematic design with program showcases and training galleries that sell the transformation.",
                niche: "Fitness / Coaching",
                tags: ["Dark Theme", "Multi-Program", "Gallery", "Mobile-First"],
                color: "#00BFA5",
                colorSoft: "rgba(0,191,165,0.10)",
                colorGlow: "rgba(0,191,165,0.15)",
                stat: "Full coaching platform",
                reverse: false,
                scene: "martial",
              },
            ].map((project, i) => (
              <div
                key={project.name}
                className={`reveal flex flex-col ${
                  project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Device mockup side */}
                <div className="w-full lg:w-[55%] perspective-container">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block device-tilt relative rounded-2xl overflow-hidden group trace-border`}
                    style={{ "--trace-color": project.color } as React.CSSProperties}
                  >
                    {/* Subtle glow behind device — restrained, not poppy */}
                    <div
                      className="absolute -inset-8 rounded-3xl blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none"
                      style={{ background: project.color }}
                    />
                    {/* Browser chrome */}
                    <div className="relative bg-[#1a0a24] border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Title bar */}
                      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.02] border-b border-white/[0.05]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        <div className="ml-3 flex-1 bg-white/[0.04] rounded-md px-3 py-1 flex items-center gap-2">
                          <svg className="w-3 h-3 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
                          <span className="text-[11px] text-white/30 truncate">
                            {project.url.replace(/https?:\/\//, "").replace(/\/$/, "")}
                          </span>
                        </div>
                      </div>
                      {/* Unique Themed Site Preview per Project */}
                      <div className="relative min-h-[280px] sm:min-h-[340px] flex items-center justify-center overflow-hidden scene-container">

                        {/* ── BOOK TRACKING SCENE: Floating books + highlight lines + notes ── */}
                        {project.scene === "booking" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Warm library ambient glow */}
                            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 65% 55% at 50% 50%, ${project.color}0C, transparent 70%)` }} />
                            {/* Floating book shapes */}
                            {[0,1,2,3,4].map((n) => (
                              <div key={n} className={`absolute scene-book scene-book-${n}`}>
                                <div className="relative" style={{
                                  width: [50, 42, 56, 38, 46][n] + "px",
                                  height: [64, 54, 72, 48, 58][n] + "px",
                                }}>
                                  {/* Book cover */}
                                  <div className="absolute inset-0 rounded-r-md rounded-l-sm" style={{
                                    background: `linear-gradient(135deg, ${project.color}${["18","12","20","10","15"][n]}, ${project.color}${["0A","08","0D","06","09"][n]})`,
                                    border: `1px solid ${project.color}20`,
                                    boxShadow: `2px 2px 8px ${project.color}08`,
                                  }} />
                                  {/* Spine */}
                                  <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-l-sm" style={{
                                    background: `${project.color}25`,
                                  }} />
                                  {/* Page lines */}
                                  <div className="absolute top-[25%] left-[20%] right-[15%] space-y-1.5">
                                    {[0,1,2].map((l) => (
                                      <div key={l} className="h-[1px]" style={{
                                        background: `${project.color}${l === 0 ? "18" : "0C"}`,
                                        width: `${85 - l * 15}%`,
                                      }} />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                            {/* Highlight marker streaks */}
                            {[0,1,2].map((n) => (
                              <div key={n} className={`absolute scene-highlight scene-highlight-${n}`} style={{
                                width: [80, 60, 70][n] + "px", height: "4px",
                                borderRadius: "2px",
                                background: `linear-gradient(90deg, ${["#F5E663","#FF9F43","#9B59B6"][n]}20, ${["#F5E663","#FF9F43","#9B59B6"][n]}08)`,
                              }} />
                            ))}
                            {/* Floating quote marks */}
                            <div className="absolute top-[15%] right-[12%] scene-quote-mark">
                              <span className="text-4xl font-serif" style={{ color: `${project.color}15` }}>&ldquo;</span>
                            </div>
                            <div className="absolute bottom-[20%] left-[10%] scene-quote-mark-2">
                              <span className="text-3xl font-serif" style={{ color: `${project.color}10` }}>&rdquo;</span>
                            </div>
                            {/* Star rating dots */}
                            <div className="absolute bottom-[16%] right-[15%] flex gap-1 scene-stars">
                              {[0,1,2,3,4].map((s) => (
                                <svg key={s} className="w-2.5 h-2.5" viewBox="0 0 24 24" fill={project.color} opacity={s < 4 ? 0.2 : 0.08}>
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ── CAMP SCENE: Pine trees + mountain range + fireflies ── */}
                        {project.scene === "camp" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Sky gradient — sunset to twilight */}
                            <div className="absolute inset-0 scene-camp-sky" style={{
                              background: `linear-gradient(180deg, #0D1B0E 0%, ${project.color}15 40%, #1a2a12 100%)`,
                            }} />
                            {/* Mountain silhouettes */}
                            <div className="absolute bottom-0 left-0 w-full h-[55%]">
                              <div className="absolute bottom-0 w-full h-full" style={{
                                clipPath: "polygon(0% 100%, 0% 60%, 8% 45%, 18% 55%, 28% 30%, 40% 50%, 52% 20%, 62% 40%, 72% 25%, 82% 42%, 92% 35%, 100% 50%, 100% 100%)",
                                background: `linear-gradient(180deg, ${project.color}20, ${project.color}08)`,
                              }} />
                              <div className="absolute bottom-0 w-full h-[80%]" style={{
                                clipPath: "polygon(0% 100%, 0% 70%, 10% 55%, 22% 65%, 35% 40%, 48% 58%, 60% 35%, 73% 52%, 85% 38%, 95% 55%, 100% 45%, 100% 100%)",
                                background: `linear-gradient(180deg, ${project.color}12, ${project.color}04)`,
                              }} />
                            </div>
                            {/* Pine tree silhouettes */}
                            {[15, 30, 55, 72, 88].map((left, n) => (
                              <div key={n} className="absolute bottom-[15%]" style={{
                                left: `${left}%`,
                                width: "0", height: "0",
                                borderLeft: `${12 + n * 2}px solid transparent`,
                                borderRight: `${12 + n * 2}px solid transparent`,
                                borderBottom: `${35 + n * 5}px solid ${project.color}${n % 2 === 0 ? "18" : "10"}`,
                                filter: "blur(0.5px)",
                              }} />
                            ))}
                            {/* Fireflies */}
                            {[0,1,2,3,4,5,6].map((n) => (
                              <div key={n} className={`absolute w-1 h-1 rounded-full scene-firefly scene-firefly-${n}`}
                                style={{ backgroundColor: "#F5E663", boxShadow: "0 0 6px 2px #F5E66360" }} />
                            ))}
                          </div>
                        )}

                        {/* ── AUTO SPA SCENE: Water droplets + sparkle shimmer + car silhouette ── */}
                        {project.scene === "autospa" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Dark luxury gradient */}
                            <div className="absolute inset-0" style={{
                              background: `radial-gradient(ellipse 70% 60% at 50% 60%, ${project.color}0C, transparent 70%)`,
                            }} />
                            {/* Car silhouette — proper SVG sedan profile */}
                            <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 scene-auto-car">
                              <svg className="w-[220px] sm:w-[280px] h-[80px] sm:h-[100px]" viewBox="0 0 280 100" fill="none" preserveAspectRatio="xMidYMid meet">
                                {/* Car body */}
                                <path d="M30 65 L30 55 Q30 50 35 48 L65 42 Q80 38 90 28 L120 18 Q130 15 145 15 L190 15 Q205 15 210 22 L225 38 Q230 42 240 44 L255 48 Q260 50 260 55 L260 65 Q260 70 255 70 L35 70 Q30 70 30 65 Z"
                                  fill={`${project.color}10`} stroke={project.color} strokeWidth="0.8" opacity="0.3" />
                                {/* Windshield */}
                                <path d="M95 30 L125 17 Q130 15 140 15 L180 15 Q185 15 188 18 L205 30 Q207 33 200 33 L100 33 Q93 33 95 30 Z"
                                  fill={`${project.color}08`} stroke={project.color} strokeWidth="0.5" opacity="0.2" />
                                {/* Roof line highlight */}
                                <path d="M120 15 L190 15" stroke={project.color} strokeWidth="0.5" opacity="0.25" />
                                {/* Front wheel */}
                                <circle cx="75" cy="70" r="14" fill={`${project.color}08`} stroke={project.color} strokeWidth="0.8" opacity="0.25" />
                                <circle cx="75" cy="70" r="9" fill="none" stroke={project.color} strokeWidth="0.5" opacity="0.15" />
                                <circle cx="75" cy="70" r="3" fill={`${project.color}15`} />
                                {/* Rear wheel */}
                                <circle cx="215" cy="70" r="14" fill={`${project.color}08`} stroke={project.color} strokeWidth="0.8" opacity="0.25" />
                                <circle cx="215" cy="70" r="9" fill="none" stroke={project.color} strokeWidth="0.5" opacity="0.15" />
                                <circle cx="215" cy="70" r="3" fill={`${project.color}15`} />
                                {/* Headlight */}
                                <ellipse cx="40" cy="52" rx="6" ry="4" fill={`${project.color}15`} opacity="0.4" />
                                {/* Taillight */}
                                <ellipse cx="252" cy="52" rx="4" ry="4" fill="#E8444415" opacity="0.4" />
                                {/* Door line */}
                                <path d="M145 18 L145 65" stroke={project.color} strokeWidth="0.3" opacity="0.1" />
                                {/* Ground shadow */}
                                <ellipse cx="145" cy="88" rx="100" ry="6" fill={`${project.color}08`} />
                              </svg>
                            </div>
                            {/* Water droplets falling */}
                            {[0,1,2,3,4,5,6,7].map((n) => (
                              <div key={n} className={`absolute scene-droplet scene-droplet-${n}`} style={{
                                width: `${3 + (n % 3)}px`, height: `${5 + (n % 3) * 2}px`,
                                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                background: `linear-gradient(180deg, ${project.color}40, ${project.color}15)`,
                              }} />
                            ))}
                            {/* Sparkle bursts */}
                            {[0,1,2,3].map((n) => (
                              <div key={n} className={`absolute scene-sparkle scene-sparkle-${n}`}>
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill={project.color} opacity={0.5}>
                                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                                </svg>
                              </div>
                            ))}
                            {/* Polished reflection sweep */}
                            <div className="absolute bottom-[18%] left-[10%] right-[10%] h-[1px] scene-auto-shine" style={{
                              background: `linear-gradient(90deg, transparent, ${project.color}30, transparent)`,
                            }} />
                          </div>
                        )}

                        {/* ── FITNESS SCENE: Pulse line + rising chevrons + energy meter ── */}
                        {project.scene === "fitness" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Energy gradient */}
                            <div className="absolute inset-0" style={{
                              background: `radial-gradient(ellipse 50% 50% at 50% 60%, ${project.color}10, transparent 70%)`,
                            }} />
                            {/* Heartbeat / pulse line */}
                            <svg className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 scene-pulse-line" viewBox="0 0 600 60" fill="none" preserveAspectRatio="none">
                              <path d="M0 30 L120 30 L150 30 L170 10 L185 50 L200 5 L215 45 L230 30 L260 30 L600 30"
                                stroke={project.color} strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
                            </svg>
                            {/* Rising chevrons */}
                            {[0,1,2,3,4].map((n) => (
                              <div key={n} className={`absolute scene-chevron scene-chevron-${n}`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={project.color} strokeWidth={2} opacity={0.2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                              </div>
                            ))}
                            {/* Energy meter bar */}
                            <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px] h-[6px] rounded-full" style={{
                              background: `${project.color}10`, border: `1px solid ${project.color}10`,
                            }}>
                              <div className="h-full rounded-full scene-energy-fill" style={{
                                background: `linear-gradient(90deg, ${project.color}50, ${project.color})`,
                              }} />
                            </div>
                            {/* Floating rep counters */}
                            {[0,1,2].map((n) => (
                              <div key={n} className={`absolute scene-rep-counter scene-rep-counter-${n}`}>
                                <span className="text-lg font-black" style={{ color: `${project.color}30` }}>
                                  {["01","02","03"][n]}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* ── HVAC SCENE: Thermometer + airflow + fan + temperature display ── */}
                        {project.scene === "hvac" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Temperature gradient — cool blue to warm red split */}
                            <div className="absolute inset-0" style={{
                              background: `linear-gradient(135deg, #1a3a5c12 0%, transparent 50%, #E8444408 100%)`,
                            }} />
                            {/* Central ambient glow */}
                            <div className="absolute inset-0 scene-hvac-temp" style={{
                              background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${project.color}0C, transparent 70%)`,
                            }} />
                            {/* Rotating fan/vent in center background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scene-hvac-fan">
                              <svg className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]" viewBox="0 0 100 100" fill="none">
                                {/* Outer ring */}
                                <circle cx="50" cy="50" r="46" stroke={project.color} strokeWidth="0.5" opacity="0.1" />
                                <circle cx="50" cy="50" r="38" stroke={project.color} strokeWidth="0.5" opacity="0.06" strokeDasharray="3 3" />
                                {/* Fan blades */}
                                <path d="M50 50 Q55 30 50 12 Q45 30 50 50" fill={`${project.color}12`} />
                                <path d="M50 50 Q70 55 88 50 Q70 45 50 50" fill={`${project.color}10`} />
                                <path d="M50 50 Q45 70 50 88 Q55 70 50 50" fill={`${project.color}12`} />
                                <path d="M50 50 Q30 45 12 50 Q30 55 50 50" fill={`${project.color}10`} />
                                {/* Center hub */}
                                <circle cx="50" cy="50" r="5" fill={`${project.color}15`} stroke={project.color} strokeWidth="0.5" opacity="0.2" />
                              </svg>
                            </div>
                            {/* Airflow wave lines */}
                            {[0,1,2,3].map((n) => (
                              <svg key={n} className={`absolute w-full scene-airflow scene-airflow-${n}`} style={{ top: `${22 + n * 16}%` }}
                                viewBox="0 0 600 30" fill="none" preserveAspectRatio="none">
                                <path d={`M0 15 Q75 ${n % 2 === 0 ? 2 : 28} 150 15 Q225 ${n % 2 === 0 ? 28 : 2} 300 15 Q375 ${n % 2 === 0 ? 2 : 28} 450 15 Q525 ${n % 2 === 0 ? 28 : 2} 600 15`}
                                  stroke={project.color} strokeWidth="1" strokeLinecap="round" opacity="0.12" />
                              </svg>
                            ))}
                            {/* Thermometer — left side */}
                            <div className="absolute left-[10%] top-[22%] scene-thermometer">
                              <div className="w-3 h-20 rounded-full relative" style={{ border: `1px solid ${project.color}20`, background: `${project.color}04` }}>
                                {/* Tick marks */}
                                {[0,1,2,3,4].map((t) => (
                                  <div key={t} className="absolute right-[-6px] w-[4px] h-[1px]" style={{
                                    top: `${15 + t * 17}%`, background: `${project.color}20`,
                                  }} />
                                ))}
                                <div className="absolute bottom-0 left-0.5 right-0.5 rounded-full scene-thermo-fill" style={{
                                  background: `linear-gradient(180deg, #E84444, ${project.color})`,
                                }} />
                              </div>
                              <div className="w-5 h-5 rounded-full -ml-1 -mt-0.5" style={{
                                background: `radial-gradient(circle, ${project.color}, ${project.color}60)`,
                                boxShadow: `0 0 12px ${project.color}30`,
                              }} />
                            </div>
                            {/* Temperature readout — right side */}
                            <div className="absolute right-[10%] top-[22%] scene-temp-readout">
                              <div className="px-2.5 py-1.5 rounded-lg" style={{ border: `1px solid ${project.color}15`, background: `${project.color}05` }}>
                                <span className="text-lg font-mono font-bold scene-temp-value" style={{ color: `${project.color}50` }}>72°</span>
                                <span className="text-[8px] block text-center uppercase tracking-wider" style={{ color: `${project.color}25` }}>set</span>
                              </div>
                            </div>
                            {/* Snowflake — top left */}
                            <div className="absolute top-[15%] left-[28%] scene-snowflake">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1" opacity="0.2">
                                <line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
                                <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" /><line x1="18.5" y1="5.5" x2="5.5" y2="18.5" />
                                <circle cx="12" cy="12" r="2" />
                              </svg>
                            </div>
                            {/* Flame — top right */}
                            <div className="absolute top-[16%] right-[28%] scene-flame">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" opacity="0.2">
                                <path d="M12 22c-4 0-7-3-7-7 0-3 2-5 4-8 1-1.5 2-3 2.5-5 .5 2 1.5 3.5 2.5 5 2 3 4 5 4 8 0 4-3 7-7 7z"
                                  stroke="#E84444" strokeWidth="1" fill="#E8444408" />
                                <path d="M12 22c-2 0-3.5-1.5-3.5-3.5 0-1.5 1-2.5 2-4 .5-.7 1-1.5 1.3-2.5.3 1 .8 1.8 1.2 2.5 1 1.5 2 2.5 2 4 0 2-1.5 3.5-3 3.5z"
                                  stroke="#E84444" strokeWidth="0.5" fill="#E8444406" />
                              </svg>
                            </div>
                            {/* Duct grid pattern — more subtle */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{
                              backgroundImage: `repeating-linear-gradient(90deg, ${project.color} 0px, ${project.color} 1px, transparent 1px, transparent 28px),
                                repeating-linear-gradient(0deg, ${project.color} 0px, ${project.color} 1px, transparent 1px, transparent 28px)`,
                              maskImage: "radial-gradient(ellipse 60% 55% at 50% 50%, black, transparent)",
                              WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 50%, black, transparent)",
                            }} />
                            {/* EPA badge */}
                            <div className="absolute bottom-[14%] left-[12%] scene-epa-badge">
                              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{
                                border: `1px solid ${project.color}12`, background: `${project.color}04`,
                              }}>
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.5" opacity="0.3">
                                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <span className="text-[7px] font-bold uppercase tracking-wider" style={{ color: `${project.color}25` }}>EPA Cert</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ── ROOFING SCENE: House SVG + shingle pattern + shield ── */}
                        {project.scene === "roofing" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Sky gradient */}
                            <div className="absolute inset-0" style={{
                              background: `linear-gradient(180deg, ${project.color}06, transparent 50%, ${project.color}03)`,
                            }} />
                            {/* House silhouette — properly centered SVG */}
                            <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 scene-roof-peak">
                              <svg className="w-[220px] sm:w-[270px] h-[130px] sm:h-[155px]" viewBox="0 0 270 155" fill="none" preserveAspectRatio="xMidYMid meet">
                                {/* Roof */}
                                <path d="M135 8 L255 72 L15 72 Z" fill={`${project.color}12`} stroke={project.color} strokeWidth="0.8" opacity="0.3" />
                                {/* Ridge line */}
                                <path d="M135 8 L135 12" stroke={project.color} strokeWidth="1" opacity="0.25" />
                                {/* Roof overhang shadow */}
                                <path d="M25 72 L245 72" stroke={project.color} strokeWidth="0.5" opacity="0.15" />
                                {/* Shingle lines on roof */}
                                <path d="M60 52 L210 52" stroke={project.color} strokeWidth="0.3" opacity="0.08" />
                                <path d="M45 62 L225 62" stroke={project.color} strokeWidth="0.3" opacity="0.06" />
                                <path d="M80 42 L190 42" stroke={project.color} strokeWidth="0.3" opacity="0.06" />
                                {/* House body */}
                                <rect x="35" y="72" width="200" height="65" fill={`${project.color}06`} stroke={project.color} strokeWidth="0.6" opacity="0.2" />
                                {/* Front door */}
                                <rect x="120" y="100" width="30" height="37" rx="2" fill={`${project.color}10`} stroke={project.color} strokeWidth="0.5" opacity="0.2" />
                                <circle cx="144" cy="120" r="1.5" fill={project.color} opacity="0.2" />
                                {/* Left window */}
                                <rect x="60" y="85" width="28" height="22" rx="1" fill={`${project.color}08`} stroke={project.color} strokeWidth="0.5" opacity="0.2" />
                                <line x1="74" y1="85" x2="74" y2="107" stroke={project.color} strokeWidth="0.3" opacity="0.12" />
                                <line x1="60" y1="96" x2="88" y2="96" stroke={project.color} strokeWidth="0.3" opacity="0.12" />
                                {/* Right window */}
                                <rect x="182" y="85" width="28" height="22" rx="1" fill={`${project.color}08`} stroke={project.color} strokeWidth="0.5" opacity="0.2" />
                                <line x1="196" y1="85" x2="196" y2="107" stroke={project.color} strokeWidth="0.3" opacity="0.12" />
                                <line x1="182" y1="96" x2="210" y2="96" stroke={project.color} strokeWidth="0.3" opacity="0.12" />
                                {/* Chimney */}
                                <rect x="185" y="20" width="18" height="38" fill={`${project.color}10`} stroke={project.color} strokeWidth="0.5" opacity="0.2" />
                                {/* Ground line */}
                                <path d="M10 137 L260 137" stroke={project.color} strokeWidth="0.4" opacity="0.1" />
                                {/* Ground shadow */}
                                <ellipse cx="135" cy="142" rx="110" ry="5" fill={`${project.color}06`} />
                              </svg>
                            </div>
                            {/* Shingle texture overlay on roof area */}
                            <div className="absolute top-[15%] left-[12%] right-[12%] h-[30%] scene-shingles" style={{
                              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, ${project.color}06 8px, ${project.color}06 9px),
                                repeating-linear-gradient(90deg, transparent, transparent 18px, ${project.color}04 18px, ${project.color}04 19px)`,
                              maskImage: "linear-gradient(180deg, black 10%, transparent 70%)",
                              WebkitMaskImage: "linear-gradient(180deg, black 10%, transparent 70%)",
                            }} />
                            {/* Certification shield */}
                            <div className="absolute top-[15%] right-[12%] scene-shield">
                              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.2" opacity="0.25">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            {/* GAF badge */}
                            <div className="absolute top-[16%] left-[10%] scene-gaf-badge">
                              <div className="px-2 py-1 rounded-md" style={{ border: `1px solid ${project.color}12`, background: `${project.color}04` }}>
                                <span className="text-[7px] font-bold uppercase tracking-wider" style={{ color: `${project.color}25` }}>GAF Certified</span>
                              </div>
                            </div>
                            {/* Floating measurement markers */}
                            {[0,1,2].map((n) => (
                              <div key={n} className={`absolute scene-measure scene-measure-${n}`}>
                                <div className="flex items-center gap-1">
                                  <div className="w-4 h-[1px]" style={{ background: `${project.color}20` }} />
                                  <span className="text-[8px] font-mono" style={{ color: `${project.color}25` }}>
                                    {["12ft","24ft","8ft"][n]}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* ── MARTIAL ARTS / FITNESS SCENE: Octagon + strike lines + discipline icons ── */}
                        {project.scene === "martial" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {/* Dark cinematic gradient */}
                            <div className="absolute inset-0" style={{
                              background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${project.color}0A, transparent 70%)`,
                            }} />
                            {/* Octagon ring outline */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scene-octagon">
                              <svg className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]" viewBox="0 0 200 200" fill="none">
                                <polygon points="60,10 140,10 190,60 190,140 140,190 60,190 10,140 10,60"
                                  stroke={project.color} strokeWidth="1" opacity="0.15" fill="none" />
                                <polygon points="70,25 130,25 175,70 175,130 130,175 70,175 25,130 25,70"
                                  stroke={project.color} strokeWidth="0.5" opacity="0.08" fill="none" strokeDasharray="4 4" />
                              </svg>
                            </div>
                            {/* Strike / action lines radiating from center */}
                            {[0,1,2,3,4,5].map((n) => (
                              <div key={n} className={`absolute top-1/2 left-1/2 scene-strike scene-strike-${n}`} style={{
                                width: "60px", height: "1.5px",
                                background: `linear-gradient(90deg, ${project.color}25, transparent)`,
                                transformOrigin: "left center",
                                transform: `rotate(${n * 60}deg)`,
                              }} />
                            ))}
                            {/* Discipline icons floating */}
                            <div className="absolute top-[18%] left-[15%] scene-disc scene-disc-0">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.2" opacity="0.2">
                                <circle cx="12" cy="12" r="10" /><path d="M12 6v12M6 12h12" />
                              </svg>
                            </div>
                            <div className="absolute top-[20%] right-[15%] scene-disc scene-disc-1">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.2" opacity="0.2">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                <line x1="4" y1="22" x2="4" y2="15" />
                              </svg>
                            </div>
                            <div className="absolute bottom-[22%] right-[20%] scene-disc scene-disc-2">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.2" opacity="0.2">
                                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
                              </svg>
                            </div>
                            {/* Power level bars */}
                            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex gap-1.5">
                              {[0,1,2,3,4].map((n) => (
                                <div key={n} className={`scene-power-bar scene-power-bar-${n}`} style={{
                                  width: "4px", height: `${12 + n * 5}px`,
                                  borderRadius: "2px",
                                  background: `${project.color}${15 + n * 8}`,
                                }} />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ── Central floating text overlay (shared) ── */}
                        <div className="relative z-10 text-center scene-text-float" style={{ transformStyle: "preserve-3d" }}>
                          <div className="relative z-10 px-4">
                            <div
                              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2"
                              style={{ color: project.color, textShadow: `0 0 30px ${project.color}30, 0 0 60px ${project.color}15` }}
                            >
                              {project.name}
                            </div>
                            <div className="text-white/40 text-sm font-medium italic scene-tagline-drift">
                              {project.tagline}
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-4">
                              <span className="relative flex h-2.5 w-2.5">
                                <span
                                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                  style={{ backgroundColor: project.color }}
                                />
                                <span
                                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                                  style={{ backgroundColor: project.color }}
                                />
                              </span>
                              <span className="text-white/30 text-xs uppercase tracking-wider font-semibold">
                                Live &amp; Running
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Corner accent markers */}
                        <div className="absolute top-4 left-4 w-4 h-4 pointer-events-none" style={{ borderTop: `2px solid ${project.color}25`, borderLeft: `2px solid ${project.color}25` }} />
                        <div className="absolute top-4 right-4 w-4 h-4 pointer-events-none" style={{ borderTop: `2px solid ${project.color}25`, borderRight: `2px solid ${project.color}25` }} />
                        <div className="absolute bottom-4 left-4 w-4 h-4 pointer-events-none" style={{ borderBottom: `2px solid ${project.color}25`, borderLeft: `2px solid ${project.color}25` }} />
                        <div className="absolute bottom-4 right-4 w-4 h-4 pointer-events-none" style={{ borderBottom: `2px solid ${project.color}25`, borderRight: `2px solid ${project.color}25` }} />
                      </div>
                    </div>
                    {/* Reflection effect */}
                    <div
                      className="hidden lg:block h-16 rounded-b-2xl overflow-hidden opacity-[0.06]"
                      style={{
                        background: `linear-gradient(180deg, ${project.color}20, transparent)`,
                        transform: "scaleY(-1)",
                        maskImage: "linear-gradient(180deg, black, transparent)",
                        WebkitMaskImage: "linear-gradient(180deg, black, transparent)",
                      }}
                    />
                  </a>
                </div>

                {/* Info side */}
                <div className="w-full lg:w-[45%]">
                  {/* Niche tag */}
                  <span
                    className="niche-tag inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4"
                    style={{
                      color: project.color,
                      backgroundColor: project.colorSoft,
                    }}
                  >
                    {project.niche}
                  </span>
                  {/* Project number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/10 text-6xl font-black leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-text-muted text-[0.95rem] leading-relaxed mb-5">
                    {project.desc}
                  </p>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-white/50 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Stat callout */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: project.colorSoft }}
                    >
                      <svg className="w-4 h-4" style={{ color: project.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-text-muted text-sm font-medium">{project.stat}</span>
                  </div>
                  {/* CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:-translate-y-0.5 group/link"
                    style={{ color: project.color }}
                  >
                    View Live Site
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom metric strip */}
          <div className="mt-20 pt-10 border-t border-white/[0.06]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "7", label: "Live Sites Shown", color: "#9B59B6" },
                { value: "150+", label: "Total Projects", color: "#E91E8C" },
                { value: "100%", label: "Demo-First", color: "#4A8C2A" },
                { value: "5+", label: "Years Running", color: "#F5A623" },
              ].map((m) => (
                <div key={m.label} className="reveal">
                  <div className="step-number text-3xl font-extrabold text-text-white inline-block">
                    {m.value}
                  </div>
                  <div className="text-text-muted text-xs uppercase tracking-wider mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom diagonal transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "80px" }}>
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-bg-white"
            style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
      </section>

      {/* ══ PROCESS — Slash-connected steps ══ */}
      <section className="relative py-24 bg-bg-white overflow-hidden">
        {/* Faint grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(#7B2D8E 1px, transparent 1px), linear-gradient(90deg, #7B2D8E 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-dark text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              From Brief to Launch in <span className="gradient-text">Four Steps</span>
            </h2>
            <p className="text-text-body text-lg">
              No surprises, no scope creep. Every project follows the same clear
              path.
            </p>
            <div className="gradient-line w-20 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line between steps (desktop only) */}
            <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#7B2D8E]/10 via-[#E91E8C]/15 to-[#F5A623]/10 z-0" />
            {[
              {
                n: "01",
                title: "Discovery",
                desc: "Share your goals, audience, and timeline. We ask the right questions to nail the scope.",
                accent: "#7B2D8E",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
              },
              {
                n: "02",
                title: "Free Demo",
                desc: "We build a working preview of your site or design. You review it hands-on, no payment required.",
                accent: "#9B59B6",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
              },
              {
                n: "03",
                title: "Refine",
                desc: "Approve, tweak, or pivot. We iterate fast until every detail is dialed in.",
                accent: "#E91E8C",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
              },
              {
                n: "04",
                title: "Launch",
                desc: "Final files delivered or site goes live. You get everything — source files, assets, full ownership.",
                accent: "#F5A623",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
              },
            ].map((s) => (
              <div key={s.n} className="reveal relative text-center p-8 group z-10">
                {/* Diagonal accent bg on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 55%, ${s.accent}05 56%)`,
                  }}
                />
                {/* Grid on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.015] transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(${s.accent} 1px, transparent 1px), linear-gradient(90deg, ${s.accent} 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  {/* Step icon circle */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border transition-colors duration-300"
                    style={{
                      backgroundColor: `${s.accent}08`,
                      borderColor: `${s.accent}15`,
                      color: s.accent,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div className="step-number text-4xl font-black leading-none mb-3" style={{ color: `${s.accent}15` }}>
                    {s.n}
                  </div>
                  <h3 className="text-lg font-bold text-text-dark mb-2">{s.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom diagonal */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "80px" }}>
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-bg-dark"
            style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%, 0 100%)" }}
          />
        </div>
      </section>

      {/* Monthly Plans */}
      <PricingSection />

      {/* ══ TESTIMONIALS — Bracket-framed cards ══ */}
      <section className="py-20 bg-bg-dark relative overflow-hidden">
        {/* Diagonal background texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(160deg, transparent 35%, rgba(155,89,182,0.02) 36%, rgba(155,89,182,0.02) 65%, transparent 66%)",
        }} />
        {/* Fine grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.012]"
          style={{
            backgroundImage: "linear-gradient(rgba(233,30,140,1) 1px, transparent 1px), linear-gradient(90deg, rgba(233,30,140,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 70%)",
          }}
        />
        {/* Soft orb behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#9B59B6] opacity-[0.02] blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#E91E8C] text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4">
              What Clients <span className="shimmer-text">Say</span>
            </h2>
            <div className="gradient-line w-20 mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "The attention to detail is incredible. Every animation, every interaction feels purposeful. Our users love the new experience!",
                name: "Cindy Evanoff",
                role: "Manager, Pine Crest Camp",
                initials: "CE",
                accent: "#9B59B6",
              },
              {
                quote:
                  "Hunter delivered beyond expectations. Our landing page loads instantly and converts 3x better than our previous site. Absolute wizard with code!",
                name: "Brooke Brum",
                role: "CEO, Fit4Lyfe",
                initials: "BB",
                accent: "#E91E8C",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal relative bg-bg-card border border-border-dark rounded-2xl p-8 hover-tilt overflow-hidden group"
              >
                {/* Grid texture on hover — very subtle */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.015] transition-opacity duration-700"
                  style={{
                    backgroundImage: `linear-gradient(${t.accent} 1px, transparent 1px), linear-gradient(90deg, ${t.accent} 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                />
                {/* Corner accent triangle */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, transparent 50%, ${t.accent}05 50%)` }}
                />
                {/* Diagonal slash */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: `linear-gradient(155deg, transparent 65%, ${t.accent}03 66%)`,
                }} />
                {/* Code bracket accent */}
                <span className="absolute top-3 left-5 text-4xl font-bold leading-none select-none font-mono" style={{ color: `${t.accent}15` }}>{`{`}</span>
                <span className="absolute bottom-3 right-5 text-4xl font-bold leading-none select-none font-mono" style={{ color: `${t.accent}15` }}>{`}`}</span>
                {/* Quote mark */}
                <span className="absolute top-2 left-12 text-6xl font-black leading-none select-none" style={{ color: `${t.accent}20` }}>
                  &ldquo;
                </span>
                <p className="text-text-muted italic text-[0.95rem] mb-5 relative z-10 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${t.accent}18`, color: t.accent }}
                  >
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

      {/* ══ CTA — Dramatic slash composition ══ */}
      <section className="relative py-24 bg-bg-dark text-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Central glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7B2D8E] opacity-[0.06] blur-[150px]" />
          {/* Cross diagonal slashes */}
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(155deg, transparent 30%, rgba(233,30,140,0.04) 31%, rgba(233,30,140,0.04) 33%, transparent 34%),
              linear-gradient(155deg, transparent 65%, rgba(245,166,35,0.03) 66%, rgba(245,166,35,0.03) 68%, transparent 69%)
            `,
          }} />
          {/* Fine grid lines — architectural depth */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: "linear-gradient(rgba(155,89,182,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,89,182,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse 50% 60% at 50% 50%, black 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 50% 60% at 50% 50%, black 20%, transparent 70%)",
            }}
          />
          {/* Dot grid fade */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(155,89,182,0.06) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Code bracket frame */}
          <span className="text-accent/10 text-sm font-mono tracking-wider block mb-6">&lt;build_something_great&gt;</span>
          {/* Founder avatar with layered depth */}
          <div className="relative inline-block mb-6">
            {/* Subtle accent ring */}
            <div className="absolute -inset-2 rounded-full border border-accent/8 pointer-events-none" />
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg relative">
              <Image
                src="/headshot_square_preview_1024.png"
                alt="Hunter Weeks"
                width={64}
                height={64}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-white mb-4">
            Ready to See What We Can{" "}
            <span className="shimmer-text">Build</span> for You?
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 text-lg">
            Get a free demo site &mdash; fully designed and clickable &mdash; with zero
            commitment. If you love it, we&apos;ll make it yours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="gradient-cta text-white font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_8px_50px_rgba(233,30,140,0.25)] text-lg"
            >
              Get Your Free Demo
            </Link>
            <a
              href="tel:4707583549"
              className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 text-lg"
            >
              Call (470) 758-3549
            </a>
          </div>
          <span className="text-accent/10 text-sm font-mono tracking-wider block mt-8">&lt;/build_something_great&gt;</span>
        </div>
      </section>
    </>
  );
}
