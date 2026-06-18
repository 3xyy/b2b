# Bin to Better Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Bin to Better nonprofit site as a visual refresh — same content and images as the live site (https://bintobetter.org/), but one coherent "warm & grounded" design system replacing the current over-animated, multi-typeface presentation.

**Architecture:** Next.js 16 App Router (already scaffolded + deployed to https://bin2b.vercel.app/). A small shared component kit + design tokens defined once enforce visual consistency by construction. All copy/images are ported verbatim from the original repo `FreeForCharity/FFC-EX-bintobetter.org`; only the decorative framer-motion wrappers are discarded. Content lives in typed data modules; pages are thin compositions of shared components.

**Tech Stack:** Next.js 16.2.9, React 19.2, Tailwind CSS v4 (CSS `@theme`), TypeScript 5, `next/font/google` (Fraunces + Inter), Vitest + React Testing Library for unit tests.

## Global Constraints

- **Stack/layout:** Next.js 16 App Router, `app/` at repo root (NO `src/` dir), TypeScript, Tailwind v4 via CSS `@theme` in `app/globals.css` (no `tailwind.config.js`).
- **Exactly two typefaces:** Fraunces (headings/display) + Inter (body/UI). No third font. The logo is an image, not a font.
- **Five colors only:** `--paper #F7F4EC`, `--emerald #1F7A45`, `--lime #8BC53F`, `--ink #1A1A1A`, `--clay #C8632E`. Neutrals derive from ink/paper opacity. No other hex values in components.
- **One logo lockup:** `public/logo.webp` (black+green, light bg) and `public/logo-white.png` (dark bg). No other logo variants.
- **Content is verbatim** from `FreeForCharity/FFC-EX-bintobetter.org@main`. Do not rewrite copy.
- **No** cookie banner, analytics, legal pages, or third-party embeds (out of scope — live site has none).
- **No** framer-motion gradient orbs, diagonal clip-path splits, infinite animations, or dark hero gradients. Motion is subtle fade/translate on scroll-in only; respect `prefers-reduced-motion`.
- **Drop GitHub Pages config:** no `output: "export"`, no `basePath`, no `images.unoptimized`, no `trailingSlash`, no `assetPath` helper.
- **License:** Apache 2.0 `LICENSE` in repo root; footer shows "© 2024–2025 Free For Charity · EIN 46-2471893".
- **Commits:** Conventional Commits style messages; end each with the Co-Authored-By trailer used elsewhere in this repo. The target repo is `3xyy/b2b` (user's own) — FFC branch-protection/signed-commit rules do NOT apply.
- **Original repo reference:** clone once for content/asset extraction: `git clone --depth 1 https://github.com/FreeForCharity/FFC-EX-bintobetter.org /c/Users/yuvra/Downloads/_ffc_ref`. Delete it at the end.

---

### Task 1: Brand foundation — tokens, fonts, globals, testing harness

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `next.config.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Modify: `package.json` (devDeps + scripts)
- Test: `__tests__/tokens.test.tsx`

**Interfaces:**
- Produces: CSS custom properties `--color-paper`, `--color-emerald`, `--color-lime`, `--color-ink`, `--color-clay` and Tailwind utilities `bg-paper`, `text-emerald`, etc. Fonts exposed as `--font-serif` (Fraunces) and `--font-sans` (Inter). Test script `npm run test`.

- [ ] **Step 1: Install test + lint dependencies**

```bash
npm i -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 2: Add test scripts to package.json**

In `package.json` `"scripts"`, add:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
});
```

- [ ] **Step 4: Create `vitest.setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Replace `app/globals.css` with brand tokens**

```css
@import "tailwindcss";

:root {
  --paper: #f7f4ec;
  --emerald: #1f7a45;
  --lime: #8bc53f;
  --ink: #1a1a1a;
  --clay: #c8632e;
}

@theme inline {
  --color-paper: var(--paper);
  --color-emerald: var(--emerald);
  --color-lime: var(--lime);
  --color-ink: var(--ink);
  --color-clay: var(--clay);
  --font-sans: var(--font-inter);
  --font-serif: var(--font-fraunces);
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-serif), Georgia, serif;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 6: Update `app/layout.tsx` to load fonts + metadata**

```tsx
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Clean `next.config.ts` (remove GitHub Pages config)**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
```

- [ ] **Step 8: Write token test `__tests__/tokens.test.tsx`**

```tsx
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("brand tokens", () => {
  it("applies a bg-paper utility without error", () => {
    const { container } = render(<div className="bg-paper text-emerald" />);
    expect(container.firstChild).toHaveClass("bg-paper");
    expect(container.firstChild).toHaveClass("text-emerald");
  });
});
```

- [ ] **Step 9: Run the test**

Run: `npm run test`
Expected: PASS (1 test).

- [ ] **Step 10: Verify the app still builds**

Run: `npm run build`
Expected: Build succeeds (default scaffold page still present).

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: brand tokens, fonts, and test harness"
```

---

### Task 2: Assets + LICENSE

**Files:**
- Create: `public/logo.webp`, `public/logo-white.png`, `public/favicon` updates
- Create: `public/members/*`, `public/partners-logos/*`, `public/bounce-back-logos/*`, `public/sponsors/*`
- Create: `LICENSE`
- Delete: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`, `public/idkLOGO.webp`, `public/FreeSample-Vectorizer-io-btbWHITE (1).png`
- Test: `__tests__/assets.test.ts`

**Interfaces:**
- Produces: image files at stable public paths. `public/logo.webp` (light), `public/logo-white.png` (dark). Member photos at `public/members/<Name>.<ext>`, partner logos at `public/partners-logos/<file>.png`, bounce-back logos at `public/bounce-back-logos/<file>.png`, hackathon sponsor logos at `public/sponsors/<file>.png`.

- [ ] **Step 1: Clone the original repo for assets**

```bash
git clone --depth 1 https://github.com/FreeForCharity/FFC-EX-bintobetter.org /c/Users/yuvra/Downloads/_ffc_ref
```

- [ ] **Step 2: Copy logos to clean names**

```bash
cd /c/Users/yuvra/Downloads/b2bsite
cp "/c/Users/yuvra/Downloads/_ffc_ref/public/Untitled_design-removebg-preview.webp" public/logo.webp
cp "public/FreeSample-Vectorizer-io-btbWHITE (1).png" public/logo-white.png
```

- [ ] **Step 3: Copy image sets from the original repo**

```bash
cd /c/Users/yuvra/Downloads/b2bsite
cp -r "/c/Users/yuvra/Downloads/_ffc_ref/public/members" public/members
cp -r "/c/Users/yuvra/Downloads/_ffc_ref/public/partners-logos" public/partners-logos
cp -r "/c/Users/yuvra/Downloads/_ffc_ref/public/bounce-back-logos" public/bounce-back-logos
cp -r "/c/Users/yuvra/Downloads/_ffc_ref/public/Sponsors for Tech TO Treasure Hackathon" public/sponsors
```

- [ ] **Step 4: Remove scaffold cruft + duplicate logos**

```bash
cd /c/Users/yuvra/Downloads/b2bsite
rm -f public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
rm -f public/idkLOGO.webp "public/FreeSample-Vectorizer-io-btbWHITE (1).png"
```

- [ ] **Step 5: Create Apache 2.0 `LICENSE`**

Copy the full Apache 2.0 license text. The header lines (above the standard Apache body) must read exactly:

```
Bin to Better Website
Copyright (C) 2024-2025 Free For Charity
EIN: 46-2471893

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
```

Then paste the full standard Apache License 2.0 body (fetch from https://www.apache.org/licenses/LICENSE-2.0.txt).

- [ ] **Step 6: Write asset presence test `__tests__/assets.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const pub = (p: string) => path.join(process.cwd(), "public", p);

describe("required assets", () => {
  it("has both logo variants", () => {
    expect(fs.existsSync(pub("logo.webp"))).toBe(true);
    expect(fs.existsSync(pub("logo-white.png"))).toBe(true);
  });
  it("has member, partner, and bounce-back image folders with files", () => {
    for (const dir of ["members", "partners-logos", "bounce-back-logos"]) {
      const files = fs.readdirSync(pub(dir));
      expect(files.length).toBeGreaterThan(0);
    }
  });
  it("has an Apache LICENSE with FFC attribution", () => {
    const txt = fs.readFileSync(path.join(process.cwd(), "LICENSE"), "utf8");
    expect(txt).toContain("Free For Charity");
    expect(txt).toContain("EIN: 46-2471893");
    expect(txt).toContain("Apache License");
  });
});
```

- [ ] **Step 7: Run the test**

Run: `npm run test -- assets`
Expected: PASS (3 tests).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "chore: import brand assets and Apache LICENSE"
```

---

### Task 3: Content data modules (verbatim port)

**Files:**
- Create: `content/site.ts`, `content/nav.ts`, `content/home.ts`, `content/programs.ts`, `content/team.ts`, `content/partners.ts`, `content/events.ts`
- Test: `__tests__/content.test.ts`

**Interfaces:**
- Produces typed exports consumed by every page:
  - `content/site.ts`: `export const site = { name, tagline, email, instagram, linkedin, copyright }` where `tagline = "Turning waste into opportunity. One item at a time, one community at a time."`, `email = "outreach@bintobetter.org"`, `copyright = "© 2024–2025 Free For Charity · EIN 46-2471893"`.
  - `content/nav.ts`: `export const navLinks: { label: string; href: string }[]` and `export const programLinks: { label: string; href: string }[]` (Bounce Back `/bounce-back`, Tech to Treasure `/tech-to-treasure`, Eco-filament `/eco-filament`, Workshop `/workshop`).
  - `content/home.ts`: `export const stats: { value: string; label: string }[]` = `[{value:"50K+",label:"Items Recycled"},{value:"200+",label:"Partners"},{value:"15",label:"Communities"}]`; `export const programsPreview: { slug, title, blurb, href }[]`; `export const testimonials: { quote: string; author: string }[]`; `export const mission: string`.
  - `content/programs.ts`: `export type Program = { slug: string; title: string; tagline: string; sections: { heading: string; body: string }[]; steps?: { title: string; body: string }[]; logos?: string[] }` and `export const programs: Record<"bounce-back"|"tech-to-treasure"|"eco-filament"|"workshop", Program>`.
  - `content/team.ts`: `export const team: { name: string; role: string; photo: string }[]`.
  - `content/partners.ts`: `export const partnerLogos: string[]` and `export const bounceBackLogos: string[]` (the exact arrays from the original `src/data/partners.ts`).
  - `content/events.ts`: `export const events: { title: string; date?: string; description: string }[]`.

- [ ] **Step 1: Extract verbatim copy from the cloned original**

Read each original page and copy its visible text into the data modules above. Source files in `/c/Users/yuvra/Downloads/_ffc_ref/`:
- `src/app/page.tsx` → `content/home.ts` (hero tagline, mission strip, stats, program preview blurbs, testimonial quotes + authors).
- `src/app/about/page.tsx` → `content/home.ts` `mission` + an `about` export (Mission & Vision paragraphs, "What We Do").
- `src/app/bounce-back/page.tsx`, `tech-to-treasure/page.tsx`, `eco-filament/page.tsx`, `workshop/page.tsx` → `content/programs.ts` (each program's headings/body/steps verbatim).
- `src/app/officers-and-team/page.tsx` → `content/team.ts` (names + roles; match each to a file in `public/members/`).
- `src/app/events/page.tsx` → `content/events.ts`.
- `src/data/partners.ts` → `content/partners.ts` (copy the arrays exactly).
Strip only JSX/className/motion wrappers — keep the human-readable strings exactly.

- [ ] **Step 2: Create `content/partners.ts` (known exact data)**

```ts
export const partnerLogos = [
  "/partners-logos/page-21-xref-82.png",
  "/partners-logos/page-21-xref-84.png",
  "/partners-logos/page-22-xref-87.png",
  "/partners-logos/page-22-xref-88.png",
  "/partners-logos/page-23-xref-91.png",
  "/partners-logos/page-23-xref-92.png",
  "/partners-logos/page-23-xref-94.png",
  "/partners-logos/page-24-xref-97.png",
  "/partners-logos/page-24-xref-99.png",
  "/partners-logos/page-25-xref-102.png",
  "/partners-logos/page-26-xref-105.png",
  "/partners-logos/page-26-xref-106.png",
  "/partners-logos/sun-dragon-computers.png",
];

export const bounceBackLogos = [
  "/bounce-back-logos/page-28-xref-114.png",
  "/bounce-back-logos/page-29-xref-117.png",
  "/bounce-back-logos/page-30-xref-120.png",
  "/bounce-back-logos/page-31-xref-123.png",
];
```

- [ ] **Step 3: Create `content/site.ts`, `content/nav.ts`, `content/home.ts` stats**

```ts
// content/site.ts
export const site = {
  name: "Bin to Better",
  tagline:
    "Turning waste into opportunity. One item at a time, one community at a time.",
  email: "outreach@bintobetter.org",
  instagram: "https://instagram.com/bintobetter",
  linkedin: "https://www.linkedin.com/company/bintobetter",
  copyright: "© 2024–2025 Free For Charity · EIN 46-2471893",
};
```

```ts
// content/nav.ts
export const programLinks = [
  { label: "Bounce Back", href: "/bounce-back" },
  { label: "Tech to Treasure", href: "/tech-to-treasure" },
  { label: "Eco-filament", href: "/eco-filament" },
  { label: "Workshop", href: "/workshop" },
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Team", href: "/officers-and-team" },
  { label: "Events", href: "/events" },
];
```

(Then complete `content/home.ts`, `programs.ts`, `team.ts`, `events.ts` from Step 1.)

- [ ] **Step 4: Write content sanity test `__tests__/content.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { partnerLogos, bounceBackLogos } from "@/content/partners";
import { site } from "@/content/site";
import { stats } from "@/content/home";
import { programs } from "@/content/programs";
import { team } from "@/content/team";

describe("content modules", () => {
  it("partner + bounce-back logo arrays are populated", () => {
    expect(partnerLogos.length).toBe(13);
    expect(bounceBackLogos.length).toBe(4);
  });
  it("site has contact email and FFC copyright", () => {
    expect(site.email).toBe("outreach@bintobetter.org");
    expect(site.copyright).toContain("Free For Charity");
  });
  it("has the three homepage stats", () => {
    expect(stats.map((s) => s.value)).toEqual(["50K+", "200+", "15"]);
  });
  it("has all four programs", () => {
    expect(Object.keys(programs).sort()).toEqual(
      ["bounce-back", "eco-filament", "tech-to-treasure", "workshop"].sort()
    );
  });
  it("every team member has a photo path and role", () => {
    expect(team.length).toBeGreaterThan(0);
    for (const m of team) {
      expect(m.photo).toMatch(/^\/members\//);
      expect(m.role.length).toBeGreaterThan(0);
    }
  });
});
```

- [ ] **Step 5: Run the test**

Run: `npm run test -- content`
Expected: PASS (5 tests). Fix data until green.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: verbatim content data modules"
```

---

### Task 4: UI primitives — Section, Button, Card, Stat

**Files:**
- Create: `components/ui/Section.tsx`, `components/ui/Button.tsx`, `components/ui/Card.tsx`, `components/ui/Stat.tsx`
- Test: `__tests__/ui.test.tsx`

**Interfaces:**
- Produces:
  - `Section({ children, className, id })` → `<section>` with consistent vertical padding + centered max-width container.
  - `Button({ href, variant, children })` where `variant: "primary" | "secondary"` (default `primary`). Renders an `<a>` (Next `Link`) styled filled-emerald or outline.
  - `Card({ children, className })` → rounded, soft-shadow, white surface container.
  - `Stat({ value, label })` → large emerald serif value + ink label.

- [ ] **Step 1: Write `__tests__/ui.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";

describe("ui primitives", () => {
  it("Button renders a link to href with label", () => {
    render(<Button href="/donate">Donate</Button>);
    const link = screen.getByRole("link", { name: "Donate" });
    expect(link).toHaveAttribute("href", "/donate");
  });
  it("Button secondary variant applies outline styles", () => {
    render(<Button href="/x" variant="secondary">X</Button>);
    expect(screen.getByRole("link", { name: "X" }).className).toContain("border");
  });
  it("Stat shows value and label", () => {
    render(<Stat value="50K+" label="Items Recycled" />);
    expect(screen.getByText("50K+")).toBeInTheDocument();
    expect(screen.getByText("Items Recycled")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- ui`
Expected: FAIL (modules not found).

- [ ] **Step 3: Implement `components/ui/Section.tsx`**

```tsx
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}
```

- [ ] **Step 4: Implement `components/ui/Button.tsx`**

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald";
  const styles =
    variant === "primary"
      ? "bg-emerald text-paper hover:bg-emerald/90"
      : "border-2 border-emerald text-emerald hover:bg-emerald/10";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 5: Implement `components/ui/Card.tsx`**

```tsx
import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 6: Implement `components/ui/Stat.tsx`**

```tsx
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl font-semibold text-emerald sm:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-ink/70">{label}</div>
    </div>
  );
}
```

- [ ] **Step 7: Run test to verify pass**

Run: `npm run test -- ui`
Expected: PASS (3 tests).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: Section, Button, Card, Stat primitives"
```

---

### Task 5: PhotoSlot with branded fallback

**Files:**
- Create: `components/ui/PhotoSlot.tsx`
- Test: `__tests__/photoslot.test.tsx`

**Interfaces:**
- Produces: `PhotoSlot({ src, alt, className })`. When `src` is a non-empty string, renders `next/image` with that src + `alt`. When `src` is undefined/empty, renders a branded placeholder (paper bg, centered leaf glyph) with `role="img"` and the given `aria-label={alt}`.

- [ ] **Step 1: Write `__tests__/photoslot.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

describe("PhotoSlot", () => {
  it("renders an img with alt when src is given", () => {
    render(<PhotoSlot src="/members/Anika Batra.png" alt="Anika Batra" />);
    expect(screen.getByAltText("Anika Batra")).toBeInTheDocument();
  });
  it("renders a branded placeholder when src is missing", () => {
    render(<PhotoSlot alt="Coming soon" />);
    expect(screen.getByRole("img", { name: "Coming soon" })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- photoslot`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `components/ui/PhotoSlot.tsx`**

```tsx
import Image from "next/image";

export function PhotoSlot({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-paper ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-lime" fill="currentColor" aria-hidden>
        <path d="M12 2C7 6 4 10 4 14a8 8 0 0 0 16 0c0-4-3-8-8-12Z" />
      </svg>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify pass**

Run: `npm run test -- photoslot`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: PhotoSlot with branded fallback"
```

---

### Task 6: Nav (header) with Programs dropdown + mobile menu

**Files:**
- Create: `components/layout/Nav.tsx`
- Test: `__tests__/nav.test.tsx`

**Interfaces:**
- Consumes: `navLinks`, `programLinks` from `content/nav.ts`; `Button` from `components/ui/Button`.
- Produces: `Nav()` — a client component (`"use client"`). Renders the logo (`/logo.webp`) linking home, the nav links, a "Programs" disclosure listing `programLinks`, and a "Donate" `Button` to `/donate`. Mobile: a hamburger toggling a panel with all links.

- [ ] **Step 1: Write `__tests__/nav.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Nav } from "@/components/layout/Nav";

describe("Nav", () => {
  it("renders the brand logo and a Donate link", () => {
    render(<Nav />);
    expect(screen.getByAltText(/bin to better/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /donate/i })).toHaveAttribute("href", "/donate");
  });
  it("lists all four programs", () => {
    render(<Nav />);
    for (const p of ["Bounce Back", "Tech to Treasure", "Eco-filament", "Workshop"]) {
      expect(screen.getByRole("link", { name: p })).toBeInTheDocument();
    }
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- nav`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `components/layout/Nav.tsx`**

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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.webp" alt="Bin to Better" width={150} height={48} priority />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/about" className="text-sm font-medium text-ink hover:text-emerald">About</Link>
          <div className="group relative">
            <button className="text-sm font-medium text-ink hover:text-emerald">Programs</button>
            <div className="invisible absolute left-0 top-full w-52 rounded-xl bg-white p-2 opacity-0 shadow-lg ring-1 ring-ink/5 transition group-hover:visible group-hover:opacity-100">
              {programLinks.map((p) => (
                <Link key={p.href} href={p.href} className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-paper">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.filter((l) => l.href !== "/about").map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink hover:text-emerald">
              {l.label}
            </Link>
          ))}
          <Button href="/donate">Donate</Button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 px-6 py-4 md:hidden">
          {[{ label: "About", href: "/about" }, ...programLinks, ...navLinks.filter((l) => l.href !== "/about")].map(
            (l) => (
              <Link key={l.href} href={l.href} className="block py-2 text-ink" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            )
          )}
          <div className="pt-3">
            <Button href="/donate">Donate</Button>
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 4: Run test to verify pass**

Run: `npm run test -- nav`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: site navigation with programs dropdown"
```

---

### Task 7: Footer with FFC attribution

**Files:**
- Create: `components/layout/Footer.tsx`
- Test: `__tests__/footer.test.tsx`

**Interfaces:**
- Consumes: `site` from `content/site.ts`; `navLinks`, `programLinks` from `content/nav.ts`.
- Produces: `Footer()` — dark (`bg-ink`) footer with the white logo (`/logo-white.png`), full link list, contact (email, Instagram, LinkedIn), and the FFC copyright line.

- [ ] **Step 1: Write `__tests__/footer.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("shows the Free For Charity attribution", () => {
    render(<Footer />);
    expect(screen.getByText(/Free For Charity/)).toBeInTheDocument();
    expect(screen.getByText(/EIN 46-2471893/)).toBeInTheDocument();
  });
  it("links the contact email", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /outreach@bintobetter.org/ })).toHaveAttribute(
      "href",
      "mailto:outreach@bintobetter.org"
    );
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- footer`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `components/layout/Footer.tsx`**

```tsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { navLinks, programLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <Image src="/logo-white.png" alt="Bin to Better" width={170} height={54} />
          <p className="mt-4 max-w-xs text-sm text-paper/70">{site.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-paper">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            {[...navLinks, ...programLinks, { label: "Donate", href: "/donate" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-lime">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-paper">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li><a className="hover:text-lime" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-lime" href={site.instagram}>Instagram</a></li>
            <li><a className="hover:text-lime" href={site.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-6 py-6 text-center text-xs text-paper/60">
        {site.copyright}
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Run test to verify pass**

Run: `npm run test -- footer`
Expected: PASS (2 tests). Note: `site.copyright` uses "· EIN 46-2471893"; ensure the test substring `EIN 46-2471893` is present (no colon).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: footer with Free For Charity attribution"
```

---

### Task 8: Home page

**Files:**
- Modify: `app/page.tsx`
- Create: `components/ui/ProgramCard.tsx`
- Test: `__tests__/home.test.tsx`

**Interfaces:**
- Consumes: `Nav`, `Footer`, `Section`, `Button`, `Stat`, `PhotoSlot`, `Card`, and `content/home.ts` (`stats`, `programsPreview`, `testimonials`, `mission`), `content/partners.ts` (`partnerLogos`).
- Produces: `ProgramCard({ title, blurb, href })` and the composed home page.

- [ ] **Step 1: Write `__tests__/home.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("shows the tagline and both hero CTAs", () => {
    render(<Home />);
    expect(screen.getByText(/Turning waste into opportunity/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Explore Our Projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Involved/i })).toBeInTheDocument();
  });
  it("renders all three stats", () => {
    render(<Home />);
    expect(screen.getByText("50K+")).toBeInTheDocument();
    expect(screen.getByText("200+")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- home`
Expected: FAIL (current scaffold page has no tagline).

- [ ] **Step 3: Implement `components/ui/ProgramCard.tsx`**

```tsx
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function ProgramCard({ title, blurb, href }: { title: string; blurb: string; href: string }) {
  return (
    <Card className="flex flex-col">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm text-ink/70">{blurb}</p>
      <Link href={href} className="mt-4 text-sm font-semibold text-emerald hover:text-clay">
        Learn more →
      </Link>
    </Card>
  );
}
```

- [ ] **Step 4: Implement `app/page.tsx`**

Compose the sections in order: hero (tagline + `Button` primary "Explore Our Projects" to `#programs` + `Button` secondary "Get Involved" to `/donate`, with a `PhotoSlot` hero image), mission `Section`, stats band (`Stat` × 3), `#programs` grid (`ProgramCard` from `programsPreview`), testimonials (`Card` per quote), partner logo strip (map `partnerLogos` to `Image`), closing donate CTA. Wrap with `<Nav />` … `<Footer />`. Use only brand tokens. Pull all strings from `content/home.ts`. Example hero skeleton:

```tsx
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Card } from "@/components/ui/Card";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { stats, programsPreview, testimonials, mission } from "@/content/home";
import { partnerLogos } from "@/content/partners";

export default function Home() {
  return (
    <>
      <Nav />
      <Section className="bg-paper">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Turning waste into opportunity.
            </h1>
            <p className="mt-4 text-lg text-ink/70">
              One item at a time, one community at a time.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#programs">Explore Our Projects</Button>
              <Button href="/donate" variant="secondary">Get Involved</Button>
            </div>
          </div>
          <PhotoSlot alt="Bin to Better volunteers" className="aspect-[4/3] overflow-hidden rounded-2xl" />
        </div>
      </Section>
      <Section>
        <p className="mx-auto max-w-3xl text-center text-xl text-ink/80">{mission}</p>
      </Section>
      <Section className="bg-emerald/5">
        <div className="grid grid-cols-3 gap-6">
          {stats.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
        </div>
      </Section>
      <Section id="programs">
        <h2 className="text-3xl font-semibold text-ink">What We Do</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {programsPreview.map((p) => <ProgramCard key={p.href} title={p.title} blurb={p.blurb} href={p.href} />)}
        </div>
      </Section>
      <Section className="bg-emerald/5">
        <h2 className="text-3xl font-semibold text-ink">What People Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <p className="text-ink/80">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-emerald">— {t.author}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          {partnerLogos.map((src) => (
            <Image key={src} src={src} alt="Partner logo" width={120} height={60} className="h-12 w-auto object-contain" />
          ))}
        </div>
      </Section>
      <Section className="bg-ink text-paper">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Join us in turning waste into opportunity.</h2>
          <div className="mt-6 flex justify-center"><Button href="/donate">Donate</Button></div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Run test to verify pass**

Run: `npm run test -- home`
Expected: PASS (2 tests).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: redesigned home page"
```

---

### Task 9: Program page template + four program pages

**Files:**
- Create: `components/programs/ProgramPage.tsx`
- Create: `app/bounce-back/page.tsx`, `app/tech-to-treasure/page.tsx`, `app/eco-filament/page.tsx`, `app/workshop/page.tsx`
- Test: `__tests__/programs.test.tsx`

**Interfaces:**
- Consumes: `programs` from `content/programs.ts`, `Nav`, `Footer`, `Section`, `Button`, `PhotoSlot`, `Card`.
- Produces: `ProgramPage({ slug }: { slug: keyof typeof programs })` rendering one program's hero + sections + steps + logos + CTA. Each route file is a 3-line wrapper passing its slug.

- [ ] **Step 1: Write `__tests__/programs.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BounceBack from "@/app/bounce-back/page";
import { programs } from "@/content/programs";

describe("Program pages", () => {
  it("Bounce Back renders its title", () => {
    render(<BounceBack />);
    expect(screen.getByRole("heading", { name: programs["bounce-back"].title })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- programs`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `components/programs/ProgramPage.tsx`**

```tsx
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { programs } from "@/content/programs";

export function ProgramPage({ slug }: { slug: keyof typeof programs }) {
  const p = programs[slug];
  return (
    <>
      <Nav />
      <Section className="bg-emerald/5">
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{p.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">{p.tagline}</p>
      </Section>
      {p.sections.map((s, i) => (
        <Section key={i}>
          <h2 className="text-2xl font-semibold text-ink">{s.heading}</h2>
          <p className="mt-4 max-w-3xl text-ink/80">{s.body}</p>
        </Section>
      ))}
      {p.steps && (
        <Section className="bg-emerald/5">
          <div className="grid gap-6 md:grid-cols-3">
            {p.steps.map((step, i) => (
              <Card key={i}>
                <div className="font-serif text-3xl text-emerald">{i + 1}</div>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.body}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}
      <Section className="bg-ink text-paper text-center">
        <h2 className="text-3xl font-semibold">Want to help?</h2>
        <div className="mt-6 flex justify-center"><Button href="/donate">Get Involved</Button></div>
      </Section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Implement the four route files**

```tsx
// app/bounce-back/page.tsx
import { ProgramPage } from "@/components/programs/ProgramPage";
export default function Page() { return <ProgramPage slug="bounce-back" />; }
```

Repeat for `tech-to-treasure`, `eco-filament`, `workshop` with the matching slug.

- [ ] **Step 5: Run test to verify pass**

Run: `npm run test -- programs`
Expected: PASS (1 test).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: program pages from shared template"
```

---

### Task 10: Partners, Team, Events, Donate, About pages

**Files:**
- Create: `app/partners/page.tsx`, `app/officers-and-team/page.tsx`, `app/events/page.tsx`, `app/donate/page.tsx`, `app/about/page.tsx`
- Test: `__tests__/pages.test.tsx`

**Interfaces:**
- Consumes: `Nav`, `Footer`, `Section`, `Card`, `PhotoSlot`, `Button`, and content modules `partners`, `team`, `events`, `home`(about export).
- Produces: five composed pages. Donate preserves the original page's donate path/links verbatim.

- [ ] **Step 1: Write `__tests__/pages.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Partners from "@/app/partners/page";
import Team from "@/app/officers-and-team/page";
import { team } from "@/content/team";

describe("content pages", () => {
  it("Partners renders a partner logo image", () => {
    render(<Partners />);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(1);
  });
  it("Team renders every member name", () => {
    render(<Team />);
    for (const m of team) expect(screen.getByText(m.name)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- pages`
Expected: FAIL (modules not found).

- [ ] **Step 3: Implement `app/partners/page.tsx`**

```tsx
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { partnerLogos } from "@/content/partners";

export default function Partners() {
  return (
    <>
      <Nav />
      <Section>
        <h1 className="text-4xl font-semibold text-ink">Our Partners</h1>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {partnerLogos.map((src) => (
            <div key={src} className="flex items-center justify-center rounded-xl bg-white p-6 ring-1 ring-ink/5">
              <Image src={src} alt="Partner logo" width={160} height={80} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Implement `app/officers-and-team/page.tsx`**

```tsx
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { team } from "@/content/team";

export default function Team() {
  return (
    <>
      <Nav />
      <Section>
        <h1 className="text-4xl font-semibold text-ink">Officers &amp; Team</h1>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {team.map((m) => (
            <Card key={m.name} className="p-0 overflow-hidden">
              <PhotoSlot src={m.photo} alt={m.name} className="aspect-square" />
              <div className="p-4">
                <div className="font-semibold text-ink">{m.name}</div>
                <div className="text-sm text-ink/60">{m.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Implement `app/events/page.tsx`, `app/donate/page.tsx`, `app/about/page.tsx`**

Build each by composing `Section`/`Card`/`Button` with the verbatim content from `content/events.ts`, the original donate page, and the about export. Each wraps content in `<Nav />` … `<Footer />`. Donate must reproduce the original donate page's links/instructions exactly (no new payment integration).

- [ ] **Step 6: Run test to verify pass**

Run: `npm run test -- pages`
Expected: PASS (2 tests).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: partners, team, events, donate, about pages"
```

---

### Task 11: Per-page metadata, robots.txt, sitemap

**Files:**
- Create: `app/robots.ts`, `app/sitemap.ts`
- Modify: each `app/*/page.tsx` to export `metadata` (or add `generateMetadata`)
- Test: `__tests__/seo.test.ts`

**Interfaces:**
- Produces: `app/robots.ts` default export returning `MetadataRoute.Robots`; `app/sitemap.ts` returning `MetadataRoute.Sitemap` listing all 10 routes. Each page exports a `metadata: Metadata` with a unique title/description.

- [ ] **Step 1: Write `__tests__/seo.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

describe("seo", () => {
  it("sitemap lists all primary routes", () => {
    const urls = sitemap().map((e) => e.url);
    for (const p of ["", "/about", "/bounce-back", "/tech-to-treasure", "/eco-filament", "/workshop", "/partners", "/officers-and-team", "/events", "/donate"]) {
      expect(urls.some((u) => u.endsWith(p === "" ? "" : p))).toBe(true);
    }
  });
  it("robots allows crawling and references the sitemap", () => {
    const r = robots();
    expect(r.sitemap).toContain("sitemap.xml");
  });
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- seo`
Expected: FAIL (modules not found).

- [ ] **Step 3: Implement `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://bin2b.vercel.app/sitemap.xml",
  };
}
```

- [ ] **Step 4: Implement `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";

const base = "https://bin2b.vercel.app";
const routes = ["", "/about", "/bounce-back", "/tech-to-treasure", "/eco-filament", "/workshop", "/partners", "/officers-and-team", "/events", "/donate"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
```

- [ ] **Step 5: Add `metadata` exports to each page**

For each `app/*/page.tsx`, add e.g.:

```tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About | Bin to Better", description: "Our mission, story, and how we work." };
```

(Use a distinct title/description per page. Program/team/etc. pages that are client components must move `metadata` into the route file — these route files are server components, so this is fine.)

- [ ] **Step 6: Run test to verify pass**

Run: `npm run test -- seo`
Expected: PASS (2 tests).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: robots, sitemap, and per-page metadata"
```

---

### Task 12: Full verification, accessibility, and production deploy

**Files:**
- None (verification + deploy)

**Interfaces:**
- Consumes: everything above.

- [ ] **Step 1: Run the full test suite**

Run: `npm run test`
Expected: ALL tests pass.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: No errors. Fix any.

- [ ] **Step 3: Production build**

Run: `npm run build`
Expected: All 10 routes compile (`○`/`●`), no errors. Confirm `/`, `/about`, `/bounce-back`, `/tech-to-treasure`, `/eco-filament`, `/workshop`, `/partners`, `/officers-and-team`, `/events`, `/donate` are listed.

- [ ] **Step 4: Local smoke check**

Run: `npm run dev` and visit each route; confirm content + images render, nav dropdown + mobile menu work, footer shows FFC attribution, no console errors. Stop the server.

- [ ] **Step 5: Accessibility audit**

Use the `accesslint:audit` skill (or `audit_live` against the running dev server) on Home, a program page, and Team. Fix any WCAG AA violations (contrast, alt text, heading order, focus states). The 5-color palette: verify emerald `#1F7A45` on paper and on white meets AA for text.

- [ ] **Step 6: Confirm no banned patterns**

Grep the codebase to confirm the redesign constraints hold:

```bash
grep -rEi "framer-motion|clip-path: polygon|radial-gradient|linear-gradient\(135deg, #1a2e23" app components && echo "FOUND BANNED" || echo "clean"
```
Expected: `clean`.

- [ ] **Step 7: Commit any fixes, then push**

```bash
git add -A
git commit -m "chore: verification fixes" || true
git push origin main
```

- [ ] **Step 8: Deploy to production**

The push auto-deploys via the connected GitHub integration. Confirm, or force a prod deploy:

```bash
vercel deploy --prod --yes --token "$VERCEL_TOKEN"
```
(Token name `b2bclaude` — provided by the user; export it as `VERCEL_TOKEN` for the session.)

- [ ] **Step 9: Verify production**

Run: `curl -s -o /dev/null -w "%{http_code}" https://bin2b.vercel.app/` → expect `200`. Spot-check 2–3 routes return 200 and render the new design.

- [ ] **Step 10: Clean up the reference clone**

```bash
rm -rf /c/Users/yuvra/Downloads/_ffc_ref
```

- [ ] **Step 11: Final commit (if anything pending)**

```bash
git add -A && git commit -m "chore: finalize redesign" || true
git push origin main
```

---

## Notes for the implementer

- **Tailwind v4:** there is no `tailwind.config.js`. All theme tokens live in `app/globals.css` under `@theme inline`. Add new tokens there, not in a config file.
- **Client vs server:** `Nav` is a client component (`"use client"`) because of the mobile toggle. Pages that only compose static content stay server components so they can export `metadata`. Never put `"use client"` on a page that exports `metadata`.
- **Images:** use `next/image` with explicit width/height. Partner/sponsor logos are bitmap PNGs of varying sizes — constrain with `className="h-X w-auto object-contain"`.
- **Verbatim content:** if a string in a content module looks awkward, keep it — match the live site. Design is changing, copy is not.
- **DRY:** program pages and route metadata are the only places tempted toward duplication — the shared `ProgramPage` and content modules prevent it. Don't inline copy in JSX; put it in `content/*`.
