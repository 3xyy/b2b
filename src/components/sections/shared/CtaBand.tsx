import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { LinkRef } from "@/content/types";

/**
 * Reusable call-to-action band with heading, blurb, and buttons.
 */
export default function CtaBand({
  heading,
  text,
  buttons,
}: {
  heading: string;
  text: string;
  buttons: LinkRef[];
}) {
  return (
    <Section
      width="default"
      className="bg-gradient-to-r from-surface-700 to-surface-600"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-h2 font-bold text-white">{heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lead text-white/75">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          {buttons.map((b, i) => (
            <Button
              key={b.label}
              href={b.href}
              size="lg"
              variant={i === 0 ? "primary" : "secondary"}
            >
              {b.label}
            </Button>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
