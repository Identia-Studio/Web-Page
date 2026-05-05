# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Serve production build
npm run lint     # ESLint
```

No test suite is configured.

Type-check only (no emit):
```bash
npx tsc --noEmit
```

## Architecture

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · next-intl

### Routing & i18n

All pages live under `app/[locale]/`. Supported locales: `es`, `en`. Path translations are defined in `i18n/routing.ts` — e.g. `/referrals` becomes `/referidos` in Spanish.

`middleware.ts` handles locale detection in this order: already-prefixed path → Googlebot (always → `/es`) → Vercel IP country header (`x-vercel-ip-country`) → `Accept-Language` → fallback to `/es`.

Translation strings live in `messages/es.json` and `messages/en.json`. Use the `useTranslations` hook (client) or `getTranslations` (server) from `next-intl` to access them.

### Component structure

```
components/
  layout/        # BaseLayout, Header, Footer (Navbar10)
  sections/
    home/        # Hero, WhatWeDo, HowWeWork, Portfolio, etc.
    referrals/   # Referral program pages
    shared/      # ContactForm (Formspree), ScheduleCTASection
  ui/            # shadcn/ui primitives + custom animated variants
  animations/    # Signal waves, etc.
  icons/         # WhatsApp icon, etc.
```

`BaseLayout` (`components/layout/base_layout.tsx`) wraps every page with `ParallaxProvider`, `Navbar10`, `CTASection`, and `Footer`. It is always rendered — avoid duplicating these in individual pages.

### Styling conventions

- Dark theme is forced: `<html className="dark">`, `bg-black text-white` on body.
- Fonts: Poppins (body) + Montserrat (titles via `font-titles` class), loaded via Google Fonts in `app/[locale]/layout.tsx`.
- Path alias `@/*` maps to the repo root.

### Analytics & integrations

- **Google Analytics / GTM:** via `@next/third-parties` — IDs from `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GT_ID`.
- **Facebook Pixel:** inline script in locale layout (pixel ID `816576931331776`).
- **Contact form:** submits to Formspree (`https://formspree.io/f/xpwopzzz`).
- **Calendly:** `components/calendly.tsx`, integrated into schedule CTA section.

### Environment variables

```
NEXT_PUBLIC_GA_ID   # Google Analytics measurement ID
NEXT_PUBLIC_GT_ID   # Google Tag Manager container ID
```
