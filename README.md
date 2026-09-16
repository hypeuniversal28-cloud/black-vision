# BLACK VISION — Private Access

Next.js (App Router) + TypeScript + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## How requests reach you

1. A client fills in the form on `/custom-request`.
2. The server (`app/api/request/route.ts`) formats the request into a message and
   builds a WhatsApp link. Your number stays server-side — it never appears in
   the page source.
3. The client sees a confirmation screen with a **SEND ON WHATSAPP** button, taps
   it, and the request arrives in your WhatsApp already written out.

Every request is also logged server-side *before* the client taps send, so a
half-finished request can still be recovered from your hosting provider's logs.

## Environment variables

Copy `.env.example` to `.env.local` and fill it in:

| Variable | What it is |
| --- | --- |
| `WHATSAPP_NUMBER` | The number that receives requests. International format, no `+`, no spaces (e.g. `15052184377`). |

**`.env.local` is never deployed.** You must set `WHATSAPP_NUMBER` in your
hosting provider's environment settings too, or the form will return an error in
production. This is the most common launch-day mistake.

## Languages

The site is available in 5 languages: **English** (default), **Arabic** (RTL),
**Chinese (Simplified)**, **French** and **Spanish**.

- **Auto-detection** — a visitor's browser language is read once, server-side,
  on their first request (`middleware.ts` via `next-intl`). If it matches a
  supported language the site opens in it silently; otherwise it falls back to
  English. No popup, no interruption.
- **Manual override** — a discreet text-only switcher (language names, no
  flags) sits in the footer and in the mobile menu. A visitor's choice is
  remembered in a cookie for their next visit.
- **URLs** — English is unprefixed (`/cars`); other languages get a prefix
  (`/fr/cars`, `/ar/cars`, …). Every page also declares `hreflang` alternates
  in `sitemap.xml` for search engines.
- **Adding or editing copy** — all translatable text lives in `messages/*.json`
  (one file per language, same key structure in all five — verified by a
  script during this build). Structural data (category slugs, icons, nav
  hrefs) stays in `lib/*.ts`; only the display text was moved.
- **Adding a 6th language** — add its code to `locales` in `i18n/routing.ts`
  and add a matching `messages/<code>.json` with the same keys as
  `messages/en.json`. Arabic is the only right-to-left language today; a new
  RTL language needs adding to `rtlLocales` in the same file.

**Known limitation:** Arabic gets a full `dir="rtl"` page direction, mirrored
arrows and mirrored major layout blocks, but not every micro-detail (some
hover animations, a couple of hairline accents) has been individually
mirrored — those still animate in their original direction. Worth a design
pass if Arabic becomes a primary market rather than a secondary one.

## Deployment

Live at **[primevgency.com](https://primevgency.com)**.

- **Source** — [github.com/hypeuniversal28-cloud/black-vision](https://github.com/hypeuniversal28-cloud/black-vision)
- **Hosting** — Vercel project `black-vision`, auto-deploys on every push to `main`
- **Domain** — `primevgency.com` and `www.primevgency.com` point to Vercel at the
  registrar (Spaceship). Email (Spacemail MX/TXT records) was left untouched.

## Before going live

- [x] **Domain** — `site.url` in `lib/site.ts` is `primevgency.com`.
- [x] **`WHATSAPP_NUMBER` set on the host** (Vercel → Environment Variables).
- [ ] **Contact channels** — `lib/site.ts` → `contact`. Only WhatsApp is filled in.
      Add `email`, `instagram`, `snapchat` when the real accounts exist; any channel
      left as an empty string is automatically hidden everywhere on the site, so
      nothing links to an account that isn't yours.
- [ ] **Legal pages** — `/privacy`, `/terms`, `/cookies` contain placeholder copy
      and need review by counsel.

## Structure

- `app/[locale]/` — one folder per route, nested under the locale segment
- `app/` (root) — `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, favicons — locale-independent
- `app/api/request/` — the WhatsApp-routing endpoint, outside the locale tree
- `i18n/` — `routing.ts` (locale list, default, RTL list), `navigation.ts` (locale-aware `Link`/`router`), `request.ts` (message loader)
- `messages/` — `en.json`, `ar.json`, `zh.json`, `fr.json`, `es.json` — all translatable copy
- `middleware.ts` — detects the visitor's language and persists their choice in a cookie
- `components/` — `Header`, `MobileMenu`, `Footer`, `LanguageSwitcher`, `TrustPoints`, `RequestForm`, `CategoryPageTemplate`, and the rest
- `components/graphics/` — `HeroGlow` (scroll parallax), `RouteMap` (animated China→Dubai route)
- `lib/` — `categories.ts`, `process.ts`, `faq.ts`, `nav.ts`, `site.ts` — structural data only; display text lives in `messages/`
- `public/brand/` — logo mark, favicons and app icons

## Notes

- No animation library: everything runs on IntersectionObserver, CSS transitions
  and SVG. Every animation respects `prefers-reduced-motion`.
- The design is intentionally photography-free — typography, fine line art and
  CSS-generated graphics. Category pages and the homepage hero are the natural
  places to drop in commissioned photography later.
