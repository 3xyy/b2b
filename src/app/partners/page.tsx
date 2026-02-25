import Navbar from "../components/Navbar";
import PartnersContent from "../components/PartnersContent.client";
import path from "path";
import { readdirSync } from "fs";

export default function Partners() {
  // read files from public/partners-logos at build/server time
  const logosDir = path.join(process.cwd(), "public", "partners-logos");
  let files: string[] = [];
  try {
    const validExtensions = /\.(png|jpe?g|svg|webp)$/i;
    files = readdirSync(logosDir)
      .filter((file) => validExtensions.test(file))
      .map((f) => `/partners-logos/${f}`);
  } catch (e) {
    files = [];
  }

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Partners" />

      <main className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <PartnersContent files={files} />
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
