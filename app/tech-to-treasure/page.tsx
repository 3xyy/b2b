import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export const metadata: Metadata = {
  title: "Tech to Treasure | Bin to Better",
  description:
    "Turning e-waste into educational tools and responsible recycling, plus our environmental bootcamp and hands-on workshops.",
};

const whatWeDo = [
  {
    title: "Collection & Education",
    desc: "We gather unused devices and transform them into educational tools through free, interactive workshops.",
  },
  {
    title: "Hands‑On Learning",
    desc: "Students disassemble devices to learn about RAM, memory, circuit boards, and power systems.",
  },
  {
    title: "Responsible Recycling",
    desc: "After sessions, all parts are responsibly recycled through certified e‑waste programs.",
  },
];

const bootcampStats = [
  { value: "50", label: "Students" },
  { value: "6", label: "Weeks" },
  { value: "10", label: "Challenges tackled" },
];

// Google Photos album with workshop & impact photos (to embed once downloaded).
const WORKSHOP_ALBUM = "https://photos.app.goo.gl/792VDJk4aGh9V7M86";

const eventDetails = [
  { label: "When", value: "March 1 · 3:30 PM – 5:30 PM" },
  { label: "Age Group", value: "8–12 years" },
  { label: "Duration", value: "2–3 hours" },
  { label: "Group Size", value: "7–8 kids per group" },
];

const stations = [
  {
    name: "Station 1: Desktop Computer",
    components: [
      "RAM sticks (remove & insert)",
      "Hard drive / SSD",
      "Cooling fan & cables",
      "Expansion cards & motherboard",
    ],
    promptLabel: "Guided prompts",
    prompts: [
      "Find the brain (CPU)",
      "Find memory vs. storage",
      "Trace a cable from power supply to part",
      "Spin fan — why cooling matters",
    ],
  },
  {
    name: "Station 2: 3D Printer",
    components: [
      "Stepper motors",
      "Belts and pulleys",
      "Metal rods & circuit board",
      "Connection & control cables",
    ],
    promptLabel: "Activities",
    prompts: [
      "Move print head by hand",
      "Follow wires from motors to circuit board",
      "Identify each motor's purpose",
    ],
  },
  {
    name: "Station 3: Monitor",
    components: [
      "Back casing & control buttons",
      "Circuit boards (main & button)",
      "Ribbon cables & ports",
      "Screen layers (light touch only)",
    ],
    promptLabel: "Challenges",
    prompts: [
      "Display parts vs. control parts",
      "Ribbon cables vs. power wires",
      "Which sends signals? Which sends power?",
    ],
  },
];

export default function TechToTreasurePage() {
  return (
    <>
      <Nav />

      {/* Hero — dark canvas band */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Project Spotlight"
            title="Tech to Treasure"
            subtitle="Turning e-waste into educational tools and responsible recycling."
            align="left"
            tone="dark"
          />
        </Reveal>
      </Section>

      {/* A Device's Second Chance — light paper band */}
      <Section className="bg-paper">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-ink mb-5 text-balance">
              A Device&apos;s Second Chance
            </h2>
            <p className="text-ink/70 leading-relaxed text-base sm:text-lg">
              Millions of electronics are discarded each year, often without
              proper recycling, contributing to growing e&#8209;waste and
              environmental harm. Tech to Treasure addresses this issue while
              inspiring the next generation of innovators.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* What We Do — dark field band */}
      <Section className="bg-field">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="How It Works"
            align="left"
            tone="dark"
          />
          <ul className="mt-2 space-y-6 max-w-3xl">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <li>
                  <Card tone="dark" className="flex items-start gap-4">
                    {/* Checkmark inline SVG instead of emoji */}
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mt-0.5 shrink-0 text-court"
                    >
                      <polyline points="4 10 8 14 16 6" />
                    </svg>
                    <p className="text-paper/80">
                      <strong className="block text-paper mb-1 font-semibold">
                        {item.title}
                      </strong>
                      {item.desc}
                    </p>
                  </Card>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Environmental Bootcamp — light paper band */}
      <Section className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Environmental Bootcamp"
            title="6 Weeks. 10 Challenges. Real Impact."
            align="left"
            tone="light"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mb-8 grid grid-cols-3 gap-4 max-w-xl">
            {bootcampStats.map((s) => (
              <div key={s.label} className="border border-ink/10 p-5">
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-ink/55 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="max-w-3xl space-y-4 text-ink/70 leading-relaxed text-base sm:text-lg">
            <p>
              50 students, 6 weeks, and 10 massive environmental challenges
              tackled! Our Tech to Treasure Environmental Bootcamp has wrapped
              up, and we couldn&apos;t be prouder of the real-world solutions
              these students built.
            </p>
            <p>
              Dive into the code and view all student projects — including our
              top 3 winning projects — on GitHub.
            </p>
          </div>
          <div className="mt-6">
            <Button
              href="https://github.com/MasterAI33/Bin-to-Better-6-Week-Bootcamp-Final-Projects"
              variant="secondary"
              withArrow
            >
              View all student projects on GitHub
            </Button>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl">
            {[
              { src: "/bootcamp/bootcamp-flyer.webp", alt: "Tech to Treasure Environmental Bootcamp — 6-week camp flyer" },
              { src: "/bootcamp/bootcamp-results.webp", alt: "Environmental Bootcamp results — 50 students, 10 challenges tackled" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden border border-ink/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={1160}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Workshops — dark canvas band (merged from the former Workshop page) */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Workshops"
            title="Hands-On Tech Workshops"
            subtitle="A hands-on stations workshop for kids to touch parts, see how things work, and hear instructors explain each component."
            align="left"
            tone="dark"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-paper/15 bg-field overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
                  March 1, 2026 &bull; Fremont, CA
                </p>
                <p className="text-paper/60 max-w-2xl text-base">
                  Patterson Ranch benches outside the red barn · 5298 Rancho Del
                  Norte Dr, Fremont, CA 94555
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {eventDetails.map((d) => (
                  <div key={d.label} className="border border-paper/15 bg-canvas p-4">
                    <div className="font-mono text-xs text-paper/40 uppercase tracking-[0.12em] mb-1">
                      {d.label}
                    </div>
                    <div className="text-sm font-semibold text-paper">{d.value}</div>
                  </div>
                ))}
              </div>

              <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
                Stations &amp; Activities
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {stations.map((station) => (
                  <div key={station.name} className="border border-paper/15 bg-canvas p-5">
                    <h5 className="font-semibold text-paper mb-3 text-sm">
                      {station.name}
                    </h5>
                    <ul className="list-disc ml-4 text-sm text-paper/60 space-y-1 mb-3">
                      {station.components.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                    <div className="font-mono text-xs text-paper/40 font-medium uppercase tracking-[0.12em] mb-1">
                      {station.promptLabel}
                    </div>
                    <ul className="list-disc ml-4 text-xs text-paper/50 space-y-1">
                      {station.prompts.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Workshop & impact photo gallery — drop images into the slots below.
            Source album: WORKSHOP_ALBUM (Google Photos). */}
        <Reveal delay={120}>
          <div className="mt-10">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                Workshop &amp; Impact Photos
              </h4>
              <a
                href={WORKSHOP_ALBUM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-court underline underline-offset-4 hover:brightness-90"
              >
                View full album
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden border border-paper/15">
                  <PhotoSlot alt={`Tech to Treasure workshop photo ${i + 1}`} className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Get Involved — paper band */}
      <Section className="bg-paper">
        <Reveal>
          <div className="max-w-3xl border border-ink/10 bg-paper p-8">
            <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-ink mb-3 text-balance">
              Get Involved
            </h2>
            <p className="text-ink/70 mb-6 text-base sm:text-lg">
              Students interested should join our Discord to get involved for
              future events.
            </p>
            <DiscordButton href="https://tinyurl.com/b2bdisc" />
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
