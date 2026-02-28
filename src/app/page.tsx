import Link from "next/link";
import Image from "next/image";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      {/* ─── HERO — Workspace image + geometric overlays ─── */}
      <section className="relative min-h-screen -mt-[72px] pt-[72px] flex flex-col justify-end bg-forest overflow-hidden">
        {/* Background workspace image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-workspace.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/50" />
        </div>

        {/* ── Geometric elements ── */}
        {/* Large diamond outline — upper right */}
        <div className="absolute top-[8%] right-[5%] w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] border border-terra/[0.12] rotate-45 pointer-events-none hidden md:block" />
        {/* Medium diamond — overlapping */}
        <div className="absolute top-[22%] right-[14%] w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] border border-white/[0.06] rotate-45 pointer-events-none hidden lg:block" />
        {/* Small diamond — floating accent */}
        <div className="absolute bottom-[22%] right-[32%] w-[50px] h-[50px] border border-terra/[0.08] rotate-45 pointer-events-none hidden lg:block" />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-[20%] w-px h-[55%] bg-gradient-to-b from-transparent via-terra/[0.1] to-transparent rotate-[15deg] origin-top pointer-events-none hidden lg:block" />
        {/* Dot grid pattern — lower right */}
        <div
          className="absolute bottom-0 right-0 w-[250px] h-[250px] pointer-events-none hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(199,91,58,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pb-12 lg:pb-20">
          <p className="text-terra text-[11px] font-bold tracking-[0.35em] uppercase mb-8 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
            Design or Automation
          </p>

          <h1 className="font-black text-[clamp(2.4rem,7vw,6.5rem)] leading-[0.95] sm:leading-[0.88] tracking-[-0.03em] text-white uppercase max-w-5xl">
            We Find What&apos;s
            <br />
            Costing You Money
            <br />
            <span className="text-terra">&amp; We Kill It</span>
          </h1>

          <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <p className="text-white/70 max-w-sm text-base leading-relaxed">
              Custom websites from $200, delivered in 48 hours. Automation tools
              that replace $62K/year of manual work. Every project starts with a
              free demo.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="bg-terra hover:bg-terra-light text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition-colors"
              >
                Get Your Free Demo
              </Link>
              <Link
                href="/services"
                className="border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all"
              >
                How We Save You Money
              </Link>
            </div>
          </div>

          {/* Stats — inline pairs */}
          <div className="mt-16 lg:mt-20 pt-6 border-t border-white/10 flex gap-10 lg:gap-14 flex-wrap">
            {[
              ["$200", "sites from"],
              ["48hr", "delivery"],
              ["$62K", "avg savings"],
              ["150+", "shipped"],
            ].map(([num, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-white text-xl font-black tracking-tight">
                  {num}
                </span>
                <span className="text-white/50 text-[10px] uppercase tracking-[0.2em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE 01: Websites — editorial with oversized number ─── */}
      <section className="py-20 lg:py-32 bg-bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
            {/* Giant number — decorative */}
            <div className="shrink-0 hidden lg:block">
              <span className="text-[10rem] xl:text-[14rem] font-black leading-none text-terra/[0.06] select-none block -mb-8">
                01
              </span>
            </div>
            <div className="max-w-2xl pt-4">
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3">
                <span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                Tier One
              </span>
              <h2 className="text-3xl lg:text-[3.2rem] font-bold text-text-heading leading-[1.05] mb-5 tracking-tight">
                Custom Websites
              </h2>
              <p className="text-text-body text-lg leading-relaxed mb-8 max-w-xl">
                Your competitor is showing up online. You&apos;re not. We build
                fully custom, mobile-first sites in 24&ndash;48 hours for $200
                flat. Agencies charge $2,000+ for the same thing.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="/contact"
                  className="bg-terra hover:bg-terra-dark text-white font-bold px-7 py-3.5 text-sm tracking-wider uppercase transition-colors"
                >
                  Get a Free Demo
                </Link>
                <span className="text-text-muted text-sm">
                  From{" "}
                  <strong className="text-text-heading text-2xl font-black">
                    $200
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE 02: Automation — full-width dark band with ROI math ─── */}
      <section className="relative py-16 lg:py-24 bg-forest overflow-hidden">
        {/* Geometric accents */}
        <div className="absolute top-[15%] left-[3%] w-[100px] h-[100px] border border-terra/[0.08] rotate-45 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-[10%] right-[5%] w-[70px] h-[70px] border border-white/[0.04] rotate-45 pointer-events-none hidden lg:block" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="flex-1">
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3">
                <span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                Tier Two
              </span>
              <h2 className="text-3xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5 tracking-tight">
                Business Automation
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                You&apos;re paying $30/hr for tasks a computer should do. We
                build custom tools that eliminate manual work &mdash; CNC
                automation, booking systems, workflow bots, data processing.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-terra hover:bg-terra-light text-white font-bold px-7 py-3.5 text-sm tracking-wider uppercase transition-colors"
              >
                Get a Free ROI Analysis
              </Link>
            </div>

            {/* ROI math — visual anchor */}
            <div className="shrink-0 lg:text-right">
              <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-3">
                The math
              </div>
              <div className="text-white/50 text-2xl lg:text-3xl font-bold line-through decoration-white/20 mb-1">
                $62,400/yr
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-wider mb-6">
                employee doing it manually
              </div>
              <div className="text-terra text-4xl lg:text-6xl font-black leading-none">
                $200
                <span className="text-xl lg:text-2xl font-bold text-terra/70">
                  /mo
                </span>
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-wider mt-2">
                our tool does it 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE 03: Design — right-aligned, different rhythm ─── */}
      <section className="py-16 lg:py-24 bg-bg-sage">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-16 items-start">
            <div className="shrink-0 hidden lg:block">
              <span className="text-[10rem] xl:text-[14rem] font-black leading-none text-sage/[0.15] select-none block -mb-8">
                03
              </span>
            </div>
            <div className="max-w-2xl lg:ml-auto pt-4">
              <span className="text-sage text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3">
                <span className="inline-block w-1.5 h-1.5 bg-sage rotate-45" />
                Also
              </span>
              <h2 className="text-3xl lg:text-[3.2rem] font-bold text-text-heading leading-[1.05] mb-5 tracking-tight lg:text-right">
                Graphic Design
              </h2>
              <p className="text-text-body text-lg leading-relaxed mb-8 max-w-xl lg:text-right lg:ml-auto">
                Business cards, brochures, flyers, advertisements, social
                graphics &mdash; whatever your business needs to look sharp and
                stay consistent.
              </p>
              <div className="flex items-center gap-6 flex-wrap lg:justify-end">
                <Link
                  href="/contact"
                  className="bg-forest hover:bg-forest/90 text-white font-bold px-7 py-3.5 text-sm tracking-wider uppercase transition-colors"
                >
                  Request a Quote
                </Link>
                <span className="text-text-muted text-sm">
                  From{" "}
                  <strong className="text-text-heading text-2xl font-black">
                    $99
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEMO PROMISE — full-bleed terracotta with corner brackets ─── */}
      <section className="relative py-14 lg:py-20 bg-terra overflow-hidden">
        {/* Geometric corner brackets */}
        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-6 h-6 border-t border-l border-white/25 pointer-events-none" />
        <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-6 h-6 border-t border-r border-white/25 pointer-events-none" />
        <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 w-6 h-6 border-b border-l border-white/25 pointer-events-none" />
        <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-6 h-6 border-b border-r border-white/25 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-3">
              Every project starts with a free demo.
            </h2>
            <p className="text-white/80 text-base max-w-lg">
              See your site live &mdash; fully designed and functional &mdash;
              within 48 hours, before you spend a dollar. If you love it, we
              move forward. If not, no hard feelings.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white text-terra font-bold px-8 py-4 text-sm tracking-wider uppercase hover:bg-white/90 transition-colors"
          >
            Request Your Demo
          </Link>
        </div>
      </section>

      {/* ─── PORTFOLIO — Editorial magazine layout ─── */}
      <section className="py-20 lg:py-32 bg-bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
            <div>
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3">
                <span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                Portfolio
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-text-heading leading-tight tracking-tight">
                Sites We&apos;ve Shipped
              </h2>
            </div>
            <p className="text-text-muted text-sm max-w-sm mt-4 lg:mt-0 lg:text-right">
              Real businesses. Real revenue. Every one started with a free demo.
            </p>
          </div>

          {/* Featured project — full width, large */}
          <a
            href="https://booknst.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block mb-4"
          >
            <div className="relative h-52 sm:h-64 lg:h-80 bg-gradient-to-br from-[#1a3a5c] to-[#2B7BBF] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-between px-8 lg:px-14">
                <div>
                  <div className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-2">
                    SaaS / Book Tracking
                  </div>
                  <div className="text-white text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    BookNest
                  </div>
                  <div className="text-white/55 text-sm mt-2 hidden sm:block">
                    A book tracking platform where readers collect, review, and
                    highlight their favorite reads.
                  </div>
                </div>
                <span className="text-white/40 text-sm font-bold uppercase tracking-wider group-hover:text-white/60 transition-colors hidden sm:block">
                  Visit &rarr;
                </span>
              </div>
            </div>
          </a>

          {/* 2-column projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              {
                name: "Pine Crest Camp",
                url: "https://pinecrestcamp.life/",
                niche: "Recreation",
                desc: "Trust-first design with a registration flow that converts worried parents into happy campers.",
                gradient: "from-[#2a4a1a] to-[#4A8C2A]",
              },
              {
                name: "Alchemy Auto Spa",
                url: "https://carwash-hazel-two.vercel.app",
                niche: "Auto / Luxury",
                desc: "Sleek dark design with online booking integration and service packages that sell themselves.",
                gradient: "from-[#1a3a5c] to-[#4FA3D9]",
              },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`relative h-44 lg:h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <div className="text-white/55 text-[10px] uppercase tracking-[0.2em] mb-1">
                      {p.niche}
                    </div>
                    <div className="text-white text-2xl lg:text-3xl font-black tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      {p.name}
                    </div>
                    <div className="text-white/50 text-xs mt-1.5 max-w-sm hidden sm:block">
                      {p.desc}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 3-column projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {[
              {
                name: "Fit4Lyfe",
                url: "https://www.fit4lyfe.net/",
                niche: "Fitness",
                gradient: "from-[#5c3a10] to-[#E8A838]",
              },
              {
                name: "RAFVAC Solutions",
                url: "https://rafvacsolutions.com/",
                niche: "HVAC",
                gradient: "from-[#0d3b6b] to-[#2196F3]",
              },
              {
                name: "Top Notch Roofing",
                url: "https://topnotch-omega.vercel.app/",
                niche: "Construction",
                gradient: "from-[#5c2a10] to-[#FF6B35]",
              },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`relative h-36 lg:h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <div className="text-white/50 text-[9px] uppercase tracking-[0.2em] mb-1">
                        {p.niche}
                      </div>
                      <div className="text-white text-xl lg:text-2xl font-black tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {p.name}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Last project — full width */}
          <a
            href="http://baasitsumra.fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative h-36 lg:h-44 bg-gradient-to-br from-[#0a3d35] to-[#00BFA5] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-8">
                <div>
                  <div className="text-white/55 text-[10px] uppercase tracking-[0.2em] mb-1">
                    Fitness / Coaching
                  </div>
                  <div className="text-white text-2xl lg:text-3xl font-black tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    Baasit Sumra Fitness
                  </div>
                </div>
                <span className="text-white/40 text-sm font-bold uppercase tracking-wider group-hover:text-white/60 transition-colors hidden sm:block">
                  Visit &rarr;
                </span>
              </div>
            </div>
          </a>

          {/* Metrics */}
          <div className="mt-16 pt-8 border-t border-border flex gap-10 lg:gap-16 flex-wrap">
            {[
              ["7", "live sites shown"],
              ["150+", "total projects"],
              ["100%", "demo-first"],
              ["5+", "years running"],
            ].map(([val, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-text-heading">
                  {val}
                </span>
                <span className="text-text-muted text-[10px] uppercase tracking-[0.15em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER — Split screen, photo edge-to-edge ─── */}
      <section className="bg-bg-sage overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Text side */}
            <div className="flex-1 px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
              <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-4">
                <span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
                The Builder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-heading leading-tight mb-5 tracking-tight">
                Hunter Weeks
              </h2>
              <p className="text-text-body text-base leading-relaxed mb-4 max-w-lg">
                Carpenter turned coder. I work on the shop floor and I write the
                software. A web developer doesn&apos;t understand CNC machines.
                A CNC consultant doesn&apos;t code. I do both &mdash; and I
                build the tools that bridge the gap.
              </p>
              <p className="text-text-muted text-sm mb-8 max-w-lg">
                5+ years, 150+ projects, and every one started with a free demo.
              </p>
              <Link
                href="/about"
                className="text-terra font-bold text-sm tracking-wider uppercase hover:text-terra-dark transition-colors inline-flex items-center gap-2 w-fit"
              >
                Full Story
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>

            {/* Photo side — extends to edge with geometric overlay accent */}
            <div className="lg:w-[42%] relative min-h-[320px] lg:min-h-[520px]">
              <Image
                src="/hunterheadshot.png"
                alt="Hunter Weeks — Founder of Design over Atlanta"
                fill
                className="object-cover object-top"
              />
              {/* Geometric overlay on photo edge */}
              <div className="absolute top-6 left-6 w-10 h-10 border border-white/20 rotate-45 pointer-events-none hidden lg:block" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border border-terra/30 rotate-45 pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS — Diamond step markers, not circles ─── */}
      <section className="py-20 lg:py-28 bg-bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-terra text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-16 lg:mb-20 tracking-tight">
            Brief to Launch in Four Steps
          </h2>

          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-[24px] left-[48px] right-[48px] h-px bg-border-light" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
              {[
                {
                  n: "01",
                  title: "Discovery",
                  desc: "Tell us what\u2019s costing you time or money. We figure out if you need a website, an automation tool, or both.",
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
                <div key={s.n} className="relative">
                  {/* Diamond step marker */}
                  <div className="w-12 h-12 bg-white border border-terra/20 flex items-center justify-center text-terra font-black text-xs rotate-45 mb-6 relative z-10">
                    <span className="-rotate-45">{s.n}</span>
                  </div>
                  <h3 className="font-bold text-text-heading text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed max-w-xs">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <PricingSection />

      {/* ─── TESTIMONIAL — Single large quote, editorial ─── */}
      <section className="py-20 lg:py-28 bg-bg-sage">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Oversized quotation mark */}
          <span className="text-[7rem] lg:text-[10rem] font-black leading-none text-terra/[0.08] block -mb-14 lg:-mb-20 select-none">
            &ldquo;
          </span>
          <blockquote className="text-xl lg:text-3xl font-semibold text-text-heading leading-snug mb-8 relative z-10">
            The attention to detail is incredible. Every animation, every
            interaction feels purposeful. Our users love the new experience!
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-px h-8 bg-terra" />
            <div>
              <div className="font-bold text-text-heading text-sm">
                Cindy Evanoff
              </div>
              <div className="text-text-muted text-xs">
                Manager, Pine Crest Camp
              </div>
            </div>
          </div>

          {/* Second testimonial */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-body text-base italic leading-relaxed mb-4 max-w-xl">
              &ldquo;Hunter delivered beyond expectations. Our landing page
              loads instantly and converts 3x better than our previous site.
              Absolute wizard with code!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-px h-6 bg-sage" />
              <div>
                <div className="font-semibold text-text-heading text-sm">
                  Brooke Brum
                </div>
                <div className="text-text-muted text-xs">CEO, Fit4Lyfe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA — Dark, dramatic, geometric accents ─── */}
      <section className="relative py-20 lg:py-28 bg-forest overflow-hidden">
        {/* Geometric accents — matching hero */}
        <div className="absolute top-[12%] right-[8%] w-[200px] h-[200px] border border-terra/[0.1] rotate-45 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-[15%] right-[22%] w-[80px] h-[80px] border border-white/[0.04] rotate-45 pointer-events-none hidden lg:block" />
        {/* Dot grid — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[180px] h-[180px] pointer-events-none hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(199,91,58,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-[3.5rem] font-black text-white leading-[0.95] tracking-tight mb-6">
              Your Competitor
              <br />
              Is Online.
              <br />
              <span className="text-terra">Are You?</span>
            </h2>
            <p className="text-white/65 text-base max-w-md mb-10 leading-relaxed">
              Get a free demo site or a quick automation audit &mdash; with zero
              commitment. We&apos;ll show you where you&apos;re losing money and
              how to fix it.
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
                className="border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-medium px-8 py-4 text-sm tracking-wider uppercase transition-all"
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
