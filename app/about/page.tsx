import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "About | Bin to Better",
  description:
    "Learn about our mission, origin story, and the approach that drives our community recycling programs.",
};

export default function About() {
  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-b from-forest to-emerald/70 text-paper">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-lime/40 bg-lime/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-lime">
              About Us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-serif text-5xl font-bold leading-tight text-paper sm:text-6xl">
              Our Story
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-paper/70">
              Our mission, story, and how we work.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <Section className="bg-mint">
        <Reveal>
          <SectionHeading
            eyebrow="Our Purpose"
            title={about.missionHeading}
            align="left"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <Reveal delay={80}>
              <p className="text-base leading-relaxed text-ink/75">
                {about.missionPara1}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base leading-relaxed text-ink/75">
                {about.missionPara2}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap gap-4">
                {about.badges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-emerald/10 bg-white px-5 py-4 shadow-sm"
                  >
                    <span className="text-3xl">{badge.icon}</span>
                    <span className="text-xs font-semibold text-ink/60">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual accent */}
          <Reveal delay={120} className="hidden lg:flex items-center justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-emerald/10 ring-4 ring-emerald/20">
              <span className="text-8xl">🌍</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Origin Story ─────────────────────────────────────── */}
      <Section className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="How It Started"
            title={about.originHeading}
          />
        </Reveal>

        <div className="mx-auto max-w-4xl">
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-ink/75">
              <p>{about.originPara1}</p>
              <p>{about.originPara2}</p>
              <p>{about.originPara3}</p>
            </div>
          </Reveal>

          {/* Founder portraits */}
          <Reveal delay={160}>
            <div className="mt-12 flex flex-wrap justify-center gap-10">
              {about.founders.map((founder) => (
                <div key={founder.name} className="flex flex-col items-center gap-3">
                  <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-emerald/30 sm:h-44 sm:w-44">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-ink">{founder.name}</p>
                  <p className="text-sm font-medium text-emerald">
                    {founder.role}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Our Approach ─────────────────────────────────────── */}
      <Section className="bg-emerald/5">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title={about.approachHeading}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {about.approaches.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <Card className="relative flex h-full flex-col gap-3">
                {/* Number badge */}
                <span className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald text-sm font-bold text-paper shadow">
                  {i + 1}
                </span>
                <span className="text-4xl">{a.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  {a.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="bg-forest text-paper">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-paper sm:text-4xl">
              {about.ctaHeading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-base text-paper/70">{about.ctaPara}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="mailto:outreach@bintobetter.org">
                Get Involved
              </Button>
              <Button href="/" variant="secondary">
                Back to Home
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </>
  );
}
