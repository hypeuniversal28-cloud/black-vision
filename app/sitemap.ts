import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories } from "@/lib/categories";

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

  return [...staticRoutes, ...categoryRoutes].map((route) => ({
    url: `${site.url}/${route}`.replace(/\/$/, "") || site.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
