import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { DiscordButton } from "@/components/ui/DiscordButton";

export const metadata: Metadata = {
  title: "Tech to Treasure Workshop | Bin to Better",
  description:
    "Hands-on tech disassembly workshop for kids — touch parts, learn how devices work, and see responsible e-waste recycling.",
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

export default function WorkshopPage() {
  return (
    <>
      <Nav />

      {/* Hero — dark canvas band */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Workshop"
            title="Tech to Treasure Workshop"
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
                    {/* Checkmark SVG — no emoji */}
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

      {/* Get Involved — light paper band */}
      <Section className="bg-paper">
        <Reveal>
          <div className="max-w-3xl border border-ink/10 p-8">
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

      {/* Past Events — dark canvas band */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Past Events"
            title="Past Events"
            align="left"
            tone="dark"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-paper/15 bg-field overflow-hidden">
            <div className="p-8 md:p-12">

              {/* Event header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  {/* Date label — DM mono, no pill */}
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
                    March 1, 2026 &bull; Fremont, CA
                  </p>
                  <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-paper mb-2 leading-tight text-balance">
                    Tech to Treasure
                  </h3>
                  <p className="text-paper/60 max-w-2xl text-base">
                    A hands-on stations workshop for kids to touch parts, see
                    how things work, and hear instructors explain each component.
                  </p>
                  {/* Location — SVG pin instead of emoji */}
                  <p className="flex items-center gap-1.5 text-xs text-paper/40 mt-2">
                    <svg
                      aria-hidden="true"
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="shrink-0"
                    >
                      <path d="M8 1C5.24 1 3 3.24 3 6c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z" />
                      <circle cx="8" cy="6" r="1.5" />
                    </svg>
                    Patterson Ranch benches outside the red barn &middot; 5298 Rancho Del Norte Dr, Fremont, CA 94555
                  </p>
                </div>

                {/* Completed badge — squared, no pill */}
                <span className="inline-flex items-center gap-2 px-4 py-2 border border-paper/20 text-paper/80 font-mono text-xs font-medium uppercase tracking-[0.12em] shrink-0 self-start">
                  {/* Checkmark SVG */}
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polyline points="3 8 6 11 13 4" />
                  </svg>
                  Completed
                </span>
              </div>

              {/* Detail grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {eventDetails.map((d) => (
                  <div
                    key={d.label}
                    className="border border-paper/15 bg-canvas p-4"
                  >
                    <div className="font-mono text-xs text-paper/40 uppercase tracking-[0.12em] mb-1">
                      {d.label}
                    </div>
                    <div className="text-sm font-semibold text-paper">
                      {d.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Format note */}
              <div className="border border-paper/15 bg-canvas p-4 mb-8 text-sm text-paper/60">
                <span className="font-semibold text-paper/80">Format: </span>
                Children rotate through stations (~20 minutes per station).
                Instructors demonstrate parts and explain how each one works
                while kids can touch and explore.
              </div>

              {/* Stations */}
              <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
                Stations &amp; Activities
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {stations.map((station) => (
                  <div
                    key={station.name}
                    className="border border-paper/15 bg-canvas p-5"
                  >
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
      </Section>

      <Footer />
    </>
  );
}
