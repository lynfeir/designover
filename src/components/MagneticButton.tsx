"use client";

import { useRef } from "react";
import { Link } from "next-view-transitions";

/**
 * A primary link button that gently pulls toward the cursor on hover.
 * The translate is applied to a wrapper so it composes with any inner
 * button styling, and it no-ops for reduced-motion and touch.
 */
export default function MagneticButton({
  href,
  className = "",
  children,
  strength = 0.35,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  strength?: number;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (wrapRef.current) wrapRef.current.style.transform = "";
  };

  return (
    <span
      ref={wrapRef}
      className="magnetic inline-block"
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </span>
  );
}
