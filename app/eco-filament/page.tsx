import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import Image from "next/image";

// Google Photos album with the full set of park-cleanup photos.
const CLEANUP_ALBUM = "https://photos.app.goo.gl/Gv7Gx5vsJinbyADB9";

const cleanupPhotos = [
  { src: "/cleanups/check-in.webp", alt: "Volunteers signing in at the cleanup check-in table" },
  { src: "/cleanups/supplies.webp", alt: "A volunteer handing out trash bags from the supply bin" },
  { src: "/cleanups/picking-litter.webp", alt: "A volunteer using a grabber to collect litter from the brush" },
  { src: "/cleanups/bagging-litter.webp", alt: "Two volunteers bagging litter collected along the creek" },
  { src: "/cleanups/trailside.webp", alt: "Volunteers clearing trash from bushes beside the trail" },
  { src: "/cleanups/full-bag.webp", alt: "A volunteer carrying a full bag of collected litter down the path" },
];

export const metadata: Metadata = {
  title: "Eco-Filament | Bin to Better",
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
            title="Eco-Filament"
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
              Eco-Filament repurposes plastic waste (collected from trash
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

      {/* Cleanup photos — dark field band. Drop images into the slots below.
          Source album: CLEANUP_ALBUM (Google Photos). */}
      <Section className="bg-field">
        <Reveal>
          <SectionHeading
            eyebrow="From the Cleanups"
            title="Out in the Parks"
            subtitle="Photos from our park cleanups — collecting the plastic that becomes new filament."
            align="left"
            tone="dark"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mb-4 flex justify-end">
            <a
              href={CLEANUP_ALBUM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-court underline underline-offset-4 hover:brightness-90"
            >
              View full album
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {cleanupPhotos.map((photo) => (
              <div
                key={photo.src}
                className="aspect-[3/4] overflow-hidden border border-paper/15"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={1200}
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
