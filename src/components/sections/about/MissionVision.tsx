import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import type { AboutContent } from "@/content/types";

const positions = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
];

export default function MissionVision({
  data,
}: {
  data: AboutContent["missionVision"];
}) {
  return (
    <Section width="wide" className="bg-gradient-to-b from-surface-950 to-surface-900">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal direction="right" className="space-y-7">
          <div>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-h2 font-bold text-white">{data.heading}</h2>
          </div>
          {data.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-white/70 text-pretty">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 pt-2">
            {data.pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="text-3xl">{pillar.icon}</span>
                <span className="text-xs font-medium text-white/60">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Orbital visual */}
        <Reveal direction="left" className="flex justify-center">
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-brand/20" />
            <div className="absolute inset-8 rounded-full border border-brand/15" />
            <div className="absolute inset-16 rounded-full border border-brand/10" />
            <div className="absolute inset-[26%] flex items-center justify-center rounded-full border border-white/10 bg-surface-800">
              <div className="text-center">
                <div className="text-6xl">{data.centerBadge.icon}</div>
                <div className="mt-1 text-sm font-medium text-white/60">
                  {data.centerBadge.label}
                </div>
              </div>
            </div>
            {data.floatingIcons.map((icon, i) => (
              <div
                key={i}
                className={`absolute ${positions[i]} flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-surface-900 text-2xl shadow-lg`}
              >
                {icon}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
