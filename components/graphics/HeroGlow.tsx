"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function HeroGlow({ className = "" }: { className?: string }) {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      // Capped so the drift stays a hint of depth, never a visible slide.
      const glowShift = Math.min(y * 0.12, 36);
      const gridShift = Math.min(y * 0.05, 18);
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(-50%, ${glowShift}px, 0)`;
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(0, ${gridShift}px, 0)`;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        ref={glowRef}
        className="absolute left-1/2 top-[-10%] h-[70vh] w-[140vw] -translate-x-1/2 rounded-full opacity-60 will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,245,245,0.10), rgba(245,245,245,0.02) 60%, transparent 75%)",
        }}
      />
      <div
        ref={gridRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,245,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 20%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 20%, black 0%, transparent 75%)",
        }}
      />
    </div>
  );
}
