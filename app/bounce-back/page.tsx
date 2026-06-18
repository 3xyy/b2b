import type { Metadata } from "next";
import { ProgramPage } from "@/components/programs/ProgramPage";

export const metadata: Metadata = {
  title: "Bounce Back | Bin to Better",
  description: "Collect and redistribute gently used sports equipment to youth who need it most.",
};

export default function Page() { return <ProgramPage slug="bounce-back" />; }
