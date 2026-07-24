# Content

This directory holds **all site copy, structural data, and asset references** for
bintobetter.org, extracted out of the page markup. It is the single source of truth
for *what the site says*, decoupled from *how it's rendered*.

The goal: "keep the content" no longer means "keep the old HTML/JSX." A rebuild in any
framework (or a CMS import) can consume these files directly — the current React pages
are just one possible renderer of this data.

## Files

| File | Powers | Notes |
|------|--------|-------|
| `site.json` | global | Brand, nav menu, footer, socials, contact info, SEO metadata, copyright |
| `home.json` | `/` | Hero, mission, projects preview, testimonials, contact |
| `about.json` | `/about` | Mission & vision, origin story, founders, approach, CTA |
| `bounce-back.json` | `/bounce-back` | Tennis-ball program: sections, impact list, gallery |
| `tech-to-treasure.json` | `/tech-to-treasure` | E-waste program: sections, what-we-do, Discord CTA |
| `eco-filament.json` | `/eco-filament` | Plastic-to-filament program: section, volunteer callout |
| `workshop.json` | `/workshop` | Workshop intro + past events with station-by-station detail |
| `officers-and-team.json` | `/officers-and-team` | Team roster grouped by department |
| `events.json` | `/events` | Featured hackathon + tiered sponsor list |
| `donate.json` | `/donate` | Classes (basketball/tennis) + donation block |
| `partners.json` | `/partners` | Partner logos, corporate partners, partner lists, CTA |
| `impact.json` | `/` (Impact section) | Animated counters + collected-vs-rehomed bar chart |
| `legal.json` | `/privacy-policy`, `/terms-of-service` | Privacy & terms copy, section-by-section |
| `blog/*.md` | `/blog`, `/blog/[slug]` | Blog posts — Markdown body + frontmatter (title, date, excerpt, author, tags) |

The page JSON is consumed through the typed loaders in `src/lib/content.ts`
(interfaces in `src/content/types.ts`). Blog Markdown is read at build time by
`src/lib/blog.ts` (frontmatter via `gray-matter`, body via `marked`).

## Conventions

- **Encoding.** All text is plain UTF-8. HTML entities from the original markup
  (`&apos;`, `&amp;`, `&#8209;`, `&ldquo;`, etc.) have been decoded to real characters
  (`'`, `&`, `-`, `"`). Emoji are stored literally.
- **Images.** Every `image` / `logo` / `gallery` value is a path relative to `public/`
  (e.g. `/members/Lalit Batchu.png`). No image binaries were moved — only referenced.
- **Links.** External URLs are absolute; internal routes are root-relative (`/about`).
  A `null` `href` marks a button that had no destination wired up in the original.
- **`eyebrow`** = the small uppercase label above a section heading.
- **`imagePosition`** (team members) = CSS `object-position` override for portrait framing.

## Not included (presentation only, intentionally dropped)

Animations (Framer Motion), gradients, background patterns, decorative rings/orbs,
color tokens (see `src/app/globals.css`), and layout classes are **not** content and
live with the markup, not here.

## Known data quirks preserved as-is

- Some team members appear in multiple groups (e.g. Clovis Zhang, Pradyun Kanuparthi,
  Pranav Singh) — this mirrors the live site and is intentional, not a duplication bug.
- `partners.json` uses `bintobetter@gmail.com` for its bottom CTA while the rest of the
  site uses `outreach@bintobetter.org`. Both are kept exactly as they appear live.
- Public image files `image7.png`, `image17.png`, `image18.png` in the sponsors folder
  are **not** referenced by `events.json` — they are unused on the live site.
