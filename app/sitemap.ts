import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Required under `output: export` — the file is written once at build time.
export const dynamic = "force-static";

const base = site.url;

// Every indexable page. /workshop is deliberately absent — it is a redirect to
// /tech-to-treasure (public/workshop/index.html), and listing a redirect in the
// sitemap is a soft error.
export const routes = [
  "",
  "/bounce-back",
  "/tech-to-treasure",
  "/eco-filament",
  "/partners",
  "/officers-and-team",
  "/events",
  "/achievements",
  "/get-involved",
  "/mailing-list",
  "/chapter",
  "/donate",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Trailing slashes to match the exported pages (next.config trailingSlash),
  // so sitemap URLs resolve directly instead of redirecting.
  return routes.map((r) => ({
    url: `${base}${r}/`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
