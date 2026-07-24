import { Check, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { WorkshopContent } from "@/content/types";

export default function PastEvents({
  data,
}: {
  data: WorkshopContent["pastEvents"];
}) {
  return (
    <div>
      <Reveal>
        <h2 className="mb-10 border-l-4 border-brand pl-4 text-3xl font-bold text-white">
          {data.heading}
        </h2>
      </Reveal>

      <div className="space-y-8">
        {data.events.map((event) => (
          <Reveal key={event.title + event.date}>
            <Card className="overflow-hidden bg-surface-800/40 p-8 md:p-10">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/60">
                    {event.date} • {event.location}
                  </span>
                  <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-white/60">
                    {event.description}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs text-white/40">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {event.venue}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/50">
                  <Check className="h-4 w-4" aria-hidden />
                  {event.status}
                </span>
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {event.details.map((d) => (
                  <div
                    key={d.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="mb-1 text-xs uppercase tracking-wider text-white/40">
                      {d.label}
                    </div>
                    <div className="text-sm font-semibold text-white/90">
                      {d.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
                <span className="font-semibold text-white/80">Format: </span>
                {event.format}
              </div>

              <h4 className="mb-4 text-lg font-bold text-white">
                {event.stationsHeading}
              </h4>
              <div className="grid gap-6 md:grid-cols-3">
                {event.stations.map((station) => (
                  <div
                    key={station.name}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <h5 className="mb-3 font-bold text-white">{station.name}</h5>
                    <ul className="mb-3 ml-4 list-disc space-y-1 text-sm text-white/60">
                      {station.parts.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                      {station.promptsLabel}
                    </div>
                    <ul className="ml-4 list-disc space-y-1 text-xs text-white/50">
                      {station.prompts.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
