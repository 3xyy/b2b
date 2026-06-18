import type { MetadataRoute } from "next";

const base = "https://bin2b.vercel.app";
const routes = [
  "",
  "/about",
  "/bounce-back",
  "/tech-to-treasure",
  "/eco-filament",
  "/workshop",
  "/partners",
  "/officers-and-team",
  "/events",
  "/donate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
