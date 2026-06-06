"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cinematic hero video loop. Plays only on larger screens with motion
 * allowed; otherwise the static poster image underneath carries the hero.
 * Fades in once the first frame is ready so there's no pop.
 */
export default function HeroVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData === true;
    if (!reduce && !small && !saveData) setEnabled(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    // React doesn't reliably set the `muted` *property* from the attribute,
    // and browsers block autoplay on non-muted video. Force it here.
    el.muted = true;
    el.defaultMuted = true;
    const tryPlay = () => {
      const p = el.play();
      if (p) p.catch(() => {});
    };
    if (el.readyState >= 2) tryPlay();
    el.addEventListener("canplay", tryPlay, { once: true });
    return () => el.removeEventListener("canplay", tryPlay);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      onCanPlay={() => setReady(true)}
      aria-hidden
      className={`hero-video transition-opacity duration-1000 ${
        ready ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
