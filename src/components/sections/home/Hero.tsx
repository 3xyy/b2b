"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import StatTile from "@/components/ui/StatTile";
import type { HomeContent } from "@/content/types";

export default function Hero({ hero }: { hero: HomeContent["hero"] }) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Neutral surface-elevation backdrop — depth from surface tone, not glow. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface-900 via-surface-950 to-surface-950" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={item}>
            <Badge>{hero.badge}</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-display font-bold leading-[1.02] tracking-tight"
          >
            <span className="text-brand">{hero.heading}</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-lg text-lead text-white/70">
            {hero.subheading}
            <br />
            <span className="text-white/45">{hero.subheadingSecondary}</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            {hero.ctas.map((cta, i) => (
              <Button
                key={cta.label}
                href={cta.href}
                size="lg"
                variant={i === 0 ? "primary" : "secondary"}
                className="w-full sm:w-auto"
              >
                {cta.label}
              </Button>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="flex gap-10 border-t border-white/10 pt-8"
          >
            {hero.stats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </motion.div>
        </motion.div>

        {/* Logo visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden justify-center lg:flex"
        >
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            <Image
              src={assetPath(hero.image)}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 0px, 384px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
