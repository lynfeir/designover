"use client";

export type ToolkitTab = "ads" | "plans" | "referral" | "promo";

const TABS: { id: ToolkitTab; label: string; icon: string; count?: string }[] = [
  { id: "ads", label: "Ad Library", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", count: "106" },
  { id: "plans", label: "Marketing Plans", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  { id: "referral", label: "Referral Program", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { id: "promo", label: "Promo Materials", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
];

export default function ToolkitNav({
  active,
  onChange,
}: {
  active: ToolkitTab;
  onChange: (tab: ToolkitTab) => void;
}) {
  return (
    <nav className="flex flex-wrap gap-2">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            active === tab.id
              ? "bg-terra text-white shadow-lg shadow-terra/20"
              : "bg-terra/5 text-text-muted hover:bg-terra/10 hover:text-terra"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={tab.icon} />
          </svg>
          {tab.label}
          {tab.count && (
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              active === tab.id ? "bg-terra/20" : "bg-terra/10"
            }`}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
}
