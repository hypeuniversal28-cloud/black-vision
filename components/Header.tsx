"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Mark from "./Mark";
import MobileMenu from "./MobileMenu";
import { primaryNav } from "@/lib/nav";
import { categories } from "@/lib/categories";
import { ArrowIcon } from "./icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const pathname = usePathname();
  const [trackedPathname, setTrackedPathname] = useState(pathname);

  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setMenuOpen(false);
    setCategoriesOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" aria-label="BLACK VISION — Home" className="shrink-0">
            <Mark size={26} className="[&_span]:hidden sm:[&_span]:inline-flex" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button
                type="button"
                className="bv-eyebrow flex items-center gap-1.5 text-ink transition-colors hover:text-ink"
                aria-expanded={categoriesOpen}
                onClick={() => setCategoriesOpen((v) => !v)}
              >
                CATEGORIES
                <ArrowIcon className="size-3 rotate-90" />
              </button>
              <div
                aria-hidden={!categoriesOpen}
                inert={!categoriesOpen ? true : undefined}
                className={`absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                  categoriesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-1 opacity-0"
                }`}
              >
                <div className="rounded-sm border border-line bg-surface p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="flex items-center justify-between rounded-sm px-3 py-2.5 text-sm text-ink-dim transition-colors hover:bg-surface-2 hover:text-ink"
                    >
                      {c.navLabel}
                    </Link>
                  ))}
                  <div className="my-1 bv-hairline" />
                  <Link
                    href="/custom-request"
                    className="flex items-center justify-between rounded-sm px-3 py-2.5 text-sm text-ink-dim transition-colors hover:bg-surface-2 hover:text-ink"
                  >
                    CUSTOM REQUEST
                  </Link>
                </div>
              </div>
            </div>

            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bv-eyebrow bv-link-underline text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/custom-request"
              className="bv-btn-sweep hidden items-center gap-2 rounded-sm border border-ink px-4 py-2.5 text-xs font-semibold tracking-[0.14em] text-ink lg:inline-flex"
            >
              SEND A REQUEST
            </Link>
            <Link
              href="/custom-request"
              className="inline-flex min-h-11 items-center rounded-sm border border-ink px-4 text-[0.65rem] font-semibold tracking-[0.1em] text-ink lg:hidden"
            >
              REQUEST
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex size-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
