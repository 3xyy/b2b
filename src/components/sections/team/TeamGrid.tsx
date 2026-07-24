import Image from "next/image";
import { Lightbulb } from "lucide-react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { assetPath } from "@/lib/assetPath";
import type { TeamGroup } from "@/content/types";

export default function TeamGrid({ groups }: { groups: TeamGroup[] }) {
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <Reveal key={group.category}>
          <Card className="p-8">
            <h2 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-brand">
              {group.category}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member, i) => (
                <div
                  key={member.name + i}
                  className="flex flex-col items-center p-5 text-center"
                >
                  <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-brand/30">
                    <Image
                      src={assetPath(member.image)}
                      alt={member.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                      style={
                        member.imagePosition
                          ? { objectPosition: member.imagePosition }
                          : undefined
                      }
                    />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium uppercase tracking-wide text-brand">
                    {member.role}
                  </p>
                  <p className="mb-2 text-sm text-white/60">{member.school}</p>
                  <p className="flex items-start justify-center gap-1.5 text-xs italic text-white/40">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic" aria-hidden />
                    <span>{member.fact}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
