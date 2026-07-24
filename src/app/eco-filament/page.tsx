import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import StatBadgeCard from "@/components/sections/programs/StatBadgeCard";
import { getEcoFilament } from "@/lib/content";

const data = getEcoFilament();

export const metadata: Metadata = {
  title: data.heading,
  description: data.subheading,
  alternates: { canonical: "/eco-filament" },
};

export default function EcoFilamentPage() {
  return (
    <>
      <Navbar activePage="Eco-filament" />
      <main>
        <PageHeader
          eyebrow={data.eyebrow}
          title={data.heading}
          subheading={data.subheading}
        />

        <Section width="wide" className="bg-surface-900">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              {data.sections.map((s) => (
                <Reveal key={s.heading}>
                  <h2 className="mb-3 text-2xl font-semibold text-white">
                    {s.heading}
                  </h2>
                  <p className="leading-relaxed text-white/70">{s.body}</p>
                </Reveal>
              ))}

              <Reveal>
                <Card className="border-brand/30 bg-brand/10 p-6">
                  <p className="text-white/90">
                    {data.callout.body}{" "}
                    <a
                      href={data.callout.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand hover:underline"
                    >
                      {data.callout.link.text}
                    </a>
                  </p>
                </Card>
              </Reveal>
            </div>

            <Reveal direction="left">
              <StatBadgeCard
                icon={data.statCard.icon}
                value={data.statCard.value}
                label={data.statCard.label}
              />
            </Reveal>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
