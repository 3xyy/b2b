import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { donate } from "@/content/donate";

export const metadata: Metadata = {
  title: "Donate | Bin to Better",
  description: "Support Bin to Better by donating or registering for our sports classes — every dollar fuels our programs.",
};

export default function Donate() {
  return (
    <>
      <Nav />
      <Section>
        <h1 className="font-serif text-4xl font-semibold text-ink">Support Our Mission</h1>
        <p className="mt-4 max-w-2xl text-ink/70">{donate.classesIntro}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Basketball */}
          <Card className="flex flex-col">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {donate.basketball.title}
            </h2>
            <p className="mt-3 flex-1 text-sm text-ink/70 leading-relaxed">
              {donate.basketball.description}
            </p>
            <p className="mt-2 text-xs italic text-ink/50">{donate.basketball.note}</p>
            <a
              href={donate.basketball.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-emerald/90"
            >
              Register Now
            </a>
          </Card>

          {/* Tennis */}
          <Card className="flex flex-col">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              {donate.tennis.title}
            </h2>
            <p className="mt-3 flex-1 text-sm text-ink/70 leading-relaxed">
              {donate.tennis.description}
            </p>
            <p className="mt-2 text-xs italic text-ink/50">{donate.tennis.note}</p>
            <a
              href={donate.tennis.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-emerald/90"
            >
              Register Now
            </a>
          </Card>
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-ink">{donate.donateHeading}</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">{donate.donatePara}</p>
          <a
            href={donate.donateHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald px-10 py-4 text-base font-semibold text-paper transition-colors hover:bg-emerald/90"
          >
            {donate.donateLinkText}
          </a>
        </div>
      </Section>

      <Footer />
    </>
  );
}
