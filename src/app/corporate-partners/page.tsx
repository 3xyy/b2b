"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/header/Navbar";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

export default function CorporatePartners() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Corporate Partners" />

      <main className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase">Corporate Partners</span>
            <h1 className="text-4xl md:text-5xl font-bold">Corporate Partners</h1>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              Bin to Better works with mission-aligned businesses that support our programs through sponsorships, in-kind contributions, and community partnerships. Corporate partners help us expand our impact, reach more communities, and scale our sustainability and education initiatives.
            </p>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              If your company is interested in corporate collaboration, please reach out to <a className="text-[#8bc34a]" href="mailto:bintobetter@gmail.com">bintobetter@gmail.com</a>.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Why partner with us</h3>
            <ul className="text-white/70 list-disc list-inside space-y-3">
              <li>Make a measurable impact by redirecting usable materials to communities in need.</li>
              <li>Support education and sustainability through hands-on initiatives and workshops.</li>
              <li>Increase corporate social responsibility visibility and employee engagement.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Corporate Partners</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl p-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-4">Business Partners</h3>
                <ul className="text-white/70 list-disc list-inside space-y-3 mb-6">
                  <li>Sun Dragon Computers</li>
                </ul>
                <p className="text-white/60 text-sm italic">
                  Interested in becoming a corporate partner? Contact us at <a className="text-[#8bc34a]" href="mailto:outreach@bintobetter.org">outreach@bintobetter.org</a> to learn how your organization can support Bin to Better and be featured as a partner.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image 
                  src={assetPath("/partners-logos/sun-dragon-computers.png")} 
                  alt="Sun Dragon Computers" 
                  width={320}
                  height={160}
                  className="max-w-xs object-contain" 
                  unoptimized={true} // Keep unoptimized for static export flexibility
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-[#0d1a14] py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/60">© 2026 Bin to Better. All rights reserved.</div>
      </footer>
    </div>
  );
}
