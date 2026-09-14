import { notFound } from "next/navigation";

// Catches any path under a locale that doesn't match a real route, so
// Next.js enters the [locale] layout tree and renders our localized
// not-found.tsx instead of falling back to the framework default.
export default function CatchAll(): never {
  notFound();
}
