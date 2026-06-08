"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updateSubmissionStatus } from "@/app/admin/actions";
import { FEATURE_LABELS, DETAIL_LABELS } from "@/lib/intake";
import type { IntakeSubmission, SubmissionStatus } from "@/lib/supabase/types";

const STATUSES: SubmissionStatus[] = [
  "new",
  "reviewing",
  "quoted",
  "won",
  "archived",
];

const STATUS_LABEL: Record<SubmissionStatus, string> = {
  new: "New",
  reviewing: "Reviewing",
  quoted: "Quoted",
  won: "Won",
  archived: "Archived",
};

function fmtDate(s: string) {
  return new Date(s).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function LeadCard({ lead }: { lead: IntakeSubmission }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>(lead.status);
  const [busy, setBusy] = useState<SubmissionStatus | null>(null);
  const [errored, setErrored] = useState(false);
  const [, startTransition] = useTransition();

  const change = (next: SubmissionStatus) => {
    if (next === status || busy) return;
    const prev = status;
    setStatus(next);
    setBusy(next);
    setErrored(false);
    startTransition(async () => {
      const res = await updateSubmissionStatus(lead.id, next);
      setBusy(null);
      if (res?.error) {
        setStatus(prev); // roll back the optimistic change
        setErrored(true);
      }
    });
  };

  const tone =
    status === "won"
      ? "text-success border-success/40 bg-success/10"
      : status === "archived"
        ? "text-muted-fg border-border/40 bg-card/40"
        : status === "new"
          ? "text-primary border-primary/50 bg-primary-soft"
          : "text-accent border-accent/40 bg-accent/10";

  return (
    <div className="rounded-xl border border-border/30 bg-card/30 overflow-hidden">
      {/* Summary row */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`lead-detail-${lead.id}`}
        className="w-full flex flex-wrap items-center justify-between gap-4 px-5 py-4 text-left hover:bg-card/50 transition-colors"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-ui)] font-semibold text-foreground truncate">
              {lead.project_name || lead.name}
            </span>
            <span
              className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] border rounded-full px-2.5 py-0.5 shrink-0 ${tone}`}
            >
              {STATUS_LABEL[status]}
            </span>
          </div>
          <span className="font-[family-name:var(--font-mono)] text-xs text-muted-fg">
            {lead.name} · {lead.project_type ?? "—"} ·{" "}
            {lead.features?.length ?? 0} features · {fmtDate(lead.created_at)}
          </span>
        </div>
        <span
          aria-hidden
          className={`text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`lead-detail-${lead.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-1 border-t border-border/20 space-y-5">
              {/* Contact + scope grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <Detail label="Email">
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-primary hover:underline break-all"
                  >
                    {lead.email}
                  </a>
                </Detail>
                <Detail label="Phone">{lead.phone || "—"}</Detail>
                <Detail label="Company">{lead.company || "—"}</Detail>
                <Detail label="Budget">{lead.budget || "—"}</Detail>
                <Detail label="Timeline">{lead.timeline || "—"}</Detail>
                <Detail label="Type">{lead.project_type || "—"}</Detail>
                <Detail label="Pages">
                  {lead.pages?.length ? lead.pages.join(", ") : "—"}
                </Detail>
                <Detail label="Features">{lead.features?.length ?? 0}</Detail>
              </div>

              {lead.description && (
                <Block label="What it needs to do">{lead.description}</Block>
              )}
              {lead.goals && <Block label="Definition of success">{lead.goals}</Block>}

              {/* Features */}
              {lead.features?.length > 0 && (
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-muted-fg block mb-2">
                    Requested features
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {lead.features.map((f) => (
                      <span
                        key={f}
                        className="font-[family-name:var(--font-ui)] text-xs text-foreground/70 border border-border/40 rounded-full px-3 py-1"
                      >
                        {FEATURE_LABELS[f] ?? f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detail answers */}
              {lead.details && Object.values(lead.details).some(Boolean) && (
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-muted-fg block mb-2">
                    Project details
                  </span>
                  <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {Object.entries(DETAIL_LABELS).map(([k, label]) => {
                      const v = lead.details?.[k];
                      if (!v) return null;
                      return (
                        <div key={k}>
                          <dt className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-muted-fg/80">
                            {label}
                          </dt>
                          <dd className="font-[family-name:var(--font-ui)] text-sm text-foreground/90 whitespace-pre-wrap break-words">
                            {v}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              )}

              {/* Status control */}
              <div className="flex items-center gap-2 pt-2 flex-wrap">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-muted-fg mr-1">
                  Set status
                </span>
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    disabled={busy !== null}
                    aria-pressed={status === s}
                    onClick={() => change(s)}
                    className={`font-[family-name:var(--font-ui)] text-xs px-3 py-1.5 rounded-full border transition-colors disabled:opacity-50 ${
                      status === s
                        ? "border-primary text-primary bg-primary-soft"
                        : "border-border/40 text-foreground/60 hover:border-primary/40"
                    } ${busy === s ? "animate-pulse" : ""}`}
                  >
                    {STATUS_LABEL[s]}
                  </button>
                ))}
              </div>
              {errored && (
                <p
                  role="alert"
                  className="font-[family-name:var(--font-ui)] text-xs text-destructive"
                >
                  Couldn&apos;t update status — try again.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-muted-fg block mb-1">
        {label}
      </span>
      <span className="font-[family-name:var(--font-ui)] text-sm text-foreground/90 break-words">
        {children}
      </span>
    </div>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-muted-fg block mb-1">
        {label}
      </span>
      <p className="font-[family-name:var(--font-ui)] text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
        {children}
      </p>
    </div>
  );
}
