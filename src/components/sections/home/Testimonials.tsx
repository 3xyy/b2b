import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { HomeContent } from "@/content/types";

export default function Testimonials({
  testimonials,
}: {
  testimonials: HomeContent["testimonials"];
}) {
  return (
    <Section id="testimonials" width="wide" className="bg-surface-950">
      <Reveal>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.heading}
          intro={testimonials.intro}
          className="mb-14"
        />
      </Reveal>

      <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
        {testimonials.items.map((t, i) => (
          <Reveal key={t.author} delay={(i % 3) * 0.08}>
            <Card className="p-7">
              <div aria-hidden className="mb-3 text-4xl leading-none text-brand">
                &ldquo;
              </div>
              <blockquote className="text-[15px] leading-relaxed text-white/80">
                {t.text}
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="font-bold text-white">{t.author}</div>
                <div className="mt-0.5 text-sm text-brand">{t.role}</div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
