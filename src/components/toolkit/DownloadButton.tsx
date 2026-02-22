"use client";

import { useCallback } from "react";
import html2canvas from "html2canvas";

interface Props {
  targetId: string;
  filename: string;
  width: number;
  height: number;
}

export default function DownloadButton({ targetId, filename, width, height }: Props) {
  const download = useCallback(async () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    // Temporarily make the element visible at full resolution for capture
    const wrapper = el.closest("[data-ad-wrapper]") as HTMLElement | null;
    const prevStyle = el.getAttribute("style") || "";

    // Set to exact pixel dimensions for capture
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.position = "fixed";
    el.style.left = "-9999px";
    el.style.top = "0";
    el.style.transform = "none";
    el.style.zIndex = "-1";

    if (wrapper) wrapper.style.overflow = "visible";

    try {
      const canvas = await html2canvas(el, {
        width,
        height,
        scale: 1,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      el.setAttribute("style", prevStyle);
      if (wrapper) wrapper.style.overflow = "";
    }
  }, [targetId, filename, width, height]);

  return (
    <button
      onClick={download}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-terra hover:bg-terra-dark text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download PNG
    </button>
  );
}
