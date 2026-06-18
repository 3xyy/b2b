import type { Metadata } from "next";
import { ProgramPage } from "@/components/programs/ProgramPage";

export const metadata: Metadata = {
  title: "Tech to Treasure | Bin to Better",
  description: "Refurbish donated electronics and put them in the hands of students and families in need.",
};

export default function Page() { return <ProgramPage slug="tech-to-treasure" />; }
