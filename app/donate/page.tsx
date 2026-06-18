import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { donate } from "@/content/donate";

export const metadata: Metadata = {
  title: "Donate | Bin to Better",
  description:
    "Support Bin to Better by donating or registering for our sports classes — every dollar fuels our programs.",
};

export default function Donate() {
  return (
    <>
      <Nav />

      {/* ── Classes ── */}
      <Section className="bg-emerald/5">
        <SectionHeading
          eyebrow="Support Our Mission"
          title="Classes"
          subtitle={
            <>
              All funds go directly to Bin to Better to fund our projects. Classes are offered at
              reasonable prices, and a{" "}
              <span className="font-semibold text-emerald">free trial</span> is available after
              signing up.
            </>
          }
        />

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {/* Basketball */}
          <Reveal delay={0}>
            <div className="flex flex-col rounded-2xl border border-emerald/20 bg-white p-8 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-md">
              <div className="text-4xl">🏀</div>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                Basketball Classes
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                Taught by 3 coaches, MSJ varsity starters with a combined 6+ years of experience.
                Whether you&apos;re just starting out or looking to sharpen your skills, our coaches
                will help you improve your game.
              </p>
              <p className="mt-3 text-xs italic text-ink/50">
                Sign up for a free trial. More details available in the registration form.
              </p>
              <a
                href={donate.basketball.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-emerald/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                Register Now
              </a>
            </div>
          </Reveal>

          {/* Tennis */}
          <Reveal delay={80}>
            <div className="flex flex-col rounded-2xl border border-emerald/20 bg-white p-8 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-md">
              <div className="text-4xl">🎾</div>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                Tennis Classes
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                Taught by varsity high school tennis players ready to share their skills and passion
                for the sport. Great for beginners and intermediate players looking for quality
                instruction.
              </p>
              <p className="mt-3 text-xs italic text-ink/50">
                Sign up for a free trial. More details available in the registration form.
              </p>
              <a
                href={donate.tennis.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-emerald/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                Register Now
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Donate ── */}
      <Section className="bg-ink">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lime">
            Make a Difference
          </p>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">Donate</h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Your support helps us turn waste into opportunity. Donations allow us to expand our
            collection efforts, develop new projects and reach more communities. Every contribution,
            no matter the size, helps build a cleaner, more sustainable future.
          </p>
          <a
            href={donate.donateHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald px-10 py-4 text-base font-semibold text-paper shadow-lg shadow-emerald/20 transition-colors hover:bg-emerald/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            {donate.donateLinkText}
          </a>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
