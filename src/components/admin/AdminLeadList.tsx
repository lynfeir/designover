"use client";

import { useState } from "react";
import LeadCard from "./LeadCard";
import type { IntakeSubmission, SubmissionStatus } from "@/lib/supabase/types";

const FILTERS: { key: SubmissionStatus | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "new", label: "New" },
  { key: "reviewing", label: "Reviewing" },
  { key: "quoted", label: "Quoted" },
  { key: "won", label: "Won" },
  { key: "archived", label: "Archived" },
];

export default function AdminLeadList({ leads }: { leads: IntakeSubmission[] }) {
  const [filter, setFilter] = useState<SubmissionStatus | "all">("all");

  const counts = leads.reduce<Record<string, number>>((m, l) => {
    m[l.status] = (m[l.status] || 0) + 1;
    return m;
  }, {});

  const shown = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => {
          const n = f.key === "all" ? leads.length : counts[f.key] || 0;
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={`font-[family-name:var(--font-ui)] text-xs px-3.5 py-2 rounded-full border transition-colors ${
                active
                  ? "border-primary text-primary bg-primary-soft"
                  : "border-border/40 text-foreground/60 hover:border-primary/40"
              }`}
            >
              {f.label}{" "}
              <span className="font-[family-name:var(--font-mono)] opacity-60">
                {n}
              </span>
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="text-muted-fg text-sm font-[family-name:var(--font-ui)] rounded-xl border border-dashed border-border/40 bg-card/20 px-6 py-10 text-center">
          No briefs in this view.
        </p>
      ) : (
        <div className="space-y-3">
          {shown.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      )}
    </div>
  );
}
