import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Design over Atlanta",
  description:
    "Get a free demo site or same-day quote. Call (470) 758-3549 or fill out the form. Custom websites, graphic design, and AI tools.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 block mb-4">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            Contact
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Request a free website demo, get an automation quote, or tell us
            what&apos;s eating your time. We respond within hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Form */}
            <ContactForm />

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold tracking-tight text-text-heading mb-1">
                Get In Touch
              </h2>
              <p className="text-text-body text-sm">
                Prefer to talk? Call or text anytime during business hours.
              </p>

              {[
                {
                  icon: <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
                  title: "Call or Text",
                  content: (
                    <>
                      <a
                        href="tel:4707583549"
                        className="text-terra font-bold text-lg"
                      >
                        (470) 758-3549
                      </a>
                      <p className="text-text-body text-xs mt-1 m-0">
                        Mon&ndash;Fri 9am&ndash;7pm · Sat 10am&ndash;4pm
                      </p>
                    </>
                  ),
                },
                {
                  icon: <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>,
                  title: "Fastest Response",
                  content: (
                    <p className="text-text-body text-sm m-0">
                      Text for the quickest reply on quotes, updates, or quick
                      questions.
                    </p>
                  ),
                },
                {
                  icon: <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                  title: "Location",
                  content: (
                    <p className="text-text-body text-sm m-0">
                      Based in Atlanta, GA &mdash; serving clients worldwide. Fully
                      remote-friendly.
                    </p>
                  ),
                },
                {
                  icon: <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: "Hours",
                  content: (
                    <p className="text-text-body text-sm m-0">
                      Mon&ndash;Fri: 9am&ndash;7pm
                      <br />
                      Sat: 10am&ndash;4pm
                      <br />
                      Sun: By appointment
                    </p>
                  ),
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex gap-4 items-start p-5 bg-bg-sage border border-border-light"
                >
                  <div className="w-10 h-10 bg-terra-soft flex items-center justify-center text-lg shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-heading text-sm mb-1">
                      {c.title}
                    </h4>
                    {c.content}
                  </div>
                </div>
              ))}

              {/* Urgent CTA */}
              <div className="bg-forest border border-forest p-7 text-center">
                <h4 className="text-white font-bold mb-2">
                  Need Something Today?
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Rush and same-day options available. Call or text Hunter
                  directly.
                </p>
                <div className="flex gap-3 flex-wrap justify-center">
                  <a
                    href="tel:4707583549"
                    className="bg-terra hover:bg-terra-dark text-white font-bold text-sm px-7 py-3.5 tracking-wider uppercase transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="sms:4707583549"
                    className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-white font-bold text-sm px-7 py-3.5 tracking-wider uppercase transition-colors"
                  >
                    Text Hunter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-bg-sage">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-terra block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-heading">
              Common Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {[
              {
                q: 'What does "demo first" mean?',
                a: "For every website project, we build you a fully working demo site before you pay anything. You click through it, test it on your phone, show your team — and only pay if you want to move forward.",
              },
              {
                q: "How fast can you deliver?",
                a: "Graphic design: 24–72 hours. Websites: 24–48 hours. Automation tools: depends on scope — we'll give you a timeline after the initial call. Rush options are always available.",
              },
              {
                q: "Why is your hosting so cheap?",
                a: "We keep operations lean and pass the savings to you. Our $3/mo starter plan includes everything most businesses need — hosting, SSL, backups, and monitoring. Other companies charge $15–$25/mo for the same thing.",
              },
              {
                q: "Do I own my website and files?",
                a: "Yes — 100%. Source code, design files, assets — it's all yours. No proprietary lock-in, no platform you can't leave.",
              },
              {
                q: "What is business automation?",
                a: "Anything that replaces a manual step in your business workflow. We've built CNC automation for cabinet shops, booking systems for service businesses, workflow bots for data entry, and internal tools for process management. If you're paying someone to do repetitive computer work, we can probably automate it.",
              },
              {
                q: "What industries do you work with?",
                a: "We work with any business that has manual inefficiencies, but our sweet spot is cabinet shops, contractors, HVAC companies, auto shops, restaurants, real estate, medical offices, and landscaping companies.",
              },
              {
                q: "How do you price automation projects?",
                a: "Two ways: one-time builds ($5,000–$25,000 depending on complexity) or monthly subscription ($200–$1,000/mo). We always scope the ROI first. If our tool won't save you at least 3x what it costs, we'll tell you upfront.",
              },
              {
                q: "Do you offer payment plans?",
                a: "For projects over $500, yes — typically 50% upfront and 50% on completion. Monthly plans are billed monthly with no long-term contract.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-border-light p-7"
              >
                <h4 className="font-bold text-text-heading text-sm mb-2">
                  {faq.q}
                </h4>
                <p className="text-text-body text-sm leading-relaxed m-0">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-forest overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Your Business Is Losing Money on Manual Work
          </h2>
          <p className="text-white/70 max-w-lg mb-8 text-lg">
            Free website demo. Free automation audit. Zero commitment until
            you see the ROI.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:4707583549"
              className="bg-terra hover:bg-terra-dark text-white font-bold px-7 py-3.5 text-sm tracking-wider uppercase transition-colors"
            >
              Call (470) 758-3549
            </a>
            <Link
              href="#contact-form"
              className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-white font-bold px-7 py-3.5 text-sm tracking-wider uppercase transition-colors"
            >
              Fill Out the Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
