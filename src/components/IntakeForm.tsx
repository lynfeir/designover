"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PROJECT_TYPES,
  PAGE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  FEATURE_GROUPS,
  TOTAL_FEATURE_COUNT,
} from "@/lib/intake";

type Props = {
  initialName?: string;
  initialEmail?: string;
  initialCompany?: string;
};

const STEPS = ["Type", "Vision", "Pages", "Features", "Scope", "Details"] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function IntakeForm({
  initialName = "",
  initialEmail = "",
  initialCompany = "",
}: Props) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);

  const [projectType, setProjectType] = useState<string>("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [pages, setPages] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [company, setCompany] = useState(initialCompany);
  const [phone, setPhone] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggle = (arr: string[], v: string) =>
    arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

  const progress = useMemo(
    () => Math.round(((step + 1) / STEPS.length) * 100),
    [step]
  );

  const emailValid = /\S+@\S+\.\S+/.test(email);

  const canAdvance = () => {
    if (step === 0) return !!projectType;
    if (step === 1) return description.trim() !== "";
    if (step === 5) return name.trim() !== "" && emailValid;
    return true;
  };

  const gateHint = () => {
    if (step === 0 && !projectType) return "Pick what we're building to continue.";
    if (step === 1 && description.trim() === "")
      return "Add a sentence about what it should do to continue.";
    if (step === 5 && name.trim() === "") return "Add your name so we know who to reply to.";
    if (step === 5 && !emailValid)
      return "Enter a valid email so Hunter can reach you.";
    return "";
  };

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(Math.max(0, Math.min(STEPS.length - 1, next)));
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          projectType,
          projectName,
          description,
          goals,
          budget,
          timeline,
          pages,
          features,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
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
          <svg
            className="w-7 h-7 -rotate-45 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-semibold mb-4">
          We&apos;ve got it.
        </h2>
        <p className="text-muted-fg text-lg leading-relaxed max-w-md mx-auto font-[family-name:var(--font-ui)]">
          Your brief is in. Hunter reviews every request personally and will
          reach out within 24 hours with next steps and a free demo plan.
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
      {/* Announce step changes to assistive tech */}
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

      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={step}
          custom={dir}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={{ duration: 0.45, ease }}
        >
          {/* ── Step 0 — Project type ── */}
          {step === 0 && (
            <Section
              title="What are we building?"
              sub="Pick the closest fit. We'll dial in the details next."
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((t) => {
                  const active = projectType === t.value;
                  return (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setProjectType(t.value)}
                      aria-pressed={active}
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
                        <span
                          aria-hidden
                          className={`w-5 h-5 rotate-45 border flex items-center justify-center transition-colors ${
                            active
                              ? "border-primary bg-primary"
                              : "border-border/60"
                          }`}
                        />
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

          {/* ── Step 1 — Vision ── */}
          {step === 1 && (
            <Section
              title="Tell us the vision."
              sub="The more we know, the sharper the demo. None of this is binding."
            >
              <Field label="Project name">
                <input
                  className="doa-input"
                  placeholder="e.g. Fit4Lyfe membership site"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </Field>
              <Field label="What does it need to do?">
                <textarea
                  className="doa-input min-h-[120px] resize-y"
                  placeholder="Describe the business and what the site or tool should accomplish."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Field>
              <Field label="What does success look like?" optional>
                <textarea
                  className="doa-input min-h-[90px] resize-y"
                  placeholder="More bookings, less admin, a cleaner brand — whatever 'winning' means to you."
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </Field>
            </Section>
          )}

          {/* ── Step 2 — Pages ── */}
          {step === 2 && (
            <Section
              title="Which pages do you need?"
              sub="Tap all that apply. Skip it if you're building a tool, not a site."
            >
              <div className="flex flex-wrap gap-2.5">
                {PAGE_OPTIONS.map((p) => {
                  const active = pages.includes(p);
                  return (
                    <Chip
                      key={p}
                      active={active}
                      onClick={() => setPages((arr) => toggle(arr, p))}
                    >
                      {p}
                    </Chip>
                  );
                })}
              </div>
              {pages.length > 0 && (
                <p className="mt-5 font-[family-name:var(--font-mono)] text-xs text-primary">
                  {pages.length} page{pages.length === 1 ? "" : "s"} selected
                </p>
              )}
            </Section>
          )}

          {/* ── Step 3 — Features ── */}
          {step === 3 && (
            <Section
              title="Check every feature you'll need."
              sub="This becomes your scope. Don't hold back — we'll tell you what's worth it."
            >
              <div className="space-y-8">
                {FEATURE_GROUPS.map((g) => {
                  const groupCount = g.features.filter((f) =>
                    features.includes(f.key)
                  ).length;
                  return (
                    <div key={g.name}>
                      <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-border/30">
                        <div>
                          <h3 className="font-[family-name:var(--font-ui)] text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                            {g.name}
                          </h3>
                          <p className="text-muted-fg text-xs mt-1 font-[family-name:var(--font-ui)]">
                            {g.blurb}
                          </p>
                        </div>
                        {groupCount > 0 && (
                          <span className="font-[family-name:var(--font-mono)] text-xs text-primary shrink-0">
                            {groupCount}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {g.features.map((f) => {
                          const active = features.includes(f.key);
                          return (
                            <Chip
                              key={f.key}
                              active={active}
                              onClick={() =>
                                setFeatures((arr) => toggle(arr, f.key))
                              }
                            >
                              <span className="flex items-center gap-2">
                                <span
                                  aria-hidden
                                  className={`w-3.5 h-3.5 rotate-45 border shrink-0 ${
                                    active
                                      ? "bg-primary border-primary"
                                      : "border-border/60"
                                  }`}
                                />
                                {f.label}
                                {f.hint && (
                                  <span className="text-muted-fg/70 text-[11px] hidden sm:inline">
                                    · {f.hint}
                                  </span>
                                )}
                              </span>
                            </Chip>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>
          )}

          {/* ── Step 4 — Scope ── */}
          {step === 4 && (
            <Section
              title="Budget and timeline."
              sub="Ballpark is fine. It helps us recommend the right scope, not upsell you."
            >
              <Field label="Budget range">
                <div className="flex flex-wrap gap-2.5">
                  {BUDGET_OPTIONS.map((b) => (
                    <Chip
                      key={b}
                      active={budget === b}
                      onClick={() => setBudget(b)}
                    >
                      {b}
                    </Chip>
                  ))}
                </div>
              </Field>
              <Field label="Timeline">
                <div className="flex flex-wrap gap-2.5">
                  {TIMELINE_OPTIONS.map((t) => (
                    <Chip
                      key={t}
                      active={timeline === t}
                      onClick={() => setTimeline(t)}
                    >
                      {t}
                    </Chip>
                  ))}
                </div>
              </Field>
            </Section>
          )}

          {/* ── Step 5 — Details ── */}
          {step === 5 && (
            <Section
              title="Where do we send the demo?"
              sub="Hunter replies personally within 24 hours."
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name">
                  <input
                    className="doa-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email">
                  <input
                    className={`doa-input ${
                      email !== "" && !emailValid ? "doa-input--error" : ""
                    }`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    aria-invalid={email !== "" && !emailValid}
                    aria-describedby={
                      email !== "" && !emailValid ? "email-error" : undefined
                    }
                  />
                  {email !== "" && !emailValid && (
                    <span
                      id="email-error"
                      className="mt-1.5 block text-xs text-destructive font-[family-name:var(--font-ui)]"
                    >
                      Enter a valid email so Hunter can reach you.
                    </span>
                  )}
                </Field>
                <Field label="Company" optional>
                  <input
                    className="doa-input"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                  />
                </Field>
                <Field label="Phone" optional>
                  <input
                    className="doa-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(470) 555-0100"
                  />
                </Field>
              </div>

              {/* Recap */}
              <div className="mt-8 glass rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase text-muted-fg mb-4">
                  Your brief
                </h3>
                <dl className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                  <Recap label="Type">
                    {PROJECT_TYPES.find((t) => t.value === projectType)?.label ||
                      "—"}
                  </Recap>
                  <Recap label="Features">
                    {features.length} of {TOTAL_FEATURE_COUNT}
                  </Recap>
                  <Recap label="Pages">{pages.length || "—"}</Recap>
                  <Recap label="Budget">{budget || "—"}</Recap>
                  <Recap label="Timeline">{timeline || "—"}</Recap>
                </dl>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-5 text-sm text-destructive font-[family-name:var(--font-ui)]"
                >
                  {error}
                </p>
              )}
            </Section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer nav */}
      <div className="mt-12 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(step - 1)}
          disabled={step === 0}
          className={`font-[family-name:var(--font-ui)] text-sm uppercase tracking-[0.15em] px-6 py-3 transition-colors ${
            step === 0
              ? "opacity-0 pointer-events-none"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          ← Back
        </button>

        <div className="flex items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-xs text-muted-fg hidden sm:block">
            {features.length} feature{features.length === 1 ? "" : "s"} ·{" "}
            {pages.length} page{pages.length === 1 ? "" : "s"}
          </span>
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
              {submitting ? "Sending…" : "Send My Brief"}
            </button>
          )}
        </div>
      </div>

      {!canAdvance() && gateHint() && (
        <p
          className="mt-3 text-right text-xs text-muted-fg font-[family-name:var(--font-ui)]"
          aria-live="polite"
        >
          {gateHint()}
        </p>
      )}
    </div>
  );
}

/* ── Small presentational helpers ── */

function Section({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight mb-2">
        {title}
      </h2>
      <p className="text-muted-fg text-base mb-8 font-[family-name:var(--font-ui)] max-w-xl">
        {sub}
      </p>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 mb-2 flex items-center gap-2">
        {label}
        {optional && (
          <span className="text-muted-fg/60 font-normal tracking-normal lowercase">
            optional
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`font-[family-name:var(--font-ui)] text-sm px-4 py-3 rounded-full border transition-all duration-200 ${
        active
          ? "border-primary text-primary bg-primary-soft"
          : "border-border/50 text-foreground/70 hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Recap({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/20 pb-2">
      <dt className="font-[family-name:var(--font-ui)] text-muted-fg text-xs uppercase tracking-wider">
        {label}
      </dt>
      <dd className="font-[family-name:var(--font-mono)] text-foreground text-sm">
        {children}
      </dd>
    </div>
  );
}
