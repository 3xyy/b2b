"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function TechToTreasure() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Tech to Treasure" />

      <main className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase">Project Spotlight</span>
            <h1 className="text-4xl md:text-5xl font-bold">Tech to Treasure</h1>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              Turning e-waste into educational tools and responsible recycling.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="space-y-12"
          >
            <div className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4">A Device’s Second Chance</h3>
              <p className="text-white/70 leading-relaxed">
                Millions of electronics are discarded each year, often without proper recycling, contributing to growing e‑waste and environmental harm. Tech to Treasure addresses this issue while inspiring the next generation of innovators.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">What We Do</h3>
              <ul className="space-y-6">
                {[
                  { title: "Collection & Education", desc: "We gather unused devices and transform them into educational tools through free, interactive workshops." },
                  { title: "Hands‑On Learning", desc: "Students disassemble devices to learn about RAM, memory, circuit boards, and power systems." },
                  { title: "Responsible Recycling", desc: "After sessions, all parts are responsibly recycled through Best Buy’s e‑waste program." }
                ].map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8bc34a]/20 text-[#8bc34a] flex items-center justify-center text-sm font-bold mt-1">✓</span>
                    <p className="text-white/70">
                      <strong className="text-white block mb-1">{item.title}</strong>
                      {item.desc}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#8bc34a]/10 to-transparent border border-[#8bc34a]/20 rounded-2xl text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Get Involved</h3>
              <p className="text-white/70 mb-6">
                Students interested should join our Discord to get involved for future events.
              </p>
              <a 
                href="https://tinyurl.com/b2bdisc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full font-semibold transition-colors"
              >
                Join Discord
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                </svg>
              </a>
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
