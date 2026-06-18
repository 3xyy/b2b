import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { partnerLogos } from "@/content/partners";

export default function Partners() {
  return (
    <>
      <Nav />
      <Section>
        <h1 className="font-display text-4xl font-semibold text-ink">Our Partners</h1>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {partnerLogos.map((src) => (
            <div
              key={src}
              className="flex items-center justify-center rounded-xl bg-white p-6 ring-1 ring-ink/5"
            >
              <Image
                src={src}
                alt="Partner logo"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
