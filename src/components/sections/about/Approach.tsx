import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { AboutContent } from "@/content/types";

export default function Approach({ data }: { data: AboutContent["approach"] }) {
  return (
    <Section width="wide" className="bg-gradient-to-b from-surface-900 to-surface-950">
      <Reveal>
        <SectionHeading eyebrow={data.eyebrow} title={data.heading} className="mb-14" />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {data.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1} className="h-full">
            <Card interactive className="group h-full p-8">
              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-surface-950">
                {i + 1}
              </div>
              <div className="mb-5 text-5xl">{item.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-brand">
                {item.title}
              </h3>
              <p className="leading-relaxed text-white/60">{item.description}</p>
              <span className="mt-6 block h-0.5 w-0 bg-gradient-to-r from-brand to-transparent transition-all duration-500 group-hover:w-full" />
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
