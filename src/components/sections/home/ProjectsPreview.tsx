import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { HomeContent } from "@/content/types";

export default function ProjectsPreview({
  projects,
}: {
  projects: HomeContent["projects"];
}) {
  return (
    <Section id="programs" width="wide" className="bg-surface-900">
      <Reveal>
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.heading}
          intro={projects.intro}
          className="mb-14"
        />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1} className="h-full">
            <Card
              as="article"
              interactive
              className="group flex h-full flex-col overflow-hidden"
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-white/[0.06] to-transparent">
                <span className="text-7xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 text-center">
                <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-brand">
                  {card.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/60">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition-all group-hover:border-brand/50 group-hover:text-white"
                  aria-label={`View more about ${card.title}`}
                >
                  View More
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
