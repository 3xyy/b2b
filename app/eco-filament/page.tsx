import type { Metadata } from "next";
import { ProgramPage } from "@/components/programs/ProgramPage";

export const metadata: Metadata = {
  title: "Eco Filament | Bin to Better",
  description: "Transform plastic waste into 3D-printing filament, closing the loop on single-use plastics.",
};

export default function Page() { return <ProgramPage slug="eco-filament" />; }
