# Bin to Better — Website Redesign Design Doc

**Date:** 2026-06-17
**Status:** Approved (design direction), pending spec review
**Deploys to:** https://bin2b.vercel.app/ (will eventually move to bintobetter.org)

## Goal

Rebuild the Bin to Better nonprofit website as a visual/design **refresh** of the
current site (https://bintobetter.org/, repo
`FreeForCharity/FFC-EX-bintobetter.org`). Keep essentially all content and images;
replace the incoherent, over-animated "AI slop" presentation (multiple typefaces,
multiple logo variants, framer-motion gradient orbs, diagonal dark-green splits)
with one modern, coherent, warm-and-grounded design system.

**Non-goals:** new content, new features, copy rewriting (port verbatim), CMS,
backend, auth. This is a presentation-layer rebuild on the existing stack.

## Source of truth

All content and assets come from the original repo
`FreeForCharity/FFC-EX-bintobetter.org` (branch `main`). Copy is ported
**verbatim**; only the framer-motion/decorative wrappers are discarded. Images are
copied from the original repo's `public/` into this project's `public/`.

## Design system (the core fix — ONE coherent identity)

### Brand / logo
- Use the **official logo only**. Two variants:
  - Light backgrounds: transparent black+green wordmark
    (`Untitled_design-removebg-preview.webp` from og repo → save as
    `public/logo.webp`).
  - Dark backgrounds/footer: white wordmark
    (`FreeSample-Vectorizer-io-btbWHITE (1).png`, already in this project's
    public → save as `public/logo-white.png`).
  - Favicon / social avatar: the leaf + tennis-ball mark.
- All other logo variants are dropped. The tennis-ball-dot-on-"i" nods to the
  Bounce Back (tennis balls) program.

### Color palette (5 colors, drawn from the logo + warmth)
Defined once as CSS variables + Tailwind theme tokens:
- `--paper` `#F7F4EC` — warm bone background (matches the logo's own backdrop)
- `--emerald` `#1F7A45` — primary brand green (the "better" green)
- `--lime` `#8BC53F` — sparing accent (leaves)
- `--ink` `#1A1A1A` — near-black for headlines/body
- `--clay` `#C8632E` — warm accent, used rarely for a single emphasis/CTA highlight

Neutrals derive from `--ink`/`--paper` at opacity. No other colors anywhere.

### Typography (exactly two faces)
- **Headlines/display:** Fraunces (warm humanist serif), via `next/font/google`.
- **Body/UI:** Inter (humanist sans), via `next/font/google`.
- The logo lockup is an image and does not count as a third typeface.
- A small, fixed type scale (e.g. display / h1 / h2 / h3 / body / small) defined
  once; no ad-hoc sizes.

### Components (a small shared kit — consistency by construction)
One canonical version of each, in `src/components/ui/`:
- `Section` — consistent vertical rhythm + max-width container
- `Button` — `primary` (filled emerald) / `secondary` (outline) variants only
- `Card` — one card style (rounded, soft shadow, paper/white surface)
- `Stat` — number + label (for the stats band)
- `ProgramCard` — icon + title + blurb + link
- `PhotoSlot` — renders a real image when present, else a branded paper+leaf
  placeholder (so pages look intentional even before all photos are dropped in)
- `Nav` (header) and `Footer`

### Motion
Minimal and tasteful: subtle fade/translate on scroll-in at most. **No** gradient
orbs, diagonal clip-path splits, infinite-loop animations, or dark hero gradients.
Respect `prefers-reduced-motion`.

## Information architecture

Ten pages, identical to the original (nothing dropped):

Home · About · Bounce Back · Tech to Treasure · Eco-filament · Workshop ·
Partners · Officers & Team · Events · Donate

### Navigation
Header: `Logo | About · Programs ▾ · Partners · Team · Events | Donate (button)`
- "Programs ▾" dropdown → Bounce Back, Tech to Treasure, Eco-filament, Workshop
- Mobile: hamburger → full-screen / drawer nav with the same links
- Footer: full link list, contact (outreach@bintobetter.org, Instagram
  @bintobetter, LinkedIn), white logo, copyright

## Page layouts

- **Home:** photo hero (tagline "Turning waste into opportunity. One item at a
  time, one community at a time." + two CTAs "Explore Our Projects" /
  "Get Involved") → mission strip → stats band (50K+ Items Recycled / 200+
  Partners / 15 Communities) → three program cards → testimonials → partner logo
  strip → closing donate CTA.
- **Program pages** (Bounce Back, Tech to Treasure, Eco-filament, Workshop):
  shared template — hero, what-it-is, how-it-works steps, photo slots, related
  logos (bounce-back/sponsor logos where applicable), CTA. Content per page ported
  verbatim from the corresponding original page.
- **Partners:** intro + responsive logo grid from `src/data/partners.ts`
  (`partnerLogos`).
- **Officers & Team:** photo cards per member, using `public/members/*` images and
  names/roles from the original page.
- **Events:** event list/cards ported from the original.
- **Donate:** focused page preserving the original's donate path/links.
- **About:** "Our Story" hero + Mission & Vision + what-we-do, copy ported verbatim.

## Tech approach

- Keep the deployed stack: **Next.js 16 (App Router) + Tailwind + TypeScript**.
- Brand tokens live once in Tailwind theme + `globals.css` CSS variables.
- Fonts via `next/font/google` (Fraunces, Inter) in `app/layout.tsx`.
- Reuse the original's data file pattern (`src/data/partners.ts`) and an
  `assetPath` helper if needed; copy member/partner/sponsor images into `public/`.
- Replace `next/image` usage where helpful but keep it for real photos.
- No framer-motion dependency unless a tiny scroll-fade utility is wanted; prefer
  CSS/Intersection Observer to keep the bundle lean.

## Assets to copy from og repo `public/`

- `members/*` (team photos)
- `partners-logos/*`, `bounce-back-logos/*`,
  `Sponsors for Tech TO Treasure Hackathon/*`
- Brand logo(s)

## Success criteria

- All ten pages present with original content and images, nothing lost.
- Exactly two typefaces and one logo lockup used site-wide; 5-color palette only.
- No gradient orbs / diagonal dark splits / infinite animations.
- Responsive (mobile + desktop), accessible (semantic landmarks, alt text,
  contrast, focus states, reduced-motion).
- Builds clean and deploys to https://bin2b.vercel.app/.

## Open items (resolved during build, not blockers)
- Exact testimonial quotes, team names/roles, events, and donate links pulled
  verbatim from the original pages during implementation.
- Final icon set for ProgramCards (simple custom SVGs in brand style).
