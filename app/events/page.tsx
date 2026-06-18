import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Events | Bin to Better",
  description: "Find upcoming Bin to Better hackathons, community workshops, and volunteer events near you.",
};

export default function Events() {
  return (
    <>
      <Nav />
      <Section>
        <h1 className="font-display text-4xl font-semibold text-ink">Events</h1>
        <p className="mt-4 text-ink/70">
          Join us at our upcoming hackathons, workshops, and community events.
        </p>
        {events.length === 0 ? (
          <p className="mt-10 text-ink/50">No upcoming events. Check back soon.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {events.map((ev) => (
              <Card key={ev.title}>
                {ev.date && (
                  <p className="mb-2 text-sm font-semibold text-emerald">{ev.date}</p>
                )}
                <h2 className="font-display text-xl font-semibold text-ink">{ev.title}</h2>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{ev.description}</p>
              </Card>
            ))}
          </div>
        )}
      </Section>
      <Footer />
    </>
  );
}
