import en from "@/messages/en.json";

/**
 * Page <title> stays in English regardless of the visitor's language, so the
 * browser tab / bookmark / search-result title is always consistent. Only
 * the title uses this — meta descriptions and page content stay localized.
 */
export function englishTitle(path: string): string {
  const parts = path.split(".");
  let current: unknown = en;
  for (const part of parts) {
    current = (current as Record<string, unknown> | undefined)?.[part];
  }
  if (typeof current !== "string") {
    throw new Error(`englishTitle: no string at "${path}"`);
  }
  return current;
}
