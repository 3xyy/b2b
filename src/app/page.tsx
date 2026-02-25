"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {

  return (
    <div className="min-h-screen bg-[#2d4a3e] font-sans text-white overflow-x-hidden">
      {/* Top Banner Marquee */}
      <div className="fixed top-0 left-0 w-full bg-[#8bc34a] py-2 overflow-hidden border-b border-[#1a2e23]/10 z-[60]">
        <Link href="/events" className="flex whitespace-nowrap">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 text-sm md:text-base font-bold text-[#1a2e23] uppercase tracking-wider items-center shrink-0"
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>Check out the events tab for our latest hackathon</span>
                <span className="text-[#1a2e23]/40">✦</span>
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 text-sm md:text-base font-bold text-[#1a2e23] uppercase tracking-wider items-center shrink-0"
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>Check out the events tab for our latest hackathon</span>
                <span className="text-[#1a2e23]/40">✦</span>
              </span>
            ))}
          </motion.div>
        </Link>
      </div>

      <Navbar activePage="Home" topOffset={true} />

      {/* Hero Section with Diagonal Split */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[140px]">
        {/* Diagonal Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d5a4e] to-[#2d4a3e]" />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="absolute top-0 right-0 w-full h-full"
            style={{
              clipPath: "polygon(45% 0, 100% 0, 100% 100%, 25% 100%)",
              background: "linear-gradient(135deg, #1a2e23 0%, #243d32 100%)",
            }}
          />
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#8bc34a]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-40 w-80 h-80 bg-[#4caf50]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-2">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-block px-4 py-1.5 bg-[#8bc34a]/20 text-[#8bc34a] text-sm font-medium rounded-full border border-[#8bc34a]/30"
                >
                  ♻️ Sustainable Future
                </motion.span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
              >
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  BIN TO
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#8bc34a] to-[#4caf50] bg-clip-text text-transparent">
                  BETTER
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-white/70 font-light max-w-lg"
              >
                Turning waste into opportunity.
                <br />
                <span className="text-white/50">
                  One item at a time, one community at a time.
                </span>
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link href="#programs">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(139, 195, 74, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-[#8bc34a] text-[#1a2e23] rounded-full font-semibold text-lg overflow-hidden w-full md:w-auto"
                  >
                    <span className="relative z-10">Explore Our Projects</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#9ccc65] to-[#7cb342]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>

                <Link href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:border-white/50 transition-colors w-full md:w-auto"
                  >
                    Get Involved
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="flex gap-12 pt-8 border-t border-white/10"
              >
                {[
                  { value: "50K+", label: "Items Recycled" },
                  { value: "200+", label: "Partners" },
                  { value: "15", label: "Communities" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-[#8bc34a]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Logo */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] border border-[#8bc34a]/10 rounded-full"
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-80 h-80 md:w-96 md:h-96 bg-transparent flex items-center justify-center"
              >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src="/image7.png" 
                      alt="Bin to Better" 
                      fill
                      className="object-contain"
                    />
                  </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#1a2e23] to-[#0d1a14]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YmMzNGEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase"
            >
              Our Mission
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-white">Turning Waste into </span>
              <span className="bg-gradient-to-r from-[#8bc34a] to-[#4caf50] bg-clip-text text-transparent">
                Opportunity
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              At Bin to Better, we believe that waste isn&apos;t just trash—it&apos;s
              opportunity. Every year, countless items with value and potential
              end up in landfills simply because they no longer serve their
              original purpose. Our mission is to change that narrative.
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#8bc34a] to-transparent mx-auto"
            />

            <p>
              We&apos;re driven by a simple yet powerful idea: that one person&apos;s
              excess can be another&apos;s solution. Whether it&apos;s used tennis balls,
              old electronics, or other overlooked resources, we aim to connect
              those who have with those who need. By building bridges between
              individuals, communities, and organizations, we promote a culture
              of reuse and responsible recycling.
            </p>

            <p>
              Through education, partnerships, and hands-on initiatives, Bin to
              Better empowers people to rethink waste and become part of a more
              sustainable, circular future. Together, we can turn what would&apos;ve
              been thrown away into something better—for people, for
              communities, and for the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="programs" className="relative py-32 bg-[#1a2e23]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-[#8bc34a]/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border border-[#8bc34a]/5 rounded-full"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase"
            >
              What We Do
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Projects Preview
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Below are snapshots of our three main projects. Click &quot;View More&quot;
              on each card to dive deeper into the details.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bounce Back",
                image: "🎾",
                gradient: "from-[#4a7c59] to-[#2d4a3e]",
                description:
                  "Collects used tennis balls from clubs and repurposes them for schools (chair legs to reduce noise), animal shelters, and assisted living centers (walker feet).",
                href: "/bounce-back"
              },
              {
                title: "Tech to Treasure",
                image: "💻",
                gradient: "from-[#3d5a4e] to-[#1a2e23]",
                description:
                  "Collects old devices and turns them into educational tools before responsibly recycling all parts through an e-waste program.",
                href: "/tech-to-treasure"
              },
              {
                title: "Eco-filament",
                image: "🧵",
                gradient: "from-[#2d4a3e] to-[#1a2e23]",
                description:
                  "Repurposing plastic waste into 3D printer filament for tools and toys.",
                href: "/eco-filament"
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative h-full"
              >
                <Link href={project.href} className="block h-full cursor-pointer">
                  <motion.div
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-[#8bc34a]/40 transition-all duration-300 flex flex-col"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-b from-[#8bc34a]/10 to-transparent pointer-events-none"
                    />

                    {/* Image Container */}
                    <div className="relative p-6 pb-0">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`relative w-full aspect-[4/3] bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden flex items-center justify-center shadow-lg shadow-black/20`}
                      >
                        <span className="text-7xl filter drop-shadow-lg">
                          {project.image}
                        </span>
                        {/* Shine effect */}
                        <motion.div
                          initial={{ x: "-100%", opacity: 0 }}
                          whileHover={{ x: "100%", opacity: 0.3 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center flex flex-col flex-grow">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-3 group-hover:text-[#8bc34a] transition-colors duration-300"
                      >
                        {project.title}
                      </motion.h3>

                      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 py-2.5 mx-auto border border-white/20 text-white/80 rounded-full text-sm font-medium overflow-hidden group/btn hover:border-[#8bc34a]/50 hover:text-white transition-all duration-300 w-fit"
                      >
                        <span className="relative z-10">View More</span>
                        <motion.div
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-gradient-to-r from-[#8bc34a]/20 to-[#4caf50]/20"
                        />
                      </motion.div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8bc34a]/50 to-transparent"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 bg-[#1a2e23]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase"
            >
              Community Voice
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What People Say</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              See how our initiatives are making a real difference in classrooms and communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Thank you very much for your donation of 140 gently used tennis balls to my third grade Spanish immersion classroom at Blacow Elementary School. Cutting each individual ball so that it can fit each student leg chair must have been a lot of work! We are so appreciative of your time and effort in giving the tennis balls a new second life instead of throwing then into the landfill. Your donation has been well received by my students. Their chairs are way gentler on the waxed floors and is saving the floors from being scratched. Most importantly classroom activity transitions are so much more quiet as the students get up from or come to sit in their chairs.",
                author: "Andrea MacKenzie",
                role: "3rd grade Spanish Immersion Teacher, Blacow Elementary"
              },
              {
                text: "Thank you so much for dropping off the balls at the doggy day camp! The dogs absolutely love them, and I truly appreciate it as well. Whether they’re playing or just need something to chew on when they’re feeling stressed, those balls bring them so much joy. Your thoughtful contribution has made a big difference in supporting the pups here. We’re incredibly grateful for your kindness and generosity.",
                author: "Allie",
                role: "Owner of Allie’s Doggie Day Camp"
              },
              {
                text: "My experience with Bin to Better has been extremely positive. The team was very thoughtful and communicated clearly throughout the entire process. The donated tennis balls have made a noticeable difference in my classroom by significantly reducing noise from chairs/desks. This has helped create a calmer and more focused learning environment where students can concentrate better and transitions are much smoother.",
                author: "Grace Shin",
                role: "Irvington High School Teacher"
              },
              {
                text: "Bin to Better did a great service to my classroom! They personally came to help me install the tennis balls on the chair legs, and now the classroom is much quieter and more productive. The floors are safer and protected from the chairs scraping against them, and the students were so surprised to see how the tennis balls could be repurposed into something new! I would highly recommend them to any classroom.",
                author: "Brandon Lee",
                role: "Oliveira Elementary TK Teacher"
              },
              {
                text: "Adding tennis balls to our chair legs has made an immediate difference in our third-grade classroom. The reduced noise has helped students focus during reading and small-group work, and transitions are smoother because the room stays calm. It’s a simple change with a big impact on learning.",
                author: "Yuji Yang",
                role: "Dual Language English and Mandarin Teacher, Bringhurst Elementary"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col h-full hover:bg-white/[0.07] transition-colors"
              >
                <div className="text-[#8bc34a] text-4xl mb-4 font-serif">"</div>
                <p className="text-white/80 leading-relaxed mb-6 flex-grow italic">
                  {testimonial.text}
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h4 className="text-white font-bold">{testimonial.author}</h4>
                  <p className="text-[#8bc34a] text-sm mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section Removed - Moved to dedicated page */}

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-[#1a2e23]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Contact Us</h2>
            <p className="text-xl text-white/70 mb-12">
              We would love to hear from you! Whether you have questions, want to donate materials or are interested in volunteering, please get in touch.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <a href="mailto:outreach@bintobetter.org" className="group block bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#8bc34a]/50 transition-colors">
                <div className="text-[#8bc34a] mb-2 text-xl">Email</div>
                <div className="text-white group-hover:underline">outreach@bintobetter.org</div>
              </a>
              
              <a href="https://instagram.com/bintobetter" target="_blank" rel="noopener noreferrer" className="group block bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#8bc34a]/50 transition-colors">
                <div className="text-[#8bc34a] mb-2 text-xl">Instagram</div>
                <div className="text-white group-hover:underline">@bintobetter</div>
              </a>
            </div>

            <p className="mt-12 text-white/50 text-sm">
              You can also fill out our contact form on the website for specific inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1a14] py-16">
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
