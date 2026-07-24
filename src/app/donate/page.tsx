import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDonate } from "@/lib/content";

const data = getDonate();

export const metadata: Metadata = {
  title: "Donate & Support",
  description: data.donate.body,
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <Navbar activePage="Donate" />
      <main>
        <PageHeader
          eyebrow={data.classes.eyebrow}
          title="Support the"
          titleAccent="Mission"
        />

        {/* Classes */}
        <Section width="default" className="bg-surface-950 pt-4">
          <Reveal>
            <SectionHeading
              title={data.classes.heading}
              intro={data.classes.intro}
              className="mb-12"
            />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {data.classes.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="h-full">
                <Card className="flex h-full flex-col p-8">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-white/70">
                    {item.description}
                  </p>
                  <p className="mb-6 text-xs italic text-white/50">{item.note}</p>
                  <Button href={item.cta.href} className="w-full">
                    {item.cta.label}
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Direct donation */}
        <Section width="default" className="bg-surface-900">
          <Reveal>
            <Card className="border-brand/30 bg-gradient-to-br from-surface-700 to-surface-900 p-10 text-center md:p-14">
              <h2 className="text-h2 font-bold text-white">{data.donate.heading}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lead leading-relaxed text-white/80">
                {data.donate.body}
              </p>
              <div className="mt-9">
                <Button href={data.donate.cta.href} size="lg">
                  {data.donate.cta.label}
                </Button>
              </div>
            </Card>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
