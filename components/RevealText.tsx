"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Tag = "h1" | "h2";

function useWordReveal() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function buildContent(text: string, delay: number, stagger: number, visible: boolean): ReactNode {
  const lines = text.split("\n");
  let wordIndex = 0;

  return lines.map((line, li) => {
    const words = line.split(" ");
    return (
      <span className="block overflow-hidden" key={li}>
        <span className="block">
          {words.map((word, wi) => {
            const idx = wordIndex++;
            return (
              <span className="inline-block overflow-hidden py-[0.08em]" key={wi}>
                <span
                  className="bv-word"
                  style={{ transitionDelay: `${delay + idx * stagger}ms` }}
                  data-visible={visible}
                >
                  {word}
                  {wi < words.length - 1 ? " " : ""}
                </span>
              </span>
            );
          })}
        </span>
      </span>
    );
  });
}

export default function RevealText({
  text,
  as = "h1",
  className = "",
  delay = 0,
  stagger = 55,
}: {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const { ref, visible } = useWordReveal();
  const content = buildContent(text, delay, stagger, visible);

  if (as === "h2") {
    return (
      <h2 ref={ref} className={className}>
        {content}
      </h2>
    );
  }

  return (
    <h1 ref={ref} className={className}>
      {content}
    </h1>
  );
}
