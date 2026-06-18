import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Partners from "@/app/partners/page";
import Team from "@/app/officers-and-team/page";
import { team } from "@/content/team";

describe("content pages", () => {
  it("Partners renders a partner logo image", () => {
    render(<Partners />);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(1);
  });
  it("Team renders every member name", () => {
    render(<Team />);
    const uniqueNames = [...new Set(team.map((m) => m.name))];
    for (const name of uniqueNames) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    }
  });
});
