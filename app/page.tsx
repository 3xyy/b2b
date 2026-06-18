import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Stat } from "@/components/ui/Stat";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Card } from "@/components/ui/Card";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { stats, programsPreview, testimonials, mission } from "@/content/home";
import { partnerLogos } from "@/content/partners";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <Section className="bg-paper">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <h1 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Turning waste into&nbsp;opportunity.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
              One item at a time, one community at a time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#programs">Explore Our Projects</Button>
              <Button href="/donate" variant="secondary">Get Involved</Button>
            </div>
          </div>
          <div className="relative">
            <PhotoSlot
              alt="Bin to Better volunteers"
              className="aspect-[4/3] w-full overflow-hidden rounded-3xl ring-4 ring-emerald/10"
            />
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-emerald/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Our Mission</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
            {mission.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats band */}
      <Section className="bg-paper">
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-6 divide-x divide-ink/10">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section id="programs" className="bg-emerald/5">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-3xl font-semibold text-ink">What We Do</h2>
          <p className="text-sm text-ink/60">Hands-on programs making real impact</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {programsPreview.map((p) => (
            <ProgramCard key={p.href} title={p.title} blurb={p.blurb} href={p.href} />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-paper">
        <h2 className="font-serif text-3xl font-semibold text-ink">What People Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col justify-between">
              <p className="text-base leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-emerald">— {t.author}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Partner logos */}
      <Section className="bg-emerald/5">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-ink/40">
          Trusted Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-75">
          {partnerLogos.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Partner logo"
              width={120}
              height={60}
              className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
            />
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-ink">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-paper sm:text-4xl">
            Join us in turning waste into opportunity.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/donate">Donate</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
