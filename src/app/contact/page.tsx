import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/sections/contact/ContactForm";
import { getHome, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bin to Better — questions, material donations, volunteering, or partnerships. We'd love to hear from you.",
  alternates: { canonical: "/contact" },
};

const contact = getHome().contact;

export default function ContactPage() {
  return (
    <>
      <Navbar activePage="Contact" />
      <main>
        <PageHeader
          eyebrow="Get in Touch"
          title="Contact"
          titleAccent="Us"
          subheading={contact.intro}
        />

        <Section width="wide" className="bg-surface-900 pt-4">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />

            <div className="space-y-5">
              {contact.methods.map((m) => {
                const external = m.href.startsWith("http");
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <Card interactive className="group p-6">
                      <div className="mb-1 text-lg text-brand">{m.label}</div>
                      <div className="text-white group-hover:underline">
                        {m.value}
                      </div>
                    </Card>
                  </a>
                );
              })}

              <Card className="p-6">
                <div className="mb-1 text-lg text-brand">Community</div>
                <a
                  href={site.contact.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Join our Discord
                </a>
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
