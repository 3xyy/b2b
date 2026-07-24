import Image from "next/image";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { assetPath } from "@/lib/assetPath";
import type { AboutContent } from "@/content/types";

export default function OriginStory({
  data,
}: {
  data: AboutContent["originStory"];
}) {
  return (
    <Section width="default" className="bg-surface-900">
      <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="text-h2 font-bold text-white">{data.heading}</h2>
      </Reveal>

      <Reveal>
        <Card className="p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-5 text-lg leading-relaxed text-white/70">
              {data.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-white/85" : undefined}>
                  {p}
                </p>
              ))}
            </div>

            <div className="flex justify-center gap-8 md:gap-12">
              {data.founders.map((founder) => (
                <div key={founder.name} className="text-center">
                  <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-brand/30 md:h-40 md:w-40">
                    <Image
                      src={assetPath(founder.image)}
                      alt={founder.name}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    {founder.name.split(" ")[0]}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand">
                    {founder.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
