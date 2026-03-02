"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/header/Navbar";
import { assetPath } from "@/lib/assetPath";

export default function Events() {
  return (
    <div className="min-h-screen bg-[#1b6338] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Events" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1b6338] opacity-50" />
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
      <section className="relative py-12 bg-[#1b6338]">
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

      {/* Sponsors Section */}
      <section className="relative py-24 bg-[#1b6338] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Backed by Global <span className="text-[#8bc34a]">Innovators</span>
            </h2>
            <div className="w-24 h-1 bg-[#8bc34a] mx-auto mt-4 rounded-full opacity-50" />
          </motion.div>
          
          {/* Top Featured Sponsors - Glid & Wolfram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center mb-16 max-w-6xl mx-auto px-4">
            {[
              { name: "Sponsor 8", src: "/Sponsors for Tech TO Treasure Hackathon/image8.png", link: "https://www.glidtech.us/" },
              { name: "Sponsor 12", src: "/Sponsors for Tech TO Treasure Hackathon/image12.png", link: "https://www.wolfram.com/" },
            ].map((sponsor) =>
              sponsor.link ? (
                <a
                  key={sponsor.name}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1.05, filter: "brightness(1.2)" }}
                    viewport={{ once: true }}
                    className="relative w-[80vw] h-64 md:w-[48rem] md:h-[28rem] transition-all duration-500"
                  >
                    <Image
                      src={assetPath(sponsor.src)}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </a>
              ) : null
            )}
          </div>

          {/* Big Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center mb-24 max-w-6xl mx-auto px-4">
            {[
              { name: "Sponsor 1", src: "/Sponsors for Tech TO Treasure Hackathon/image1.png", link: "https://nexos.ai" },
              { name: "Sponsor 2", src: "/Sponsors for Tech TO Treasure Hackathon/image2.png", link: "https://saily.com" },
            ].map((sponsor) =>
              sponsor.link ? (
                <a
                  key={sponsor.name}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1.1, filter: "brightness(1.2)" }}
                    viewport={{ once: true }}
                    className="relative w-72 h-40 md:w-96 md:h-56 transition-all duration-500"
                  >
                    <Image
                      src={assetPath(sponsor.src)}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </a>
              ) : (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.1, filter: "brightness(1.2)" }}
                  viewport={{ once: true }}
                  className="relative w-72 h-40 md:w-96 md:h-56 transition-all duration-500"
                >
                  <Image
                    src={assetPath(sponsor.src)}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )
            )}
          </div>

          {/* Medium Sponsors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center justify-items-center mb-20 max-w-6xl mx-auto px-4">
            {[
              { name: "Sponsor 3", src: "/Sponsors for Tech TO Treasure Hackathon/image3.png", link: "https://nordpass.com/" },
              { name: "Sponsor 4", src: "/Sponsors for Tech TO Treasure Hackathon/image4.png", link: "https://mobbin.com" },
              { name: "Sponsor 5", src: "/Sponsors for Tech TO Treasure Hackathon/image5.png", link: "https://momen.app/" },
              { name: "Sponsor 6", src: "/Sponsors for Tech TO Treasure Hackathon/image6.png", link: "https://nordvpn.com/" },
            ].map((sponsor) =>
              sponsor.link ? (
                <a
                  key={sponsor.name}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1.1, filter: "brightness(1.2)" }}
                    viewport={{ once: true }}
                    className="relative w-72 h-40 md:w-80 md:h-48 transition-all duration-500"
                  >
                    <Image
                      src={assetPath(sponsor.src)}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </a>
              ) : (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.1, filter: "brightness(1.2)" }}
                  viewport={{ once: true }}
                  className="relative w-72 h-40 md:w-80 md:h-48 transition-all duration-500"
                >
                  <Image
                    src={assetPath(sponsor.src)}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )
            )}
          </div>

          {/* Small Sponsors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-12 items-center justify-items-center opacity-80 max-w-6xl mx-auto px-4">
            {[
              { name: "Sponsor 7", src: "/Sponsors for Tech TO Treasure Hackathon/image7.png", link: "https://nexos.ai" },
              { name: "Sponsor 9", src: "/Sponsors for Tech TO Treasure Hackathon/image9.png", link: "https://featherless.ai/" },
              { name: "Sponsor 10", src: "/Sponsors for Tech TO Treasure Hackathon/image10.png", link: "https://codecrafters.io/" },
              { name: "Sponsor 11", src: "/Sponsors for Tech TO Treasure Hackathon/image11.png", link: "https://incogni.com/" },
              { name: "Sponsor 13", src: "/Sponsors for Tech TO Treasure Hackathon/image13.png", link: "https://www.yriscience.com" },
              { name: "Sponsor 14", src: "/Sponsors for Tech TO Treasure Hackathon/image14.png", link: "https://nordprotect.com" },
              { name: "Sponsor 16", src: "/Sponsors for Tech TO Treasure Hackathon/image16.png", link: "https://gen.xyz" },
              { name: "Sponsor 17", src: "/Sponsors for Tech TO Treasure Hackathon/image17.png", link: "https://InterviewBuddy.net" },
              { name: "Sponsor 18", src: "/Sponsors for Tech TO Treasure Hackathon/image18.png", link: "https://featherless.ai/" },
              { name: "Sponsor 19", src: "/Sponsors for Tech TO Treasure Hackathon/image19.png", link: "https://relay.app" },
              { name: "Sponsor 20", src: "/Sponsors for Tech TO Treasure Hackathon/image20.png", link: "https://cleanshot.com/" },
            ].map((sponsor, index) => {
              const sizeClass = "relative w-56 h-32 md:w-64 md:h-40 transition-all duration-500";
              const wrapperClass = "w-full flex items-center justify-center";

              if (sponsor.link) {
                return (
                  <a
                    key={`${sponsor.name}-${index}`}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={wrapperClass}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1, scale: 1.05, filter: "brightness(1.1)" }}
                      viewport={{ once: true }}
                      className={sizeClass}
                    >
                      <Image
                        src={assetPath(sponsor.src)}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </a>
                );
              }

              return (
                <motion.div
                  key={`${sponsor.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1, scale: 1.05, filter: "brightness(1.1)" }}
                  viewport={{ once: true }}
                  className={sizeClass}
                >
                  <Image
                    src={assetPath(sponsor.src)}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="relative py-24 bg-[#0d1a14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white border-l-4 border-[#8bc34a] pl-4">
              Past Events
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1b6338]/30 rounded-3xl border border-white/10 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-white/10 text-white/60 text-xs font-bold tracking-widest uppercase rounded-full border border-white/10 mb-4">
                    March 1, 2026 • Fremont, CA
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                    Tech to Treasure
                  </h3>
                  <p className="text-white/60 max-w-2xl">
                    A hands-on stations workshop for kids to touch parts, see how things work, and hear instructors explain each component.
                  </p>
                  <p className="text-xs text-white/40 mt-2">📍 Patterson Ranch benches outside the red barn · 5298 Rancho Del Norte Dr, Fremont, CA 94555</p>
                </div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white/50 text-sm font-semibold rounded-full border border-white/10 cursor-default select-none shrink-0">
                  ✓ Completed
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white/70 mb-8">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">When</div>
                  <div className="text-sm font-semibold">March 1 · 3:30 PM – 5:30 PM</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Age Group</div>
                  <div className="text-sm font-semibold">8–12 years</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Duration</div>
                  <div className="text-sm font-semibold">2–3 hours</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Group Size</div>
                  <div className="text-sm font-semibold">7–8 kids per group</div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-8 text-sm text-white/60">
                <span className="font-semibold text-white/80">Format: </span>Children rotate through stations (~20 minutes per station). Instructors demonstrate parts and explain how each one works while kids can touch and explore.
              </div>

              <h4 className="text-lg font-bold text-white mb-4">Stations &amp; Activities</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h5 className="font-bold text-white mb-3">Station 1: Desktop Computer</h5>
                  <ul className="list-disc ml-4 text-sm text-white/60 space-y-1 mb-3">
                    <li>RAM sticks (remove &amp; insert)</li>
                    <li>Hard drive / SSD</li>
                    <li>Cooling fan &amp; cables</li>
                    <li>Expansion cards &amp; motherboard</li>
                  </ul>
                  <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">Guided prompts</div>
                  <ul className="list-disc ml-4 text-xs text-white/50 space-y-1">
                    <li>Find the brain (CPU)</li>
                    <li>Find memory vs. storage</li>
                    <li>Trace a cable from power supply to part</li>
                    <li>Spin fan — why cooling matters</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h5 className="font-bold text-white mb-3">Station 2: 3D Printer</h5>
                  <ul className="list-disc ml-4 text-sm text-white/60 space-y-1 mb-3">
                    <li>Stepper motors</li>
                    <li>Belts and pulleys</li>
                    <li>Metal rods &amp; circuit board</li>
                    <li>Connection &amp; control cables</li>
                  </ul>
                  <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">Activities</div>
                  <ul className="list-disc ml-4 text-xs text-white/50 space-y-1">
                    <li>Move print head by hand</li>
                    <li>Follow wires from motors to circuit board</li>
                    <li>Identify each motor&apos;s purpose</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h5 className="font-bold text-white mb-3">Station 3: Monitor</h5>
                  <ul className="list-disc ml-4 text-sm text-white/60 space-y-1 mb-3">
                    <li>Back casing &amp; control buttons</li>
                    <li>Circuit boards (main &amp; button)</li>
                    <li>Ribbon cables &amp; ports</li>
                    <li>Screen layers (light touch only)</li>
                  </ul>
                  <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">Challenges</div>
                  <ul className="list-disc ml-4 text-xs text-white/50 space-y-1">
                    <li>Display parts vs. control parts</li>
                    <li>Ribbon cables vs. power wires</li>
                    <li>Which sends signals? Which sends power?</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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
