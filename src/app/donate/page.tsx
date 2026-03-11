"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/header/Navbar";

export default function Donate() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Donate" />

      {/* Classes Section */}
      <section className="pt-32 pb-16 bg-[#0d1a14]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase">
              Support Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Classes</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              All funds go directly to Bin to Better to fund our projects. Classes are offered at reasonable prices, and a <span className="text-[#8bc34a] font-semibold">free trial</span> is available after signing up.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basketball Classes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl flex flex-col"
            >
              <div className="text-4xl mb-4">🏀</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Basketball Classes</h3>
              <p className="text-white/70 text-sm mb-4 flex-1">
                Taught by 3 coaches, MSJ varsity starters with a combined 6+ years of experience. Whether you&apos;re just starting out or looking to sharpen your skills, our coaches will help you improve your game.
              </p>
              <p className="text-white/50 text-xs mb-6 italic">
                Sign up for a free trial. More details available in the registration form.
              </p>
              <motion.a
                href="https://tinyurl.com/bballclasses"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                className="inline-block text-center px-6 py-3 rounded-full bg-[#8bc34a] text-[#0d1a14] font-semibold"
              >
                Register Now
              </motion.a>
            </motion.div>

            {/* Tennis Classes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl flex flex-col"
            >
              <div className="text-4xl mb-4">🎾</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Tennis Classes</h3>
              <p className="text-white/70 text-sm mb-4 flex-1">
                Taught by varsity high school tennis players ready to share their skills and passion for the sport. Great for beginners and intermediate players looking for quality instruction.
              </p>
              <p className="text-white/50 text-xs mb-6 italic">
                Sign up for a free trial. More details available in the registration form.
              </p>
              <motion.a
                href="https://tinyurl.com/tennisregis"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                className="inline-block text-center px-6 py-3 rounded-full bg-[#8bc34a] text-[#0d1a14] font-semibold"
              >
                Register Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="relative py-24 bg-[#1a2e23] overflow-hidden flex items-center justify-center">
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
