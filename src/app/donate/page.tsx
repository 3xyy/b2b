"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/header/Navbar";

export default function Donate() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Donate" />

      {/* Donate Section */}
      <section className="relative py-32 bg-[#1a2e23] overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2d4a3e] to-[#1a2e23] border border-[#8bc34a]/30 rounded-3xl p-12 shadow-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Donate
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your support helps us turn waste into opportunity. Donations allow us to expand our collection efforts, develop new projects and reach more communities.
              Every contribution, no matter the size, helps build a cleaner, more sustainable future.
            </p>
            
            <motion.a
              href="https://charity.pledgeit.org/bintobetter"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-[#8bc34a] text-[#1a2e23] rounded-full font-bold text-lg shadow-xl shadow-[#8bc34a]/20 hover:bg-[#9ccc65] transition-colors"
            >
              Donate via PledgeIt
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1a14] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              <span className="text-[#8bc34a]">bin</span>{" "}
              <span className="text-white/60">to</span>{" "}
              <span className="text-[#8bc34a]">better</span>
            </motion.div>

            <div className="flex gap-6 text-white/50">
              {["Instagram", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href={social === "LinkedIn" ? "https://www.linkedin.com/company/bin-to-better/posts/?feedView=all" : "https://www.instagram.com/bintobetter/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#8bc34a" }}
                  className="hover:text-[#8bc34a] transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            © 2026 Bin to Better. All rights reserved. Turning waste into
            opportunity.
          </div>
        </div>
      </footer>
    </div>
  );
}
