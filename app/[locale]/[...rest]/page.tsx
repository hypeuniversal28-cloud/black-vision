import { notFound } from "next/navigation";

// Catches any path under a locale that doesn't match a real route, so
// Next.js enters the [locale] layout tree and renders our localized
// not-found.tsx instead of falling back to the framework default.
//
// The `await` below is load-bearing: a Server Component that resolves
// perfectly synchronously can hit a Turbopack dev-mode instrumentation bug
// where `performance.measure()` receives a zero-width (or, due to clock
// rounding, negative) duration and throws. Yielding one microtask first
// gives it a real duration to measure.
export default async function CatchAll(): Promise<never> {
  await Promise.resolve();
  notFound();
}
