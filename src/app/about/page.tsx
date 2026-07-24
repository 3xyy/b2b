import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import MissionVision from "@/components/sections/about/MissionVision";
import OriginStory from "@/components/sections/about/OriginStory";
import Approach from "@/components/sections/about/Approach";
import CtaBand from "@/components/sections/shared/CtaBand";
import { getAbout, site } from "@/lib/content";
import type { LinkRef } from "@/content/types";

const about = getAbout();

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Bin to Better started, our mission and vision, and how we turn everyday waste into opportunity through reuse and recycling.",
  alternates: { canonical: "/about" },
};

// Wire the "Get Involved" CTA (no href in content) to the contact email.
const ctaButtons: LinkRef[] = about.cta.buttons.map((b) =>
  b.href === null && b.label === "Get Involved"
    ? { ...b, href: `mailto:${site.contact.primaryEmail}` }
    : b,
);

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="About" />
      <main>
        <PageHeader
          badge={about.hero.badge}
          title="Our"
          titleAccent="Story"
          subheading={about.hero.subheading}
        />
        <MissionVision data={about.missionVision} />
        <OriginStory data={about.originStory} />
        <Approach data={about.approach} />
        <CtaBand
          heading={about.cta.heading}
          text={about.cta.text}
          buttons={ctaButtons}
        />
      </main>
      <Footer />
    </>
  );
}
