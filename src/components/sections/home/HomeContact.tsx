import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import type { HomeContent } from "@/content/types";

export default function HomeContact({
  contact,
}: {
  contact: HomeContent["contact"];
}) {
  return (
    <Section id="contact" width="narrow" className="bg-surface-900">
      <Reveal className="text-center">
        <h2 className="text-h2 font-bold text-white">{contact.heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lead text-white/70">
          {contact.intro}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {contact.methods.map((m, i) => {
          const external = m.href.startsWith("http");
          return (
            <Reveal key={m.label} delay={i * 0.08}>
              <a
                href={m.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <Card interactive className="group p-6 text-left">
                  <div className="mb-1 text-lg text-brand">{m.label}</div>
                  <div className="text-white group-hover:underline">{m.value}</div>
                </Card>
              </a>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-white/50">{contact.note}</p>
    </Section>
  );
}
