import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Gallery } from "@/components/bounce-back/Gallery";

export const metadata: Metadata = {
  title: "Bounce Back Project | Bin to Better",
  description:
    "Giving used tennis balls a second life in schools, animal shelters, and assisted living — over 100,000 collected.",
};

const whatWeDo = [
  {
    title: "Collection",
    desc: "Every month our team collects between 3,000 and 5,000 used balls from local clubs.",
  },
  {
    title: "Reuse",
    desc: "Balls are donated to schools (chair legs), animal shelters (enrichment toys), and assisted living centers (walker feet).",
  },
  {
    title: "Impact",
    desc: "Since launching just over a year ago we have collected more than 100,000 tennis balls and donated over 30,000 to organizations that can use them effectively.",
  },
];

export default function BounceBackPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <Section className="bg-emerald/5">
        <Reveal>
          <SectionHeading
            eyebrow="Project Spotlight"
            title="Bounce Back Project"
            subtitle="Giving used tennis balls a second life in schools, animal shelters, and assisted living."
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — text */}
          <div className="space-y-10">
            <Reveal delay={100}>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
                  The Focus of Our Efforts
                </h3>
                <p className="text-ink/70 leading-relaxed">
                  Nearly all of the 330 million tennis balls produced each year
                  end up in landfills, where they can take more than 400 years to
                  decompose. The Bounce Back Project reduces waste by finding
                  creative ways to give used tennis balls a second life.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-4">
                  What We Do
                </h3>
                <ul className="space-y-4">
                  {whatWeDo.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="mt-1 text-emerald font-bold">✓</span>
                      <p className="text-ink/70">
                        <strong className="text-ink">{item.title}:</strong>{" "}
                        {item.desc}
                      </p>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-emerald font-bold">✓</span>
                    <p className="text-ink/70">
                      <strong className="text-ink">Get Involved:</strong> Clubs
                      interested in participating can visit the{" "}
                      <Link
                        href="/partners"
                        className="text-emerald underline-offset-2 hover:underline"
                      >
                        Partners page
                      </Link>{" "}
                      or contact us directly to arrange a pickup.
                    </p>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right — stat box */}
          <Reveal delay={300}>
            <div className="flex items-center justify-center rounded-3xl bg-emerald/10 border border-emerald/20 p-12 text-center">
              <div>
                <div className="text-7xl mb-4">🎾</div>
                <div className="font-serif text-5xl font-bold text-forest">
                  <AnimatedCounter value="100,000+" />
                </div>
                <p className="mt-2 text-ink/60 font-medium">
                  Tennis Balls Collected
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Logo gallery */}
      <Section>
        <Reveal>
          <Gallery />
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
