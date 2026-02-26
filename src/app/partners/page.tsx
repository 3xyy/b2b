import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PartnersContent from "@/components/partners/PartnersContent";
import { partnerLogos } from "@/data/partners";

export default function Partners() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Partners" />

      <main className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <PartnersContent files={partnerLogos} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
