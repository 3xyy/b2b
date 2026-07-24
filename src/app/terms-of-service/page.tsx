import type { Metadata } from "next";
import LegalPage from "@/components/sections/shared/LegalPage";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Bin to Better website.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return <LegalPage doc={legal.terms} />;
}
