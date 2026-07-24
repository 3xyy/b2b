import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import ChecklistCard from "@/components/sections/programs/ChecklistCard";
import DiscordCta from "@/components/sections/programs/DiscordCta";
import PastEvents from "@/components/sections/programs/PastEvents";
import { getWorkshop } from "@/lib/content";

const data = getWorkshop();

export const metadata: Metadata = {
  title: data.heading,
  description: data.subheading,
  alternates: { canonical: "/workshop" },
};

export default function WorkshopPage() {
  return (
    <>
      <Navbar activePage="Workshop" />
      <main>
        <PageHeader
          eyebrow={data.eyebrow}
          title={data.heading}
          subheading={data.subheading}
        />

        <Section width="default" className="bg-surface-900">
          <div className="space-y-10">
            {data.sections.map((s) => (
              <Reveal key={s.heading}>
                <Card className="p-8">
                  <h2 className="mb-4 text-2xl font-semibold text-white">
                    {s.heading}
                  </h2>
                  <p className="leading-relaxed text-white/70">{s.body}</p>
                </Card>
              </Reveal>
            ))}
            <Reveal>
              <ChecklistCard
                heading={data.whatWeDo.heading}
                items={data.whatWeDo.items}
              />
            </Reveal>
            <Reveal>
              <DiscordCta
                heading={data.getInvolved.heading}
                body={data.getInvolved.body}
                cta={data.getInvolved.cta}
              />
            </Reveal>
          </div>
        </Section>

        <Section width="wide" className="bg-surface-950">
          <PastEvents data={data.pastEvents} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
