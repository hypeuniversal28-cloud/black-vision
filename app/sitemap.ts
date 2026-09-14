import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/categories";
import { routing } from "@/i18n/routing";

function localizedPath(route: string, locale: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}/${route}`.replace(/\/$/, "") || `${prefix}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "custom-request",
    "how-it-works",
    "about",
    "contact",
    "faq",
    "privacy",
    "terms",
    "cookies",
  ];

  const categoryRoutes = categories.map((c) => c.slug);
  const routes = [...staticRoutes, ...categoryRoutes];

  return routes.map((route) => {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = `${site.url}${localizedPath(route, locale)}`;
    }
    languages["x-default"] = `${site.url}${localizedPath(route, routing.defaultLocale)}`;

    return {
      url: `${site.url}${localizedPath(route, routing.defaultLocale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7,
      alternates: { languages },
    };
  });
}
