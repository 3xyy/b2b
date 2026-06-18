import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "About | Bin to Better",
  description: "Learn about our mission, origin story, and the approach that drives our community recycling programs.",
};

export default function About() {
  return (
    <>
      <Nav />

      {/* Mission & Vision */}
      <Section>
        <h1 className="font-display text-4xl font-semibold text-ink">About Us</h1>
        <h2 className="mt-8 font-display text-3xl font-semibold text-ink">
          {about.missionHeading}
        </h2>
        <p className="mt-4 max-w-3xl text-ink/70 leading-relaxed">{about.missionPara1}</p>
        <p className="mt-4 max-w-3xl text-ink/70 leading-relaxed">{about.missionPara2}</p>
      </Section>

      {/* Origin Story */}
      <Section className="bg-paper">
        <h2 className="font-display text-3xl font-semibold text-ink">{about.originHeading}</h2>
        <p className="mt-4 max-w-3xl text-ink/70 leading-relaxed">{about.originPara1}</p>
        <p className="mt-4 max-w-3xl text-ink/70 leading-relaxed">{about.originPara2}</p>
        <p className="mt-4 max-w-3xl text-ink/70 leading-relaxed">{about.originPara3}</p>
      </Section>

      {/* Our Approach */}
      <Section>
        <h2 className="font-display text-3xl font-semibold text-ink">{about.approachHeading}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {about.approaches.map((a) => (
            <Card key={a.title}>
              <h3 className="font-display text-xl font-semibold text-ink">{a.title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{a.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-paper">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">{about.ctaHeading}</h2>
          <p className="mt-4 text-ink/70">{about.ctaPara}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/donate">Donate</Button>
            <Button href="/" variant="secondary">Back to Home</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
