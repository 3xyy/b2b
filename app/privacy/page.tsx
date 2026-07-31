import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy | Bin to Better",
  description:
    "Privacy, external-form, youth-safety, and photo-consent information for Bin to Better.",
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <Section className="bg-canvas">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight text-paper">
            Privacy
          </h1>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-paper/70">
            <p>
              Bin to Better uses external services such as Google Forms,
              Discord, Google Photos, GitHub, and donation platforms for some
              signups and resources. Those services may collect information
              under their own policies.
            </p>
            <p>
              Parents or guardians should complete forms for younger students.
              Discord is only for participants age 13 and older. We avoid
              collecting unnecessary youth data and use submitted information to
              respond to inquiries, coordinate events, and track program impact.
            </p>
            <p>
              For privacy questions, unsubscribe requests, corrections, or photo
              removal, email{" "}
              <a href={`mailto:${site.email}`} className="text-paper underline underline-offset-4 hover:text-court">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
