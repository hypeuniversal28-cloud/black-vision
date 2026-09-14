"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";

export default function LanguageSwitcher({
  variant = "footer",
}: {
  variant?: "footer" | "menu";
}) {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className={variant === "menu" ? "flex flex-col gap-2.5" : "flex flex-col gap-2.5"}>
      <span className="bv-eyebrow text-ink-faint">{t("label")}</span>
      <ul
        className="flex flex-wrap items-center gap-x-3 gap-y-2"
        aria-busy={isPending}
      >
        {locales.map((l, i) => (
          <li key={l} className="flex items-center gap-3">
            <button
              type="button"
              lang={l}
              onClick={() => switchTo(l)}
              aria-current={l === locale ? "true" : undefined}
              className={`bv-link-underline text-sm transition-colors ${
                l === locale ? "text-ink" : "text-ink-faint hover:text-ink-dim"
              }`}
            >
              {localeNames[l]}
            </button>
            {i < locales.length - 1 && (
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
