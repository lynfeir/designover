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
    <div className="min-h-screen bg-background text-muted-fg">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 glass border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-background font-[family-name:var(--font-ui)] font-bold text-sm">
              D
            </div>
            <div>
              <span className="font-[family-name:var(--font-ui)] font-bold text-foreground text-sm">Design <span className="text-primary">over</span> Atlanta</span>
              <span className="font-[family-name:var(--font-ui)] text-muted-fg text-xs ml-2 hidden sm:inline">Marketing Toolkit</span>
            </div>
          </div>
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1">
            Internal Use
          </span>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
