"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/faq";
import Reveal from "./Reveal";

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      <div className="bv-hairline" />
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={item.question} delay={Math.min(i * 30, 240)} as="div">
            <div className="border-b border-line">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="text-base font-medium tracking-tight text-ink md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`relative flex size-6 shrink-0 items-center justify-center transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-px w-3.5 bg-ink" />
                  <span className="absolute h-3.5 w-px bg-ink" />
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-hidden={!isOpen}
                inert={!isOpen ? true : undefined}
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-5 opacity-100 md:pb-6" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 max-w-[62ch] text-sm leading-relaxed text-ink-dim md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
