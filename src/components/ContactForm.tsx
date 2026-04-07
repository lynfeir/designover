"use client";

import { useState, useRef, FormEvent } from "react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);

    if (!data.name || !data.email || !data.message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
      showToast("Please enter a valid email.", "error");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      showToast("Something went wrong. Please call us or try again.", "error");
    } finally {
      setSending(false);
    }
  }

  function clearForm() {
    formRef.current?.reset();
    setSubmitted(false);
  }

  function showToast(msg: string, type: "success" | "error") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4500);
  }

  const inputClass =
    "w-full px-4 py-3 border border-border/50 text-sm bg-background/60 text-foreground placeholder:text-muted-fg/50 font-[family-name:var(--font-ui)] focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all input-glow";

  return (
    <div className="glass p-8 relative" style={{ boxShadow: "var(--shadow-card)" }}>
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-[90px] right-5 z-[9999] px-6 py-4 shadow-2xl text-sm font-[family-name:var(--font-ui)] font-medium max-w-sm transition-transform ${
            toast.type === "success"
              ? "bg-success text-background"
              : "bg-destructive text-foreground"
          }`}
        >
          {toast.msg}
        </div>
      )}

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center pulse-glow rounded-full bg-success/10 border border-success/20">
            <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground mb-2">
            Thank you!
          </h2>
          <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mb-6 max-w-sm mx-auto">
            We received your request and will reach out shortly. Expect a
            response within a few hours during business hours.
          </p>
          <button
            onClick={clearForm}
            className="border border-border/50 hover:border-primary text-foreground hover:text-primary font-[family-name:var(--font-ui)] font-bold text-sm px-7 py-3.5 tracking-wider uppercase transition-colors"
          >
            Send Another Request
          </button>
        </div>
      ) : (
        <>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground mb-2">
            Start Your Project
          </h2>
          <p className="font-[family-name:var(--font-ui)] text-muted-fg text-sm mb-6">
            Fill in what you can &mdash; we&apos;ll follow up with any questions. Website
            requests get a free demo before any payment is needed.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} id="contact-form" className="space-y-5">
            <div>
              <label className="block text-sm font-[family-name:var(--font-ui)] font-semibold text-foreground mb-1.5">
                Your Name *
              </label>
              <input type="text" name="name" required placeholder="Full name" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-[family-name:var(--font-ui)] font-semibold text-foreground mb-1.5">
                Email *
              </label>
              <input type="email" name="email" required placeholder="you@company.com" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-[family-name:var(--font-ui)] font-semibold text-foreground mb-1.5">
                Phone
              </label>
              <input type="tel" name="phone" placeholder="(470) 758-3549" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-[family-name:var(--font-ui)] font-semibold text-foreground mb-1.5">
                What Do You Need? *
              </label>
              <select name="service" required className={inputClass}>
                <option value="">Select a service</option>
                <option value="website">Custom Website ($399)</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="automation">
                  Business Systems &amp; Automation
                </option>
                <option value="website-automation">Website + Systems Bundle</option>
                <option value="monthly-plan">Hosting / Support</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-[family-name:var(--font-ui)] font-semibold text-foreground mb-1.5">
                Budget Range
              </label>
              <select name="budget" className={inputClass}>
                <option value="">Select range</option>
                <option value="under-500">Under $500 (website/design)</option>
                <option value="500-1500">$500 &ndash; $1,500</option>
                <option value="1500-5000">$1,500 &ndash; $5,000</option>
                <option value="5000-25000">$5,000 &ndash; $25,000 (automation build)</option>
                <option value="monthly">Monthly subscription ($200&ndash;$1K/mo)</option>
                <option value="discuss">Let&apos;s discuss</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-[family-name:var(--font-ui)] font-semibold text-foreground mb-1.5">
                Timeline
              </label>
              <select name="timeline" className={inputClass}>
                <option value="">When do you need this?</option>
                <option value="asap">ASAP (rush)</option>
                <option value="1-week">Within 1 week</option>
                <option value="2-weeks">Within 2 weeks</option>
                <option value="1-month">Within 1 month</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-[family-name:var(--font-ui)] font-semibold text-foreground mb-1.5">
                Project Details *
              </label>
              <textarea
                name="message"
                required
                placeholder="What does your business do? What do you need built or designed? Any examples or links welcome."
                className={`${inputClass} min-h-[120px] resize-y`}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-7 py-3.5 text-sm tracking-[0.1em] uppercase transition-all disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Request"}
            </button>
            <p className="font-[family-name:var(--font-ui)] text-muted-fg text-xs text-center mt-3">
              Typical response within 2 hours (Mon&ndash;Fri, 9am&ndash;7pm)
            </p>
          </form>
        </>
      )}
    </div>
  );
}
