import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      "Identify each motor’s purpose",
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

      {/* Hero */}
      <Section className="bg-emerald/5">
        <Reveal>
          <SectionHeading
            eyebrow="Workshop"
            title="Tech to Treasure Workshop"
            subtitle="Turning e-waste into educational tools and responsible recycling."
          />
        </Reveal>
      </Section>

      {/* A Device's Second Chance */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
              A Device&apos;s Second Chance
            </h3>
            <p className="text-ink/70 leading-relaxed">
              Millions of electronics are discarded each year, often without
              proper recycling, contributing to growing e&#8209;waste and
              environmental harm. Tech to Treasure addresses this issue while
              inspiring the next generation of innovators.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* What We Do */}
      <Section className="bg-emerald/5">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-ink mb-6">
              What We Do
            </h3>
            <ul className="space-y-6">
              {whatWeDo.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald/20 text-sm font-bold text-emerald">
                      ✓
                    </span>
                    <p className="text-ink/70">
                      <strong className="block text-ink mb-1">
                        {item.title}
                      </strong>
                      {item.desc}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Get Involved */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-emerald/20 bg-emerald/5 p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-ink mb-4">
              Get Involved
            </h3>
            <p className="text-ink/70 mb-6">
              Students interested should join our Discord to get involved for
              future events.
            </p>
            <DiscordButton href="https://tinyurl.com/b2bdisc" />
          </div>
        </Reveal>
      </Section>

      {/* Past Events */}
      <Section className="border-t border-ink/10">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold text-ink border-l-4 border-emerald pl-4 mb-12">
            Past Events
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-ink/10 bg-emerald/5 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Event header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-ink/10 text-ink/60 text-xs font-bold tracking-widest uppercase rounded-full border border-ink/10 mb-4">
                    March 1, 2026 &bull; Fremont, CA
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-2 leading-tight">
                    Tech to Treasure
                  </h3>
                  <p className="text-ink/60 max-w-2xl">
                    A hands-on stations workshop for kids to touch parts, see
                    how things work, and hear instructors explain each component.
                  </p>
                  <p className="text-xs text-ink/40 mt-2">
                    &#x1F4CD; Patterson Ranch benches outside the red barn
                    &middot; 5298 Rancho Del Norte Dr, Fremont, CA 94555
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald/10 text-emerald text-sm font-semibold rounded-full border border-emerald/20 cursor-default select-none shrink-0">
                  &#x2713; Completed
                </span>
              </div>

              {/* Detail grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-ink/70 mb-8">
                {eventDetails.map((d) => (
                  <div
                    key={d.label}
                    className="bg-paper/60 p-4 rounded-xl border border-ink/10"
                  >
                    <div className="text-xs text-ink/40 uppercase tracking-wider mb-1">
                      {d.label}
                    </div>
                    <div className="text-sm font-semibold text-ink">
                      {d.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Format note */}
              <div className="bg-paper/60 p-4 rounded-xl border border-ink/10 mb-8 text-sm text-ink/60">
                <span className="font-semibold text-ink/80">Format: </span>
                Children rotate through stations (~20 minutes per station).
                Instructors demonstrate parts and explain how each one works
                while kids can touch and explore.
              </div>

              {/* Stations */}
              <h4 className="font-serif text-lg font-bold text-ink mb-4">
                Stations &amp; Activities
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {stations.map((station) => (
                  <div
                    key={station.name}
                    className="bg-paper/60 p-5 rounded-xl border border-ink/10"
                  >
                    <h5 className="font-bold text-ink mb-3">{station.name}</h5>
                    <ul className="list-disc ml-4 text-sm text-ink/60 space-y-1 mb-3">
                      {station.components.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                    <div className="text-xs text-ink/40 font-semibold uppercase tracking-wider mb-1">
                      {station.promptLabel}
                    </div>
                    <ul className="list-disc ml-4 text-xs text-ink/50 space-y-1">
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
