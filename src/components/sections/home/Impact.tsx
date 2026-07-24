"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useReducedMotion,
  motion,
} from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import impact from "@/content/impact.json";

const nf = new Intl.NumberFormat("en-US");

function CountUp({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const reduce = useReducedMotion();
  // Reduced-motion users see the final value immediately (set via initializer,
  // not in an effect). Everyone else counts up once the section scrolls in.
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!start || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, value, reduce]);

  return (
    <span>
      {nf.format(display)}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const max = Math.max(...impact.chart.series.map((s) => s.value));

  return (
    <Section width="wide" className="bg-surface-950">
      <Reveal>
        <SectionHeading
          eyebrow={impact.eyebrow}
          title={impact.heading}
          intro={impact.intro}
          className="mb-14"
        />
      </Reveal>

      {/* Counters */}
      <div ref={ref} className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {impact.counters.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <Card className="p-6 text-center md:p-8">
              <div className="text-4xl font-bold text-brand md:text-5xl">
                <CountUp value={c.value} suffix={c.suffix} start={inView} />
              </div>
              <div className="mt-2 text-sm text-white/60">{c.label}</div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Bar comparison */}
      <Reveal className="mt-10">
        <Card className="p-8 md:p-10">
          <h3 className="text-xl font-bold text-white">{impact.chart.title}</h3>
          <p className="mt-1 text-sm text-white/50">{impact.chart.caption}</p>

          <div className="mt-8 space-y-6" role="img" aria-label={impact.chart.title}>
            {impact.chart.series.map((s, i) => (
              <div key={s.label}>
                <div className="mb-2 flex items-baseline justify-between text-sm">
                  <span className="font-medium text-white/80">{s.label}</span>
                  <span className="font-semibold text-white">
                    {nf.format(s.value)}{" "}
                    <span className="text-white/40">{impact.chart.unit}</span>
                  </span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background:
                        i === 0
                          ? "var(--color-brand)"
                          : "color-mix(in srgb, var(--color-brand) 55%, var(--color-surface-700))",
                    }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(s.value / max) * 100}%` } : {}}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
