import type { Metadata } from "next";
import { ProgramPage } from "@/components/programs/ProgramPage";

export const metadata: Metadata = {
  title: "Workshop | Bin to Better",
  description: "Hands-on repair and upcycling workshops where community members learn to give items a second life.",
};

export default function Page() { return <ProgramPage slug="workshop" />; }
