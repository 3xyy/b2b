import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { donate } from "@/content/donate";

export const metadata: Metadata = {
  title: "Donate | Bin to Better",
  description:
    "Support Bin to Better by donating or registering for our sports classes — every dollar fuels our programs.",
};

// Inline SVG icons — decorative, aria-hidden
function BasketballIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M4.93 4.93C7.24 7.24 8 10 8 12s-.76 4.76-3.07 7.07" />
      <path d="M19.07 4.93C16.76 7.24 16 10 16 12s.76 4.76 3.07 7.07" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function TennisIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M6.34 6.34C8.25 8.25 9 10.06 9 12s-.75 3.75-2.66 5.66" />
      <path d="M17.66 6.34C15.75 8.25 15 10.06 15 12s.75 3.75 2.66 5.66" />
    </svg>
  );
}

// Button-styled anchor for external links (squared, v3 tokens)
function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "onDark";
}) {
  const base =
    "inline-flex items-center justify-center rounded-[3px] px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
  const variantClass =
    variant === "primary"
      ? "bg-court text-ink hover:brightness-95 focus-visible:outline-court"
      : "border border-paper/30 text-paper hover:border-court hover:text-court focus-visible:outline-paper";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variantClass}`}
    >
      {children}
    </a>
  );
}

export default function Donate() {
  return (
    <>
      <Nav />

      {/* ── Classes ── */}
      <Section className="bg-canvas">
        <SectionHeading
          eyebrow="Support Our Mission"
          title="Classes"
          subtitle={donate.classesIntro}
          tone="dark"
        />

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {/* Basketball */}
          <Reveal delay={0}>
            <Card tone="dark" className="flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-court">
                  <BasketballIcon />
                </span>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
                  Basketball
                </p>
              </div>
              <h3 className="font-display text-2xl font-bold text-paper">
                {donate.basketball.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/70">
                {donate.basketball.description}
              </p>
              <p className="mt-3 text-xs italic text-paper/50">
                {donate.basketball.note}
              </p>
              <div className="mt-6">
                <ExternalButton href={donate.basketball.href}>Register Now</ExternalButton>
              </div>
            </Card>
          </Reveal>

          {/* Tennis */}
          <Reveal delay={80}>
            <Card tone="dark" className="flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-court">
                  <TennisIcon />
                </span>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
                  Tennis
                </p>
              </div>
              <h3 className="font-display text-2xl font-bold text-paper">
                {donate.tennis.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/70">
                {donate.tennis.description}
              </p>
              <p className="mt-3 text-xs italic text-paper/50">
                {donate.tennis.note}
              </p>
              <div className="mt-6">
                <ExternalButton href={donate.tennis.href}>Register Now</ExternalButton>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* ── Donate ── */}
      <Section className="bg-field">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-court" aria-hidden="true" />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
                Make a Difference
              </p>
            </div>
            <h2 className="text-balance font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-paper">
              {donate.donateHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
              {donate.donatePara}
            </p>
            <div className="mt-8">
              <ExternalButton href={donate.donateHref} variant="onDark">
                {donate.donateLinkText}
              </ExternalButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
