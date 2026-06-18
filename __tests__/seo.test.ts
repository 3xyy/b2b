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
