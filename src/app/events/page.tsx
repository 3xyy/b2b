"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/header/Navbar";
import { assetPath } from "@/lib/assetPath";

export default function Events() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Events" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e23] to-[#0d1a14] opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.span 
              className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase"
            >
              Get Involved
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Events</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Join us at our upcoming hackathons, workshops, and community events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event: Hackathon */}
      <section className="relative py-12 bg-[#1a2e23]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-[#8bc34a] pl-4">
            Featured Event
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d1a14] rounded-3xl overflow-hidden border border-white/10"
          >
            {/* Hackathon Header */}
            <div className="relative p-8 md:p-12 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e23] to-[#0d1a14] z-0" />
               <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
               
               <div className="relative z-10 text-center">
                  <span className="inline-block px-4 py-1.5 bg-[#8bc34a]/20 text-[#8bc34a] text-sm font-bold tracking-widest uppercase rounded-full border border-[#8bc34a]/30 mb-6">
                    March 28, 2026 • San Jose, CA
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Tech to Treasure <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-[#4caf50]">Hackathon</span>
                  </h3>
                  <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light mb-8">
                    Turning ideas into impact. 8 Hours. Infinite Possibilities.
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/70 mb-8">
                    <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-sm md:text-base">
                      <span className="text-xl">🗓️</span> March 28, 2026
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-sm md:text-base">
                      <span className="text-xl">⏰</span> 10:00 AM - 6:00 PM
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-sm md:text-base text-left">
                      <span className="text-xl">📍</span> 
                      <div>
                        <div className="font-semibold">Tully Library</div>
                        <div className="text-xs text-white/50">880 Tully Rd, San Jose, CA 95111</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Hackathon Details */}
            <div className="p-8 md:p-12 bg-[#0d1a14]">
               <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-white">About the Event</h4>
                    <div className="space-y-4 text-white/70 leading-relaxed">
                      <p>
                        Tech to Treasure Hackathon is an environmental hackathon powered by Bin to Better, where builders turn ideas into impact in 8 hours. From AI agents to data-driven platforms, participants work together to tackle sustainability challenges using technology.
                      </p>
                      <p>
                        Through hands-on mentorship, workshops led by industry engineers, and real startup-level tools, join us as we build what’s next!
                      </p>
                    </div>

                  </div>
                  
                  <div>
                    {/* Mission */}
                    <div className="mb-8">
                        <h4 className="text-xl font-bold mb-4 text-white">Our Mission</h4>
                        <div className="bg-[#1a2e23] rounded-xl border border-white/10 p-6 space-y-4">
                            {[
                            { icon: "🌍", title: "Accessible Tech", desc: "Environmental innovation shouldn’t be limited to experts." },
                            { icon: "🛠️", title: "Empower Builders", desc: "Tools, mentorship, and space to turn ideas into prototypes." },
                            { icon: "🌱", title: "Grow Community", desc: "Connecting creators to build lasting impact together." }
                            ].map((m, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="text-2xl">{m.icon}</div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">{m.title}</h5>
                                    <p className="text-xs text-white/60 leading-snug">{m.desc}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                  </div>
               </div>

               {/* Prizes Grid */}
               <div className="mb-12">
                  <h4 className="text-2xl font-bold mb-6 text-white text-center">Prizes</h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6 items-end">
                     <div className="bg-[#1a2e23] p-6 rounded-xl border border-white/10 text-center order-2 md:order-1">
                        <div className="text-2xl font-bold text-slate-300/80 mb-2">2nd Place</div>
                        <div className="text-sm text-white/50">$400+ in credits</div>
                     </div>
                     <div className="bg-gradient-to-b from-[#8bc34a]/20 to-[#1a2e23] p-8 rounded-xl border border-[#8bc34a]/40 text-center order-1 md:order-2 transform md:-translate-y-4 shadow-lg shadow-[#8bc34a]/5">
                        <div className="text-3xl font-bold text-[#ffd700] mb-2">1st Place</div>
                        <div className="text-sm text-white/90 font-semibold">$4000+ in credits</div>
                     </div>
                     <div className="bg-[#1a2e23] p-6 rounded-xl border border-white/10 text-center order-3">
                        <div className="text-2xl font-bold text-[#cd7f32]/80 mb-2">3rd Place</div>
                        <div className="text-sm text-white/50">$200+ in credits</div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="bg-[#1a2e23]/30 p-4 rounded-xl border border-white/5 text-center">
                        <div className="font-bold text-white/80 text-sm">4th Place</div>
                        <div className="text-[10px] text-white/40 mt-1">$50+ credits</div>
                     </div>
                     <div className="bg-[#1a2e23]/30 p-4 rounded-xl border border-white/5 text-center">
                        <div className="font-bold text-white/80 text-sm">5th Place</div>
                        <div className="text-[10px] text-white/40 mt-1">$50+ credits</div>
                     </div>
                     <div className="col-span-2 bg-[#1a2e23]/30 p-4 rounded-xl border border-white/5 flex items-center gap-4">
                        <div className="text-3xl">🐺</div>
                        <div className="text-left">
                           <div className="font-bold text-white/90 text-sm">Wolfram Award</div>
                           <div className="text-xs text-white/50 leading-tight">WolframOne + Scholarship Check</div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/40">Plus <span className="text-[#8bc34a] font-bold">$1000+</span> in platform credits & subscriptions for all participants!</p>
                  </div>
               </div>

               {/* Keynote Placeholder */}
               <div className="text-center p-8 bg-white/5 rounded-2xl border border-dashed border-white/10">
                  <div className="text-4xl mb-2">🎤</div>
                  <h4 className="text-xl font-bold text-white mb-1">Keynote Speakers</h4>
                  <p className="text-white/50">To be announced soon</p>
               </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Events */}
      <section className="relative py-12 bg-[#07120d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#8bc34a] pl-4">
            Upcoming Community Events
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d1a14] rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <div className="md:flex md:items-start md:gap-8">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-[#11401f] to-[#082815] flex items-center justify-center p-4">
                  <svg role="img" aria-label="Tech to Treasure logo" viewBox="0 0 120 120" className="w-28 h-28" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#aee787" />
                        <stop offset="100%" stopColor="#4caf50" />
                      </linearGradient>
                    </defs>
                    <rect x="12" y="44" width="96" height="44" rx="6" fill="#081a14" />
                    <rect x="16" y="36" width="88" height="24" rx="4" fill="url(#g1)" />
                    <rect x="28" y="54" width="8" height="12" rx="2" fill="#9be37a" />
                    <rect x="44" y="54" width="8" height="12" rx="2" fill="#9be37a" />
                    <rect x="60" y="54" width="8" height="12" rx="2" fill="#9be37a" />
                    <circle cx="90" cy="36" r="12" fill="#0b2a1a" stroke="url(#g1)" strokeWidth="3" />
                    <circle cx="90" cy="36" r="6" fill="url(#g1)" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-[#8bc34a]/20 text-[#8bc34a] text-xs font-semibold uppercase rounded-full border border-[#8bc34a]/30">
                    March 1 • Fremont, CA
                  </span>
                  <div className="text-sm text-white/60">Patterson Ranch benches outside the red barn · 5298 Rancho Del Norte Dr, Fremont, CA 94555</div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Tech to Treasure</h3>
                <p className="text-white/70 mb-4">A hands-on stations workshop for kids to touch parts, see how things work, and hear instructors explain each component.</p>

                <div className="grid sm:grid-cols-2 gap-4 text-white/70 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/6">
                    <div className="font-semibold">When</div>
                    <div className="text-sm">March 1 3:30 PM to 5:30 PM</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/6">
                    <div className="font-semibold">Age Group</div>
                    <div className="text-sm">8–12 years</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/6">
                    <div className="font-semibold">Duration</div>
                    <div className="text-sm">2–3 hours (event runs 3:30–5:30)</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/6">
                    <div className="font-semibold">Group Size</div>
                    <div className="text-sm">7–8 kids per group</div>
                  </div>
                </div>

                <div className="bg-[#1a2e23] p-4 rounded-lg border border-white/8 text-white/70">
                  <div className="font-semibold mb-1">Format</div>
                  <div className="text-sm">Children rotate through stations (~20 minutes per station). Instructors will demonstrate parts and explain how each one works while kids can touch and explore.</div>
                </div>

                {/* Stations */}
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-white mb-3">Stations & Activities</h4>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/6">
                      <h5 className="font-semibold text-white mb-2">STATION 1 Inside Desktop Computer</h5>
                      <div className="text-sm text-white/70 mb-2">Kids can interact with:</div>
                      <ul className="list-disc ml-5 text-sm text-white/70 space-y-1">
                        <li>RAM sticks (remove & insert)</li>
                        <li>Hard drive / SSD</li>
                        <li>Cooling fan</li>
                        <li>Cables</li>
                        <li>Expansion cards</li>
                        <li>Motherboard</li>
                      </ul>
                      <div className="text-sm text-white/60 mt-3">Descriptions of these parts and short guided prompts:</div>
                      <ul className="list-disc ml-5 text-xs text-white/60 mt-2 space-y-1">
                        <li>Find the brain (CPU)</li>
                        <li>Find memory vs. storage</li>
                        <li>Trace a cable from power supply to part</li>
                        <li>Spin fan why cooling matters</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg border border-white/6">
                      <h5 className="font-semibold text-white mb-2">STATION 2 3D Printer</h5>
                      <div className="text-sm text-white/70 mb-2">Kids can interact with:</div>
                      <ul className="list-disc ml-5 text-sm text-white/70 space-y-1">
                        <li>Stepper motors</li>
                        <li>Belts and pulleys</li>
                        <li>Metal rods</li>
                        <li>Circuit board</li>
                        <li>Connection cables</li>
                        <li>Control board</li>
                      </ul>
                      <div className="text-sm text-white/60 mt-3">Activities:</div>
                      <ul className="list-disc ml-5 text-xs text-white/60 mt-2 space-y-1">
                        <li>Move print head by hand</li>
                        <li>Follow wires from motors to circuit board</li>
                        <li>Identify each motor’s purpose</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg border border-white/6">
                      <h5 className="font-semibold text-white mb-2">STATION 3 Monitor</h5>
                      <div className="text-sm text-white/70 mb-2">Kids can interact with:</div>
                      <ul className="list-disc ml-5 text-sm text-white/70 space-y-1">
                        <li>Back casing and control buttons</li>
                        <li>Circuit boards (main board & button board)</li>
                        <li>Ribbon cables</li>
                        <li>Ports (HDMI, VGA, power)</li>
                        <li>Screen layers (observe light touch only)</li>
                      </ul>
                      <div className="text-sm text-white/60 mt-3">Challenges:</div>
                      <ul className="list-disc ml-5 text-xs text-white/60 mt-2 space-y-1">
                        <li>Identify display parts (screen layers) vs. control parts (circuit boards)</li>
                        <li>Compare ribbon cables vs. thicker power wires</li>
                        <li>Which sends signals? Which sends power?</li>
                      </ul>
                    </div>
                  </div>

                  
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative py-24 bg-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Backed by Global <span className="text-black">Innovators</span>
            </h2>
            <div className="w-24 h-1 bg-[#8bc34a] mx-auto mt-4 rounded-full opacity-50" />
          </motion.div>
          
          {/* Big Sponsors */}
          <div className="grid grid-cols-2 gap-12 items-center justify-items-center mb-24 max-w-2xl mx-auto">
            {[
              { name: "Glid", src: "/Glid.png" },
              { name: "Wolfram", src: "/Wolfram.png" },
            ].map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.1, filter: "brightness(1.2)" }}
                viewport={{ once: true }}
                className="relative w-80 h-44 md:w-96 md:h-56 transition-all duration-500"
              >
                <Image
                  src={assetPath(sponsor.src)}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Medium Sponsors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center mb-20">
            {[
              { name: "Code Crafters", src: "/Code Crafters.Ip.png" },
              { name: "Momen", src: "/Momen.png" },
              { name: "Featherless AI", src: "/Featherless.png" },
              { name: "Mobbin", src: "/Mobbin.png" },
            ].map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.1, filter: "brightness(1.2)" }}
                viewport={{ once: true }}
                className="relative w-56 h-32 md:w-72 md:h-40 transition-all duration-500"
              >
                <Image
                  src={assetPath(sponsor.src)}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Small Sponsors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-10 items-center justify-items-center opacity-80 max-w-5xl mx-auto">
            {[
              { name: "MongoDB", src: "/MongoDB.png" },
              { name: "CleanShot", src: "/Clean Shot X.png" },
              { name: "Nexos.ai", src: "/Nexos.png" },
              { name: "NordVPN", src: "/NordVpn.png" },
              { name: "NordPass", src: "/NordPass.png" },
              { name: "Incogni", src: "/Incogni.png" },
              { name: "Saily", src: "/Saily.png" },
              { name: "Nexos.ai-2", src: "/Nexos.png" },
            ].map((sponsor, index) => (
              <motion.div
                key={`${sponsor.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, scale: 1.05, filter: "brightness(1.1)" }}
                viewport={{ once: true }}
                className="relative w-40 h-24 md:w-56 md:h-32 transition-all duration-500"
              >
                <Image
                  src={assetPath(sponsor.src)}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1a14] py-16 border-t border-white/10 mt-12">
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
