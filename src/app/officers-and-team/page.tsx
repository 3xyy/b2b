import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TeamGrid from "@/components/sections/team/TeamGrid";
import { getOfficers } from "@/lib/content";

const data = getOfficers();

export const metadata: Metadata = {
  title: data.heading,
  description: data.intro,
  alternates: { canonical: "/officers-and-team" },
};

export default function OfficersAndTeamPage() {
  return (
    <>
      <Navbar activePage="Officers & Team" />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-900 to-surface-950" />
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
            <p className="text-sm text-white/75">
              {data.applyPrompt.text}{" "}
              <a
                href={data.applyPrompt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline underline-offset-4 hover:text-brand-light"
              >
                {data.applyPrompt.linkText}
              </a>
            </p>
            <h1 className="text-h1 font-bold text-white">{data.heading}</h1>
            <p className="max-w-2xl text-lead text-white/60 text-pretty">
              {data.intro}
            </p>
          </Reveal>
        </section>

        <Section width="wide" className="bg-surface-900 pt-4">
          <TeamGrid groups={data.groups} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
