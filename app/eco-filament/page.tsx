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

      {/* Hero — dark canvas band */}
      <Section className="bg-canvas">
        <Reveal>
          <SectionHeading
            eyebrow="Project Spotlight"
            title="Eco-filament"
            subtitle="Repurposing plastic waste into 3D printer filament for tools and toys."
            align="left"
            tone="dark"
          />
        </Reveal>
      </Section>

      {/* The New Building Blocks of Society — light paper band */}
      <Section className="bg-paper">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-ink mb-5 text-balance">
              The New Building Blocks of Society
            </h2>
            <p className="text-ink/70 leading-relaxed text-base sm:text-lg mb-8">
              Eco-filament repurposes plastic waste (collected from trash
              cleanups in local parks) into 3D printer filament used to
              develop toys and tools for kids with special needs. It&apos;s a
              simple yet effective way to keep plastic out of landfills and
              give it a second life.
            </p>

            {/* Discord callout — bordered block, no pill */}
            <div className="border border-ink/10 bg-paper p-6 mb-8">
              <p className="text-ink/80 text-base">
                If you are interested in attending volunteering events (you
                will get volunteer hours) to clean up our parks, please join
                our Discord:{" "}
                <a
                  href="https://tinyurl.com/b2bdisc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline underline-offset-2 hover:text-canvas"
                >
                  https://tinyurl.com/b2bdisc
                </a>
              </p>
            </div>

            <DiscordButton href="https://tinyurl.com/b2bdisc" />
          </div>
        </Reveal>
      </Section>

      <Footer />
    </>
  );
}
