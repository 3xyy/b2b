import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("shows the tagline and both hero CTAs", () => {
    render(<Home />);
    expect(screen.getAllByText(/Turning waste into opportunity/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /Explore Our Projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Involved/i })).toBeInTheDocument();
  });
  it("renders all three stats", () => {
    render(<Home />);
    expect(screen.getByText("50K+")).toBeInTheDocument();
    expect(screen.getByText("200+")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
  });
});
