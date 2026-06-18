import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DiscordButton } from "@/components/ui/DiscordButton";

export const metadata: Metadata = {
  title: "Tech to Treasure | Bin to Better",
  description:
    "Turning e-waste into educational tools and responsible recycling.",
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

export default function TechToTreasurePage() {
  return (
    <>
      <Nav />

      <Section className="bg-emerald/5">
        <Reveal>
          <SectionHeading
            eyebrow="Project Spotlight"
            title="Tech to Treasure"
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

      <Footer />
    </>
  );
}
