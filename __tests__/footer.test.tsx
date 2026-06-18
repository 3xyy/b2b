import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("shows the Bin to Better copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/Bin to Better/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });
  it("links the contact email", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /outreach@bintobetter.org/ })).toHaveAttribute(
      "href",
      "mailto:outreach@bintobetter.org"
    );
  });
});
