"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Tag = "div" | "li" | "h2";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cls = `bv-reveal ${visible ? "is-visible" : ""} ${className}`;
  const style = { transitionDelay: `${delay}ms` };

  if (as === "li") {
    return (
      <li ref={ref as React.Ref<HTMLLIElement>} className={cls} style={style}>
        {children}
      </li>
    );
  }

  if (as === "h2") {
    return (
      <h2 ref={ref as React.Ref<HTMLHeadingElement>} className={cls} style={style}>
        {children}
      </h2>
    );
  }

  return (
    <div ref={ref as React.Ref<HTMLDivElement>} className={cls} style={style}>
      {children}
    </div>
  );
}
