"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/header/Navbar";
import { assetPath } from "@/lib/assetPath";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d1a14] font-sans text-white overflow-x-hidden">
      <Navbar activePage="About" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#8bc34a]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4caf50]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-[#8bc34a]/20 text-[#8bc34a] text-sm font-medium rounded-full border border-[#8bc34a]/30 mb-6"
            >
              About Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-[#8bc34a] to-[#4caf50] bg-clip-text text-transparent">
                Story
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 max-w-2xl mx-auto"
            >
              Our mission, story, and how we work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0d1a14] to-[#1a2e23]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="text-[#8bc34a] text-sm font-semibold tracking-widest uppercase">
                  Our Purpose
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
                  Mission & Vision
                </h2>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/70 leading-relaxed"
              >
                At Bin to Better, we believe that waste isn&apos;t just trash—it&apos;s an
                opportunity. Countless items with value end up in landfills each
                year simply because they no longer serve their original purpose.
                We are committed to changing that narrative by promoting reuse,
                responsible recycling, and the circular economy.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/70 leading-relaxed"
              >
                Our goal is to empower individuals and communities to rethink
                waste and realize that what seems like rubbish can become a
                resource for someone else. By connecting people with excess to
                those with needs, we bridge gaps and foster a culture of giving
                and sustainability.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex gap-6 pt-4">
                {[
                  { value: "♻️", label: "Circular Economy" },
                  { value: "🌱", label: "Sustainability" },
                  { value: "🤝", label: "Community" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <span className="text-3xl mb-2">{item.value}</span>
                    <span className="text-xs text-white/50 font-medium">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Orbiting rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-[#8bc34a]/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-[#8bc34a]/15 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 border border-[#8bc34a]/10 rounded-full"
                />

                {/* Center content */}
                <div className="absolute inset-24 bg-gradient-to-br from-[#2d4a3e] to-[#1a2e23] rounded-full flex items-center justify-center shadow-2xl shadow-black/50">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-6xl mb-2"
                    >
                      🌍
                    </motion.div>
                    <span className="text-sm text-white/60 font-medium">
                      Better Future
                    </span>
                  </div>
                </div>

                {/* Floating icons */}
                {[
                  { icon: "🎾", position: "top-0 left-1/2 -translate-x-1/2" },
                  { icon: "💻", position: "bottom-0 left-1/2 -translate-x-1/2" },
                  { icon: "🧵", position: "left-0 top-1/2 -translate-y-1/2" },
                  { icon: "♻️", position: "right-0 top-1/2 -translate-y-1/2" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className={`absolute ${item.position} w-12 h-12 bg-[#1a2e23] border border-[#8bc34a]/30 rounded-full flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="relative py-32 bg-[#1a2e23] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YmMzNGEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#8bc34a] text-sm font-semibold tracking-widest uppercase">
              How It Started
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Origin Story
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#8bc34a] via-[#8bc34a]/50 to-transparent origin-top hidden md:block"
            />

            {/* Story content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              {/* Decorative quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 left-8 text-8xl text-[#8bc34a]/20 font-serif"
              >
                &ldquo;
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    Bin to Better was founded by two high school students—
                    <span className="text-[#8bc34a] font-semibold">
                      Lalit Sreekar Batchu
                    </span>{" "}
                    and{" "}
                    <span className="text-[#8bc34a] font-semibold">
                      Rohan Sashank Babbellapati
                    </span>
                    —who witnessed firsthand the scale of everyday waste.
                  </p>

                  <p className="text-lg text-white/70 leading-relaxed">
                    Rohan, an avid tennis player on his school team, noticed how
                    quickly tennis balls were discarded after just a few uses,
                    even though they remained perfectly usable in other contexts.
                    He approached Lalit with the idea of starting an organization
                    that could repurpose these items.
                  </p>

                  <p className="text-lg text-white/70 leading-relaxed">
                    Together they launched Bin to Better to give new purpose to
                    what others might throw away.
                  </p>
                </div>

                {/* Founders visual */}
                <div className="relative">
                  <div className="flex justify-center gap-8 md:gap-12">
                    {[
                      { 
                        name: "Lalit Sreekar Batchu", 
                        role: "Co-Founder", 
                        image: "/members/Lalit Batchu.png" 
                      },
                      { 
                        name: "Rohan Babbellapati", 
                        role: "Co-Founder", 
                        image: "/members/Rohan Bablupatti.png" 
                      },
                    ].map((founder, i) => (
                      <motion.div
                        key={founder.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.2 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="text-center group"
                      >
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-[#8bc34a]/30 mb-4 shadow-xl shadow-black/30 group-hover:border-[#8bc34a] transition-all duration-300">
                          <Image
                            src={assetPath(founder.image)}
                            alt={founder.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-white font-semibold text-lg max-w-[120px] mx-auto leading-tight mb-1">
                          {founder.name.split(" ")[0]}
                        </h4>
                        <p className="text-[#8bc34a] text-sm font-medium tracking-wide">{founder.role}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#1a2e23] to-[#0d1a14]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#8bc34a] text-sm font-semibold tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Our Approach
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Education",
                description:
                  "Through workshops and outreach we teach communities about the importance of reuse, recycling, and sustainability.",
                color: "from-[#8bc34a]/20 to-[#8bc34a]/5",
              },
              {
                icon: "🤝",
                title: "Partnerships",
                description:
                  "We collaborate with tennis clubs, schools, animal shelters, and other organizations to collect unused materials and distribute them to those in need.",
                color: "from-[#4caf50]/20 to-[#4caf50]/5",
              },
              {
                icon: "🔧",
                title: "Hands-on Initiatives",
                description:
                  "Our projects provide tangible ways for volunteers to participate—collecting tennis balls, disassembling electronics, or repurposing plastic waste into building materials.",
                color: "from-[#66bb6a]/20 to-[#66bb6a]/5",
              },
            ].map((approach, i) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full relative group"
                >
                  <div
                    className={`h-full bg-gradient-to-b ${approach.color} border border-white/10 rounded-3xl p-8 hover:border-[#8bc34a]/40 transition-all duration-300`}
                  >
                    {/* Number indicator */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      className="absolute -top-4 -right-4 w-10 h-10 bg-[#8bc34a] rounded-full flex items-center justify-center text-[#1a2e23] font-bold shadow-lg shadow-[#8bc34a]/30"
                    >
                      {i + 1}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-5xl mb-6"
                    >
                      {approach.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8bc34a] transition-colors">
                      {approach.title}
                    </h3>

                    <p className="text-white/60 leading-relaxed">
                      {approach.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      className="mt-6 h-0.5 bg-gradient-to-r from-[#8bc34a]/50 to-transparent origin-left"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#2d4a3e] to-[#3d5a4e] overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
        >
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#8bc34a] rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#8bc34a] rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#8bc34a] rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Be part of the change. Whether you want to volunteer, donate, or
              partner with us, there&apos;s a place for you at Bin to Better.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#2d4a3e] rounded-full font-semibold text-lg shadow-xl shadow-black/20"
              >
                Get Involved
              </motion.button>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1a14] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold cursor-pointer"
              >
                <span className="text-[#8bc34a]">bin</span>{" "}
                <span className="text-white/60">to</span>{" "}
                <span className="text-[#8bc34a]">better</span>
              </motion.div>
            </Link>

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
