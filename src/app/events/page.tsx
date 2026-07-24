import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import FeaturedEvent from "@/components/sections/events/FeaturedEvent";
import SponsorWall from "@/components/sections/events/SponsorWall";
import { getEvents } from "@/lib/content";

const data = getEvents();

export const metadata: Metadata = {
  title: data.title,
  description: data.hero.subheading,
  alternates: { canonical: "/events" },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: data.featuredEvent.title,
  description: data.featuredEvent.subtitle,
  startDate: "2026-03-28T10:00:00-07:00",
  endDate: "2026-03-28T18:00:00-07:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Tully Library",
    address: "880 Tully Rd, San Jose, CA 95111",
  },
  organizer: {
    "@type": "Organization",
    name: "Bin to Better",
    url: "https://bintobetter.org",
  },
};

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Navbar activePage="Events" />
      <main>
        <PageHeader
          eyebrow={data.hero.eyebrow}
          title={data.hero.heading}
          subheading={data.hero.subheading}
        />

        <Section width="wide" className="bg-surface-950 pt-4">
          <FeaturedEvent event={data.featuredEvent} />
        </Section>

        <Section width="wide" className="border-t border-white/5 bg-surface-950">
          <SponsorWall sponsors={data.sponsors} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
