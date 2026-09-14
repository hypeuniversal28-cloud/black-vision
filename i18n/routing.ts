import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ar", "zh", "fr", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  zh: "中文",
  fr: "Français",
  es: "Español",
};

export const rtlLocales: readonly Locale[] = ["ar"];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});
