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
    "w-full px-4 py-3 border border-border-light rounded-lg text-sm bg-white text-text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all";

  return (
    <div className="reveal bg-white border border-border-light rounded-2xl p-8 relative">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-[90px] right-5 z-[9999] px-6 py-4 rounded-xl shadow-2xl text-white text-sm font-medium max-w-sm transition-transform ${
            toast.type === "success" ? "bg-emerald" : "bg-rose"
          }`}
        >
          {toast.msg}
        </div>
      )}

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-emerald-soft flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-text-dark mb-2">
            Thank you!
          </h2>
          <p className="text-text-body text-sm mb-6 max-w-sm mx-auto">
            We received your request and will reach out shortly. Expect a
            response within a few hours during business hours.
          </p>
          <button
            onClick={clearForm}
            className="border border-border-light hover:border-accent hover:text-accent text-text-dark font-semibold text-sm px-6 py-2.5 rounded-lg transition-all"
          >
            Send Another Request
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-text-dark mb-2">
            Start Your Project
          </h2>
          <p className="text-text-body text-sm mb-6">
            Fill in what you can &mdash; we&apos;ll follow up with any questions. Website
            requests get a free demo before any payment is needed.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} id="contact-form" className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1.5">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="(470) 758-3549"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1.5">
                What Do You Need? *
              </label>
              <select name="service" required className={inputClass}>
                <option value="">Select a service</option>
                <option value="website">Custom Website</option>
                <option value="graphic-design">
                  Graphic Design (cards, ads, brochures)
                </option>
                <option value="ai-tool">
                  AI Business Tool (booking, automation)
                </option>
                <option value="monthly-plan">Monthly Hosting Plan</option>
                <option value="bundle">Website + Design Bundle</option>
                <option value="other">Something Else</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1.5">
                Budget Range
              </label>
              <select name="budget" className={inputClass}>
                <option value="">Select range</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 &ndash; $1,000</option>
                <option value="1000-2500">$1,000 &ndash; $2,500</option>
                <option value="over-2500">Over $2,500</option>
                <option value="monthly">Monthly plan only</option>
                <option value="discuss">Let&apos;s discuss</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-dark mb-1.5">
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
              <label className="block text-sm font-semibold text-text-dark mb-1.5">
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
              className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 rounded-lg transition-all disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Request"}
            </button>
            <p className="text-text-body text-xs text-center mt-3">
              Typical response within 2 hours (Mon&ndash;Fri, 9am&ndash;7pm)
            </p>
          </form>
        </>
      )}
    </div>
  );
}
