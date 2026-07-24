import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tech to Treasure | Bin to Better",
  description:
    "Turning e-waste into educational tools and responsible recycling, plus our environmental bootcamp and hands-on workshops.",
};

const whatWeDo = [
  {
    title: "Collection & Education",
    desc: "We gather unused devices and transform them into educational tools through free, interactive workshops.",
  },
  {
    title: "Hands‑On Learning",
    desc: "Students disassemble devices to learn about RAM, memory, circuit boards, and power systems.",
  },
  {
    title: "Responsible Recycling",
    desc: "After sessions, all parts are responsibly recycled through certified e‑waste programs.",
  },
];

const bootcampStats = [
  { value: "50", label: "Students" },
  { value: "6", label: "Weeks" },
  { value: "10", label: "Challenges tackled" },
];

// Google Photos album with the full set of workshop & impact photos.
const WORKSHOP_ALBUM = "https://photos.app.goo.gl/792VDJk4aGh9V7M86";

const workshopPhotos = [
  { src: "/workshops/group-photo.webp", alt: "Workshop participants gathered in front of the red barn under the Tech to Treasure banner" },
  { src: "/workshops/motors.webp", alt: "An instructor walking students through the Motors in Motion poster" },
  { src: "/workshops/hands-up.webp", alt: "Students raising their hands to answer a question at the workshop table" },
  { src: "/workshops/instructing.webp", alt: "An instructor showing a group of students how a component works" },
  { src: "/workshops/stations.webp", alt: "Students seated at the station tables during the workshop" },
  { src: "/workshops/hands-on.webp", alt: "Students and instructors examining device parts together" },
];

// Past in-person workshops we've hosted. Details come straight from each
// session's sign-up form.
const workshops = [
  {
    date: "April 19, 2026",
    title: "Circuit Boards & Components",
    details: [
      { label: "Time", value: "3:30 – 5:30 PM" },
      { label: "Age Group", value: "Grades 3–8" },
      { label: "Format", value: "In person" },
    ],
    address: "5298 Rancho Del Norte Dr, Fremont, CA 94555",
    description:
      "Students disassembled and reassembled circuit boards while exploring motors, Wi-Fi routers, and modems through interactive demonstrations. Every material was repurposed e-waste, responsibly recycled afterward.",
  },
  {
    date: "June 28, 2026",
    title: "Computer Hardware & Storage",
    details: [
      { label: "Time", value: "4:30 – 6:30 PM" },
      { label: "Age Group", value: "All ages welcome" },
      { label: "Format", value: "In person" },
    ],
    address: "5298 Rancho Del Norte Dr, Fremont, CA 94555",
    description:
      "Students explored computer hardware and storage through hands-on activities, interactive demonstrations, and device disassembly — covering data storage and processing, the evolution of storage technology, sensors, embedded systems, and the internal components of devices like Chromebooks.",
  },
];

export default function TechToTreasurePage() {
  return (
    <>
      <Nav />

      {/* Hero — dark canvas band */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Project Spotlight"
            title="Tech to Treasure"
            subtitle="Turning e-waste into educational tools and responsible recycling."
            align="left"
            tone="dark"
          />
        </Reveal>
      </Section>

      {/* A Device's Second Chance — light paper band */}
      <Section className="bg-paper">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-ink mb-5 text-balance">
              A Device&apos;s Second Chance
            </h2>
            <p className="text-ink/70 leading-relaxed text-base sm:text-lg">
              Millions of electronics are discarded each year, often without
              proper recycling, contributing to growing e&#8209;waste and
              environmental harm. Tech to Treasure addresses this issue while
              inspiring the next generation of innovators.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* What We Do — dark field band */}
      <Section className="bg-field">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="How It Works"
            align="left"
            tone="dark"
          />
          <ul className="mt-2 space-y-6 max-w-3xl">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <li>
                  <Card tone="dark" className="flex items-start gap-4">
                    {/* Checkmark inline SVG instead of emoji */}
                    <svg
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mt-0.5 shrink-0 text-court"
                    >
                      <polyline points="4 10 8 14 16 6" />
                    </svg>
                    <p className="text-paper/80">
                      <strong className="block text-paper mb-1 font-semibold">
                        {item.title}
                      </strong>
                      {item.desc}
                    </p>
                  </Card>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Environmental Bootcamp — light paper band */}
      <Section className="bg-paper">
        <Reveal>
          <SectionHeading
            eyebrow="Environmental Bootcamp"
            title="6 Weeks. 10 Challenges. Real Impact."
            align="left"
            tone="light"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mb-8 grid grid-cols-3 gap-4 max-w-xl">
            {bootcampStats.map((s) => (
              <div key={s.label} className="border border-ink/10 p-5">
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-ink/55 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="max-w-3xl space-y-4 text-ink/70 leading-relaxed text-base sm:text-lg">
            <p>
              50 students, 6 weeks, and 10 massive environmental challenges
              tackled! Our Tech to Treasure Environmental Bootcamp has wrapped
              up, and we couldn&apos;t be prouder of the real-world solutions
              these students built.
            </p>
            <p>
              Dive into the code and view all student projects — including our
              top 3 winning projects — on GitHub.
            </p>
          </div>
          <div className="mt-6">
            <Button
              href="https://github.com/MasterAI33/Bin-to-Better-6-Week-Bootcamp-Final-Projects"
              variant="secondary"
              withArrow
            >
              View all student projects on GitHub
            </Button>
          </div>
        </Reveal>

      </Section>

      {/* Workshops — dark canvas band (merged from the former Workshop page) */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Workshops"
            title="Hands-On Tech Workshops"
            subtitle="Free, hands-on sessions where kids touch real parts, see how things work, and hear instructors explain each component."
            align="left"
            tone="dark"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="mb-8 max-w-2xl text-base text-paper/60">
            We&apos;ve hosted several in-person workshops for local students, each
            built entirely around repurposed e-waste that&apos;s responsibly
            recycled afterward. Here are our most recent sessions.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {workshops.map((w, i) => (
            <Reveal key={w.date} delay={120 + i * 80}>
              <div className="flex h-full flex-col border border-paper/15 bg-field p-8">
                <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                  {w.date} &bull; Fremont, CA
                </p>
                <h4 className="mb-5 font-display text-xl font-bold text-paper text-balance">
                  {w.title}
                </h4>

                <div className="mb-5 grid grid-cols-3 gap-3">
                  {w.details.map((d) => (
                    <div key={d.label} className="border border-paper/15 bg-canvas p-3">
                      <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/40">
                        {d.label}
                      </div>
                      <div className="text-sm font-semibold text-paper">{d.value}</div>
                    </div>
                  ))}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-paper/70">
                  {w.description}
                </p>
                <p className="mt-auto text-xs text-paper/50">{w.address}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Workshop & impact photo gallery — drop images into the slots below.
            Source album: WORKSHOP_ALBUM (Google Photos). */}
        <Reveal delay={120}>
          <div className="mt-10">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage">
                Workshop &amp; Impact Photos
              </h4>
              <a
                href={WORKSHOP_ALBUM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-court underline underline-offset-4 hover:brightness-90"
              >
                View full album
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {workshopPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="aspect-[4/3] overflow-hidden border border-paper/15"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={900}
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Get Involved — paper band */}
      <Section className="bg-paper">
        <Reveal>
          <div className="max-w-3xl border border-ink/10 bg-paper p-8">
            <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-ink mb-3 text-balance">
              Get Involved
            </h2>
            <p className="text-ink/70 mb-6 text-base sm:text-lg">
              Students interested should join our Discord to get involved for
              future events.
            </p>
            <DiscordButton href="https://tinyurl.com/b2bdisc" />
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
