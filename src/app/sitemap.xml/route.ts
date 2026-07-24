import { getPostSlugs } from "@/lib/blog";

export const dynamic = "force-static";

const baseUrl = "https://bintobetter.org";

// Static routes (trailing slash to match next.config trailingSlash: true).
const staticRoutes = [
  "/",
  "/about/",
  "/bounce-back/",
  "/tech-to-treasure/",
  "/eco-filament/",
  "/workshop/",
  "/partners/",
  "/officers-and-team/",
  "/events/",
  "/blog/",
  "/contact/",
  "/donate/",
  "/privacy-policy/",
  "/terms-of-service/",
];

export async function GET() {
  const blogRoutes = getPostSlugs().map((slug) => `/blog/${slug}/`);
  const routes = [...staticRoutes, ...blogRoutes];
  const lastmod = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
