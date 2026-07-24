import type { Metadata } from "next";
import LegalPage from "@/components/sections/shared/LegalPage";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bin to Better collects and uses information from this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={legal.privacy} />;
}
