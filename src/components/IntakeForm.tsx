"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  PROJECT_TYPES,
  PAGE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  FEATURE_GROUPS,
  TOTAL_FEATURE_COUNT,
  PURPOSE_OPTIONS,
  UPDATE_FREQUENCY_OPTIONS,
  YES_NO,
  YES_NO_MAYBE,
} from "@/lib/intake";
import { signUp } from "@/app/login/actions";

type Props = {
  initialName?: string;
  initialEmail?: string;
  initialCompany?: string;
  isAuthed?: boolean;
};

const STEPS = [
  "Build",
  "Basics",
  "Design",
  "Pages & Features",
  "Content & SEO",
  "Budget",
  "Your details",
] as const;

const ease = [0.22, 1, 0.36, 1] as const;
const DRAFT_KEY = "doa-intake-draft";

export default function IntakeForm({
  initialName = "",
  initialEmail = "",
  initialCompany = "",
  isAuthed = false,
}: Props) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);

  // Build
  const [projectType, setProjectType] = useState("");
  // Basics
  const [projectName, setProjectName] = useState("");
  const [industry, setIndustry] = useState("");
  const [purpose, setPurpose] = useState("");
  const [existingSite, setExistingSite] = useState("");
  const [domain, setDomain] = useState("");
  // Design
  const [description, setDescription] = useState("");
  const [style, setStyle] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [colors, setColors] = useState("");
  const [hasLogo, setHasLogo] = useState("");
  // Pages & features
  const [pages, setPages] = useState<string[]>([]);
  const [blogNeeded, setBlogNeeded] = useState("");
  const [formsNeeded, setFormsNeeded] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [ecommerceProducts, setEcommerceProducts] = useState("");
  // Content & SEO
  const [contentReady, setContentReady] = useState("");
  const [contentNotes, setContentNotes] = useState("");
  const [keywords, setKeywords] = useState("");
  const [socialSetup, setSocialSetup] = useState("");
  const [analytics, setAnalytics] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [updateFrequency, setUpdateFrequency] = useState("");
  // Budget
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  // Details + account
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [company, setCompany] = useState(initialCompany);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [accountNote, setAccountNote] = useState("");
  const [error, setError] = useState("");

  // Restore an in-progress brief (project details only, never contact PII).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (!saved) return;
      const d = JSON.parse(saved);
      const set = (v: unknown, fn: (s: string) => void) =>
        typeof v === "string" && v && fn(v);
      set(d.projectType, setProjectType);
      set(d.projectName, setProjectName);
      set(d.industry, setIndustry);
      set(d.purpose, setPurpose);
      set(d.existingSite, setExistingSite);
      set(d.domain, setDomain);
      set(d.description, setDescription);
      set(d.style, setStyle);
      set(d.inspiration, setInspiration);
      set(d.colors, setColors);
      set(d.hasLogo, setHasLogo);
      if (Array.isArray(d.pages)) setPages(d.pages);
      set(d.blogNeeded, setBlogNeeded);
      set(d.formsNeeded, setFormsNeeded);
      if (Array.isArray(d.features)) setFeatures(d.features);
      set(d.ecommerceProducts, setEcommerceProducts);
      set(d.contentReady, setContentReady);
      set(d.contentNotes, setContentNotes);
      set(d.keywords, setKeywords);
      set(d.socialSetup, setSocialSetup);
      set(d.analytics, setAnalytics);
      set(d.maintenance, setMaintenance);
      set(d.updateFrequency, setUpdateFrequency);
      set(d.budget, setBudget);
      set(d.timeline, setTimeline);
      set(d.anythingElse, setAnythingElse);
    } catch {
      /* ignore malformed drafts */
    }
  }, []);

  // Persist the brief as it's built so a refresh doesn't lose the work.
  useEffect(() => {
    try {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({
          projectType,
          projectName,
          industry,
          purpose,
          existingSite,
          domain,
          description,
          style,
          inspiration,
          colors,
          hasLogo,
          pages,
          blogNeeded,
          formsNeeded,
          features,
          ecommerceProducts,
          contentReady,
          contentNotes,
          keywords,
          socialSetup,
          analytics,
          maintenance,
          updateFrequency,
          budget,
          timeline,
          anythingElse,
        })
      );
    } catch {
      /* storage may be unavailable */
    }
  }, [
    projectType, projectName, industry, purpose, existingSite, domain,
    description, style, inspiration, colors, hasLogo, pages, blogNeeded,
    formsNeeded, features, ecommerceProducts, contentReady, contentNotes,
    keywords, socialSetup, analytics, maintenance, updateFrequency, budget,
    timeline, anythingElse,
  ]);

  const toggle = (arr: string[], v: string) =>
    arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

  const progress = useMemo(
    () => Math.round(((step + 1) / STEPS.length) * 100),
    [step]
  );

  const emailValid = /\S+@\S+\.\S+/.test(email);
  const phoneValid = phone.replace(/\D/g, "").length >= 10;
  const wantsAccount = !isAuthed && password.length > 0;

  const canAdvance = () => {
    if (step === 0) return !!projectType;
    if (step === 2) return description.trim() !== "";
    if (step === 6) return name.trim() !== "" && emailValid && phoneValid;
    return true;
  };

  const gateHint = () => {
    if (step === 0 && !projectType) return "Pick what we're building to continue.";
    if (step === 2 && description.trim() === "")
      return "Add a sentence about what it should do to continue.";
    if (step === 6 && name.trim() === "")
      return "Add your name so we know who to reply to.";
    if (step === 6 && !emailValid) return "Enter a valid email.";
    if (step === 6 && !phoneValid) return "Enter a phone number with area code.";
    return "";
  };

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(Math.max(0, Math.min(STEPS.length - 1, next)));
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    setError("");
    if (wantsAccount) {
      if (password.length < 8) {
        setError("Your password needs at least 8 characters.");
        return;
      }
      if (password !== confirm) {
        setError("Those passwords don't match.");
        return;
      }
    }
    setSubmitting(true);
    try {
      const details = {
        industry, purpose, existingSite, domain, style, inspiration, colors,
        hasLogo, blogNeeded, formsNeeded, ecommerceProducts, contentReady,
        contentNotes, keywords, socialSetup, analytics, maintenance,
        updateFrequency, anythingElse,
      };
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, company, phone, projectType, projectName,
          description, goals: anythingElse, budget, timeline, pages, features,
          details,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {
        /* noop */
      }

      // Create the account now if they set a password. signUp redirects to
      // /portal on success and attaches this brief to their dashboard.
      if (wantsAccount) {
        const fd = new FormData();
        fd.set("fullName", name);
        fd.set("company", company);
        fd.set("phone", phone);
        fd.set("email", email);
        fd.set("password", password);
        const r = await signUp(undefined, fd);
        if (r?.error) {
          // Brief is saved; account just couldn't be created (likely exists).
          setAccountNote(r.error);
          setSubmitted(true);
        }
        // On success signUp navigates away to /portal.
        return;
      }
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="glass max-w-2xl mx-auto rounded-2xl px-8 py-16 lg:px-14 lg:py-20 text-center"
      >
        <div className="mx-auto mb-8 w-16 h-16 rotate-45 border border-primary/40 flex items-center justify-center pulse-glow">
          <svg className="w-7 h-7 -rotate-45 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-semibold mb-4">
          We&apos;ve got it.
        </h2>
        <p className="text-muted-fg text-lg leading-relaxed max-w-md mx-auto font-[family-name:var(--font-ui)]">
          Your brief is in. Hunter reviews every request personally and will
          reach out within 24 hours with next steps and a free demo plan.
        </p>
        <p className="text-muted-fg/90 text-sm leading-relaxed max-w-md mx-auto font-[family-name:var(--font-ui)] mt-4">
          {accountNote
            ? accountNote
            : `Sign up anytime with ${email} and this project shows up on your dashboard automatically.`}
        </p>
        <div className="mt-8 inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-sm text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {features.length} feature{features.length === 1 ? "" : "s"} scoped
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto" role="group" aria-label="Project intake">
      <p className="sr-only" aria-live="polite">
        Step {step + 1} of {STEPS.length}: {STEPS[step]}
      </p>

      {/* Progress header */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-primary">
            Step {step + 1} / {STEPS.length} · {STEPS[step]}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-xs text-muted-fg">
            {progress}%
          </span>
        </div>
        <div
          className="h-px w-full bg-border/40 overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Step ${step + 1} of ${STEPS.length}`}
        >
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease }}
          />
        </div>
      </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: dir * 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          {/* ── Step 0 — Build ── */}
          {step === 0 && (
            <Section title="What are we building?" sub="Pick the closest fit. We'll dial in the details next.">
              <div className="grid sm:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((t) => {
                  const active = projectType === t.value;
                  return (
                    <button
                      key={t.value}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setProjectType(t.value)}
                      className={`group text-left p-6 rounded-xl border transition-all duration-300 ${
                        active
                          ? "border-primary bg-primary-soft pulse-glow"
                          : "border-border/40 hover:border-primary/40 bg-card/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground">
                          {t.label}
                        </span>
                        <span aria-hidden className={`w-5 h-5 rotate-45 border ${active ? "border-primary bg-primary" : "border-border/60"}`} />
                      </div>
                      <p className="text-muted-fg text-sm leading-relaxed font-[family-name:var(--font-ui)]">
                        {t.blurb}
                      </p>
                    </button>
                  );
                })}
              </div>
            </Section>
          )}

          {/* ── Step 1 — Basics ── */}
          {step === 1 && (
            <Section title="The basics." sub="Tell us about the business so we start in the right place.">
              <Field label="Project or business name">
                <input className="doa-input" placeholder="e.g. Loaded Bites" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
              </Field>
              <Field label="Industry">
                <input className="doa-input" placeholder="e.g. Restaurant, HVAC, fitness" value={industry} onChange={(e) => setIndustry(e.target.value)} />
              </Field>
              <Field label="Primary purpose of the site">
                <ChipRow options={PURPOSE_OPTIONS} value={purpose} onPick={setPurpose} />
              </Field>
              <Field label="Existing website" optional>
                <input className="doa-input" placeholder="Current URL, or leave blank" value={existingSite} onChange={(e) => setExistingSite(e.target.value)} />
              </Field>
              <Field label="Preferred domain" optional>
                <input className="doa-input" placeholder="yourbusiness.com, if you have one in mind" value={domain} onChange={(e) => setDomain(e.target.value)} />
              </Field>
            </Section>
          )}

          {/* ── Step 2 — Design ── */}
          {step === 2 && (
            <Section title="The look and feel." sub="The more we know, the sharper the demo. None of this is binding.">
              <Field label="What does it need to do?">
                <textarea className="doa-input min-h-[110px] resize-y" placeholder="Describe the business and what the site should accomplish." value={description} onChange={(e) => setDescription(e.target.value)} />
              </Field>
              <Field label="Style and feel" optional>
                <textarea className="doa-input min-h-[80px] resize-y" placeholder="Modern, bold, minimal, luxury, playful — describe the vibe." value={style} onChange={(e) => setStyle(e.target.value)} />
              </Field>
              <Field label="Sites you like" optional>
                <textarea className="doa-input min-h-[80px] resize-y" placeholder="2-3 links and what you like about each. Helpful, not required." value={inspiration} onChange={(e) => setInspiration(e.target.value)} />
              </Field>
              <Field label="Colors or color scheme" optional>
                <input className="doa-input" placeholder="Brand colors or a palette in mind" value={colors} onChange={(e) => setColors(e.target.value)} />
              </Field>
              <Field label="Do you have a logo?">
                <ChipRow options={[...YES_NO, "Need one made"]} value={hasLogo} onPick={setHasLogo} />
              </Field>
            </Section>
          )}

          {/* ── Step 3 — Pages & Features ── */}
          {step === 3 && (
            <Section title="Pages and features." sub="Tap what you need. We'll tell you what's worth it.">
              <Field label="Pages you need">
                <div className="flex flex-wrap gap-2.5">
                  {PAGE_OPTIONS.map((p) => (
                    <Chip key={p} active={pages.includes(p)} onClick={() => setPages((a) => toggle(a, p))}>
                      {p}
                    </Chip>
                  ))}
                </div>
              </Field>
              <Field label="Blog or news section?">
                <ChipRow options={YES_NO_MAYBE} value={blogNeeded} onPick={setBlogNeeded} />
              </Field>
              <Field label="Forms you need" optional>
                <input className="doa-input" placeholder="e.g. contact form, quote request, booking" value={formsNeeded} onChange={(e) => setFormsNeeded(e.target.value)} />
              </Field>

              <div>
                <span className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 mb-3 block">
                  Features and add-ons
                </span>
                <div className="space-y-7">
                  {FEATURE_GROUPS.map((g) => {
                    const count = g.features.filter((f) => features.includes(f.key)).length;
                    return (
                      <div key={g.name}>
                        <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-border/30">
                          <div>
                            <h3 className="font-[family-name:var(--font-ui)] text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                              {g.name}
                            </h3>
                            <p className="text-muted-fg text-xs mt-1 font-[family-name:var(--font-ui)]">{g.blurb}</p>
                          </div>
                          {count > 0 && (
                            <span className="font-[family-name:var(--font-mono)] text-xs text-primary shrink-0">{count}</span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {g.features.map((f) => {
                            const active = features.includes(f.key);
                            return (
                              <Chip key={f.key} active={active} onClick={() => setFeatures((a) => toggle(a, f.key))}>
                                <span className="flex items-center gap-2">
                                  <span aria-hidden className={`w-3.5 h-3.5 rotate-45 border ${active ? "bg-primary border-primary" : "border-border/60"}`} />
                                  {f.label}
                                  {f.hint && <span className="text-muted-fg/70 text-[11px]">· {f.hint}</span>}
                                </span>
                              </Chip>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Field label="Selling online? How many products to start?" optional>
                <input className="doa-input" placeholder="e.g. 25 products, or leave blank" value={ecommerceProducts} onChange={(e) => setEcommerceProducts(e.target.value)} />
              </Field>
            </Section>
          )}

          {/* ── Step 4 — Content & SEO ── */}
          {step === 4 && (
            <Section title="Content, SEO, and support." sub="This shapes the plan, none of it is required.">
              <Field label="Do you have content ready?">
                <ChipRow options={YES_NO} value={contentReady} onPick={setContentReady} />
              </Field>
              <Field label="Content notes" optional>
                <textarea className="doa-input min-h-[70px] resize-y" placeholder="Text, images, video you already have, or what you still need." value={contentNotes} onChange={(e) => setContentNotes(e.target.value)} />
              </Field>
              <Field label="SEO keywords to target" optional>
                <input className="doa-input" placeholder='e.g. "Atlanta barber", "halal food Canton GA"' value={keywords} onChange={(e) => setKeywords(e.target.value)} />
              </Field>
              <Field label="Want help setting up social media?">
                <ChipRow options={YES_NO} value={socialSetup} onPick={setSocialSetup} />
              </Field>
              <Field label="Google Analytics" optional>
                <input className="doa-input" placeholder="Have an account? Note it here." value={analytics} onChange={(e) => setAnalytics(e.target.value)} />
              </Field>
              <Field label="Want ongoing maintenance and support?">
                <ChipRow options={YES_NO} value={maintenance} onPick={setMaintenance} />
              </Field>
              <Field label="How often will you update content?" optional>
                <ChipRow options={UPDATE_FREQUENCY_OPTIONS} value={updateFrequency} onPick={setUpdateFrequency} />
              </Field>
            </Section>
          )}

          {/* ── Step 5 — Budget ── */}
          {step === 5 && (
            <Section title="Budget and timeline." sub="Ballpark is fine. It helps us recommend the right scope.">
              <Field label="Budget range">
                <ChipRow options={BUDGET_OPTIONS} value={budget} onPick={setBudget} />
              </Field>
              <Field label="Timeline (most sites go live in 2-3 weeks)">
                <ChipRow options={TIMELINE_OPTIONS} value={timeline} onPick={setTimeline} />
              </Field>
              <Field label="Anything else about your project?" optional>
                <textarea className="doa-input min-h-[90px] resize-y" placeholder="Anything we didn't ask that matters." value={anythingElse} onChange={(e) => setAnythingElse(e.target.value)} />
              </Field>
            </Section>
          )}

          {/* ── Step 6 — Details + account ── */}
          {step === 6 && (
            <Section title="Where do we send the demo?" sub="Hunter replies personally within 24 hours.">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name">
                  <input className="doa-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" autoComplete="name" />
                </Field>
                <Field label="Email">
                  <input className="doa-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" autoComplete="email" />
                </Field>
                <Field label="Phone">
                  <input className="doa-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(470) 555-0100" autoComplete="tel" />
                </Field>
                <Field label="Company" optional>
                  <input className="doa-input" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company name" autoComplete="organization" />
                </Field>
              </div>

              {/* Create account */}
              {!isAuthed && (
                <div className="glass rounded-xl p-6 border border-primary/20">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-1">
                    Track this in your dashboard
                  </h3>
                  <p className="text-muted-fg text-sm font-[family-name:var(--font-ui)] mb-4">
                    Set a password to create your account now and watch this
                    project live. Skip it and we&apos;ll still save everything,
                    sign up later with this email and it appears on its own.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input className="doa-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password (optional)" autoComplete="new-password" />
                    <input className="doa-input" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm password" autoComplete="new-password" />
                  </div>
                </div>
              )}

              {/* Recap */}
              <div className="mt-2 glass rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase text-muted-fg mb-4">
                  Your brief
                </h3>
                <dl className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                  <Recap label="Type">{PROJECT_TYPES.find((t) => t.value === projectType)?.label || "—"}</Recap>
                  <Recap label="Purpose">{purpose || "—"}</Recap>
                  <Recap label="Features">{features.length} of {TOTAL_FEATURE_COUNT}</Recap>
                  <Recap label="Pages">{pages.length || "—"}</Recap>
                  <Recap label="Budget">{budget || "—"}</Recap>
                  <Recap label="Timeline">{timeline || "—"}</Recap>
                </dl>
              </div>

              {error && (
                <p role="alert" className="mt-2 text-sm text-destructive font-[family-name:var(--font-ui)]">
                  {error}
                </p>
              )}
            </Section>
          )}
        </motion.div>

      {/* Footer nav */}
      <div className="mt-12 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(step - 1)}
          disabled={step === 0}
          className={`font-[family-name:var(--font-ui)] text-sm uppercase tracking-[0.15em] px-6 py-3 transition-colors ${
            step === 0 ? "opacity-0 pointer-events-none" : "text-foreground/60 hover:text-foreground"
          }`}
        >
          ← Back
        </button>

        <div className="flex items-center gap-4">
          {!canAdvance() && gateHint() && (
            <span className="font-[family-name:var(--font-ui)] text-xs text-muted-fg hidden sm:block" aria-live="polite">
              {gateHint()}
            </span>
          )}
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => go(step + 1)}
              disabled={!canAdvance()}
              className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={!canAdvance() || submitting}
              className="btn-shimmer text-background font-[family-name:var(--font-ui)] font-bold px-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
            >
              {submitting ? "Sending…" : wantsAccount ? "Send & Create Account" : "Send My Brief"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Helpers ── */

function Section({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight mb-2">
        {title}
      </h2>
      <p className="text-muted-fg text-base mb-8 font-[family-name:var(--font-ui)] max-w-xl">{sub}</p>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 mb-2 flex items-center gap-2">
        {label}
        {optional && <span className="text-muted-fg/60 font-normal tracking-normal lowercase">optional</span>}
      </span>
      {children}
    </label>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`font-[family-name:var(--font-ui)] text-sm px-4 py-2.5 rounded-full border transition-all duration-200 ${
        active ? "border-primary text-primary bg-primary-soft" : "border-border/50 text-foreground/70 hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function ChipRow({ options, value, onPick }: { options: string[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((o) => (
        <Chip key={o} active={value === o} onClick={() => onPick(value === o ? "" : o)}>
          {o}
        </Chip>
      ))}
    </div>
  );
}

function Recap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/20 pb-2">
      <dt className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-wider">{label}</dt>
      <dd className="font-[family-name:var(--font-mono)] text-foreground text-sm">{children}</dd>
    </div>
  );
}
