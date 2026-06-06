"use client";

import { useEffect, useRef, useState } from "react";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Cinematic video loop that plays on every device, layered over its poster
 * image. It only fetches when it scrolls near the viewport (so a phone
 * doesn't download a below-the-fold loop up front), and it steps aside for
 * people who ask for reduced motion, turn on Data Saver, or are on a very
 * slow connection — in those cases the static poster underneath carries it.
 */
export default function HeroVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  // Should this device / preference get video at all?
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (
      navigator as Navigator & { connection?: NetworkInfo }
    ).connection;
    const saveData = conn?.saveData === true;
    const verySlow = /(^|-)2g$/.test(conn?.effectiveType ?? "");
    if (!reduce && !saveData && !verySlow) setAllowed(true);
  }, []);

  // Only load once it's near the viewport — keeps the below-fold loop off the
  // critical path on phones.
  useEffect(() => {
    const el = containerRef.current;
    if (!allowed || !el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [allowed]);

  // Force the muted property (React's attribute alone doesn't reliably set it,
  // and browsers block autoplay on non-muted video) and start playback.
  useEffect(() => {
    const el = videoRef.current;
    if (!inView || !el) return;
    el.muted = true;
    el.defaultMuted = true;
    const tryPlay = () => {
      const p = el.play();
      if (p) p.catch(() => {});
    };
    if (el.readyState >= 2) tryPlay();
    el.addEventListener("canplay", tryPlay, { once: true });
    return () => el.removeEventListener("canplay", tryPlay);
  }, [inView]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {allowed && inView && (
        <video
          ref={videoRef}
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
      )}
    </div>
  );
}
