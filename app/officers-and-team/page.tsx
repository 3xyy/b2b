import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { team } from "@/content/team";

export default function Team() {
  return (
    <>
      <Nav />
      <Section>
        <h1 className="font-display text-4xl font-semibold text-ink">Officers &amp; Team</h1>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {team.map((m) => (
            <Card key={`${m.name}-${m.role}`} className="p-0 overflow-hidden">
              <PhotoSlot src={m.photo} alt={m.name} className="aspect-square" />
              <div className="p-4">
                <div className="font-semibold text-ink">{m.name}</div>
                <div className="text-sm text-ink/60">{m.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
