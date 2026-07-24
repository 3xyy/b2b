import type { Metadata } from "next";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/sections/home/Hero";
import Mission from "@/components/sections/home/Mission";
import ProjectsPreview from "@/components/sections/home/ProjectsPreview";
import Impact from "@/components/sections/home/Impact";
import Testimonials from "@/components/sections/home/Testimonials";
import HomeContact from "@/components/sections/home/HomeContact";
import { getHome, site } from "@/lib/content";

export const metadata: Metadata = {
  description: site.metadata.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  const home = getHome();
  return (
    <>
      <Navbar activePage="Home" />
      <main>
        <Hero hero={home.hero} />
        <Mission mission={home.mission} />
        <ProjectsPreview projects={home.projects} />
        <Impact />
        <Testimonials testimonials={home.testimonials} />
        <HomeContact contact={home.contact} />
      </main>
      <Footer />
    </>
  );
}
