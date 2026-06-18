import type { Metadata } from "next";
import Image from "next/image";
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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-forest to-emerald/80 text-paper">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col">
            <Reveal>
              <span className="mb-4 inline-block rounded-full border border-lime/40 bg-lime/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-lime">
                ♻️ Sustainable Future
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-serif text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-paper">Bin to</span>{" "}
                <span className="text-lime">Better</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/80">
                Turning waste into opportunity.{" "}
                <span className="text-paper/60">
                  One item at a time, one community at a time.
                </span>
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#programs">Explore Our Projects</Button>
                <Button href="mailto:outreach@bintobetter.org" variant="secondary">
                  Get Involved
                </Button>
              </div>
            </Reveal>

            {/* Stats strip */}
            <Reveal delay={320}>
              <div className="mt-10 flex gap-10 border-t border-paper/10 pt-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-lime sm:text-3xl">
                      <AnimatedCounter value={s.value} />
                    </p>
                    <p className="mt-0.5 text-xs text-paper/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — logo with emerald ring accent */}
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full ring-4 ring-lime/20 sm:h-96 sm:w-96">
              <div className="absolute inset-0 rounded-full bg-paper/5" />
              <Image
                src="/logo.webp"
                alt="Bin to Better logo"
                width={320}
                height={320}
                priority
                className="relative z-10 h-auto w-64 object-contain drop-shadow-lg sm:w-80"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <Section className="bg-mint">
        <Reveal>
          <SectionHeading
            eyebrow="Our Mission"
            title="Turning Waste into Opportunity"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-ink/75">
            {mission.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Projects Preview ─────────────────────────────────── */}
      <Section id="programs" className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Projects Preview"
            subtitle={projectsBlurb}
          />
        </Reveal>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {programsPreview.map((p, i) => (
            <Reveal key={p.href} delay={i * 80}>
              <Link href={p.href} className="group block h-full">
                <Card className="flex h-full flex-col gap-4 transition hover:ring-2 hover:ring-emerald/40">
                  <div className="flex h-24 w-full items-center justify-center rounded-xl bg-emerald/5">
                    <span className="text-5xl">{p.emoji}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-emerald">
                    {p.title}
                  </h3>
                  <p className="flex-grow text-sm leading-relaxed text-ink/70">
                    {p.blurb}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-emerald">
                    View More →
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Section id="testimonials" className="bg-emerald/5">
        <Reveal>
          <SectionHeading
            eyebrow="Community Voice"
            title="What People Say"
            subtitle="See how our initiatives are making a real difference in classrooms and communities."
          />
        </Reveal>
        <Reveal delay={80}>
          <TestimonialSlider items={testimonials} />
        </Reveal>
      </Section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <Section id="contact" className="bg-paper">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
              Contact Us
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              {contactPara}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:outreach@bintobetter.org"
                className="group block rounded-2xl bg-emerald/5 p-6 text-left ring-1 ring-emerald/10 transition hover:bg-emerald/10 hover:ring-emerald/30"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald">
                  Email
                </p>
                <p className="mt-2 font-medium text-ink group-hover:underline">
                  outreach@bintobetter.org
                </p>
              </a>

              <a
                href="https://instagram.com/bintobetter"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-emerald/5 p-6 text-left ring-1 ring-emerald/10 transition hover:bg-emerald/10 hover:ring-emerald/30"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald">
                  Instagram
                </p>
                <p className="mt-2 font-medium text-ink group-hover:underline">
                  @bintobetter
                </p>
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-10 text-xs text-ink/40">{contactFootnote}</p>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </>
  );
}
