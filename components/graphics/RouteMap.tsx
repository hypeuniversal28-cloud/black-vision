"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

const ROUTE_PATH = "M150 190 C 260 90, 400 90, 500 130";

export default function RouteMap({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [intersected, setIntersected] = useState(false);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const visible = intersected || reducedMotion;
  const maskId = `bv-route-mask-${useId()}`;

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 640 320"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <path
            d={ROUTE_PATH}
            stroke="#fff"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={visible ? 0 : 1}
            style={{
              transition: reducedMotion
                ? "none"
                : "stroke-dashoffset 1.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          />
        </mask>
      </defs>
      <g opacity="0.07" stroke="currentColor" strokeWidth="0.6">
        <ellipse cx="320" cy="160" rx="270" ry="120" />
        <ellipse cx="320" cy="160" rx="270" ry="70" />
        <ellipse cx="320" cy="160" rx="150" ry="120" />
        <line x1="50" y1="160" x2="590" y2="160" />
      </g>
      <path
        d={ROUTE_PATH}
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 7"
        strokeLinecap="round"
        opacity="0.16"
        mask={`url(#${maskId})`}
      />

      {/* Shipment in transit — starts once the route has finished drawing */}
      {intersected && !reducedMotion && (
        <g>
          <circle r="7" fill="currentColor" opacity="0.14">
            <animateMotion
              dur="6s"
              begin="2.1s"
              repeatCount="indefinite"
              path={ROUTE_PATH}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="spline"
              keySplines="0.45 0 0.55 1"
            />
          </circle>
          <circle r="2.5" fill="currentColor" opacity="0.6">
            <animateMotion
              dur="6s"
              begin="2.1s"
              repeatCount="indefinite"
              path={ROUTE_PATH}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="spline"
              keySplines="0.45 0 0.55 1"
            />
          </circle>
        </g>
      )}

      <g
        style={{
          opacity: visible ? 1 : 0,
          transition: reducedMotion ? "none" : "opacity 400ms ease 200ms",
        }}
      >
        <circle cx="150" cy="190" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="150" cy="190" r="9" stroke="currentColor" strokeWidth="0.8" opacity="0.18" />
      </g>
      <g
        style={{
          opacity: visible ? 1 : 0,
          transition: reducedMotion ? "none" : "opacity 400ms ease 1700ms",
        }}
      >
        <circle cx="500" cy="130" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="500" cy="130" r="9" stroke="currentColor" strokeWidth="0.8" opacity="0.18" />
      </g>
    </svg>
  );
}
