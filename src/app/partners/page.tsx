import Navbar from "../components/Navbar";
import PartnersContent from "../components/PartnersContent.client";
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

      <footer className="bg-[#0d1a14] py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/60">
          © 2026 Bin to Better. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
