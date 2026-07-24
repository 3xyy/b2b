import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ChecklistCard from "@/components/sections/programs/ChecklistCard";
import StatBadgeCard from "@/components/sections/programs/StatBadgeCard";
import Gallery from "@/components/sections/programs/Gallery";
import { getBounceBack } from "@/lib/content";

const data = getBounceBack();

export const metadata: Metadata = {
  title: data.heading,
  description: data.subheading,
  alternates: { canonical: "/bounce-back" },
};

export default function BounceBackPage() {
  return (
    <>
      <Navbar activePage="Bounce Back" />
      <main>
        <PageHeader
          eyebrow={data.eyebrow}
          title={data.heading}
          subheading={data.subheading}
        />

        <Section width="wide" className="bg-surface-900">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              {data.sections.map((s) => (
                <Reveal key={s.heading}>
                  <h2 className="mb-3 text-2xl font-semibold text-white">
                    {s.heading}
                  </h2>
                  <p className="leading-relaxed text-white/70">{s.body}</p>
                </Reveal>
              ))}
              <Reveal>
                <ChecklistCard
                  heading={data.whatWeDo.heading}
                  items={data.whatWeDo.items}
                />
              </Reveal>
            </div>

            <Reveal direction="left" className="lg:sticky lg:top-24">
              <StatBadgeCard
                icon={data.statCard.icon}
                value={data.statCard.value}
                label={data.statCard.label}
              />
            </Reveal>
          </div>
        </Section>

        <Section width="wide" className="bg-surface-950">
          <Reveal>
            <SectionHeading title="Bounce Back in Action" className="mb-12" />
          </Reveal>
          <Gallery images={data.gallery} altPrefix="Bounce Back gallery image" />
        </Section>
      </main>
      <Footer />
    </>
  );
}
