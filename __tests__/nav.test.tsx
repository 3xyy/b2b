import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Nav } from "@/components/layout/Nav";

describe("Nav", () => {
  it("renders the brand logo and a Donate link", () => {
    render(<Nav />);
    expect(screen.getByAltText(/bin to better/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /donate/i })).toHaveAttribute("href", "/donate");
  });
  it("lists all four programs", () => {
    render(<Nav />);
    for (const p of ["Bounce Back", "Tech to Treasure", "Eco-filament", "Workshop"]) {
      expect(screen.getByRole("link", { name: p })).toBeInTheDocument();
    }
  });
});
