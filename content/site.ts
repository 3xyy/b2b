export const site = {
  name: "Bin to Better",
  // Single source of truth for absolute URLs (metadataBase, sitemap, robots).
  // Set NEXT_PUBLIC_SITE_URL in the deployment env to point at the live domain
  // — e.g. https://bintobetter.org — without touching code.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bin2b.vercel.app",
  tagline:
    "Turning waste into opportunity. One item at a time, one community at a time.",
  email: "outreach@bintobetter.org",
  instagram: "https://www.instagram.com/_bintobetter",
  linkedin: "https://www.linkedin.com/company/bin-to-better/posts/?feedView=all",
  copyright: "© 2026 Bin to Better. All rights reserved. Turning waste into opportunity.",
};
