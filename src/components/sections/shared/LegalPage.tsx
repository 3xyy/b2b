import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";

interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader title={doc.title} subheading={`Last updated: ${doc.updated}`} />
        <Section as="div" width="narrow" className="bg-surface-950 pt-4">
          <div className="prose-b2b">
            <p>{doc.intro}</p>
            {doc.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
