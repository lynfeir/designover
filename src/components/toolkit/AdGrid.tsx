"use client";

import { useState, useMemo } from "react";
import { ADS, FORMAT_LABELS, CATEGORY_LABELS, type AdFormat, type AdCategory, type AdTheme } from "./adData";
import AdCard from "./AdCard";

const THEME_LABELS: Record<AdTheme, string> = {
  dark: "Dark",
  light: "Light",
  gradient: "Gradient",
  minimal: "Minimal",
};

export default function AdGrid() {
  const [search, setSearch] = useState("");
  const [formatFilter, setFormatFilter] = useState<AdFormat | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<AdCategory | "all">("all");
  const [themeFilter, setThemeFilter] = useState<AdTheme | "all">("all");

  const filtered = useMemo(() => {
    return ADS.filter((ad) => {
      if (formatFilter !== "all" && ad.format !== formatFilter) return false;
      if (categoryFilter !== "all" && ad.category !== categoryFilter) return false;
      if (themeFilter !== "all" && ad.theme !== themeFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          ad.headline.toLowerCase().includes(q) ||
          ad.subtext.toLowerCase().includes(q) ||
          (ad.cta?.toLowerCase().includes(q) ?? false)
        );
      }
      return true;
    });
  }, [search, formatFilter, categoryFilter, themeFilter]);

  const selectClass =
    "bg-white border border-terra/15 rounded-lg px-3 py-2 text-sm text-text-heading focus:outline-none focus:border-terra transition-colors cursor-pointer";

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="text"
          placeholder="Search ads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white border border-terra/15 rounded-lg px-4 py-2 text-sm text-text-heading placeholder:text-text-muted focus:outline-none focus:border-terra transition-colors flex-1 min-w-[200px]"
        />
        <select
          value={formatFilter}
          onChange={(e) => setFormatFilter(e.target.value as AdFormat | "all")}
          className={selectClass}
        >
          <option value="all">All Formats</option>
          {(Object.entries(FORMAT_LABELS) as [AdFormat, string][]).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value as AdCategory | "all")}
          className={selectClass}
        >
          <option value="all">All Categories</option>
          {(Object.entries(CATEGORY_LABELS) as [AdCategory, string][]).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
        <select
          value={themeFilter}
          onChange={(e) => setThemeFilter(e.target.value as AdTheme | "all")}
          className={selectClass}
        >
          <option value="all">All Themes</option>
          {(Object.entries(THEME_LABELS) as [AdTheme, string][]).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
      </div>

      {/* Count */}
      <p className="text-text-muted text-sm mb-6">
        Showing <span className="text-text-heading font-semibold">{filtered.length}</span> of {ADS.length} ads
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">No ads match your filters.</p>
          <button
            onClick={() => {
              setSearch("");
              setFormatFilter("all");
              setCategoryFilter("all");
              setThemeFilter("all");
            }}
            className="mt-4 text-terra hover:text-terra text-sm font-medium transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>
      )}
    </div>
  );
}
