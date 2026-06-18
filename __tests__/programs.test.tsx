import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BounceBack from "@/app/bounce-back/page";
import { programs } from "@/content/programs";

describe("Program pages", () => {
  it("Bounce Back renders its title", () => {
    render(<BounceBack />);
    expect(screen.getByRole("heading", { name: programs["bounce-back"].title })).toBeInTheDocument();
  });
});
