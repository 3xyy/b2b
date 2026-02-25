"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function BounceBack() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Bounce Back" />

      {/* Main Content */}
      <section className="relative pt-32 pb-24 bg-[#1a2e23]">
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
                Bounce Back Project
              </h1>
              <p className="text-xl text-white/80 mb-8 font-light">
                Giving used tennis balls a second life in schools, animal shelters, and assisted living.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">The Focus of Our Efforts</h3>
                  <p className="text-white/70 leading-relaxed">
                    Nearly all of the 330 million tennis balls produced each year end up in landfills, where they can take more than 400 years to decompose. The Bounce Back Project reduces waste by finding creative ways to give used tennis balls a second life.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Do</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Collection", desc: "Every month our team collects between 3,000 and 5,000 used balls from local clubs." },
                      { title: "Reuse", desc: "Balls are donated to schools (chair legs), animal shelters (enrichment toys), and assisted living centers (walker feet)." },
                      { title: "Impact", desc: "Since launching just over a year ago we have collected more than 100,000 tennis balls and donated over 30,000 to organizations that can use them effectively." },
                    ].map((item, i) => (
                      <motion.li
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-[#8bc34a]">✓</span>
                        <p className="text-white/70">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </p>
                      </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-[#8bc34a]">✓</span>
                        <p className="text-white/70">
                          <strong className="text-white">Get Involved:</strong> Clubs interested in participating can visit the <Link href="/partners" className="text-[#8bc34a] hover:underline">Partners page</Link> or contact us directly to arrange a pickup.
                        </p>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#8bc34a]/20 to-[#4caf50]/20 flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-[url('/tennis-pattern.svg')] opacity-10" />
              <div className="relative text-center">
                <div className="text-9xl mb-4 animate-bounce">🎾</div>
                <div className="text-4xl font-bold text-white mb-2">100,000+</div>
                <div className="text-white/60">Tennis Balls Collected</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scrolling Gallery */}
          <div className="mt-20 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a2e23] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1a2e23] to-transparent z-10" />
            
            <motion.div 
              className="flex gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12 items-center">
                  {[
                    "page-28-xref-114.png",
                    "page-29-xref-117.png",
                    "page-30-xref-120.png",
                    "page-31-xref-123.png"
                  ].map((img) => (
                    <div 
                      key={img} 
                      onClick={() => setSelectedImage(img)}
                      className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#8bc34a]/30 transition-colors w-[400px] aspect-video flex-shrink-0 shadow-lg shadow-black/30 cursor-pointer"
                    >
                      <img 
                        src={`/bounce-back-logos/${img}`} 
                        alt="Gallery Image" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0d1a14] py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/60">© 2026 Bin to Better. All rights reserved.</div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <img
                src={`/bounce-back-logos/${selectedImage}`}
                alt="Enlarged gallery image"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
