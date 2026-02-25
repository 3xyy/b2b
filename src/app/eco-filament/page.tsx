"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function EcoFilament() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Eco-filament" />

      {/* Main Content */}
      <section className="relative pt-32 pb-24 bg-[#1a2e23] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase"
              >
                Project Spotlight
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Eco-filament
              </h1>
              <p className="text-xl text-white/80 mb-8 font-light">
                Repurposing plastic waste into 3D printer filament for tools and toys.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">The New Building Blocks of Society</h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Eco-filament repurposes plastic waste (collected from trash cleanups in local parks) into 3D printer filament used to develop toys and tools for kids with special needs. It’s a simple yet effective way to keep plastic out of landfills and give it a second life.
                  </p>
                  
                  <div className="bg-[#8bc34a]/10 border border-[#8bc34a]/30 p-6 rounded-2xl">
                    <p className="text-white/90">
                      If you are interested in attending volunteering events (you will get volunteer hours) to clean up our parks, please join our Discord:{" "}
                      <a href="https://tinyurl.com/b2bdisc" target="_blank" rel="noopener noreferrer" className="text-[#8bc34a] font-medium hover:underline">
                        https://tinyurl.com/b2bdisc
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#2d4a3e] to-[#1a2e23] flex items-center justify-center p-8 border border-white/10"
            >
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
              <div className="relative text-center">
                <div className="text-9xl mb-4 animate-pulse">🧵</div>
                <div className="text-2xl font-bold text-white mb-2">Sustainable</div>
                <div className="text-white/60">3D Printing</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0d1a14] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/60">© 2026 Bin to Better. All rights reserved.</div>
      </footer>
    </div>
  );
}
