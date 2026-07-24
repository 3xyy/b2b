import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { assetPath } from "@/lib/assetPath";
import type { EventsContent } from "@/content/types";

// Logo box sizing per tier (larger = more prominent).
const tierSize: Record<number, string> = {
  1: "h-40 md:h-56",
  2: "h-28 md:h-36",
  3: "h-20 md:h-24",
  4: "h-16 md:h-20",
};

const tierCols: Record<number, string> = {
  1: "grid-cols-1 sm:grid-cols-2 max-w-4xl",
  2: "grid-cols-2 md:grid-cols-5 max-w-5xl",
  3: "grid-cols-3 md:grid-cols-6 max-w-5xl",
  4: "grid-cols-3 max-w-2xl",
};

export default function SponsorWall({
  sponsors,
}: {
  sponsors: EventsContent["sponsors"];
}) {
  return (
    <div>
      <Reveal className="mb-14 text-center">
        <h2 className="text-h2 font-bold leading-tight text-white">
          Backed by Global <span className="text-brand">Innovators</span>
        </h2>
      </Reveal>

      <div className="space-y-12">
        {sponsors.tiers.map((tier) => (
          <Reveal key={tier.tier}>
            <div
              className={`mx-auto grid ${tierCols[tier.tier]} items-center justify-items-center gap-8`}
            >
              {tier.sponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`relative w-full ${tierSize[tier.tier]} opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100`}
                >
                  <Image
                    src={assetPath(s.image)}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 40vw, 300px"
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
