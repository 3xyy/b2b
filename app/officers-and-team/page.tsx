import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
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

      {/* Hero — dark canvas band */}
      <Section className="bg-canvas">
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-paper/60">
            Interested in being an officer?{" "}
            <a
              href="https://forms.gle/Pf9kCT1HbYm9Nobt7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-court underline underline-offset-4 hover:brightness-90 transition-[filter]"
            >
              Apply here
            </a>
          </p>

          {/* Eyebrow hairline + h1 */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 shrink-0 bg-court" aria-hidden="true" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
              Officers &amp; Team
            </p>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-paper text-wrap-balance">
            Officers &amp; Team
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-paper/70 leading-relaxed">
            Our organization is led by a dedicated group of students and
            volunteers. The officers work together across various teams to ensure
            the success of each program.
          </p>
        </Reveal>
      </Section>

      {/* Team groups — alternating bg-paper / bg-field bands */}
      {teamGroups.map((group, groupIndex) => {
        const isDark = groupIndex % 2 === 1;
        const bandBg = isDark ? "bg-field" : "bg-paper";

        return (
          <Section key={group.category} className={bandBg}>
            <Reveal delay={60}>
              {/* Category header: mono eyebrow + hairline + display heading */}
              <div className="mb-10">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`h-px w-6 shrink-0 ${isDark ? "bg-court" : "bg-sage"}`}
                    aria-hidden="true"
                  />
                  <p
                    className={`font-mono text-xs font-medium uppercase tracking-[0.12em] ${isDark ? "text-court" : "text-sage"}`}
                  >
                    {group.category}
                  </p>
                </div>
                <h2
                  className={`font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight tracking-tight text-wrap-balance ${isDark ? "text-paper" : "text-ink"}`}
                >
                  {group.category}
                </h2>
              </div>

              {/* Member grid */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {group.members.map((m) => (
                  <Reveal key={`${group.category}-${m.name}`} delay={80}>
                    <div
                      className={`flex flex-col items-start border p-5 rounded-[3px] ${
                        isDark
                          ? "border-paper/15 bg-canvas/40"
                          : "border-ink/10 bg-paper"
                      }`}
                    >
                      {/* Large circular photo */}
                      <div className="relative mb-5 h-44 w-44 overflow-hidden rounded-full self-center shrink-0">
                        <Image
                          src={m.photo}
                          alt={m.name}
                          width={176}
                          height={176}
                          className="h-full w-full object-cover"
                          style={
                            m.imagePosition
                              ? { objectPosition: m.imagePosition }
                              : { objectPosition: "center top" }
                          }
                        />
                      </div>

                      {/* Name */}
                      <h3
                        className={`font-display text-lg font-bold leading-snug tracking-tight text-wrap-balance ${isDark ? "text-paper" : "text-ink"}`}
                      >
                        {m.name}
                      </h3>

                      {/* Role — DM Mono uppercase court */}
                      <p className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-court">
                        {m.role}
                      </p>

                      {/* School */}
                      <p
                        className={`mt-1 text-sm leading-snug ${isDark ? "text-paper/55" : "text-ink/55"}`}
                      >
                        {m.school}
                      </p>

                      {/* Fun fact — no emoji; hairline divider + "FACT" mono label */}
                      <div
                        className={`mt-4 w-full border-t pt-4 ${isDark ? "border-paper/10" : "border-ink/8"}`}
                      >
                        <p
                          className={`font-mono text-[10px] uppercase tracking-[0.12em] mb-1 ${isDark ? "text-court/70" : "text-sage"}`}
                        >
                          Fact
                        </p>
                        <p
                          className={`text-sm italic leading-snug ${isDark ? "text-paper/60" : "text-ink/55"}`}
                        >
                          {m.fact}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </Section>
        );
      })}

      <Footer />
    </>
  );
}
