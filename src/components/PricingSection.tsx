import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="plans" className="relative py-20 lg:py-28 bg-bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header — left-aligned, editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 lg:mb-16">
          <div>
            <span className="text-terra text-[10px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 mb-3">
              <span className="inline-block w-1.5 h-1.5 bg-terra rotate-45" />Monthly Plans
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-text-heading tracking-tight leading-tight">
              Hosting That Pays
              <br className="hidden sm:block" />
              <span className="text-terra">for Itself</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-sm mt-4 lg:mt-0 lg:text-right">
            Most hosting companies charge $15&ndash;$25/mo for basic hosting
            alone. Our plans start at <strong className="text-text-heading">$3/mo</strong>.
          </p>
        </div>

        {/* Savings comparison — horizontal, not a card */}
        <div className="mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pb-10 border-b border-border">
          <div>
            <div className="text-text-muted text-[10px] uppercase tracking-[0.15em] mb-1">
              Typical Elsewhere
            </div>
            <div className="text-2xl font-black text-text-heading line-through decoration-error/30">
              $20/mo
            </div>
            <div className="text-text-muted text-xs">$240/year</div>
          </div>
          <div className="text-2xl text-text-muted hidden sm:block">&rarr;</div>
          <div>
            <div className="text-text-muted text-[10px] uppercase tracking-[0.15em] mb-1">
              Our Starter Plan
            </div>
            <div className="text-2xl font-black text-success">$3/mo</div>
            <div className="text-text-muted text-xs">$36/year</div>
          </div>
          <div className="text-2xl text-text-muted hidden sm:block">=</div>
          <div>
            <div className="text-text-muted text-[10px] uppercase tracking-[0.15em] mb-1">
              You Save
            </div>
            <div className="text-2xl font-black text-terra">$204/yr</div>
            <div className="text-success text-xs font-semibold">85% less</div>
          </div>
        </div>

        {/* Pricing — 3-column, varied styling */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="bg-white border border-border p-8 flex flex-col">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted mb-4">
              Starter
            </div>
            <div className="text-5xl font-black text-text-heading leading-none mb-1">
              $3<span className="text-base font-normal text-text-muted">/mo</span>
            </div>
            <div className="text-xs text-text-muted mb-8">
              Just $36/year
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Fast, secure hosting",
                "SSL certificate included",
                "Monthly site backup",
                "Email support (48hr response)",
                "Uptime monitoring",
              ].map((f) => (
                <li
                  key={f}
                  className="text-text-body text-sm flex items-start gap-2.5"
                >
                  <span className="text-success font-bold text-xs mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center border border-border hover:border-terra text-text-heading hover:text-terra font-semibold py-3 transition-all text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Professional — highlighted */}
          <div className="bg-forest text-white p-8 flex flex-col relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-terra" />
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 mb-4">
              <span className="inline-block w-1.5 h-1.5 bg-white/70 rotate-45" />Professional
            </div>
            <div className="text-5xl font-black leading-none mb-1">
              $9<span className="text-base font-normal text-white/70">/mo</span>
            </div>
            <div className="text-xs text-white/65 mb-8">
              Support + monthly updates
            </div>
            <ul className="space-y-3 mb-8 flex-1">
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
                  className="text-white/70 text-sm flex items-start gap-2.5"
                >
                  <span className="text-terra font-bold text-xs mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center bg-terra hover:bg-terra-light text-white font-bold py-3 transition-all text-sm tracking-wider uppercase"
            >
              Get Started
            </Link>
          </div>

          {/* Growth */}
          <div className="bg-white border border-border p-8 flex flex-col">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted mb-4">
              Growth
            </div>
            <div className="text-5xl font-black text-text-heading leading-none mb-1">
              $19<span className="text-base font-normal text-text-muted">/mo</span>
            </div>
            <div className="text-xs text-text-muted mb-8">
              Dedicated partner for growth
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Professional",
                "Dedicated Slack/phone support",
                "5 hours of updates/mo",
                "Priority automation support",
                "Advanced analytics & reporting",
                "Monthly tool health checks",
                "99.9% uptime SLA",
              ].map((f) => (
                <li
                  key={f}
                  className="text-text-body text-sm flex items-start gap-2.5"
                >
                  <span className="text-success font-bold text-xs mt-0.5 shrink-0">
                    &#10003;
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="w-full text-center border border-border hover:border-terra text-text-heading hover:text-terra font-semibold py-3 transition-all text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Automation callout — matches dark sections */}
        <div className="mt-10 bg-forest p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Need Business Automation?
            </h3>
            <p className="text-white/70 text-sm max-w-lg">
              Custom tool builds start at $200/month or a one-time project fee.
              We scope the ROI first &mdash; if it won&apos;t save you money, we
              won&apos;t build it.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-terra hover:bg-terra-light text-white font-bold text-sm px-7 py-3.5 tracking-wider uppercase transition-colors"
          >
            Get a Free ROI Analysis
          </Link>
        </div>

        {/* Bottom note */}
        <p className="text-text-muted text-xs mt-8 max-w-xl">
          No contracts. Cancel anytime. All plans include hosting, SSL, and
          backups. Compare that to the $15&ndash;$25/mo most companies charge
          for hosting alone &mdash; before you even get support.
        </p>
      </div>
    </section>
  );
}
