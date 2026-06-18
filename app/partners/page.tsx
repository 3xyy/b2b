import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import {
  partnerLogos,
  whyPartner,
  corporatePartners,
  tennisClubs,
  animalShelters,
} from "@/content/partners";

export const metadata: Metadata = {
  title: "Partners | Bin to Better",
  description:
    "Meet the organizations and sponsors who help Bin to Better create lasting environmental impact.",
};

export default function Partners() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <Section className="bg-mint">
        <Reveal>
          <SectionHeading
            eyebrow="Our Partners"
            title="Partners"
            subtitle="Our mission wouldn't be possible without the support of our partners. We collaborate with tennis clubs, academies, schools, and animal shelters to collect materials and ensure they are put to good use."
          />
        </Reveal>
      </Section>

      {/* Partner logo grid */}
      <Section>
        <Reveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
            {partnerLogos.map((src) => (
              <div
                key={src}
                className="flex items-center justify-center rounded-xl bg-white p-4 ring-1 ring-ink/5 shadow-sm"
              >
                <Image
                  src={src}
                  alt="Partner logo"
                  width={160}
                  height={64}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Why partner with us */}
      <Section className="bg-emerald/5">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 ring-1 ring-emerald/20 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">
              Why partner with us
            </h3>
            <ul className="space-y-3 text-ink/70">
              {whyPartner.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Business Partners */}
      <Section>
        <Reveal>
          <SectionHeading title="Business Partners" align="center" />
        </Reveal>
        {corporatePartners.map((partner, i) => (
          <Reveal key={partner.name} delay={i * 100}>
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 ring-1 ring-emerald/20 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-ink mb-4">
                  {partner.name}
                </h3>
                <p className="text-sm italic text-ink/60">
                  {partner.note.split("outreach@bintobetter.org")[0]}
                  <a
                    href="mailto:outreach@bintobetter.org"
                    className="text-emerald hover:underline"
                  >
                    outreach@bintobetter.org
                  </a>
                  {partner.note.split("outreach@bintobetter.org")[1]}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={320}
                  height={160}
                  className="max-w-xs object-contain"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </Section>

      {/* Tennis Clubs & Animal Shelters */}
      <Section className="bg-mint">
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-2xl bg-white p-8 ring-1 ring-emerald/20 shadow-sm h-full">
              <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
                Tennis Clubs &amp; Academies
              </h3>
              <ul className="space-y-3 text-ink/70 text-sm">
                {tennisClubs.map((club) => (
                  <li key={club} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime" />
                    {club}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl bg-white p-8 ring-1 ring-emerald/20 shadow-sm h-full">
              <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
                Animal Shelters &amp; Pet Services
              </h3>
              <ul className="space-y-3 text-ink/70 text-sm">
                {animalShelters.map((shelter) => (
                  <li key={shelter} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime" />
                    {shelter}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl bg-emerald p-10 text-center text-paper">
            <h4 className="font-serif text-2xl font-semibold mb-3">
              Interested in partnering with us?
            </h4>
            <p className="mb-6 text-paper/80">
              Contact us at{" "}
              <a
                href="mailto:bintobetter@gmail.com"
                className="underline underline-offset-4 hover:text-lime transition-colors"
              >
                bintobetter@gmail.com
              </a>{" "}
              to learn how your organization can join the movement.
            </p>
            <Button href="mailto:bintobetter@gmail.com" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
