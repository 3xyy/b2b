import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DrawLine } from "@/components/motion/DrawLine";
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

      {/* ── Hero ──────────────────────────────────────────────── */}
      <Section className="bg-canvas text-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Our Partners"
            title="Partners"
            subtitle="Our mission wouldn't be possible without the support of our partners. We collaborate with tennis clubs, academies, schools, and animal shelters to collect materials and ensure they are put to good use."
            tone="dark"
            align="left"
          />
        </Reveal>
      </Section>

      {/* ── Partner logo grid ─────────────────────────────────── */}
      <Section className="bg-paper">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-6 shrink-0 bg-sage" aria-hidden="true" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
              Our Partners
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partnerLogos.map((src) => (
              <div
                key={src}
                className="flex items-center justify-center border border-ink/10 bg-paper p-5 rounded-[3px]"
              >
                <Image
                  src={src}
                  alt="Partner logo"
                  width={200}
                  height={100}
                  className="max-h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Why partner with us ───────────────────────────────── */}
      <Section className="bg-field">
        <Reveal>
          <SectionHeading
            eyebrow="Why Partner"
            title="Why partner with us"
            tone="dark"
            align="left"
          />
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-2 flex flex-col gap-5 max-w-2xl">
            {whyPartner.map((bullet, i) => (
              <li key={i} className="relative flex gap-4 pt-5">
                <DrawLine className="absolute left-0 top-0 h-px w-full bg-paper/15" delay={i * 80} />
                <span className="font-mono text-xs font-medium tabular-nums text-court mt-0.5 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-paper/80">{bullet}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ── Business Partners ─────────────────────────────────── */}
      <Section className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Corporate Partners"
            title="Business Partners"
            tone="light"
            align="left"
          />
        </Reveal>

        {corporatePartners.map((partner, i) => (
          <Reveal key={partner.name} delay={i * 100}>
            <div className="mt-6 flex flex-col gap-10 border border-ink/10 rounded-[3px] p-8 md:flex-row md:items-center">
              {/* Logo — large and prominent */}
              <div className="flex shrink-0 items-center justify-center md:w-80">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={360}
                  height={200}
                  className="max-w-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-ink">
                  {partner.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/60 italic">
                  {partner.note.split("outreach@bintobetter.org")[0]}
                  <a
                    href="mailto:outreach@bintobetter.org"
                    className="text-ink underline underline-offset-4 hover:text-canvas transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    outreach@bintobetter.org
                  </a>
                  {partner.note.split("outreach@bintobetter.org")[1]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </Section>

      {/* ── Tennis Clubs & Animal Shelters ────────────────────── */}
      <Section className="bg-canvas text-paper">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Tennis Clubs */}
          <Reveal>
            <div className="border border-paper/10 rounded-[3px] p-8 h-full">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 shrink-0 bg-court" aria-hidden="true" />
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
                  Collection Partners
                </p>
              </div>
              <h3 className="font-display text-2xl font-bold text-paper mb-6">
                Tennis Clubs &amp; Academies
              </h3>
              <ul className="flex flex-col divide-y divide-paper/10">
                {tennisClubs.map((club) => (
                  <li
                    key={club}
                    className="py-3 text-sm leading-relaxed text-paper/70"
                  >
                    {club}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Animal Shelters */}
          <Reveal delay={100}>
            <div className="border border-paper/10 rounded-[3px] p-8 h-full">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 shrink-0 bg-court" aria-hidden="true" />
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
                  Distribution Partners
                </p>
              </div>
              <h3 className="font-display text-2xl font-bold text-paper mb-6">
                Animal Shelters &amp; Pet Services
              </h3>
              <ul className="flex flex-col divide-y divide-paper/10">
                {animalShelters.map((shelter) => (
                  <li
                    key={shelter}
                    className="py-3 text-sm leading-relaxed text-paper/70"
                  >
                    {shelter}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <Section className="bg-field">
        <Reveal>
          <div className="border border-paper/10 rounded-[3px] p-10 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-court" aria-hidden="true" />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
                Get Involved
              </p>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-paper leading-tight text-balance">
              Interested in partnering with us?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper/70">
              Contact us at{" "}
              <a
                href="mailto:bintobetter@gmail.com"
                className="text-paper underline underline-offset-4 hover:text-court transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
              >
                bintobetter@gmail.com
              </a>{" "}
              to learn how your organization can join the movement.
            </p>
            <div className="mt-8">
              <Button href="mailto:bintobetter@gmail.com" variant="light">
                Get in Touch
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
