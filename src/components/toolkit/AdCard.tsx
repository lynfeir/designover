"use client";

import type { AdDefinition } from "./adData";
import { FORMAT_SIZES, FORMAT_LABELS } from "./adData";
import DownloadButton from "./DownloadButton";

/* ─── Theme color palettes (pure hex/rgb — NO oklab) ─── */
interface ThemeColors {
  bg: string;
  bg2: string;       // secondary bg for splits/diagonals
  text: string;
  textSub: string;
  accent: string;
  accentText: string;
  border: string;
  glow1: string;
  glow2: string;
}

function getColors(theme: AdDefinition["theme"]): ThemeColors {
  switch (theme) {
    case "dark": return {
      bg: "#1a0a24", bg2: "#2d1b3d",
      text: "#f1f0f5", textSub: "#a89bb8",
      accent: "#E91E8C", accentText: "#ffffff",
      border: "rgba(255,255,255,0.1)",
      glow1: "rgba(233,30,140,0.15)", glow2: "rgba(74,140,42,0.1)",
    };
    case "light": return {
      bg: "#FAFAFF", bg2: "#f5f0fa",
      text: "#2D1B3D", textSub: "#5c4a6e",
      accent: "#9B59B6", accentText: "#ffffff",
      border: "#e0d4ec",
      glow1: "rgba(155,89,182,0.08)", glow2: "rgba(233,30,140,0.06)",
    };
    case "gradient": return {
      bg: "#7B2D8E", bg2: "#E91E8C",
      text: "#ffffff", textSub: "#f0d4ff",
      accent: "#ffffff", accentText: "#7B2D8E",
      border: "rgba(255,255,255,0.2)",
      glow1: "rgba(233,30,140,0.25)", glow2: "rgba(245,166,35,0.15)",
    };
    case "minimal": return {
      bg: "#FAFAFF", bg2: "#f5f0fa",
      text: "#2D1B3D", textSub: "#5c4a6e",
      accent: "#2D1B3D", accentText: "#ffffff",
      border: "#e0d4ec",
      glow1: "rgba(155,89,182,0.06)", glow2: "rgba(0,0,0,0.03)",
    };
  }
}

/* ─── Font size helpers ─── */
function getFontSizes(format: AdDefinition["format"]) {
  const isStory = format === "ig-story";
  const isWide = format === "fb-post" || format === "twitter";
  return {
    headline: isStory ? 68 : isWide ? 48 : 58,
    sub: isStory ? 26 : isWide ? 22 : 24,
    cta: isStory ? 24 : isWide ? 18 : 20,
    badge: isStory ? 18 : 14,
    stat: isStory ? 160 : isWide ? 100 : 130,
    icon: isStory ? 80 : isWide ? 56 : 64,
    brand: isStory ? 18 : 14,
    quote: isStory ? 48 : isWide ? 32 : 40,
  };
}

function getPreviewScale(format: AdDefinition["format"]) {
  return 320 / FORMAT_SIZES[format].w;
}

/* ─── Layout Renderers ─── */
// Each returns JSX for the ad canvas interior — all using inline styles only

function LayoutCentered({ ad, c, f, w }: LayoutProps) {
  return (
    <>
      <Glows c={c} w={w} />
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.07, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Headline ad={ad} c={c} f={f} align="center" />
        <Subtext ad={ad} c={c} f={f} align="center" />
        <CtaButton ad={ad} c={c} f={f} />
      </div>
    </>
  );
}

function LayoutLeftAlign({ ad, c, f, w, h }: LayoutProps) {
  return (
    <>
      <Glows c={c} w={w} />
      {/* Accent bar on the left */}
      <div style={{ position: "absolute", left: 0, top: h * 0.15, width: 6, height: h * 0.7, background: c.accent, borderRadius: 3 }} />
      <div style={{ position: "relative", zIndex: 2, padding: `${w * 0.1}px ${w * 0.1}px ${w * 0.1}px ${w * 0.08}px`, textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
        <Headline ad={ad} c={c} f={f} align="left" />
        <Subtext ad={ad} c={c} f={f} align="left" />
        <CtaButton ad={ad} c={c} f={f} align="left" />
      </div>
    </>
  );
}

function LayoutSplit({ ad, c, f, w, h }: LayoutProps) {
  const isWide = ad.format === "fb-post" || ad.format === "twitter";
  const splitRatio = isWide ? 0.45 : 0.4;
  return (
    <>
      {/* Top colored block */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: `${splitRatio * 100}%`, background: `linear-gradient(135deg, ${c.accent}, ${c.bg2})` }}>
        {/* Decorative dots */}
        <div style={{ position: "absolute", bottom: w * 0.04, right: w * 0.06, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, opacity: 0.3 }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
          ))}
        </div>
        <div style={{ padding: w * 0.06, display: "flex", alignItems: "flex-end", height: "100%" }}>
          <div style={{ fontSize: f.headline * 0.7, fontWeight: 800, color: "#fff", lineHeight: 1.1, whiteSpace: "pre-line", fontFamily: "'Satoshi','Inter',sans-serif" }}>
            {ad.headline}
          </div>
        </div>
      </div>
      {/* Bottom content */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${(1 - splitRatio) * 100}%`, padding: w * 0.06, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: f.sub, color: c.textSub, lineHeight: 1.6, whiteSpace: "pre-line", marginBottom: h * 0.03 }}>{ad.subtext}</div>
        <CtaButton ad={ad} c={c} f={f} align="left" />
      </div>
    </>
  );
}

function LayoutBigNumber({ ad, c, f, w }: LayoutProps) {
  return (
    <>
      <Glows c={c} w={w} />
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.07, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
        {/* Big stat */}
        {ad.statNumber && (
          <div style={{ fontSize: f.stat, fontWeight: 900, color: c.accent, lineHeight: 1, fontFamily: "'Satoshi','Inter',sans-serif", letterSpacing: "-0.04em" }}>
            {ad.statNumber}
          </div>
        )}
        {ad.statLabel && (
          <div style={{ fontSize: f.sub, color: c.textSub, marginTop: w * 0.01, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            {ad.statLabel}
          </div>
        )}
        {/* Divider line */}
        <div style={{ width: w * 0.12, height: 3, background: c.accent, margin: `${w * 0.03}px auto`, borderRadius: 2, opacity: 0.5 }} />
        <div style={{ fontSize: f.sub, color: c.textSub, lineHeight: 1.6, whiteSpace: "pre-line", maxWidth: "85%" }}>{ad.subtext}</div>
        <CtaButton ad={ad} c={c} f={f} />
      </div>
    </>
  );
}

function LayoutQuote({ ad, c, f, w }: LayoutProps) {
  return (
    <>
      <Glows c={c} w={w} />
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.08, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
        {/* Large quotation mark */}
        <div style={{ fontSize: f.stat * 0.8, color: c.accent, opacity: 0.2, lineHeight: 0.5, fontFamily: "Georgia, serif", marginBottom: w * 0.02 }}>
          &ldquo;
        </div>
        {/* Quote text */}
        <div style={{ fontSize: f.quote, color: c.text, fontWeight: 600, lineHeight: 1.35, whiteSpace: "pre-line", fontStyle: "italic", maxWidth: "90%", fontFamily: "'Satoshi','Inter',sans-serif" }}>
          {ad.headline}
        </div>
        {/* Author */}
        {ad.quoteName && (
          <div style={{ marginTop: w * 0.04, display: "flex", alignItems: "center", gap: w * 0.02 }}>
            {/* Avatar circle with initials */}
            <div style={{ width: w * 0.06, height: w * 0.06, borderRadius: "50%", background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", color: c.accentText, fontSize: f.badge, fontWeight: 700, flexShrink: 0 }}>
              {ad.quoteInitials}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: f.cta * 0.9, color: c.text, fontWeight: 700 }}>{ad.quoteName}</div>
              <div style={{ fontSize: f.badge, color: c.textSub }}>{ad.quoteRole}</div>
            </div>
          </div>
        )}
        <CtaButton ad={ad} c={c} f={f} />
      </div>
    </>
  );
}

function LayoutComparisonTable({ ad, c, f, w, h }: LayoutProps) {
  const leftLines = (ad.compareLeft || "").split("\n");
  const rightLines = (ad.compareRight || "").split("\n");
  return (
    <>
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.06, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", textAlign: "center" }}>
        <div style={{ fontSize: f.headline * 0.7, fontWeight: 800, color: c.text, lineHeight: 1.15, marginBottom: h * 0.03, fontFamily: "'Satoshi','Inter',sans-serif" }}>
          {ad.headline}
        </div>
        {/* Two columns */}
        <div style={{ display: "flex", gap: w * 0.03, justifyContent: "center" }}>
          {/* Left (them) */}
          <div style={{ flex: 1, background: ad.theme === "dark" || ad.theme === "gradient" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: w * 0.02, padding: w * 0.03 }}>
            {leftLines.map((line, i) => (
              <div key={i} style={{ fontSize: i === 0 ? f.sub * 1.1 : f.sub * 0.9, fontWeight: i === 0 ? 800 : 500, color: i === 0 ? "#ef4444" : c.textSub, marginBottom: i < leftLines.length - 1 ? 8 : 0, lineHeight: 1.5 }}>
                {line}
              </div>
            ))}
          </div>
          {/* Right (us) */}
          <div style={{ flex: 1, background: `${c.accent}15`, border: `2px solid ${c.accent}`, borderRadius: w * 0.02, padding: w * 0.03 }}>
            {rightLines.map((line, i) => (
              <div key={i} style={{ fontSize: i === 0 ? f.sub * 1.1 : f.sub * 0.9, fontWeight: i === 0 ? 800 : 500, color: i === 0 ? c.accent : c.text, marginBottom: i < rightLines.length - 1 ? 8 : 0, lineHeight: 1.5 }}>
                {line}
              </div>
            ))}
          </div>
        </div>
        <CtaButton ad={ad} c={c} f={f} />
      </div>
    </>
  );
}

function LayoutStackedBadges({ ad, c, f, w }: LayoutProps) {
  return (
    <>
      <Glows c={c} w={w} />
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.07, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
        <Headline ad={ad} c={c} f={f} align="center" />
        {/* Pills */}
        {ad.pills && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: w * 0.015, justifyContent: "center", marginTop: w * 0.03, marginBottom: w * 0.02 }}>
            {ad.pills.map((pill, i) => (
              <div key={i} style={{ background: `${c.accent}20`, border: `1.5px solid ${c.accent}`, color: c.accent === "#ffffff" ? "#fff" : c.accent, fontSize: f.cta * 0.85, fontWeight: 700, padding: `${w * 0.01}px ${w * 0.025}px`, borderRadius: w * 0.05, letterSpacing: "0.02em" }}>
                {pill}
              </div>
            ))}
          </div>
        )}
        <div style={{ fontSize: f.sub, color: c.textSub, lineHeight: 1.6, whiteSpace: "pre-line", maxWidth: "85%", marginTop: w * 0.01 }}>{ad.subtext}</div>
        <CtaButton ad={ad} c={c} f={f} />
      </div>
    </>
  );
}

function LayoutDiagonal({ ad, c, f, w, h }: LayoutProps) {
  return (
    <>
      {/* Diagonal background split */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-20%", width: "140%", height: "140%",
          background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accent} 45%, transparent 45.5%)`,
          opacity: 0.12,
        }} />
        {/* Circle accent */}
        <div style={{
          position: "absolute", top: -h * 0.15, right: -w * 0.1,
          width: w * 0.55, height: w * 0.55, borderRadius: "50%",
          border: `3px solid ${c.accent}`, opacity: 0.15,
        }} />
      </div>
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.08, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", textAlign: "left" }}>
        <Headline ad={ad} c={c} f={f} align="left" />
        <Subtext ad={ad} c={c} f={f} align="left" />
        <CtaButton ad={ad} c={c} f={f} align="left" />
      </div>
    </>
  );
}

function LayoutCornerAccent({ ad, c, f, w, h }: LayoutProps) {
  return (
    <>
      {/* Large corner geometric shape */}
      <div style={{ position: "absolute", top: -h * 0.2, right: -w * 0.15, width: w * 0.6, height: w * 0.6, borderRadius: w * 0.08, background: c.accent, opacity: 0.08, transform: "rotate(25deg)" }} />
      {/* Small accent circle */}
      <div style={{ position: "absolute", bottom: h * 0.1, left: w * 0.05, width: w * 0.12, height: w * 0.12, borderRadius: "50%", border: `2.5px solid ${c.accent}`, opacity: 0.2 }} />
      <Glows c={c} w={w} />
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.08, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", textAlign: "left" }}>
        <Headline ad={ad} c={c} f={f} align="left" />
        <Subtext ad={ad} c={c} f={f} align="left" />
        <CtaButton ad={ad} c={c} f={f} align="left" />
      </div>
    </>
  );
}

function LayoutMinimalLine({ ad, c, f, w }: LayoutProps) {
  return (
    <div style={{ position: "relative", zIndex: 2, padding: w * 0.1, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", textAlign: "center" }}>
      <Headline ad={ad} c={c} f={f} align="center" />
      {/* Horizontal accent line */}
      <div style={{ width: w * 0.15, height: 3, background: c.accent, margin: `${w * 0.035}px auto`, borderRadius: 2 }} />
      <Subtext ad={ad} c={c} f={f} align="center" />
      <CtaButton ad={ad} c={c} f={f} />
    </div>
  );
}

function LayoutIconTop({ ad, c, f, w }: LayoutProps) {
  return (
    <>
      <Glows c={c} w={w} />
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.07, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
        {/* Icon circle */}
        {ad.icon && (
          <div style={{ width: w * 0.13, height: w * 0.13, borderRadius: "50%", background: `${c.accent}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: f.icon, marginBottom: w * 0.03, border: `2px solid ${c.accent}30` }}>
            {ad.icon}
          </div>
        )}
        <Headline ad={ad} c={c} f={f} align="center" />
        <Subtext ad={ad} c={c} f={f} align="center" />
        <CtaButton ad={ad} c={c} f={f} />
      </div>
    </>
  );
}

function LayoutBottomBar({ ad, c, f, w, h }: LayoutProps) {
  return (
    <>
      <Glows c={c} w={w} />
      <div style={{ position: "relative", zIndex: 2, padding: w * 0.08, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", textAlign: "center", paddingBottom: h * 0.12 }}>
        <Headline ad={ad} c={c} f={f} align="center" />
        <Subtext ad={ad} c={c} f={f} align="center" />
      </div>
      {/* Bottom colored bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: h * 0.1, background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3 }}>
        <span style={{ color: c.accentText, fontSize: f.cta, fontWeight: 700, letterSpacing: "0.04em" }}>
          {ad.cta || "Learn More"}
        </span>
      </div>
    </>
  );
}

/* ─── Shared sub-components ─── */
interface LayoutProps {
  ad: AdDefinition;
  c: ThemeColors;
  f: ReturnType<typeof getFontSizes>;
  w: number;
  h: number;
}

function Glows({ c, w }: { c: ThemeColors; w: number }) {
  return (
    <>
      <div style={{ position: "absolute", top: "-12%", right: "-10%", width: w * 0.5, height: w * 0.5, borderRadius: "50%", background: `radial-gradient(circle, ${c.glow1}, transparent)`, filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-8%", left: "-10%", width: w * 0.35, height: w * 0.35, borderRadius: "50%", background: `radial-gradient(circle, ${c.glow2}, transparent)`, filter: "blur(50px)", pointerEvents: "none" }} />
    </>
  );
}

function Headline({ ad, c, f, align }: { ad: AdDefinition; c: ThemeColors; f: ReturnType<typeof getFontSizes>; align: string }) {
  if (ad.layout === "quote") return null; // quote layout handles its own headline
  return (
    <div style={{ fontSize: f.headline, fontWeight: 800, color: c.text, lineHeight: 1.1, whiteSpace: "pre-line", letterSpacing: "-0.02em", fontFamily: "'Satoshi','Inter',sans-serif", textAlign: align as "left" | "center" }}>
      {ad.headline}
    </div>
  );
}

function Subtext({ ad, c, f, align }: { ad: AdDefinition; c: ThemeColors; f: ReturnType<typeof getFontSizes>; align: string }) {
  if (!ad.subtext) return null;
  return (
    <div style={{ fontSize: f.sub, color: c.textSub, lineHeight: 1.6, whiteSpace: "pre-line", marginTop: f.sub * 0.8, textAlign: align as "left" | "center", maxWidth: align === "center" ? "85%" : "100%", ...(align === "center" ? { marginLeft: "auto", marginRight: "auto" } : {}) }}>
      {ad.subtext}
    </div>
  );
}

function CtaButton({ ad, c, f, align }: { ad: AdDefinition; c: ThemeColors; f: ReturnType<typeof getFontSizes>; align?: string }) {
  if (!ad.cta || ad.layout === "bottom-bar") return null;
  return (
    <div style={{
      display: "inline-block", background: c.accent, color: c.accentText,
      fontSize: f.cta, fontWeight: 700, padding: `${f.cta * 0.7}px ${f.cta * 1.8}px`,
      borderRadius: f.cta * 0.6, marginTop: f.sub * 1.2, letterSpacing: "0.02em",
      ...(align === "left" ? { alignSelf: "flex-start" } : {}),
    }}>
      {ad.cta}
    </div>
  );
}

/* ─── Pick layout ─── */
function renderLayout(props: LayoutProps) {
  switch (props.ad.layout) {
    case "left-align": return <LayoutLeftAlign {...props} />;
    case "split": return <LayoutSplit {...props} />;
    case "big-number": return <LayoutBigNumber {...props} />;
    case "quote": return <LayoutQuote {...props} />;
    case "comparison-table": return <LayoutComparisonTable {...props} />;
    case "stacked-badges": return <LayoutStackedBadges {...props} />;
    case "diagonal": return <LayoutDiagonal {...props} />;
    case "corner-accent": return <LayoutCornerAccent {...props} />;
    case "minimal-line": return <LayoutMinimalLine {...props} />;
    case "icon-top": return <LayoutIconTop {...props} />;
    case "bottom-bar": return <LayoutBottomBar {...props} />;
    case "centered":
    default: return <LayoutCentered {...props} />;
  }
}

/* ─── Main component ─── */
export default function AdCard({ ad }: { ad: AdDefinition }) {
  const { w, h } = FORMAT_SIZES[ad.format];
  const scale = getPreviewScale(ad.format);
  const c = getColors(ad.theme);
  const f = getFontSizes(ad.format);

  const bgStyle = ad.theme === "gradient"
    ? { background: `linear-gradient(135deg, ${c.bg}, #9B59B6, ${c.bg2})` }
    : { background: c.bg };

  return (
    <div
      style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "#2d1b3d", overflow: "hidden", transition: "all 0.2s" }}
      data-ad-wrapper
    >
      {/* Preview container */}
      <div style={{ position: "relative", overflow: "hidden", width: w * scale, height: h * scale }}>
        {/* Full-resolution ad canvas (scaled for preview) */}
        <div
          id={ad.id}
          style={{
            ...bgStyle,
            width: w, height: h,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "relative",
            overflow: "hidden",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {/* Badge */}
          {ad.badge && (
            <div style={{
              position: "absolute", top: w * 0.035, left: w * 0.035, zIndex: 10,
              background: c.accent, color: c.accentText,
              fontSize: f.badge, fontWeight: 700, padding: `${f.badge * 0.5}px ${f.badge * 1.2}px`,
              borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              {ad.badge}
            </div>
          )}

          {/* Layout content */}
          {renderLayout({ ad, c, f, w, h })}

          {/* Brand watermark */}
          <div style={{
            position: "absolute", bottom: w * 0.025, left: 0, right: 0,
            textAlign: "center", color: c.textSub, opacity: 0.4,
            fontSize: f.brand, fontWeight: 500, letterSpacing: "0.05em", zIndex: 5,
          }}>
            Design over Atlanta
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <p className="text-text-white text-sm font-semibold truncate">
            {ad.headline.replace(/\n/g, " ").substring(0, 45)}{ad.headline.length > 45 ? "..." : ""}
          </p>
          <p className="text-text-muted text-xs mt-0.5">
            {FORMAT_LABELS[ad.format]} &middot; {w}&times;{h}
          </p>
        </div>
        <DownloadButton
          targetId={ad.id}
          filename={`doa-${ad.category}-${ad.id}`}
          width={w}
          height={h}
        />
      </div>
    </div>
  );
}
