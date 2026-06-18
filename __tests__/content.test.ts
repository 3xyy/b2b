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
