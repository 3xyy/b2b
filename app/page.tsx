import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import {
  stats,
  programsPreview,
  testimonials,
  mission,
  projectsBlurb,
  contactPara,
  contactFootnote,
} from "@/content/home";

export const metadata: Metadata = {
  title: "Home | Bin to Better",
  description:
    "Turning waste into opportunity — one item at a time, one community at a time.",
};

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <Section className="bg-canvas text-paper">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
            Sustainable Future
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight">
            Turning waste into{" "}
            <span className="text-court">opportunity.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
            One item at a time, one community at a time.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#programs" variant="light">
              Explore Our Projects
            </Button>
            <Button href="mailto:outreach@bintobetter.org" variant="onDark">
              Get Involved
            </Button>
          </div>
        </Reveal>

        {/* Impact row */}
        <Reveal delay={320}>
          <div className="mt-12 border-t border-paper/10 pt-8">
            <div className="flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-2xl font-medium tabular-nums text-court sm:text-3xl">
                    <AnimatedCounter value={s.value} />
                  </p>
                  <p className="mt-1 font-mono text-xs text-paper/50 uppercase tracking-[0.1em]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Mission ───────────────────────────────────────────── */}
      <Section className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Our Mission"
            title="Turning Waste into Opportunity"
            tone="light"
            align="left"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-ink/80">
            {mission.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Programs ──────────────────────────────────────────── */}
      <Section id="programs" className="bg-field">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Projects Preview"
            tone="dark"
            align="left"
          />
        </Reveal>

        <Reveal delay={40}>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-paper/70">
            {projectsBlurb}
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-4">
          {programsPreview.map((p, i) => (
            <Reveal key={p.href} delay={i * 80}>
              <Card tone="dark" className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-paper">{p.title}</h3>
                <p className="text-sm leading-relaxed text-paper/70">{p.blurb}</p>
                <Link
                  href={p.href}
                  className="mt-1 inline-flex items-center gap-1 font-mono text-xs font-medium text-court hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
                >
                  View More &rarr;
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <Section id="testimonials" className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Community Voice"
            title="What People Say"
            tone="light"
            align="left"
          />
        </Reveal>
        <Reveal delay={80}>
          <TestimonialSlider items={testimonials} />
        </Reveal>
      </Section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <Section id="contact" className="bg-canvas text-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact Us"
            tone="dark"
            align="left"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="max-w-prose text-base leading-relaxed text-paper/70">
            {contactPara}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {/* Email */}
            <a
              href="mailto:outreach@bintobetter.org"
              className="group flex flex-col gap-1.5 border border-paper/15 px-6 py-5 rounded-[3px] hover:border-court transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                Email
              </span>
              <span className="text-sm font-medium text-paper group-hover:text-court transition-colors">
                outreach@bintobetter.org
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/bintobetter"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5 border border-paper/15 px-6 py-5 rounded-[3px] hover:border-court transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                Instagram
              </span>
              <span className="text-sm font-medium text-paper group-hover:text-court transition-colors">
                @bintobetter
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-10 font-mono text-xs text-paper/30">{contactFootnote}</p>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
