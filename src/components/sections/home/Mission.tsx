import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import type { HomeContent } from "@/content/types";

export default function Mission({ mission }: { mission: HomeContent["mission"] }) {
  return (
    <Section width="narrow" className="bg-gradient-to-b from-surface-900 to-surface-950">
      <Reveal className="flex flex-col items-center gap-6 text-center">
        <Eyebrow>{mission.eyebrow}</Eyebrow>
        <h2 className="text-h2 font-bold text-balance">
          <span className="text-white">Turning Waste into </span>
          <span className="text-brand">Opportunity</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-white/70">
        {mission.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="text-pretty">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
