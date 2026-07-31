import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
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

      <Section className="bg-canvas">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 shrink-0 bg-court" aria-hidden="true" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
              About
            </p>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-paper text-balance">
            About Bin to Better
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Student-led programs that collect, repurpose, educate, and donate
            useful materials back into the community.
          </p>
        </Reveal>
      </Section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <Section className="bg-field">
        <Reveal>
          <SectionHeading
            eyebrow="Our Purpose"
            title={about.missionHeading}
            align="left"
            tone="dark"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <Reveal delay={80}>
              <p className="text-base leading-relaxed text-paper/80">
                {about.missionPara1}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base leading-relaxed text-paper/80">
                {about.missionPara2}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                {about.badges.map((badge) => (
                  <span
                    key={badge.label}
                    className="border border-court/40 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.10em] text-court"
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Collect", "Repurpose", "Educate and Donate"].map((step, i) => (
                <div key={step} className="border border-paper/15 p-5">
                  <p className="font-mono text-xs font-medium tabular-nums text-court">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-display text-xl font-bold text-paper">
                    {step}
                  </p>
                </div>
              ))}
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
            align="left"
            tone="light"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-ink/75">
              <p>{about.originPara1}</p>
              <p>{about.originPara2}</p>
              <p>{about.originPara3}</p>
            </div>
          </Reveal>

          {/* Founder portraits — large and prominent */}
          <Reveal delay={160}>
            <div className="grid gap-5 sm:grid-cols-2">
              {about.founders.map((founder) => (
                <div
                  key={founder.name}
                  className="flex h-full flex-col items-center border border-ink/10 p-5 text-center"
                >
                  <div className="relative aspect-square w-full max-w-44 overflow-hidden rounded-full ring-4 ring-court/60 ring-offset-4 ring-offset-paper">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      sizes="(max-width: 640px) 208px, 256px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-display text-lg font-semibold text-ink">
                      {founder.name}
                    </p>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.10em] text-sage mt-1">
                      {founder.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Our Approach ─────────────────────────────────────── */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title={about.approachHeading}
            align="left"
            tone="dark"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {about.approaches.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <Card tone="dark" interactive className="relative flex h-full flex-col gap-4">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl font-semibold text-paper">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper/70">
                  {a.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="bg-field text-paper">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-paper text-balance">
              {about.ctaHeading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-base text-paper/70 max-w-lg">{about.ctaPara}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic>
                <Button href="/get-involved" variant="primary" withArrow>
                  Get Involved
                </Button>
              </Magnetic>
              <Button href="/" variant="onDark">
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
