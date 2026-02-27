"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/header/Navbar";
import { assetPath } from "@/lib/assetPath";

export default function OfficersAndTeam() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white font-sans overflow-x-hidden">
      <Navbar activePage="Officers & Team" />

      {/* Officers & Team Section */}
      <section id="officers-team" className="relative py-32 bg-[#1a2e23] overflow-hidden min-h-screen">
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
              Our People
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Officers & Team</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Our organization is led by a dedicated group of students and volunteers. The officers work together across various teams to ensure the success of each program.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid gap-12">
            {[
              {
                category: "Executives",
                members: [
                  { name: "Lalit Batchu", role: "Co-Founder and Co-Prez", school: "American High School Grade 11", fact: "My full name has 6 words!", image: "/members/Lalit Batchu.png" },
                  { name: "Rohan Babbellapati", role: "Co-Founder and Co-Prez", school: "American High School Grade 10", fact: "I can solve a Rubik’s cube in under 15 seconds!", image: "/members/Rohan Bablupatti.png" },
                  { name: "Pradyun Kanuparthi", role: "Vice President", school: "Mission San Jose High School Grade 11", fact: "I start on varsity basketball", image: "/members/Pradyun Kanuparthi.png" },
                ]
              },
              {
                category: "Outreach",
                members: [
                  { name: "Harmonie Lee", role: "Outreach Director", school: "American High School Grade 10", fact: "I get Chick-fil-A every week", image: "/members/Harmony Lee.png" },
                  { name: "Deepam Kapadia", role: "Director", school: "American High School Grade 10", fact: "I am a top 5% Tetris player.", image: "/members/image.png" },
                  { name: "Anika Batra", role: "Outreach Lead", school: "American High School Grade 10", fact: "I have never broken a bone.", image: "/members/Anika Batra.png" },
                  { name: "Anwen Li", role: "Outreach Lead", school: "American High Grade 9", fact: "I can speak 4 languages", image: "/members/Anwen Li.jpg" },
                ]
              },
              {
                category: "Eco-Filament",
                members: [
                  { name: "Saket Sandru", role: "Eco-Filament Director", school: "American High School Grade 10", fact: "I broke the bone in the human body thats hardest to heal", image: "/members/Saket Sandru.png" },
                  { name: "Nameh Gupta", role: "Eco-Filament Lead", school: "American High School Grade 10", fact: "I like gardening in my free time.", image: "/members/Nameh Gupta.jpg" },
                  { name: "Atiksh Jain", role: "Eco-Filament Lead", school: "American High School Grade 9", fact: "I have traveled to 15 countries.", image: "/members/Atiksh Jain.png" },
                ]
              },
              {
                category: "Fundraising",
                members: [
                  { name: "Vihaan Sanghvi", role: "Fundraising Director", school: "American High School Grade 10", fact: "I love traveling", image: "/members/Vihaan Sanghvi.png" },
                  { name: "Abhay Shankar", role: "Fundraising Lead", school: "Mission San Jose High School Grade 11", fact: "I have a labradoodle named Milo", image: "/members/Abhay Shankar.png" },
                  { name: "Yuva Chandrachood", role: "Fundraising Lead", school: "American High School Grade 10", fact: "I am 6’1", image: "/members/Yuva Chandrachood.png" },
                  { name: "Hala Amer", role: "Fundraising Lead", school: "American High School Grade 10", fact: "I recently built a 3D printer.", image: "/members/Hala Amer.png" },
                ]
              },
              {
                category: "Tech to Treasure",
                members: [
                  { name: "Hala Amer", role: "Tech to Treasure Director", school: "American High School Grade 10", fact: "I recently built a 3D printer.", image: "/members/Hala Amer.png" },
                  { name: "Clovis Zhang", role: "Tech to Treasure Lead", school: "American High School Grade 10", fact: "I’m addicted to Pokémon Go", image: "/members/Clovis Zhang.png" },
                  { name: "Krishan Ranjan", role: "Tech to Treasure Lead", school: "American High School Grade 10", fact: "I’ve visited over 15 states in the US", image: "/members/Krishan Ranjan.jpg" },
                  { name: "Deenadarrshan Sathiyamoorthi", role: "Tech to Treasure Lead", school: "American High School Grade 10", fact: "I like to play basketball", image: "/members/Deenadarrshan Sathiyamoorthi.jpg" },
                  { name: "Sunny Yang", role: "Tech to Treasure Lead", school: "American High School Grade 10", fact: "I have two cats.", image: "/members/Sunny Yang.png" },
                  { name: "Pranav Singh", role: "Tech to Treasure Lead", school: "American High School Grade 11", fact: "I run on 3 hours of sleep!", image: "/IMG_2032.jpg" },
                ]
              },
              {
                category: "Bounce Back",
                members: [
                  { name: "Thomas Nguyen", role: "Team Member", school: "American High School Grade 10", fact: "I like sleeping", image: "/members/Thomas Nguyen.png" },
                  { name: "Clovis Zhang", role: "Bounce Back Lead", school: "American High School Grade 10", fact: "I’m addicted to Pokémon Go", image: "/members/Clovis Zhang.png" },
                ]
              },
              {
                category: "Media & Administrative",
                members: [
                  { name: "Pradyun Kanuparthi", role: "Marketing Director", school: "Mission San Jose High School Grade 11", fact: "I start on varsity basketball", image: "/members/Pradyun Kanuparthi.png" },
                  { name: "William Lam", role: "Scriptwriter", school: "Mission San Jose High Grade 11", fact: "I run track and field", image: "/members/William Lam.jpg" },
                  { name: "Zerek Kao", role: "Scriptwriter", school: "Mission San Jose High Grade 11", fact: "I get no minutes on varsity basketball", image: "/members/Zerek Kao.jpg" },
                  { name: "Shreshta Parampalli", role: "Speaker", school: "Mission San Jose High Grade 11", fact: "I start on varsity basketball", image: "/members/Shreshta Parampalli.jpg" },
                  { name: "Advaith Dhumal Rao", role: "Video Editor", school: "Mission San Jose Grade 11", fact: "I was ranked number 1 in the nation for cricket in my age group last year", image: "/members/Advaith Dhumal Rao.jpg" },
                ]
              },
              {
                category: "Other Leadership", // Combined small sections
                members: [
                  { name: "Linhan", role: "Publicist (PR)", school: "American High School Grade 9", fact: "I can count to 100 in Chinese in one breath.", image: "/members/Linhan.png" },
                  { name: "Ashish Swaminathan", role: "Secretary", school: "Mission San Jose Grade 11", fact: "I am an eclectic person, liking academia while also liking sports and leadership.", image: "/members/Ashish Swaminathan.png" },
                ]
              },
              {
                category: "Website Management",
                members: [
                  { name: "Pranav Singh", role: "Website Manager", school: "American High School Grade 11", fact: "I run on 3 hours of sleep!", image: "/IMG_2032.jpg" },
                ]
              },
            ].map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="bg-white/5 rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-[#8bc34a] mb-8 border-b border-white/10 pb-4">
                  {group.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.members.map((member, i) => (
                    <motion.div
                      key={member.name + i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors flex flex-col items-center text-center"
                    >
                      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-[#8bc34a]/30">
                         <Image
                          src={assetPath(member.image)}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                      <p className="text-[#8bc34a] text-sm font-medium mb-3 uppercase tracking-wide">{member.role}</p>
                      <p className="text-white/60 text-sm mb-2">{member.school}</p>
                      <p className="text-white/40 text-xs italic">
                        <span className="text-white/30 not-italic mr-1">💡</span>
                        {member.fact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
