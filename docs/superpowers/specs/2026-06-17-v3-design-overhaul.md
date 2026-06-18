# Bin to Better v3 — Distinctive Design Overhaul (no AI slop)

The v2 site is AI-default look #1 (cream + serif + terracotta). Replace the entire
visual language with a distinctive, green-DOMINANT, editorial system grounded in the
subject (reuse, tennis balls, measured impact). Keep all content; change the look.

## Hard "no-slop" rules
- NO emojis anywhere (replace with the arrow motif / minimal line SVGs / nothing).
- NO rounded "pill" eyebrows or badges (no `rounded-full` inline-block label chips).
  Eyebrows = DM Mono uppercase label + a short hairline rule or a court-green tick.
- NO full-pill buttons everywhere; buttons are squared (`rounded-[3px]`/`rounded-sm`).
- Flatter cards: 1px borders, minimal/no drop shadow, small radius.
- Real left-aligned editorial layout, not centered card-soup.
- Green must DOMINATE (big dark-green surfaces), not be a hint.

## Palette (green-dominant; 6 named tokens)
- `--canvas: #0c2418`  deep forest (primary dark surface: hero, footer, bands)
- `--field:  #163a26`  forest (secondary dark surface, cards on dark)
- `--court:  #c8f04a`  bright tennis/court green — THE accent/signature
- `--paper:  #f5f5ee`  clean near-white (light reading surface)
- `--ink:    #0b1410`  near-black green-tinted (text on light)
- `--sage:   #5f7468`  muted green-gray (secondary text / hairlines)
Contrast: court on canvas (AA large+), paper on canvas (AA), ink on paper (AAA),
ink on court (AAA — court is light). Court is a LIGHT accent → always pair with ink text.

## Type (via next/font/google)
- Display: **Bricolage Grotesque** (`--font-display`) — headings/hero, weights 600–800, tight tracking, `text-balance`.
- Body: **Inter** (`--font-sans`) — body/UI.
- Mono: **DM Mono** (`--font-mono`) — eyebrows, labels, stat numbers (uppercase, letter-spacing ~0.12em, `tabular-nums`).
Type scale: hero `clamp(2.75rem, 7vw, 6rem)` leading-[0.95]; h2 `clamp(2rem,4vw,3.25rem)`; body 17px; mono-label 12–13px.

## Components to rebuild (shared → propagates to every page)
- `globals.css`: replace tokens with the palette above; wire the 3 fonts; set `body` bg `--paper` text `--ink`; display selector for h1–h4; keep reduced-motion + marquee keyframes; add `selection` color court.
- `components/layout/Nav.tsx`: dark `bg-canvas text-paper` bar, sticky. Single row, `flex items-center justify-between`, consistent height (h-16). Logo left = `/logo-white.png` (fixed height, `w-auto`, vertically centered). Links right: Inter/medium, `items-center` aligned, hover → court. "Programs" dropdown stays. Donate = squared court button (`bg-court text-ink rounded-[3px]`). Mobile hamburger. FIX the current misalignment (everything on one baseline via items-center + matched line-heights).
- `components/layout/Footer.tsx`: `bg-canvas text-paper`, court accents, mono labels, white logo, keep links/contact + copyright "© 2026 Bin to Better. All rights reserved. Turning waste into opportunity." No pills.
- `components/ui/SectionHeading.tsx`: `{ eyebrow?, title, subtitle?, align?, tone? }` — eyebrow = DM Mono uppercase with a leading 24px hairline rule (court or sage); title = Bricolage display; tone `dark|light` controls colors. NO pill.
- `components/ui/Button.tsx`: squared `rounded-[3px]`, font-medium. Variants: `primary` = `bg-court text-ink hover:brightness-95`; `secondary` = `border border-ink/25 text-ink hover:border-ink`; `onDark` = `border border-paper/30 text-paper hover:border-court hover:text-court`; `light` = `bg-paper text-canvas`. Keep focus-visible ring (court on dark, ink on light).
- `components/ui/Card.tsx`: flat — `border border-ink/10 bg-paper rounded-md` (no heavy shadow); a `tone="dark"` → `border-paper/15 bg-field text-paper`.
- New `components/ui/Marker.tsx` (optional): a 2-digit DM Mono index ("01") for real sequences only (process steps), NOT decoration.
- Minimal line icons (inline SVG, `stroke=currentColor`, 1.5px, no fill) only where an icon genuinely helps; otherwise omit. NEVER emojis.

## Signature: the transformation arrow `→`
Programs and impact framed as `[waste] → [second life]`, the `→` in court-green:
- Bounce Back: "Used tennis balls → quieter classrooms, shelter toys, walker feet"
- Tech to Treasure: "Old devices → hands-on learning, then certified recycling"
- Eco-filament: "Plastic waste → 3D-printer filament for assistive tools"
Use this motif on the home programs section and program hero lines. It encodes "Bin → Better."

## Home page (the thesis) — rebuild `app/page.tsx`
Green-dominant editorial. Sections:
1. HERO on `bg-canvas`: full-bleed dark forest. Left-aligned. DM-mono kicker (e.g. "NONPROFIT · WASTE → WORTH"), huge Bricolage headline (use the tagline "Turning waste into opportunity." with "opportunity" or a key word in court), one concise support line. Two squared CTAs ("Explore the work" → #programs `light`/court; "Get involved" → mailto `onDark`). A mono impact row beneath a hairline: `50,000+ items · 200+ partners · 15 communities` using AnimatedCounter with tabular mono. NO logo-in-a-circle, NO emoji, NO pills. Optionally a restrained court-green geometric accent (a single arrow or rule), not orbs.
2. MISSION on `bg-paper`: SectionHeading (mono eyebrow "Our Mission" + hairline), big display H2 "Turning Waste into Opportunity", the 3 verbatim paragraphs in a constrained measure (max-w-prose), left-aligned, generous leading.
3. PROGRAMS (`id="programs"`) on `bg-field` (dark green band): eyebrow "What we do". Three rows/cards each as a `[waste] → [second life]` line (court arrow), program name (display), verbatim blurb, "View more" link → program page. Editorial, not soft cards — use bordered `tone=dark` cards or full-width rows with hairline dividers.
4. TESTIMONIALS (`id="testimonials"`) on `bg-paper`: keep `TestimonialSlider` but restyle to the new system (no pills; mono attribution; court controls). Eyebrow "Community voice", H2 "What People Say".
5. CONTACT (`id="contact"`) on `bg-canvas`: H2 "Contact Us", verbatim paragraph, two contact rows (Email → mailto:outreach@bintobetter.org showing the address; Instagram → https://instagram.com/bintobetter showing @bintobetter) as bordered rows with court hover, mono labels. Verbatim footer note.
Remove any v2 invented home sections. Keep all real copy verbatim; you MAY tighten the hero kicker/support line (do not fabricate stats).

## Restyle dynamic components to match
`AnimatedCounter` (mono tabular, court or ink), `TestimonialSlider` (court controls, no pills), `Reveal` unchanged (keep the on-mount + failsafe logic).

## Guidelines compliance (web interface guidelines)
- Icon-only buttons need `aria-label`; decorative SVG `aria-hidden`; images need width/height; visible `focus-visible` rings; honor `prefers-reduced-motion`; animate only transform/opacity, no `transition: all`; curly quotes & `…`; `tabular-nums` for stat columns; semantic headings h1→h2→h3; `<a>`/`<button>` correctly; `text-wrap: balance` on headings.

## Constraints
Brand tokens only (the 6 above), the 3 fonts only, no emojis, verbatim content (except minor hero kicker), reduced-motion safe. Conventional Commits + trailer.

## Plan: build SYSTEM + HOME first, screenshot, confirm direction, then propagate to all pages.
