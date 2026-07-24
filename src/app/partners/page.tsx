import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { assetPath } from "@/lib/assetPath";
import { getPartners } from "@/lib/content";

const data = getPartners();

export const metadata: Metadata = {
  title: data.heading,
  description: data.intro,
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <Navbar activePage="Partners" />
      <main>
        <PageHeader
          eyebrow={data.eyebrow}
          title={data.heading}
          subheading={data.intro}
        />

        <Section width="wide" className="bg-surface-900">
          {/* Logo wall */}
          <Reveal>
            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {data.logos.map((src) => (
                <div
                  key={src}
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <Image
                    src={assetPath(src)}
                    alt="Partner logo"
                    width={160}
                    height={64}
                    className="max-h-16 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Why partner */}
          <Reveal className="mt-12">
            <Card className="p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">
                {data.whyPartner.heading}
              </h2>
              <ul className="list-inside list-disc space-y-3 text-white/70">
                {data.whyPartner.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Corporate partners */}
          <Reveal className="mt-12">
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              {data.corporatePartners.heading}
            </h2>
            <Card className="flex flex-col items-center gap-8 p-8 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {data.corporatePartners.subheading}
                </h3>
                <ul className="mb-6 list-inside list-disc space-y-2 text-white/70">
                  {data.corporatePartners.partners.map((p) => (
                    <li key={p.name}>{p.name}</li>
                  ))}
                </ul>
                <p className="text-sm italic text-white/60">
                  {
                    data.corporatePartners.note.split(
                      data.corporatePartners.contactEmail,
                    )[0]
                  }
                  <a
                    className="text-brand hover:underline"
                    href={`mailto:${data.corporatePartners.contactEmail}`}
                  >
                    {data.corporatePartners.contactEmail}
                  </a>
                  {
                    data.corporatePartners.note.split(
                      data.corporatePartners.contactEmail,
                    )[1]
                  }
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                {data.corporatePartners.partners.map((p) => (
                  <Image
                    key={p.name}
                    src={assetPath(p.image)}
                    alt={p.name}
                    width={320}
                    height={160}
                    className="max-w-xs object-contain"
                    unoptimized
                  />
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Partner lists */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {data.partnerLists.map((list, i) => (
              <Reveal key={list.heading} delay={i * 0.1}>
                <Card className="h-full p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {list.heading}
                  </h3>
                  <ul className="space-y-3 text-sm text-white/70">
                    {list.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal className="mt-12">
            <Card className="p-8 text-center">
              <h2 className="mb-3 text-lg font-semibold text-white">
                {data.cta.heading}
              </h2>
              <p className="mb-6 text-white/70">
                {data.cta.body.split(data.cta.contactEmail)[0]}
                <a
                  className="text-brand hover:underline"
                  href={`mailto:${data.cta.contactEmail}`}
                >
                  {data.cta.contactEmail}
                </a>
                {data.cta.body.split(data.cta.contactEmail)[1]}
              </p>
              <Button href={data.cta.button.href}>{data.cta.button.label}</Button>
            </Card>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
