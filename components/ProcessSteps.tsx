"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/process";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function ProcessSteps({ compact = false }: { compact?: boolean }) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [reached, setReached] = useState(reducedMotion ? processSteps.length : 0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    if (reducedMotion) return;
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // A step can't be reached before the ones above it.
            setReached((current) => Math.max(current, i + 1));
            observer.disconnect();
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [reducedMotion]);

  return (
    <ol
      className={`grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 ${
        compact ? "lg:grid-cols-6" : "lg:grid-cols-3"
      }`}
    >
      {processSteps.map((step, i) => {
        const isActive = i < reached;
        const delay = reducedMotion ? 0 : (i % 3) * 90;

        return (
          <li
            key={step.number}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
          >
            <div
              className="relative flex flex-col gap-3 py-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:py-8"
              style={{
                transitionDelay: `${delay}ms`,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(14px)",
              }}
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left bg-silver/50 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transitionDelay: `${delay + 120}ms`,
                  transform: `scaleX(${isActive ? 1 : 0})`,
                }}
              />

              <span
                className="text-xs font-semibold tracking-[0.2em] transition-colors duration-700"
                style={{
                  transitionDelay: `${delay + 200}ms`,
                  color: isActive ? "var(--color-ink)" : "var(--color-ink-faint)",
                }}
              >
                {step.number}
              </span>
              <span className="text-base font-semibold tracking-[0.08em] text-ink">
                {step.title}
              </span>
              {!compact && (
                <p className="text-sm leading-relaxed text-ink-dim">{step.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
