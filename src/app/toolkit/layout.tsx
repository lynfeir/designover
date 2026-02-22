import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Toolkit — Design over Atlanta",
  description: "Internal marketing toolkit with downloadable ads, marketing plans, and promotional materials.",
  robots: { index: false, follow: false },
};

export default function ToolkitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-cream text-text-body">
      {/* Minimal header — no main site nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-terra flex items-center justify-center text-white font-bold text-sm">
              D
            </div>
            <div>
              <span className="font-bold text-text-heading text-sm">Design <span className="text-terra">over</span> Atlanta</span>
              <span className="text-text-muted text-xs ml-2 hidden sm:inline">Marketing Toolkit</span>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted bg-bg-sage px-3 py-1 rounded-full">
            Internal Use
          </span>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
