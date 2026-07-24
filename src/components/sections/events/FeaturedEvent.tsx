import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import type { EventsContent } from "@/content/types";

export default function FeaturedEvent({
  event,
}: {
  event: EventsContent["featuredEvent"];
}) {
  const { prizes } = event;
  return (
    <div>
      <Reveal>
        <h2 className="mb-10 border-l-4 border-brand pl-4 text-3xl font-bold text-white">
          {event.sectionHeading}
        </h2>
      </Reveal>

      <Reveal>
        <Card className="overflow-hidden">
          {/* Header */}
          <div className="relative overflow-hidden p-8 text-center md:p-12">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface-900 to-surface-950" />
            <Badge className="mb-6 font-bold uppercase tracking-widest">
              {event.badge}
            </Badge>
            <h3 className="text-h1 font-bold leading-tight text-white">
              {event.title.replace(event.titleAccent, "").trim()}{" "}
              <span className="text-brand">{event.titleAccent}</span>
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-lead font-light text-white/80">
              {event.subtitle}
            </p>
            <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
              {event.facts.map((f) => (
                <div
                  key={f.value}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70"
                >
                  <span className="text-xl">{f.icon}</span>
                  <span>
                    <span className="font-semibold">{f.value}</span>
                    {f.detail && (
                      <span className="block text-xs text-white/50">{f.detail}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-2">
            <div>
              <h4 className="mb-4 text-2xl font-bold text-white">
                {event.about.heading}
              </h4>
              <div className="space-y-4 leading-relaxed text-white/70">
                {event.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-white">
                {event.mission.heading}
              </h4>
              <div className="space-y-5">
                {event.mission.items.map((m) => (
                  <div key={m.title} className="flex gap-4">
                    <div className="text-2xl">{m.icon}</div>
                    <div>
                      <h5 className="text-sm font-bold text-white">{m.title}</h5>
                      <p className="text-xs leading-snug text-white/60">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prizes */}
          <div className="px-8 pb-12 md:px-12">
            <h4 className="mb-6 text-center text-2xl font-bold text-white">
              {prizes.heading}
            </h4>
            <div className="mb-6 grid items-end gap-6 md:grid-cols-3">
              {prizes.podium.map((p, i) => {
                const isFirst = i === 0;
                return (
                  <div
                    key={p.place}
                    className={
                      isFirst
                        ? "order-1 rounded-xl border border-brand/40 bg-gradient-to-b from-brand/20 to-surface-900 p-8 text-center md:order-2 md:-translate-y-4"
                        : i === 1
                          ? "order-2 rounded-xl border border-white/10 bg-surface-900 p-6 text-center md:order-1"
                          : "order-3 rounded-xl border border-white/10 bg-surface-900 p-6 text-center"
                    }
                  >
                    <div
                      className={
                        isFirst
                          ? "mb-2 text-3xl font-bold text-gold"
                          : "mb-2 text-2xl font-bold text-white/70"
                      }
                    >
                      {p.place}
                    </div>
                    <div
                      className={
                        isFirst
                          ? "text-sm font-semibold text-white/90"
                          : "text-sm text-white/50"
                      }
                    >
                      {p.prize}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {prizes.additional.map((a) => (
                <div
                  key={a.place}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-surface-900/40 p-4 text-center"
                >
                  {a.icon && <span className="text-2xl">{a.icon}</span>}
                  <div className="text-left">
                    <div className="text-sm font-bold text-white/85">{a.place}</div>
                    <div className="text-[11px] text-white/50">{a.prize}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-white/50">{prizes.footnote}</p>
          </div>

          {/* Keynote */}
          <div className="mx-8 mb-12 rounded-2xl border border-dashed border-white/10 bg-white/5 p-8 text-center md:mx-12">
            <div className="mb-2 text-4xl">{event.keynote.icon}</div>
            <h4 className="text-xl font-bold text-white">{event.keynote.heading}</h4>
            <p className="text-white/50">{event.keynote.status}</p>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
