import Link from "next/link";
import Image from "next/image";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-bg-cream min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        {/* Subtle warm blob decorators */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-terra opacity-[0.04] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-honey opacity-[0.06] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <span className="text-terra text-sm font-semibold tracking-[0.15em] uppercase block mb-4">
                Design over Atlanta
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.08] mb-6 text-text-heading">
                Websites, Design &amp;{" "}
                <span className="text-terra">AI&nbsp;Tools</span>
                <br />
                That Work for Your Business
              </h1>
              <p className="text-text-body text-lg max-w-lg mb-8 leading-relaxed">
                Custom sites starting at $200 &mdash; a fraction of what agencies charge.
                Hosting from just $3/mo while others charge $20+. Every project
                starts with a free demo &mdash; no commitment.
              </p>
              <div className="flex gap-3 flex-wrap mb-12">
                <Link
                  href="/contact"
                  className="bg-terra hover:bg-terra-dark text-white font-semibold px-7 py-3.5 rounded-lg btn-hover transition-all"
                >
                  Get Your Free Demo
                </Link>
                <Link
                  href="/services"
                  className="border border-border hover:border-terra text-text-heading hover:text-terra font-semibold px-7 py-3.5 rounded-lg transition-all"
                >
                  View Services
                </Link>
              </div>
              {/* Stats bar */}
              <div className="flex gap-8 pt-6 border-t border-border flex-wrap">
                {[
                  { num: "150+", label: "Projects" },
                  { num: "$200", label: "Sites From" },
                  { num: "$3/mo", label: "Hosting From" },
                  { num: "100%", label: "Demo First" },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="block text-2xl font-extrabold text-text-heading">
                      {s.num}
                    </span>
                    <span className="text-xs text-text-muted uppercase tracking-wider mt-1 block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — headshot with accent frame */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Decorative accent behind photo */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-terra/10 via-honey/10 to-sage/10 -z-10" />
                <div className="w-80 h-96 rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                  <Image
                    src="/headshot_square_preview_1024.png"
                    alt="Hunter Weeks — Founder of Design over Atlanta"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-8 bg-white rounded-xl shadow-lg border border-border-light px-5 py-3">
                  <div className="text-2xl font-extrabold text-terra">5+</div>
                  <div className="text-xs text-text-muted uppercase tracking-wider">Years Running</div>
                </div>
                {/* Floating CTA card */}
                <div className="absolute -top-4 -right-6 bg-white rounded-xl shadow-lg border border-border-light px-5 py-3">
                  <div className="text-2xl font-extrabold text-success">100%</div>
                  <div className="text-xs text-text-muted uppercase tracking-wider">Demo First</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ══ */}
      <section className="py-6 bg-bg-sage border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 flex-wrap text-text-muted text-sm">
            <span className="font-semibold text-text-heading">Trusted by 50+ Atlanta businesses</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Websites from $200</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Hosting from $3/mo</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Free demo on every project</span>
          </div>
        </div>
      </section>

      {/* ══ SERVICES PREVIEW ══ */}
      <section className="py-24 bg-bg-sage overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
              Everything Your Business Needs to <span className="text-terra">Stand Out</span>
            </h2>
            <p className="text-text-body text-lg">
              From custom websites to AI automation — all at prices that don&apos;t
              make you flinch.
            </p>
            <div className="h-[3px] w-20 bg-terra rounded mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                  </svg>
                ),
                title: "Custom Websites",
                desc: "Fully custom, mobile-first sites built to convert visitors into customers. No templates. Starts at just $200 — agencies charge $2,000+ for the same thing.",
                tag: "From $200",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-honey" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
                title: "Graphic Design",
                desc: "Business cards, brochures, flyers, advertisements, social graphics — whatever your business needs to look sharp and stay consistent.",
                tag: "From $99",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                ),
                title: "AI Business Tools",
                desc: "Automated booking systems, smart intake forms, workflow bots — replace that extra hire with a system that runs 24/7.",
                tag: "Custom Quote",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="reveal bg-white border border-border-light rounded-2xl p-8 flex flex-col card-hover"
              >
                <div className="w-13 h-13 rounded-xl flex items-center justify-center text-xl mb-5 bg-bg-sage">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-2">{s.title}</h3>
                <p className="text-text-body text-[0.95rem] flex-1 leading-relaxed">
                  {s.desc}
                </p>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mt-4 w-fit bg-terra-soft text-terra">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center border border-border text-text-heading font-semibold px-6 py-3 rounded-lg transition-all hover:border-terra hover:text-terra"
            >
              See Full Service Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ══ DEMO-FIRST PROMISE ══ */}
      <section className="py-20 bg-bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal bg-white border border-border rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-text-heading mb-2">
                Every project starts with a free demo.
              </h3>
              <p className="text-text-body text-base">
                See your site live &mdash; fully designed and functional &mdash; before you
                spend a dollar. If you love it, we move forward. If not, no hard
                feelings.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-terra hover:bg-terra-dark text-white font-semibold px-7 py-3.5 rounded-lg btn-hover transition-all"
            >
              Request Your Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ══ MEET THE FOUNDER ══ */}
      <section className="py-20 bg-bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Headshot */}
            <div className="relative shrink-0">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-border shadow-lg relative">
                <Image
                  src="/headshot_square_preview_1024.png"
                  alt="Hunter Weeks — Founder of Design over Atlanta"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            {/* Copy */}
            <div>
              <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-2">
                Meet the Founder
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-heading mb-3">
                Hunter Weeks
              </h3>
              <p className="text-text-body text-base leading-relaxed mb-4 max-w-lg">
                No account managers. No middlemen. You work directly with me &mdash;
                the person writing your code, designing your graphics, and building your AI tools.
                5+ years, 150+ projects, and every single one started with a free demo.
              </p>
              <Link
                href="/about"
                className="border border-border hover:border-terra text-text-heading hover:text-terra font-semibold text-sm px-5 py-2.5 rounded-lg transition-all inline-flex items-center gap-1"
              >
                Learn More About Me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO — Clean Project Showcase ══ */}
      <section className="relative py-28 bg-bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-terra text-xs font-bold uppercase tracking-[0.15em] block mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading mb-5">
              Sites We&apos;ve <span className="text-terra">Shipped</span>
            </h2>
            <p className="text-text-body text-lg leading-relaxed">
              Real businesses. Real revenue. Every project started with a free demo
              and ended with a client who never looked back.
            </p>
            <div className="h-[3px] w-24 bg-terra rounded mx-auto mt-6" />
          </div>

          {/* Portfolio grid — 2-column staggered layout */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                name: "BookNest",
                url: "https://booknst.com",
                tagline: "Your library, beautifully organized",
                desc: "A book tracking platform where readers collect, review, and highlight their favorite reads.",
                niche: "SaaS / Book Tracking",
                tags: ["Next.js", "Reading Platform", "Mobile-First"],
                color: "#2B7BBF",
                gradient: "from-[#1a3a5c] to-[#2B7BBF]",
              },
              {
                name: "Pine Crest Camp",
                url: "https://pinecrestcamp.life/",
                tagline: "Where summer memories start",
                desc: "Trust-first design with a registration flow that converts worried parents into happy campers.",
                niche: "Recreation / Camp",
                tags: ["Family-Focused", "Trust Design", "Registration"],
                color: "#4A8C2A",
                gradient: "from-[#2a4a1a] to-[#4A8C2A]",
              },
              {
                name: "Alchemy Auto Spa",
                url: "https://carwash-hazel-two.vercel.app",
                tagline: "Premium detail, premium feel",
                desc: "Sleek dark design with online booking integration and service packages that sell themselves.",
                niche: "Auto / Luxury",
                tags: ["Dark Theme", "Booking System", "Brand Design"],
                color: "#4FA3D9",
                gradient: "from-[#1a3a5c] to-[#4FA3D9]",
              },
              {
                name: "Fit4Lyfe",
                url: "https://www.fit4lyfe.net/",
                tagline: "Bold brand, bold results",
                desc: "High-impact visuals with seamless class booking and a design system that scales across merch and social.",
                niche: "Fitness / Wellness",
                tags: ["Bold Visuals", "Class Booking", "Brand System"],
                color: "#E8A838",
                gradient: "from-[#5c3a10] to-[#E8A838]",
              },
              {
                name: "RAFVAC Solutions",
                url: "https://rafvacsolutions.com/",
                tagline: "Precision climate, every time",
                desc: "A 25+ year HVAC powerhouse — EPA-certified, emergency availability, residential to commercial.",
                niche: "HVAC / Services",
                tags: ["Service Business", "Lead Gen", "Trust Design"],
                color: "#2196F3",
                gradient: "from-[#0d3b6b] to-[#2196F3]",
              },
              {
                name: "Top Notch Roofing",
                url: "https://topnotch-omega.vercel.app/",
                tagline: "Built from the top down",
                desc: "GAF and Owens Corning certified contractor with portfolio galleries and conversion-focused CTAs.",
                niche: "Roofing / Construction",
                tags: ["Contractor Site", "Portfolio Gallery", "Lead Gen"],
                color: "#FF6B35",
                gradient: "from-[#5c2a10] to-[#FF6B35]",
              },
              {
                name: "Baasit Sumra Fitness",
                url: "http://baasitsumra.fitness/",
                tagline: "Train every discipline",
                desc: "Multi-discipline coaching — strength, martial arts, yoga. Dark cinematic design with program showcases.",
                niche: "Fitness / Coaching",
                tags: ["Dark Theme", "Multi-Program", "Gallery"],
                color: "#00BFA5",
                gradient: "from-[#0a3d35] to-[#00BFA5]",
              },
            ].map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal group relative bg-white border border-border-light rounded-2xl overflow-hidden card-hover flex flex-col ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Color header band with gradient */}
                <div
                  className={`relative h-44 ${i === 0 ? "md:h-56" : "h-44"} bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                      backgroundSize: "60px 60px, 40px 40px",
                    }}
                  />
                  {/* Floating project name */}
                  <div className="relative text-center px-6">
                    <div className="text-white/90 text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 group-hover:scale-[1.02] transition-transform duration-300">
                      {project.name}
                    </div>
                    <div className="text-white/50 text-sm font-medium italic">
                      {project.tagline}
                    </div>
                  </div>
                  {/* Live indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    <span className="text-white/70 text-[10px] uppercase tracking-wider font-semibold">Live</span>
                  </div>
                  {/* Niche tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.12em] bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                      {project.niche}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-text-body text-sm leading-relaxed mb-4 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-bg-sage text-text-muted border border-border-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-terra text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0 ml-3">
                      Visit
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom metric strip */}
          <div className="mt-16 pt-10 border-t border-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "7", label: "Live Sites Shown" },
                { value: "150+", label: "Total Projects" },
                { value: "100%", label: "Demo-First" },
                { value: "5+", label: "Years Running" },
              ].map((m) => (
                <div key={m.label} className="reveal">
                  <div className="text-3xl font-extrabold text-text-heading">
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
      </section>

      {/* ══ PROCESS ══ */}
      <section className="relative py-24 bg-bg-sage overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
              From Brief to Launch in <span className="text-terra">Four Steps</span>
            </h2>
            <p className="text-text-body text-lg">
              No surprises, no scope creep. Every project follows the same clear
              path.
            </p>
            <div className="h-[3px] w-20 bg-terra rounded mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                title: "Discovery",
                desc: "Share your goals, audience, and timeline. We ask the right questions to nail the scope.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
              },
              {
                n: "02",
                title: "Free Demo",
                desc: "We build a working preview of your site or design. You review it hands-on, no payment required.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                n: "03",
                title: "Refine",
                desc: "Approve, tweak, or pivot. We iterate fast until every detail is dialed in.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                ),
              },
              {
                n: "04",
                title: "Launch",
                desc: "Final files delivered or site goes live. You get everything — source files, assets, full ownership.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div key={s.n} className="reveal bg-white border border-border-light rounded-2xl p-8 text-center card-hover">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-terra-soft text-terra border border-terra/10"
                >
                  {s.icon}
                </div>
                <div className="text-4xl font-black leading-none mb-3 text-terra/15">
                  {s.n}
                </div>
                <h3 className="text-lg font-bold text-text-heading mb-2">{s.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <PricingSection />

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 bg-bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-terra text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-4">
              What Clients <span className="text-terra">Say</span>
            </h2>
            <div className="h-[3px] w-20 bg-terra rounded mx-auto mt-4" />
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
                className="reveal bg-white border border-border-light rounded-2xl p-8 card-hover"
              >
                <span className="text-5xl font-black leading-none text-terra/15 block mb-2">
                  &ldquo;
                </span>
                <p className="text-text-body italic text-[0.95rem] mb-5 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-terra-soft text-terra">
                    {t.initials}
                  </div>
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

      {/* ══ CTA ══ */}
      <section className="relative py-24 bg-bg-honey text-center overflow-hidden">
        {/* Subtle warm blob */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-honey opacity-[0.15] blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Founder avatar */}
          <div className="relative inline-block mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-terra/30 shadow-lg">
              <Image
                src="/headshot_square_preview_1024.png"
                alt="Hunter Weeks"
                width={64}
                height={64}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading mb-4">
            Ready to See What We Can{" "}
            <span className="text-terra">Build</span> for You?
          </h2>
          <p className="text-text-body max-w-lg mx-auto mb-8 text-lg">
            Get a free demo site &mdash; fully designed and clickable &mdash; with zero
            commitment. If you love it, we&apos;ll make it yours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-terra hover:bg-terra-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover transition-all text-lg"
            >
              Get Your Free Demo
            </Link>
            <a
              href="tel:4707583549"
              className="border border-border hover:border-terra text-text-heading hover:text-terra font-semibold px-8 py-4 rounded-lg transition-all text-lg"
            >
              Call (470) 758-3549
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
