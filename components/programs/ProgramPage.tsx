import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { programs } from "@/content/programs";

export function ProgramPage({ slug }: { slug: keyof typeof programs }) {
  const p = programs[slug];
  return (
    <>
      <Nav />
      <Section className="bg-emerald/5">
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{p.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">{p.tagline}</p>
      </Section>
      {p.sections.map((s, i) => (
        <Section key={i}>
          <h2 className="text-2xl font-semibold text-ink">{s.heading}</h2>
          <p className="mt-4 max-w-3xl text-ink/80">{s.body}</p>
        </Section>
      ))}
      {p.steps && (
        <Section className="bg-emerald/5">
          <div className="grid gap-6 md:grid-cols-3">
            {p.steps.map((step, i) => (
              <Card key={i}>
                <div className="font-serif text-3xl text-emerald">{i + 1}</div>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.body}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}
      <Section className="bg-ink text-paper text-center">
        <h2 className="text-3xl font-semibold">Want to help?</h2>
        <div className="mt-6 flex justify-center"><Button href="/donate">Get Involved</Button></div>
      </Section>
      <Footer />
    </>
  );
}
