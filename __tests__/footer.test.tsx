import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("shows the Free For Charity attribution", () => {
    render(<Footer />);
    expect(screen.getByText(/Free For Charity/)).toBeInTheDocument();
    expect(screen.getByText(/EIN 46-2471893/)).toBeInTheDocument();
  });
  it("links the contact email", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /outreach@bintobetter.org/ })).toHaveAttribute(
      "href",
      "mailto:outreach@bintobetter.org"
    );
  });
});
