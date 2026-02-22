"use client";

import { useState } from "react";
import ToolkitNav, { type ToolkitTab } from "@/components/toolkit/ToolkitNav";
import AdGrid from "@/components/toolkit/AdGrid";
import MarketingPlans from "@/components/toolkit/MarketingPlans";
import ReferralProgram from "@/components/toolkit/ReferralProgram";
import PromoMaterials from "@/components/toolkit/PromoMaterials";

const TAB_TITLES: Record<ToolkitTab, { title: string; desc: string }> = {
  ads: {
    title: "Ad Library",
    desc: "106 downloadable social media ads in 4 formats. Filter by category, theme, or format, then download as PNG.",
  },
  plans: {
    title: "Marketing Plans",
    desc: "Ready-made marketing strategies and action plans. Copy, customize, and execute.",
  },
  referral: {
    title: "Referral Program",
    desc: "Earn $50 for every client you refer. Pre-written messages, milestone bonuses, and shareable materials.",
  },
  promo: {
    title: "Promotional Materials",
    desc: "Elevator pitches, email signatures, business card copy, flyer templates, and social media bios.",
  },
};

export default function ToolkitPage() {
  const [activeTab, setActiveTab] = useState<ToolkitTab>("ads");
  const meta = TAB_TITLES[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-heading tracking-tight">
          Marketing Toolkit
        </h1>
        <p className="text-text-muted text-lg mt-2 max-w-2xl">
          Everything you need to promote Design over Atlanta. Downloadable ads,
          marketing plans, referral materials, and promotional copy — all in one place.
        </p>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { value: "106", label: "Downloadable Ads" },
          { value: "4", label: "Social Formats" },
          { value: "5", label: "Marketing Plans" },
          { value: "$50", label: "Referral Bonus" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white border border-terra/10 rounded-xl p-4 text-center"
          >
            <div className="text-2xl font-extrabold text-terra">{s.value}</div>
            <div className="text-text-muted text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tab nav */}
      <ToolkitNav active={activeTab} onChange={setActiveTab} />

      {/* Section header */}
      <div className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-text-heading">{meta.title}</h2>
        <p className="text-text-muted text-sm mt-1">{meta.desc}</p>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "ads" && <AdGrid />}
        {activeTab === "plans" && <MarketingPlans />}
        {activeTab === "referral" && <ReferralProgram />}
        {activeTab === "promo" && <PromoMaterials />}
      </div>
    </div>
  );
}
