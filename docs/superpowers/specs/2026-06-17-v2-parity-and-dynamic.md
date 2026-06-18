# Bin to Better v2 — Full Parity + Dynamic Redesign Spec

Goal: match the CURRENT live site's content 1:1 (it's richer than the v1 rebuild),
then elevate: **more green, stronger B2B branding, more design**, and **tasteful
dynamic interactions** that still read as a grounded nonprofit (not flashy).

Original source to read for VERBATIM copy: clone at `C:\Users\yuvra\Downloads\_ffc_ref`
(`src/app/<page>/page.tsx`, `src/components/*`, `src/data/partners.ts`). Copy text
exactly (decode HTML entities). The current build is at `C:\Users\yuvra\Downloads\b2bsite`.

## Design direction (v2)
- Keep Fraunces (headings) + Inter (body). Keep the 5 tokens but **lean greener**:
  use emerald as the dominant brand color, lime as a lively accent, add green
  section backgrounds (`bg-emerald`, `bg-emerald/5`, dark `bg-emerald-950`-like via
  ink+emerald), and the leaf + tennis-ball motif from the logo. Paper stays the
  base; clay is the rare warm accent.
- Stronger branding: use the real logo (`/logo.webp` light, `/logo-white.png` dark)
  prominently; reuse the leaf/tennis-ball motif as section accents and bullets.
- Every section gets a consistent eyebrow (small uppercase emerald label) + serif H2,
  via a shared `SectionHeading` component.
- Generous whitespace, rounded cards, soft shadows, clear hierarchy.

## Dynamic components (new, in `components/ui/` or `components/motion/`)
Tasteful, reduced-motion-aware, nonprofit-appropriate:
- `Reveal` — wraps content, fades/translates in on scroll (IntersectionObserver).
  Respects `prefers-reduced-motion` (renders static).
- `AnimatedCounter` — counts up to a target number when scrolled into view (used for
  the home stats "50K+/200+/15" and the bounce-back "100,000+"). Parse numeric part,
  keep suffix (K+, +). Reduced-motion → show final value immediately.
- `TestimonialSlider` — auto-rotating carousel of testimonial cards (pause on hover,
  prev/next + dots, keyboard accessible). Used on home.
- `LogoMarquee` — horizontal auto-scroll strip of logos (used on bounce-back). Pause
  on hover; reduced-motion → static wrap/grid.
- `Lightbox` — click a marquee image to enlarge in a modal (Esc/overlay closes, focus
  trap, `aria-modal`).
- `DiscordButton` — styled button/link with a Discord glyph for tinyurl.com/b2bdisc.
- `SectionHeading({ eyebrow, title, subtitle? })`.
Keep these CLIENT components (`"use client"`); pages stay server components and import
them. NO framer-motion dependency required — use CSS transitions + IntersectionObserver.
Avoid: infinite distracting loops beyond the gentle logo marquee, dark gradient orbs,
diagonal clip-path splits.

## Footer / site corrections (`content/site.ts` + Footer)
Match the live site:
- Footer copyright text EXACTLY: `© 2026 Bin to Better. All rights reserved. Turning waste into opportunity.`
- instagram: `https://www.instagram.com/bintobetter/`
- linkedin: `https://www.linkedin.com/company/bin-to-better/posts/?feedView=all`
- Footer brand: the logo (white on dark). Keep nav/footer link lists.
(The Apache LICENSE file stays in the repo; it is NOT shown in the footer.)

## Per-page parity requirements (read the og file for exact wording)

### Home (`src/app/page.tsx`)
- Hero: eyebrow "♻️ Sustainable Future" (or a clean leaf badge), H1 "Bin to Better",
  subhead "Turning waste into opportunity. One item at a time, one community at a time.",
  CTAs: "Explore Our Projects" → `#programs`; **"Get Involved" → `mailto:outreach@bintobetter.org`**
  (NOT /donate). Right side: the real logo `/logo.webp` (branded treatment, can add a
  subtle green ring/leaf accents — keep tasteful). Inline stats strip with **AnimatedCounter**:
  50K+ Items Recycled · 200+ Partners · 15 Communities.
- Mission: eyebrow "Our Mission", H2 "Turning Waste into Opportunity", the 3 verbatim
  mission paragraphs.
- Projects Preview (`id="programs"`): eyebrow "What We Do", H2 "Projects Preview",
  blurb "Below are snapshots of our three main projects. Click 'View More' on each card
  to dive deeper into the details." Three cards (Bounce Back 🎾, Tech to Treasure 💻,
  Eco-filament 🧵) each with verbatim blurb + "View More" → program page.
- Testimonials (`id="testimonials"`): eyebrow "Community Voice", H2 "What People Say",
  subhead "See how our initiatives are making a real difference in classrooms and
  communities." Use **TestimonialSlider** with all 5 testimonials — each needs the FULL
  verbatim quote + author + role (read og file; quotes are long). Add `role` to the
  testimonials content type.
- Contact (`id="contact"`): H2 "Contact Us", verbatim paragraph, two cards (email →
  mailto:outreach@bintobetter.org showing "outreach@bintobetter.org"; Instagram →
  https://instagram.com/bintobetter showing "@bintobetter"), footer note.
- REMOVE the v1 invented "Trusted Partners" home logo strip and the invented closing
  "Join us…/Donate" CTA (not in original).

### About (`src/app/about/page.tsx`)
- Hero: eyebrow "About Us", H1 "Our Story", subhead "Our mission, story, and how we work."
- Mission & Vision: eyebrow "Our Purpose", H2, 2 verbatim paragraphs, the 3 badges
  (♻️ Circular Economy, 🌱 Sustainability, 🤝 Community).
- Origin Story: eyebrow "How It Started", H2, 3 verbatim paragraphs, **founder portraits**:
  `/members/Lalit Batchu.png` (Lalit, Co-Founder) and `/members/Rohan Bablupatti.png`
  (Rohan, Co-Founder) as circular avatars.
- Our Approach: eyebrow "How We Work", H2, 3 numbered cards (Education, Partnerships,
  Hands-on Initiatives) with verbatim bodies.
- CTA: H2 "Join Our Mission", verbatim paragraph; buttons "Get Involved" →
  mailto:outreach@bintobetter.org and "Back to Home" → `/`.

### Bounce Back (`src/app/bounce-back/page.tsx`) — give it its OWN page (not generic template)
- Eyebrow "Project Spotlight", H1 "Bounce Back Project", subhead verbatim.
- "The Focus of Our Efforts" paragraph (verbatim, 330M balls/400 years).
- "What We Do" checklist: Collection, Reuse, Impact, Get Involved (with internal link to
  /partners) — verbatim.
- Stat box: "100,000+" (AnimatedCounter) "Tennis Balls Collected", 🎾.
- **LogoMarquee** of the 4 `/bounce-back-logos/*` images, each click-to-enlarge via **Lightbox**.

### Tech to Treasure (`src/app/tech-to-treasure/page.tsx`)
- Eyebrow "Project Spotlight", H1 "Tech to Treasure", subhead verbatim.
- "A Device's Second Chance" paragraph (verbatim).
- "What We Do" checklist: Collection & Education, Hands-On Learning, Responsible Recycling.
- "Get Involved": verbatim + **DiscordButton** → https://tinyurl.com/b2bdisc.

### Eco-filament (`src/app/eco-filament/page.tsx`)
- Eyebrow "Project Spotlight", H1 "Eco-filament", subhead verbatim.
- "The New Building Blocks of Society" paragraph (verbatim).
- Discord volunteering callout with **DiscordButton** → https://tinyurl.com/b2bdisc.

### Workshop (`src/app/workshop/page.tsx`)
- Header eyebrow "Workshop", H1 "Tech to Treasure Workshop", subhead verbatim.
- "A Device's Second Chance" + "What We Do" checklist + "Get Involved" Discord (same as T2T).
- **Past Events**: H2, the full structured event card: date pill "March 1, 2026 · Fremont, CA",
  H3 "Tech to Treasure", subhead, location line, "✓ Completed" badge, 4-col detail grid
  (When / Age Group / Duration / Group Size), format note, and the 3 station cards
  (Station 1 Desktop Computer, Station 2 3D Printer, Station 3 Monitor) each with its
  components list + prompts/activities (verbatim from og).

### Partners (`src/app/partners/page.tsx` + og `PartnersContent.tsx`)
- Eyebrow "Our Partners", H1 "Partners", subhead verbatim.
- Logo grid: all 13 `partnerLogos`.
- "Why partner with us" — 3 bullets (verbatim).
- "Our Corporate Partners" → "Business Partners": Sun Dragon Computers + its logo +
  the verbatim note.
- "Tennis Clubs & Academies" — 9-item list (verbatim).
- "Animal Shelters & Pet Services" — 4-item list (verbatim).
- "Interested in partnering with us?" CTA → button "Get in Touch" → mailto:bintobetter@gmail.com
  + verbatim body.

### Officers & Team (`src/app/officers-and-team/page.tsx`)
- Above H1: "Interested in being an officer? Apply here" → https://forms.gle/Pf9kCT1HbYm9Nobt7.
- H1 "Officers & Team", subhead verbatim.
- 9 category groups, each a card with green category header + member grid. Each member:
  circular photo, name, role (uppercase green), **school**, **fun fact** (💡, italic).
  Restructure `content/team.ts` to: `{ category, members: { name, role, school, fact,
  photo, imagePosition? }[] }[]`. Include imagePosition for Yuva Chandrachood ("70% 25%")
  and Ashish Swaminathan ("center 25%"). All groups/members/schools/facts verbatim from og.

### Events (`src/app/events/page.tsx`)
- Hero eyebrow "Get Involved", H1 "Events", subhead verbatim.
- Featured Event: full hackathon card — date pill, H3 "Tech to Treasure Hackathon",
  tagline, info pills (date/time/location), "About the Event" prose, "Our Mission" 3 items,
  Prizes grid (1st $4000+, 2nd $400+, 3rd $200+, 4th $50+, 5th $50+, Wolfram Award 🐺), the
  "$1000+ in platform credits" note, Keynote Speakers "To be announced soon".
- Sponsors: H2 "Backed by Global Innovators", **4 tiers** of logos with external links,
  using `/sponsors/imageN.png`. Map exactly (read og events page for the tier groupings +
  URLs): Tier1 image8→glidtech.us, image12→wolfram.com; Tier2 image13→yriscience.com,
  image5→momen.app, image10→codecrafters.io, image9→featherless.ai, image4→mobbin.com;
  Tier3 image20→cleanshot.com, image19→relay.app, image3→nordpass.com, image6→nordvpn.com,
  image14→nordprotect.com, image2→saily.com; Tier4 image11→incogni.com, image16→gen.xyz,
  image1→nexos.ai. Logos can animate in on scroll (Reveal) + subtle hover.

### Donate (`src/app/donate/page.tsx`) — already close; verify verbatim
- "Classes" eyebrow "Support Our Mission", H2 "Classes", subhead (free trial note).
- Basketball Classes 🏀 card (verbatim) → "Register Now" https://tinyurl.com/bballclasses.
- Tennis Classes 🎾 card (verbatim) → "Register Now" https://tinyurl.com/tennisregis.
- Donate section H1 "Donate", verbatim body, "Donate via PledgeIt" →
  https://charity.pledgeit.org/bintobetter.

## Constraints
- Verbatim content (read og files). Brand tokens + the two fonts only. Reduced-motion safe.
- Keep tests green where they still apply; update tests that assert changed structure.
- Conventional Commits; trailer `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- Deploy target https://bin2b.vercel.app (push to main auto-deploys; or `vercel --prod`).
