import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

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

// Google Photos albums with the full sets of collection & donation photos.
const ALBUMS = [
  { label: "Shelter drop-offs", href: "https://photos.app.goo.gl/jUviwYsVCJvxj58V9" },
  { label: "School drop-offs", href: "https://photos.app.goo.gl/iqMFCXFXN2S3SBaGA" },
  { label: "Club pickups", href: "https://photos.app.goo.gl/L71iBGJFoewJBT316" },
];

// Two photos pulled from each album above.
const projectPhotos = [
  { src: "/bounce-back/club-court-pickup.webp", alt: "A volunteer tying off a bag of used tennis balls collected courtside at a tennis club" },
  { src: "/bounce-back/club-clubhouse-pickup.webp", alt: "A volunteer carrying a full bag of collected tennis balls out of a club clubhouse" },
  { src: "/bounce-back/shelter-collected-bag.webp", alt: "A volunteer holding a bag of collected tennis balls before an animal shelter drop-off" },
  { src: "/bounce-back/shelter-intake-bin.webp", alt: "Bags of tennis balls being unloaded into an intake bin at an animal shelter front desk" },
  { src: "/bounce-back/school-teacher-box.webp", alt: "A volunteer handing a box of tennis balls to a teacher at an elementary school" },
  { src: "/bounce-back/school-classroom-handoff.webp", alt: "A volunteer and a teacher with a bag of tennis balls delivered to her classroom" },
];

export default function BounceBackPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ───────────────────────────────────────────── */}
      <Section className="bg-canvas text-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Project Spotlight"
            title="Bounce Back Project"
            subtitle="Giving used tennis balls a second life in schools, animal shelters, and assisted living."
            align="left"
            tone="dark"
          />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — text content */}
          <div className="space-y-10">
            <Reveal delay={100}>
              <div>
                <h2 className="font-display text-2xl font-bold text-paper mb-3">
                  The Focus of Our Efforts
                </h2>
                <p className="text-paper/70 leading-relaxed">
                  Nearly all of the 330 million tennis balls produced each year
                  end up in landfills, where they can take more than 400 years to
                  decompose. The Bounce Back Project reduces waste by finding
                  creative ways to give used tennis balls a second life.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <h2 className="font-display text-2xl font-bold text-paper mb-4">
                  What We Do
                </h2>
                <ul className="space-y-5">
                  {whatWeDo.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-court"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 8.5L6.5 12.5L13.5 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-paper/70 leading-relaxed">
                        <strong className="text-paper">{item.title}:</strong>{" "}
                        {item.desc}
                      </p>
                    </li>
                  ))}
                  <li className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-court"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 8.5L6.5 12.5L13.5 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-paper/70 leading-relaxed">
                      <strong className="text-paper">Get Involved:</strong> Clubs
                      interested in participating can visit the{" "}
                      <Link
                        href="/partners"
                        className="text-court underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-court"
                      >
                        Partners page
                      </Link>{" "}
                      or contact us directly to arrange a pickup.
                    </p>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <Button href="/partners" variant="light">
                Become a Partner
              </Button>
            </Reveal>
          </div>

          {/* Right — stat box */}
          <Reveal delay={300}>
            <div className="border border-paper/15 bg-field rounded-[3px] p-12 text-center flex flex-col items-center justify-center gap-4">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                Impact to Date
              </p>
              <p className="font-mono text-[clamp(3rem,8vw,5rem)] font-medium tabular-nums text-court leading-none">
                <AnimatedCounter value="100,000+" />
              </p>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.1em] text-paper/70">
                Tennis Balls Collected
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Photo Gallery ──────────────────────────────────── */}
      <Section className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="In the Field"
            title="Project Photos"
            tone="light"
            align="left"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
              Pickups &amp; Drop-offs
            </h3>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {ALBUMS.map((album) => (
                <a
                  key={album.href}
                  href={album.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-ink underline underline-offset-4 transition-colors hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {album.label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {projectPhotos.map((photo) => (
              <div
                key={photo.src}
                className="aspect-[3/4] overflow-hidden border border-ink/10"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={1600}
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
