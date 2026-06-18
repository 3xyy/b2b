import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DiscordButton } from "@/components/ui/DiscordButton";

export const metadata: Metadata = {
  title: "Eco-filament | Bin to Better",
  description:
    "Repurposing plastic waste into 3D printer filament for tools and toys.",
};

export default function EcoFilamentPage() {
  return (
    <>
      <Nav />

      <Section className="bg-emerald/5">
        <Reveal>
          <SectionHeading
            eyebrow="Project Spotlight"
            title="Eco-filament"
            subtitle="Repurposing plastic waste into 3D printer filament for tools and toys."
            align="left"
          />
        </Reveal>
      </Section>

      {/* The New Building Blocks of Society */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
                The New Building Blocks of Society
              </h3>
              <p className="text-ink/70 leading-relaxed mb-6">
                Eco-filament repurposes plastic waste (collected from trash
                cleanups in local parks) into 3D printer filament used to
                develop toys and tools for kids with special needs. It&apos;s a
                simple yet effective way to keep plastic out of landfills and
                give it a second life.
              </p>

              <div className="rounded-xl border border-emerald/30 bg-emerald/10 p-6">
                <p className="text-ink/80">
                  If you are interested in attending volunteering events (you
                  will get volunteer hours) to clean up our parks, please join
                  our Discord:{" "}
                  <a
                    href="https://tinyurl.com/b2bdisc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald underline-offset-2 hover:underline"
                  >
                    https://tinyurl.com/b2bdisc
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <DiscordButton href="https://tinyurl.com/b2bdisc" />
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
