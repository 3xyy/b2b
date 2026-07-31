import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility | Bin to Better",
  description:
    "Accessibility contact information for the Bin to Better website.",
};

export default function Accessibility() {
  return (
    <>
      <Nav />
      <Section className="bg-canvas">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight text-paper">
            Accessibility
          </h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-paper/70">
            <p>
              We want this website to be usable with keyboards, assistive
              technology, reduced-motion preferences, and a range of screen
              sizes.
            </p>
            <p>
              If you find a barrier, broken link, missing alt text, contrast
              issue, or inaccessible external form, email{" "}
              <a href={`mailto:${site.email}`} className="text-paper underline underline-offset-4 hover:text-court">
                {site.email}
              </a>{" "}
              with the page URL and a short description of the issue.
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
