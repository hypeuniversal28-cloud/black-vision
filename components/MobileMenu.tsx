"use client";

import Link from "next/link";
import { categories } from "@/lib/categories";
import { primaryNav } from "@/lib/nav";
import { site } from "@/lib/site";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-bg transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-8">
        <p className="bv-eyebrow mb-4">CATEGORIES</p>
        <ul className="flex flex-col">
          {categories.map((c) => (
            <li key={c.slug} className="border-b border-line">
              <Link
                href={`/${c.slug}`}
                onClick={onClose}
                className="flex items-center justify-between py-4 text-xl font-medium tracking-tight text-ink"
              >
                {c.navLabel}
              </Link>
            </li>
          ))}
          <li className="border-b border-line">
            <Link
              href="/custom-request"
              onClick={onClose}
              className="flex items-center justify-between py-4 text-xl font-medium tracking-tight text-ink"
            >
              CUSTOM REQUEST
            </Link>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="bv-eyebrow py-2.5 text-ink-dim"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={onClose} className="bv-eyebrow py-2.5 text-ink-dim">
            CONTACT
          </Link>
        </div>

        <div className="mt-auto flex flex-col gap-4 pt-10">
          <Link
            href="/custom-request"
            onClick={onClose}
            className="flex items-center justify-center rounded-sm border border-ink bg-ink py-4 text-sm font-semibold tracking-[0.14em] text-bg"
          >
            SEND A REQUEST →
          </Link>
          <p className="text-center text-xs tracking-[0.1em] text-ink-faint">
            {site.locations.join(" • ")} • WORLDWIDE
          </p>
        </div>
      </div>
    </div>
  );
}
