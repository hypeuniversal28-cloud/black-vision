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

## Before going live

- [ ] **Domain** — `site.url` in `lib/site.ts` is still `blackvision.com`. It feeds
      metadata, `sitemap.xml`, `robots.txt` and social share previews.
- [ ] **`WHATSAPP_NUMBER` set on the host** (see above).
- [ ] **Contact channels** — `lib/site.ts` → `contact`. Only WhatsApp is filled in.
      Add `email`, `instagram`, `snapchat` when the real accounts exist; any channel
      left as an empty string is automatically hidden everywhere on the site, so
      nothing links to an account that isn't yours.
- [ ] **Legal pages** — `/privacy`, `/terms`, `/cookies` contain placeholder copy
      and need review by counsel.

## Structure

- `app/` — one folder per route, plus `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`
- `components/` — `Header`, `MobileMenu`, `Footer`, `RequestForm`, `CategoryPageTemplate`, and the rest
- `components/graphics/` — `HeroGlow` (scroll parallax), `RouteMap` (animated China→Dubai route)
- `lib/` — `categories.ts`, `process.ts`, `faq.ts`, `nav.ts`, `site.ts` (single source of truth for shared copy)
- `public/brand/` — logo mark, favicons and app icons

## Notes

- No animation library: everything runs on IntersectionObserver, CSS transitions
  and SVG. Every animation respects `prefers-reduced-motion`.
- The design is intentionally photography-free — typography, fine line art and
  CSS-generated graphics. Category pages and the homepage hero are the natural
  places to drop in commissioned photography later.
