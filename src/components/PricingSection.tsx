import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="plans" className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Diagonal background texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(155deg, transparent 20%, rgba(43,123,191,0.02) 21%, rgba(43,123,191,0.02) 40%, transparent 41%)",
      }} />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(43,123,191,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 60% 40% at 50% 30%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 40% at 50% 30%, black 10%, transparent 70%)",
        }}
      />
      {/* Fine grid lines — barely perceptible architectural texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: "linear-gradient(rgba(43,123,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,191,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[#E8A838] text-xs font-bold uppercase tracking-[0.12em] block mb-3">
            Monthly Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4">
            Hosting That <span className="shimmer-text">Pays for Itself</span>
          </h2>
          <p className="text-text-muted text-lg">
            Most hosting companies charge $15&ndash;$25/mo for basic hosting alone.
            Our plans start at <strong className="text-text-white">$3/mo</strong> &mdash; that&apos;s
            roughly $36/year. At those rates, the cost of your entire website
            design is paid off within a few months of savings.
          </p>
          <div className="gradient-line w-20 mx-auto mt-6" />
        </div>

        {/* Savings Callout */}
        <div className="reveal max-w-3xl mx-auto mb-14 relative bg-gradient-to-r from-emerald/10 to-accent-soft border border-emerald/20 rounded-2xl p-8 text-center spire-accent overflow-hidden">
          {/* Grid texture inside savings callout */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(74,140,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,140,42,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-4 relative z-10">
            <div>
              <div className="text-text-muted text-xs uppercase tracking-wider mb-1">
                Typical Hosting Elsewhere
              </div>
              <div className="text-3xl font-extrabold text-rose line-through decoration-rose/40">
                $20/mo
              </div>
              <div className="text-text-muted text-sm">$240/year</div>
            </div>
            <div className="text-3xl text-text-muted hidden sm:block">→</div>
            <div>
              <div className="text-text-muted text-xs uppercase tracking-wider mb-1">
                Our Starter Plan
              </div>
              <div className="text-3xl font-extrabold text-emerald">$3/mo</div>
              <div className="text-text-muted text-sm">$36/year</div>
            </div>
            <div className="text-3xl text-text-muted hidden sm:block">= </div>
            <div>
              <div className="text-text-muted text-xs uppercase tracking-wider mb-1">
                You Save
              </div>
              <div className="text-3xl font-extrabold text-[#4FA3D9]">
                $204/yr
              </div>
              <div className="text-emerald text-sm font-semibold">85% less</div>
            </div>
          </div>
          <p className="text-text-muted text-sm max-w-xl mx-auto relative z-10">
            A $200 website design + $36/year hosting = <strong className="text-text-white">$236 your first year</strong>.
            That&apos;s less than what most people pay for hosting alone elsewhere. By month 12,
            the design has already paid for itself.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line between cards (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[16.7%] right-[16.7%] h-px bg-gradient-to-r from-accent/5 via-[#E8A838]/10 to-accent/5 z-0" />

          {/* Starter */}
          <div className="reveal relative hover-tilt bg-bg-card border border-border-dark rounded-2xl p-8 flex flex-col overflow-hidden group z-10">
            {/* Grid texture on hover */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.015] transition-opacity duration-700"
              style={{
                backgroundImage: "linear-gradient(rgba(43,123,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,191,1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Corner accent ellipse */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(43,123,191,0.04) 0%, transparent 70%)" }} />
            <div className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted mb-2 relative z-10">
              Starter
            </div>
            <div className="text-5xl font-extrabold text-text-white leading-none mb-1 relative z-10">
              $3<span className="text-base font-normal text-text-muted">/mo</span>
            </div>
            <div className="text-sm text-text-muted mb-6 relative z-10">
              Just $36/year &mdash; unbeatable value
            </div>
            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              {[
                "Fast, secure hosting",
                "SSL certificate included",
                "Monthly site backup",
                "Email support (48hr response)",
                "Uptime monitoring",
              ].map((f) => (
                <li
                  key={f}
                  className="text-text-muted text-sm flex items-center gap-2.5"
                >
                  <span className="text-emerald font-bold text-xs shrink-0">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold py-3 rounded-lg transition-all relative z-10"
            >
              Get Started
            </Link>
          </div>

          {/* Professional */}
          <div className="reveal relative hover-tilt bg-bg-card border-2 border-[#E8A838] rounded-2xl p-8 flex flex-col glow-magenta overflow-hidden group z-10">
            {/* Grid texture on hover */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700"
              style={{
                backgroundImage: "linear-gradient(rgba(43,123,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,191,1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Diagonal arch accent */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse at 100% 100%, rgba(43,123,191,0.03) 0%, transparent 70%)",
            }} />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-cta text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full z-20">
              Most Popular
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted mb-2 relative z-10">
              Professional
            </div>
            <div className="text-5xl font-extrabold text-text-white leading-none mb-1 relative z-10">
              $9<span className="text-base font-normal text-text-muted">/mo</span>
            </div>
            <div className="text-sm text-text-muted mb-6 relative z-10">
              Support + monthly updates
            </div>
            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              {[
                "Everything in Starter",
                "Priority support (same-day)",
                "2 hours of site updates/mo",
                "Performance & SEO monitoring",
                "Analytics dashboard",
                "Quarterly strategy check-in",
              ].map((f) => (
                <li
                  key={f}
                  className="text-text-muted text-sm flex items-center gap-2.5"
                >
                  <span className="text-emerald font-bold text-xs shrink-0">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center gradient-cta text-white font-semibold py-3 rounded-lg transition-all relative z-10"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise */}
          <div className="reveal relative hover-tilt bg-bg-card border border-border-dark rounded-2xl p-8 flex flex-col overflow-hidden group z-10">
            {/* Grid texture on hover */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.015] transition-opacity duration-700"
              style={{
                backgroundImage: "linear-gradient(rgba(79,163,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,163,217,1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Corner accent ellipse */}
            <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(79,163,217,0.03) 0%, transparent 70%)" }} />
            <div className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted mb-2 relative z-10">
              Enterprise
            </div>
            <div className="text-5xl font-extrabold text-text-white leading-none mb-1 relative z-10">
              $19<span className="text-base font-normal text-text-muted">/mo</span>
            </div>
            <div className="text-sm text-text-muted mb-6 relative z-10">
              Dedicated partner for growth
            </div>
            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              {[
                "Everything in Professional",
                "Dedicated Slack/phone support",
                "5 hours of updates/mo",
                "AI tool maintenance included",
                "Advanced analytics & reporting",
                "Priority feature requests",
                "99.9% uptime SLA",
              ].map((f) => (
                <li
                  key={f}
                  className="text-text-muted text-sm flex items-center gap-2.5"
                >
                  <span className="text-emerald font-bold text-xs shrink-0">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold py-3 rounded-lg transition-all relative z-10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-text-muted text-sm mt-8 max-w-xl mx-auto">
          No contracts. Cancel anytime. All plans include hosting, SSL, and backups.
          Compare that to the $15&ndash;$25/mo most companies charge for hosting alone &mdash;
          before you even get support.
        </p>
      </div>
    </section>
  );
}
