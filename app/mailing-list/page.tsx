import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Mailing List | Bin to Better",
  description:
    "Join the Bin to Better mailing list for updates on projects, events, and volunteer opportunities.",
};

export default function MailingList() {
  return (
    <>
      <Nav />

      <Section className="bg-canvas">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 shrink-0 bg-court" aria-hidden="true" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-court">
              Stay in the Loop
            </p>
          </div>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-paper text-wrap-balance">
            Mailing List
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-paper/70 leading-relaxed">
            Want to follow along? Join our mailing list to hear about upcoming
            projects, events, collection drives, and volunteer opportunities —
            straight to your inbox.
          </p>
          <div className="mt-8">
            <a
              href="https://forms.gle/LAmkFyZFdhJC49z77"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-[3px] bg-court px-5 py-2.5 text-sm font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-[transform,box-shadow,filter] duration-200 ease-[var(--ease-out-hover)] hover:-translate-y-[1px] hover:brightness-95 hover:shadow-[0_6px_14px_-4px_rgba(0,0,0,0.18)] active:translate-y-[1px] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Join the mailing list
            </a>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
