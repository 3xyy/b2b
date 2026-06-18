import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { hackathon, sponsorTiers } from "@/content/events";

export const metadata: Metadata = {
  title: "Events | Bin to Better",
  description:
    "Join Bin to Better at our upcoming hackathons, workshops, and community events. See the Tech to Treasure Hackathon and our sponsors.",
};

const tierGridCols: Record<string, string> = {
  xl: "grid-cols-1 sm:grid-cols-2",
  lg: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
  md: "grid-cols-3 sm:grid-cols-6",
  sm: "grid-cols-3",
};

const tierImgSize: Record<string, string> = {
  xl: "h-36 sm:h-48",
  lg: "h-24 sm:h-32",
  md: "h-16 sm:h-20",
  sm: "h-14 sm:h-16",
};

export default function Events() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <Section className="bg-emerald/5">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald">
            Get Involved
          </p>
          <h1 className="font-serif text-5xl font-bold text-ink sm:text-6xl">Events</h1>
          <p className="mt-4 text-lg text-ink/60">
            Join us at our upcoming hackathons, workshops, and community events.
          </p>
        </Reveal>
      </Section>

      {/* ── Featured Event ── */}
      <Section>
        <SectionHeading eyebrow="Spotlight" title="Featured Event" align="left" />

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-emerald/20 bg-ink shadow-xl shadow-ink/10">
            {/* Header band */}
            <div className="relative bg-gradient-to-br from-forest to-ink px-8 py-12 text-center">
              <span className="inline-block rounded-full border border-lime/40 bg-lime/10 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-lime">
                {hackathon.datePill}
              </span>
              <h3 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Tech to Treasure{" "}
                <span className="text-emerald">Hackathon</span>
              </h3>
              <p className="mt-4 text-lg font-light text-white/70 sm:text-xl">
                {hackathon.tagline}
              </p>

              {/* Info pills */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                {hackathon.infoPills.map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/70"
                  >
                    <span className="text-xl">{pill.icon}</span>
                    <span>
                      {pill.sublabel ? (
                        <>
                          <span className="font-semibold text-white">{pill.label}</span>
                          <span className="ml-1 text-xs text-white/50">{pill.sublabel}</span>
                        </>
                      ) : (
                        pill.label
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details body */}
            <div className="grid gap-10 bg-ink/95 p-8 md:grid-cols-2 md:p-12">
              {/* About */}
              <div>
                <h4 className="font-serif text-2xl font-bold text-white">About the Event</h4>
                <div className="mt-4 space-y-4 leading-relaxed text-white/70">
                  {hackathon.aboutParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Mission */}
              <div>
                <h4 className="font-serif text-xl font-bold text-white">Our Mission</h4>
                <div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  {hackathon.mission.map((m) => (
                    <div key={m.title} className="flex gap-4">
                      <span className="text-2xl">{m.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-white">{m.title}</p>
                        <p className="text-xs leading-snug text-white/60">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prizes */}
            <div className="bg-ink/90 px-8 pb-8 md:px-12 md:pb-12">
              <h4 className="mb-6 text-center font-serif text-2xl font-bold text-white">
                Prizes
              </h4>

              {/* Top 3 podium */}
              <div className="mb-6 grid grid-cols-3 items-end gap-4">
                {hackathon.prizes.top3.map((prize) => (
                  <div
                    key={prize.place}
                    className={`rounded-xl border p-5 text-center ${
                      prize.style === "gold"
                        ? "border-lime/40 bg-gradient-to-b from-lime/20 to-transparent md:-translate-y-4 md:py-7"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div
                      className={`text-lg font-bold sm:text-xl ${
                        prize.style === "gold"
                          ? "text-lime"
                          : prize.style === "silver"
                            ? "text-white/70"
                            : "text-clay"
                      }`}
                    >
                      {prize.place}
                    </div>
                    <div className="mt-1 text-xs text-white/60 sm:text-sm">{prize.award}</div>
                  </div>
                ))}
              </div>

              {/* 4th, 5th + Wolfram */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {hackathon.prizes.rest.map((prize) => (
                  <div
                    key={prize.place}
                    className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center"
                  >
                    <div className="text-sm font-bold text-white/80">{prize.place}</div>
                    <div className="mt-1 text-xs text-white/40">{prize.award}</div>
                  </div>
                ))}
                <div className="col-span-2 flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <span className="text-3xl">{hackathon.prizes.wolfram.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white/90">
                      {hackathon.prizes.wolfram.title}
                    </div>
                    <div className="text-xs leading-tight text-white/50">
                      {hackathon.prizes.wolfram.desc}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-sm text-white/40">
                Plus{" "}
                <span className="font-bold text-emerald">$1000+</span>{" "}
                in platform credits &amp; subscriptions for all participants!
              </p>

              {/* Keynote */}
              <div className="mt-10 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
                <div className="text-4xl">🎤</div>
                <h4 className="mt-2 font-serif text-xl font-bold text-white">Keynote Speakers</h4>
                <p className="mt-1 text-white/50">To be announced soon</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Sponsors ── */}
      <Section className="bg-emerald/5">
        <SectionHeading
          eyebrow="Our Supporters"
          title="Backed by Global Innovators"
        />

        <div className="space-y-14">
          {sponsorTiers.map((tier, ti) => (
            <Reveal key={tier.label} delay={ti * 80}>
              <div className={`grid ${tierGridCols[tier.size]} items-center justify-items-center gap-6`}>
                {tier.sponsors.map((sponsor, si) => (
                  <Reveal key={sponsor.name} delay={si * 60}>
                    <a
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center justify-center rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald/30"
                      aria-label={sponsor.name}
                    >
                      <div className={`relative w-full ${tierImgSize[tier.size]}`}>
                        <Image
                          src={sponsor.src}
                          alt={sponsor.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 18vw"
                        />
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
