import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { site } from "@/content/site";

// Every directory under app/ that renders a page, minus route handlers and the
// /workshop redirect. Derived from the filesystem so a new page that never gets
// added to the sitemap fails this test instead of silently going unindexed.
function pageRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes = ["/"];
  for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (!fs.existsSync(path.join(appDir, entry.name, "page.tsx"))) continue;
    if (entry.name === "workshop") continue; // redirect, intentionally excluded
    routes.push(`/${entry.name}`);
  }
  return routes;
}

describe("seo", () => {
  it("sitemap covers every page route exactly once", () => {
    const urls = sitemap().map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);

    const paths = urls.map((u) => new URL(u).pathname);
    expect([...paths].sort()).toEqual([...pageRoutes()].sort());
  });

  it("sitemap excludes the /workshop redirect", () => {
    const paths = sitemap().map((e) => new URL(e.url).pathname);
    expect(paths).not.toContain("/workshop");
  });

  it("sitemap URLs are absolute and share the configured site origin", () => {
    for (const entry of sitemap()) {
      expect(entry.url.startsWith(site.url)).toBe(true);
    }
  });

  it("robots allows crawling and references the sitemap", () => {
    const r = robots();
    expect(r.sitemap).toBe(`${site.url}/sitemap.xml`);
  });
});
