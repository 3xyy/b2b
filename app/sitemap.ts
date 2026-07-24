import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const base = site.url;

// Every indexable page. /workshop is deliberately absent — it is a redirect to
// /tech-to-treasure, and listing a redirect in the sitemap is a soft error.
export const routes = [
  "",
  "/about",
  "/bounce-back",
  "/tech-to-treasure",
  "/eco-filament",
  "/partners",
  "/officers-and-team",
  "/events",
  "/mailing-list",
  "/chapter",
  "/donate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
