import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { teamGroups } from "@/content/team";

export const metadata: Metadata = {
  title: "Officers & Team | Bin to Better",
  description:
    "Get to know the dedicated officers and volunteers who power the Bin to Better mission.",
};

export default function OfficersAndTeam() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <Section className="bg-mint">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-sm text-ink/70">
              Interested in being an officer?{" "}
              <a
                href="https://forms.gle/Pf9kCT1HbYm9Nobt7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald underline underline-offset-4 hover:text-forest transition-colors"
              >
                Apply here
              </a>
            </p>
            <SectionHeading
              title="Officers & Team"
              subtitle="Our organization is led by a dedicated group of students and volunteers. The officers work together across various teams to ensure the success of each program."
            />
          </div>
        </Reveal>
      </Section>

      {/* Team Groups */}
      <Section>
        <div className="grid gap-12">
          {teamGroups.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 50}>
              <div className="rounded-3xl bg-white ring-1 ring-ink/5 shadow-sm p-8">
                <h3 className="font-serif text-2xl font-bold text-emerald mb-6 border-b border-ink/10 pb-4">
                  {group.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.members.map((m) => (
                    <div
                      key={`${group.category}-${m.name}`}
                      className="flex flex-col items-center text-center rounded-xl bg-mint/50 p-5 ring-1 ring-emerald/10"
                    >
                      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden ring-2 ring-emerald/30">
                        <Image
                          src={m.photo}
                          alt={m.name}
                          fill
                          className="object-cover"
                          style={
                            m.imagePosition
                              ? { objectPosition: m.imagePosition }
                              : undefined
                          }
                        />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-ink mb-1">
                        {m.name}
                      </h4>
                      <p className="text-xs font-semibold uppercase tracking-widest text-emerald mb-2">
                        {m.role}
                      </p>
                      <p className="text-sm text-ink/60 mb-3">{m.school}</p>
                      <p className="text-xs italic text-ink/50">
                        <span className="not-italic mr-1">💡</span>
                        {m.fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
