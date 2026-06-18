# V3 Design System + Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the entire visual language of the Bin to Better site with a green-dominant, editorial design system (shared components + home page), eliminating all emojis, pill shapes, and AI-default aesthetics.

**Architecture:** Replace CSS tokens in `globals.css` and fonts in `layout.tsx` first; then rebuild each shared component against the new system; then rebuild `app/page.tsx` and update `content/home.ts`. Each task is independently testable; the build gate at the end catches cross-cutting issues.

**Tech Stack:** Next.js 16 App Router, Tailwind v4 (`@theme inline`), `next/font/google`, React 18, Vitest + Testing Library.

## Global Constraints

- Palette: `--canvas #0c2418`, `--field #163a26`, `--court #c8f04a`, `--paper #f5f5ee`, `--ink #0b1410`, `--sage #5f7468` — these six names only; remove old emerald/lime/clay/forest/mint tokens (or alias to canvas/field/court as needed for other pages still referencing them; the build must pass).
- Fonts: `Bricolage_Grotesque` → `--font-display`; `Inter` → `--font-sans`; `DM_Mono` (weights 400, 500) → `--font-mono`. Remove `Fraunces`.
- NO emojis anywhere in touched files. Replace with `→` / inline SVG / nothing.
- NO `rounded-full` pill eyebrows or pill badges. Eyebrow = DM Mono uppercase + hairline rule.
- Buttons: `rounded-[3px]`, NOT `rounded-full`.
- Court green (`#c8f04a`) is a LIGHT accent — always pair with `text-ink` (dark text on it).
- Animate only `transform`/`opacity`; no `transition: all`.
- Visible `focus-visible` rings on all interactive elements.
- `prefers-reduced-motion` respected.
- Semantic headings: h1 → h2 → h3.
- `text-wrap: balance` on all headings.
- Conventional Commits + trailer `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- `npm run lint` → 0 errors; `npm run test` → pass; `npm run build` → clean.

---

### Task 1: CSS Tokens + Fonts (`globals.css` + `layout.tsx`)

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: Tailwind color tokens `bg-canvas`, `bg-field`, `bg-court`, `bg-paper`, `text-ink`, `text-sage`, `text-court`, `text-paper`, `border-canvas`, etc. available throughout the app. Also produces CSS font variables `--font-display`, `--font-sans`, `--font-mono`. Also produces `bg-emerald`, `bg-lime`, `bg-forest`, `bg-mint` as aliases (map to canvas/field/court/paper respectively) so other pages still compile.

- [ ] **Step 1: Replace `app/globals.css`**

Replace the entire file with:

```css
@import "tailwindcss";

:root {
  /* v3 brand palette */
  --canvas: #0c2418;
  --field:  #163a26;
  --court:  #c8f04a;
  --paper:  #f5f5ee;
  --ink:    #0b1410;
  --sage:   #5f7468;

  /* Legacy aliases — keeps other pages compiling until they are migrated */
  --emerald: #163a26;
  --lime:    #c8f04a;
  --clay:    #c8f04a;
  --forest:  #0c2418;
  --mint:    #f5f5ee;
}

@theme inline {
  --color-canvas:  var(--canvas);
  --color-field:   var(--field);
  --color-court:   var(--court);
  --color-paper:   var(--paper);
  --color-ink:     var(--ink);
  --color-sage:    var(--sage);

  /* Legacy aliases */
  --color-emerald: var(--emerald);
  --color-lime:    var(--lime);
  --color-clay:    var(--clay);
  --color-forest:  var(--forest);
  --color-mint:    var(--mint);

  --font-display: var(--font-bricolage);
  --font-sans:    var(--font-inter);
  --font-mono:    var(--font-dm-mono);
}

::selection {
  background: var(--court);
  color: var(--ink);
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-display), system-ui, sans-serif;
  text-wrap: balance;
  letter-spacing: -0.02em;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Replace `app/layout.tsx`**

Replace the entire file with:

```tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bin to Better | Turning Waste into Opportunity",
  description:
    "At Bin to Better, we believe that waste isn't just trash, it's opportunity. Join us in creating a more sustainable, circular future.",
  metadataBase: new URL("https://bin2b.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify tokens test still passes**

The existing `__tests__/tokens.test.tsx` checks `bg-paper` and `text-emerald` class names. `text-emerald` now aliases to the field color via the legacy alias — the class still exists as a token name so the test passes. Run:

```bash
npm run test -- tokens
```

Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(design): replace CSS tokens with v3 brand palette + swap fonts to Bricolage/Inter/DM Mono

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: `Button` component

**Files:**
- Modify: `components/ui/Button.tsx`

**Interfaces:**
- Consumes: nothing new
- Produces: `<Button href variant? className?>` — variants `primary | secondary | onDark | light`. `secondary` MUST include class `border` (ui.test.tsx checks this). Renders as `<a>` with the given `href`.

- [ ] **Step 1: Replace `components/ui/Button.tsx`**

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

const variantStyles: Record<string, string> = {
  primary:
    "bg-court text-ink hover:brightness-95 focus-visible:outline-court",
  secondary:
    "border border-ink/25 text-ink hover:border-ink focus-visible:outline-ink",
  light:
    "bg-paper text-canvas hover:bg-paper/90 focus-visible:outline-paper",
  onDark:
    "border border-paper/30 text-paper hover:border-court hover:text-court focus-visible:outline-paper",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: "primary" | "secondary" | "onDark" | "light";
  children: ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[3px] px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles = variantStyles[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Run ui test**

```bash
npm run test -- ui
```

Expected: PASS — `secondary` still includes `border`, link still has href and label.

- [ ] **Step 3: Commit**

```bash
git add components/ui/Button.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(design): squared rounded-[3px] Button with v3 court/ink/onDark variants

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: `Card` component

**Files:**
- Modify: `components/ui/Card.tsx`

**Interfaces:**
- Consumes: nothing new
- Produces: `<Card tone? className?>` — `tone="dark"` renders field bg + paper border; default renders paper bg + ink/10 border. No heavy shadow.

- [ ] **Step 1: Replace `components/ui/Card.tsx`**

```tsx
import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const base =
    tone === "dark"
      ? "border border-paper/15 bg-field text-paper rounded-md p-6"
      : "border border-ink/10 bg-paper text-ink rounded-md p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]";
  return <div className={`${base} ${className}`}>{children}</div>;
}
```

- [ ] **Step 2: Run full test suite**

```bash
npm run test
```

Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/ui/Card.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(design): flat Card with 1px border, no heavy shadow, dark tone variant

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: `SectionHeading` component

**Files:**
- Modify: `components/ui/SectionHeading.tsx`

**Interfaces:**
- Consumes: nothing new
- Produces: `<SectionHeading eyebrow? title subtitle? align? tone?>` — eyebrow uses DM Mono uppercase + hairline rule (court on dark, sage on light). `tone="dark"|"light"`. No pill wrapping.

- [ ] **Step 1: Replace `components/ui/SectionHeading.tsx`**

```tsx
"use client";

import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center" | "right";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  const ruleColor = tone === "dark" ? "bg-court" : "bg-sage";
  const eyebrowColor = tone === "dark" ? "text-court" : "text-sage";
  const titleColor = tone === "dark" ? "text-paper" : "text-ink";
  const subtitleColor = tone === "dark" ? "text-paper/70" : "text-ink/60";

  return (
    <div className={`mb-10 ${alignClass}`}>
      {eyebrow && (
        <div
          className={`mb-3 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className={`h-px w-6 shrink-0 ${ruleColor}`} aria-hidden="true" />
          <p
            className={`font-mono text-xs font-medium uppercase tracking-[0.12em] ${eyebrowColor}`}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={`text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Run full test suite**

```bash
npm run test
```

Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/ui/SectionHeading.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(design): SectionHeading with DM Mono eyebrow + hairline rule, no pill

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: `Nav` component

**Files:**
- Modify: `components/layout/Nav.tsx`

**Interfaces:**
- Consumes: `navLinks`, `programLinks` from `@/content/nav`; `Button` component (Task 2)
- Produces: dark sticky nav bar. Logo = `/logo-white.png` (height 28–32px `w-auto`). Donate button = court squared. Mobile hamburger with `aria-label` and `aria-expanded`. Everything vertically centered via `items-center`.

- [ ] **Step 1: Replace `components/layout/Nav.tsx`**

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks, programLinks } from "@/content/nav";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-paper/10">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-white.png"
            alt="Bin to Better"
            width={120}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-paper/80 hover:text-court transition-colors"
          >
            About
          </Link>

          {/* Programs dropdown */}
          <div className="group relative">
            <button
              className="text-sm font-medium text-paper/80 hover:text-court transition-colors"
              aria-haspopup="true"
            >
              Programs
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-52 rounded-[3px] bg-field p-2 opacity-0 shadow-lg ring-1 ring-paper/10 transition-all group-hover:visible group-hover:opacity-100">
              {programLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block rounded-[2px] px-3 py-2 text-sm text-paper/80 hover:bg-canvas hover:text-court transition-colors"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks
            .filter((l) => l.href !== "/about")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-paper/80 hover:text-court transition-colors"
              >
                {l.label}
              </Link>
            ))}

          <Button href="/donate" variant="primary">
            Donate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col justify-center gap-1.5 md:hidden p-1"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-paper transition-transform" />
          <span className="block h-0.5 w-6 bg-paper" />
          <span className="block h-0.5 w-6 bg-paper transition-transform" />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-paper/10 bg-canvas px-6 py-4 md:hidden">
          {[
            { label: "About", href: "/about" },
            ...programLinks,
            ...navLinks.filter((l) => l.href !== "/about"),
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm text-paper/80 hover:text-court transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button href="/donate" variant="primary">
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Run nav test**

```bash
npm run test -- nav
```

Expected: PASS — logo alt text present, `/donate` link present, all four program links present.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Nav.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(design): dark canvas Nav, white logo, court Donate button, fixed vertical alignment

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: `Footer` component

**Files:**
- Modify: `components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `site` from `@/content/site`; `navLinks`, `programLinks` from `@/content/nav`
- Produces: dark `bg-canvas text-paper` footer. White logo. DM Mono section labels. Court hover on links. Copyright line verbatim from `site.copyright`. Email link `mailto:outreach@bintobetter.org` with link text `outreach@bintobetter.org` (footer.test.tsx checks `getByRole("link", { name: /outreach@bintobetter.org/ })`).

- [ ] **Step 1: Replace `components/layout/Footer.tsx`**

```tsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { navLinks, programLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="bg-canvas text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.png"
            alt="Bin to Better"
            width={140}
            height={44}
            className="h-auto w-[140px]"
          />
          <p className="mt-4 max-w-xs text-sm text-paper/60 leading-relaxed">
            {site.tagline}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-paper/70">
            {[...navLinks, ...programLinks, { label: "Donate", href: "/donate" }].map(
              (l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-court transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-court transition-colors"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-court transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-court transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 px-6 py-6 text-center font-mono text-xs text-paper/40 tracking-wide">
        {site.copyright}
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Run footer test**

```bash
npm run test -- footer
```

Expected: PASS — "Bin to Better" text found, "All rights reserved" found, email link with `mailto:outreach@bintobetter.org` found.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Footer.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(design): canvas Footer with DM Mono labels, court hover, no pills

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 7: `TestimonialSlider` restyle

**Files:**
- Modify: `components/ui/TestimonialSlider.tsx`

**Interfaces:**
- Consumes: `{ items: { quote, author, role }[] }`
- Produces: same carousel logic intact; quote block on paper bg; attribution in DM Mono; court-colored prev/next buttons (squared `rounded-[3px]`); no pill dot indicators (keep the dot width-expand on active). No emojis.

- [ ] **Step 1: Replace `components/ui/TestimonialSlider.tsx`**

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialSliderProps {
  items: TestimonialItem[];
}

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + items.length) % items.length);
    },
    [items.length]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (reduced || paused) return;
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced, paused, next]);

  const item = items[current];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Testimonials"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="border border-ink/8 bg-paper px-8 py-10 rounded-md">
        <blockquote>
          <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">
            &ldquo;{item.quote}&rdquo;
          </p>
          <footer className="mt-6 border-t border-ink/10 pt-5">
            <p className="font-mono text-sm font-medium text-ink">{item.author}</p>
            <p className="mt-0.5 font-mono text-xs text-sage">{item.role}</p>
          </footer>
        </blockquote>
      </div>

      <div className="mt-6 flex items-center justify-start gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="rounded-[3px] border border-ink/20 p-2 text-ink transition-colors hover:border-court hover:text-court focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-1.5 rounded-[2px] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court ${
                i === current ? "w-6 bg-court" : "w-1.5 bg-ink/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="rounded-[3px] border border-ink/20 p-2 text-ink transition-colors hover:border-court hover:text-court focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run full test suite**

```bash
npm run test
```

Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/ui/TestimonialSlider.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(design): restyle TestimonialSlider — court controls, mono attribution, no pills

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 8: Update `content/home.ts` — remove emojis + add `transform` field

**Files:**
- Modify: `content/home.ts`

**Interfaces:**
- Produces: `programsPreview` items now have a `transform: string` field (the `[waste] → [second life]` line); `emoji` field removed. All other exports unchanged verbatim.

- [ ] **Step 1: Replace `content/home.ts`**

```ts
export const stats: { value: string; label: string }[] = [
  { value: "50,000+", label: "Items" },
  { value: "200+", label: "Partners" },
  { value: "15", label: "Communities" },
];

export const programsPreview: {
  slug: string;
  title: string;
  blurb: string;
  href: string;
  transform: string;
} [] = [
  {
    slug: "bounce-back",
    title: "Bounce Back",
    blurb:
      "Collects used tennis balls from clubs and repurposes them for schools (chair legs to reduce noise), animal shelters, and assisted living centers (walker feet).",
    href: "/bounce-back",
    transform: "Used tennis balls → quieter classrooms, shelter toys, walker feet",
  },
  {
    slug: "tech-to-treasure",
    title: "Tech to Treasure",
    blurb:
      "Collects old devices and turns them into educational tools before responsibly recycling all parts through an e-waste program.",
    href: "/tech-to-treasure",
    transform: "Old devices → hands-on learning, then certified recycling",
  },
  {
    slug: "eco-filament",
    title: "Eco-filament",
    blurb: "Repurposing plastic waste into 3D printer filament for tools and toys.",
    href: "/eco-filament",
    transform: "Plastic waste → 3D-printer filament for assistive tools",
  },
];

export const testimonials: { quote: string; author: string; role: string }[] = [
  {
    quote:
      "Thank you very much for your donation of 140 gently used tennis balls to my third grade Spanish immersion classroom at Blacow Elementary School. Cutting each individual ball so that it can fit each student leg chair must have been a lot of work! We are so appreciative of your time and effort in giving the tennis balls a new second life instead of throwing then into the landfill. Your donation has been well received by my students. Their chairs are way gentler on the waxed floors and is saving the floors from being scratched. Most importantly classroom activity transitions are so much more quiet as the students get up from or come to sit in their chairs.",
    author: "Andrea MacKenzie",
    role: "3rd grade Spanish Immersion Teacher, Blacow Elementary",
  },
  {
    quote:
      "Thank you so much for dropping off the balls at the doggy day camp! The dogs absolutely love them, and I truly appreciate it as well. Whether they're playing or just need something to chew on when they're feeling stressed, those balls bring them so much joy. Your thoughtful contribution has made a big difference in supporting the pups here. We're incredibly grateful for your kindness and generosity.",
    author: "Allie",
    role: "Owner of Allie's Doggie Day Camp",
  },
  {
    quote:
      "My experience with Bin to Better has been extremely positive. The team was very thoughtful and communicated clearly throughout the entire process. The donated tennis balls have made a noticeable difference in my classroom by significantly reducing noise from chairs/desks. This has helped create a calmer and more focused learning environment where students can concentrate better and transitions are much smoother.",
    author: "Grace Shin",
    role: "Irvington High School Teacher",
  },
  {
    quote:
      "Bin to Better did a great service to my classroom! They personally came to help me install the tennis balls on the chair legs, and now the classroom is much quieter and more productive. The floors are safer and protected from the chairs scraping against them, and the students were so surprised to see how the tennis balls could be repurposed into something new! I would highly recommend them to any classroom.",
    author: "Brandon Lee",
    role: "Oliveira Elementary TK Teacher",
  },
  {
    quote:
      "Adding tennis balls to our chair legs has made an immediate difference in our third-grade classroom. The reduced noise has helped students focus during reading and small-group work, and transitions are smoother because the room stays calm. It's a simple change with a big impact on learning.",
    author: "Yuji Yang",
    role: "Dual Language English and Mandarin Teacher, Bringhurst Elementary",
  },
];

export const mission: string[] = [
  "At Bin to Better, we believe that waste isn’t just trash, it’s opportunity. Every year, countless items with value and potential end up in landfills simply because they no longer serve their original purpose. Our mission is to change that narrative.",
  "We’re driven by a simple yet powerful idea: that one person’s excess can be another’s solution. Whether it’s used tennis balls, old electronics, or other overlooked resources, we aim to connect those who have with those who need. By building bridges between individuals, communities, and organizations, we promote a culture of reuse and responsible recycling.",
  "Through education, partnerships, and hands-on initiatives, Bin to Better empowers people to rethink waste and become part of a more sustainable, circular future. Together, we can turn what would’ve been thrown away into something better—for people, for communities, and for the planet.",
];

export const contactPara =
  "We would love to hear from you! Whether you have questions, want to donate materials or are interested in volunteering, please get in touch.";

export const contactFootnote =
  "You can also fill out our contact form on the website for specific inquiries.";
```

- [ ] **Step 2: Run full test suite**

```bash
npm run test
```

Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add content/home.ts
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(content): remove emojis from home content, add transform field per program

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 9: Rebuild `app/page.tsx` (Home page)

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: all components from Tasks 2–7; `stats`, `programsPreview` (with new `transform` field, no `emoji`), `testimonials`, `mission`, `contactPara`, `contactFootnote` from `content/home.ts`; `AnimatedCounter` (kept as-is; add `tabular-nums font-mono` at call site); `Reveal` (kept as-is); `Section` (kept as-is).
- Produces: 5-section editorial home page: HERO (canvas), MISSION (paper), PROGRAMS (field), TESTIMONIALS (paper), CONTACT (canvas).

**Key design decisions:**
- Hero: `bg-canvas`, full-width left-aligned, no right-side logo/image. DM Mono kicker. Huge Bricolage h1. Two squared CTAs. Mono impact row with AnimatedCounter.
- Programs: `id="programs"` on `bg-field`, each row is `[waste] → [second life]` line in court arrow, then program name h3, blurb, "View more →" link. Use dark-tone Card from Task 3.
- Contact: `id="contact"` on `bg-canvas`, two bordered rows (email + instagram), DM Mono labels.
- No logo in circle, no emojis, no pills, no centered card-soup.

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import {
  stats,
  programsPreview,
  testimonials,
  mission,
  contactPara,
  contactFootnote,
} from "@/content/home";

export const metadata: Metadata = {
  title: "Home | Bin to Better",
  description:
    "Turning waste into opportunity — one item at a time, one community at a time.",
};

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <Section className="bg-canvas text-paper">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
            Nonprofit&nbsp;&nbsp;·&nbsp;&nbsp;Waste → Worth
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight">
            Turning waste into{" "}
            <span className="text-court">opportunity.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
            One item at a time, one community at a time — we connect waste with
            the people who can give it a second life.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#programs" variant="light">
              Explore the work
            </Button>
            <Button href="mailto:outreach@bintobetter.org" variant="onDark">
              Get involved
            </Button>
          </div>
        </Reveal>

        {/* Impact row */}
        <Reveal delay={320}>
          <div className="mt-12 border-t border-paper/10 pt-8">
            <div className="flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-2xl font-medium tabular-nums text-court sm:text-3xl">
                    <AnimatedCounter value={s.value} />
                  </p>
                  <p className="mt-1 font-mono text-xs text-paper/50 uppercase tracking-[0.1em]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Mission ───────────────────────────────────────────── */}
      <Section className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Our Mission"
            title="Turning Waste into Opportunity"
            tone="light"
            align="left"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-ink/80">
            {mission.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Programs ──────────────────────────────────────────── */}
      <Section id="programs" className="bg-field">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Programs"
            tone="dark"
            align="left"
          />
        </Reveal>

        <div className="mt-4 flex flex-col gap-4">
          {programsPreview.map((p, i) => (
            <Reveal key={p.href} delay={i * 80}>
              <Card tone="dark" className="flex flex-col gap-3">
                {/* Transform line */}
                <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-paper/50">
                  {p.transform.split("→")[0].trim()}
                  <span className="mx-2 text-court">→</span>
                  {p.transform.split("→")[1].trim()}
                </p>
                <h3 className="text-xl font-bold text-paper">{p.title}</h3>
                <p className="text-sm leading-relaxed text-paper/70">{p.blurb}</p>
                <Link
                  href={p.href}
                  className="mt-1 inline-flex items-center gap-1 font-mono text-xs font-medium text-court hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
                >
                  View more →
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <Section id="testimonials" className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Community Voice"
            title="What People Say"
            tone="light"
            align="left"
          />
        </Reveal>
        <Reveal delay={80}>
          <TestimonialSlider items={testimonials} />
        </Reveal>
      </Section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <Section id="contact" className="bg-canvas text-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact Us"
            tone="dark"
            align="left"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="max-w-prose text-base leading-relaxed text-paper/70">
            {contactPara}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {/* Email */}
            <a
              href="mailto:outreach@bintobetter.org"
              className="group flex flex-col gap-1.5 border border-paper/15 px-6 py-5 rounded-[3px] hover:border-court transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                Email
              </span>
              <span className="text-sm font-medium text-paper group-hover:text-court transition-colors">
                outreach@bintobetter.org
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/bintobetter"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5 border border-paper/15 px-6 py-5 rounded-[3px] hover:border-court transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                Instagram
              </span>
              <span className="text-sm font-medium text-paper group-hover:text-court transition-colors">
                @bintobetter
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-10 font-mono text-xs text-paper/30">{contactFootnote}</p>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Run full test suite**

```bash
npm run test
```

Expected: PASS

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

Expected: 0 errors, 0 warnings.

- [ ] **Step 4: Run build**

```bash
npm run build
```

Expected: clean build with no TypeScript errors and no missing-token warnings.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git -c commit.gpgsign=false commit -m "$(cat <<'EOF'
feat(home): editorial v3 home page — canvas hero, field programs, no emojis, no pills

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 10: Write SDD report + final verification

**Files:**
- Create: `C:\Users\yuvra\Downloads\b2bsite\.git\sdd\v3-system-home-report.md`

**Interfaces:**
- Consumes: results of all prior tasks

- [ ] **Step 1: Confirm `npm run lint` → 0 problems**

```bash
npm run lint
```

- [ ] **Step 2: Confirm `npm run test` → pass**

```bash
npm run test
```

- [ ] **Step 3: Confirm `npm run build` → clean**

```bash
npm run build
```

- [ ] **Step 4: Create the report directory and write the report**

Create the directory if missing:
```bash
mkdir -p "C:/Users/yuvra/Downloads/b2bsite/.git/sdd"
```

Then write to `C:\Users\yuvra\Downloads\b2bsite\.git\sdd\v3-system-home-report.md`:

```markdown
# V3 Design System + Home Page — Implementation Report

## Token / Palette Changes
- Replaced all old tokens (emerald, lime, clay, forest, mint) with 6 new brand tokens:
  `--canvas #0c2418`, `--field #163a26`, `--court #c8f04a`, `--paper #f5f5ee`,
  `--ink #0b1410`, `--sage #5f7468`.
- Legacy aliases (emerald→field, lime→court, forest→canvas, mint→paper) kept so
  un-migrated pages continue to compile.
- `::selection` now uses court bg + ink text.
- `h1–h4` now use `--font-display` (Bricolage Grotesque) with `text-wrap: balance`
  and `-0.02em` tracking.

## Font Changes
- Removed: Fraunces
- Added: Bricolage Grotesque (variable `--font-bricolage` → `--font-display`)
- Kept: Inter (`--font-sans`)
- Added: DM Mono weights 400/500 (`--font-dm-mono` → `--font-mono`)

## Component Changes

### Nav
- Dark `bg-canvas text-paper` sticky bar, `h-16`, `items-center` flex — vertical
  alignment fixed.
- Logo switched to `/logo-white.png` at `h-8 w-auto`.
- All link hover states → `text-court`.
- Donate button uses squared `rounded-[3px]` `primary` variant (court bg).
- Dropdown styled to `bg-field` with paper/ink link text.

### Footer
- `bg-canvas text-paper`. White logo.
- Section labels use `font-mono text-xs uppercase tracking-[0.12em] text-sage`.
- Link hover → `text-court`.
- Copyright from `site.copyright` verbatim.

### SectionHeading
- Eyebrow is now DM Mono uppercase + a 24px `h-px` hairline rule in court (dark) or sage (light).
- No pill or badge wrapper anywhere.
- Title uses Bricolage display via global `h2` rule.
- Accepts `tone="dark"|"light"` prop.

### Button
- `rounded-[3px]` on all variants — no `rounded-full`.
- Variants: `primary` (court bg, ink text), `secondary` (bordered, ink text — `border` class preserved for test), `onDark` (paper border → court on hover), `light` (paper bg, canvas text).
- `focus-visible` rings visible on both dark and light backgrounds.

### Card
- Flat: `border border-ink/10 bg-paper rounded-md` with minimal `shadow-[0_1px_3px_...]`.
- `tone="dark"` → `border-paper/15 bg-field text-paper rounded-md`.

### TestimonialSlider
- Quote block on `bg-paper` with `border border-ink/8`.
- Attribution uses `font-mono text-sm` (author) and `font-mono text-xs text-sage` (role).
- Prev/next buttons: `rounded-[3px]` with `border border-ink/20` and court hover.
- Dot indicators: `rounded-[2px]` (not full-pill), court color on active.

## Home Page (app/page.tsx)

### HERO (`bg-canvas`)
- Full-width left-aligned. No right-side image or logo circle.
- DM Mono kicker: "Nonprofit · Waste → Worth"
- H1 Bricolage ~6rem: "Turning waste into **opportunity.**" — "opportunity" in court.
- Support paragraph, two squared CTAs (Explore the work, Get involved).
- Impact row: three AnimatedCounters (50,000+ / 200+ / 15) in `font-mono tabular-nums text-court`.

### MISSION (`bg-paper`)
- SectionHeading eyebrow "Our Mission" + hairline rule.
- H2 "Turning Waste into Opportunity".
- Three verbatim paragraphs in `max-w-prose`.

### PROGRAMS (`id="programs"`, `bg-field`)
- Dark-band editorial rows. Each program: DM Mono transform line with `→` in court, display h3, blurb, "View more →" link.
- Uses `<Card tone="dark">` — no soft centered cards.

### TESTIMONIALS (`id="testimonials"`, `bg-paper`)
- TestimonialSlider restyled (Task 7).

### CONTACT (`id="contact"`, `bg-canvas`)
- Left-aligned. Two bordered rows (email + instagram) with DM Mono labels, court hover.

## Emoji Removal Confirmation
- `content/home.ts`: removed `emoji` field from `programsPreview` (was `🎾`, `💻`, `🧵`).
- `app/page.tsx`: no emoji characters anywhere.
- All other home page emojis (hero kicker pill, etc.) replaced with text + `→` motif.

## Lint / Test / Build
- `npm run lint` → 0 problems
- `npm run test` → all pass (footer, nav, ui, tokens, assets, seo, photoslot tests)
- `npm run build` → clean

## Notes
- Other pages (bounce-back, tech-to-treasure, etc.) still use legacy class names
  (emerald, lime, etc.) which now resolve via legacy aliases — no visual breakage,
  build clean. Those pages will be migrated in a later task.
```

- [ ] **Step 5: Final commit (if any uncommitted files)**

```bash
git status
```

If the report file is outside the git working tree (it's in `.git/sdd/`) no commit is needed for it. If there are any straggling changes, commit them:

```bash
git -c commit.gpgsign=false commit -am "$(cat <<'EOF'
chore: v3 design system + home page complete — lint/test/build green

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review

### Spec coverage check

| Spec requirement | Covered in |
|---|---|
| 6-token palette, legacy aliases, selection color | Task 1 |
| Bricolage / Inter / DM Mono fonts | Task 1 |
| h1–h4 display font, text-wrap: balance | Task 1 |
| Button squared, 4 variants, focus rings | Task 2 |
| Card flat, dark tone | Task 3 |
| SectionHeading eyebrow hairline, no pill, tone prop | Task 4 |
| Nav: dark canvas, white logo, items-center fixed, court Donate | Task 5 |
| Footer: canvas, mono labels, court hover, verbatim copyright | Task 6 |
| TestimonialSlider: court controls, mono attribution, no pills | Task 7 |
| content/home.ts: emojis removed, transform field added | Task 8 |
| Hero: canvas, DM mono kicker, huge Bricolage h1, court word, 2 CTAs, AnimatedCounter | Task 9 |
| Mission: paper bg, constrained measure, verbatim paragraphs | Task 9 |
| Programs: field bg, transform arrow rows, dark cards | Task 9 |
| Testimonials: paper bg, restyled slider | Task 9 |
| Contact: canvas bg, bordered rows, mono labels | Task 9 |
| aria-label on icon-only buttons, aria-hidden on SVGs | Tasks 5, 6, 7, 9 |
| prefers-reduced-motion respected | Preserved in Task 1 (global), Tasks 7, AnimatedCounter unchanged |
| tabular-nums on counters | Task 9 |
| curly quotes | Task 8 (Unicode escapes in mission text) |
| Lint 0 / Test pass / Build clean | Task 10 |
| SDD report file | Task 10 |

### Placeholder scan
No TBDs, no "implement later", no "similar to Task N" — all code blocks are complete.

### Type consistency
- `programsPreview` gains `transform: string`, loses `emoji`. Task 8 adds it; Task 9 uses it as `p.transform.split("→")` — consistent.
- `Card` `tone` prop produced in Task 3, consumed in Task 9 as `tone="dark"` — consistent.
- `SectionHeading` `tone` prop produced in Task 4, consumed in Task 9 — consistent.
- `Button` variant `"light"` produced in Task 2, consumed in Task 9 — consistent.
