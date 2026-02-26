"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface PartnersContentProps {
  files: string[];
}

export default function PartnersContent({ files }: PartnersContentProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block mb-4 text-[#8bc34a] text-sm font-semibold tracking-widest uppercase">
          Our Partners
        </span>
        <h1 className="text-4xl md:text-5xl font-bold">Partners</h1>
        <p className="text-white/60 max-w-2xl mx-auto mt-4">
          Our mission wouldn’t be possible without the support of our partners.
          We collaborate with tennis clubs, academies, schools, and animal
          shelters to collect materials and ensure they are put to good use.
        </p>
      </motion.div>

      {/* Partners Logos Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 items-center"
      >
        {files.map((src) => (
          <div
            key={src}
            className="flex items-center justify-center p-4 bg-white/3 rounded-xl border border-white/6"
          >
            <Image
              src={src}
              alt="Partner logo"
              width={160}
              height={64}
              className="max-h-16 object-contain"
              unoptimized={true}
            />
          </div>
        ))}
      </motion.div>

      {/* Remaining content (lists and contact CTA) */}
      <section className="grid md:grid-cols-2 gap-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Tennis Clubs & Academies
          </h3>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>Mission Hills Swim and Racquet Club</li>
            <li>Los Gatos Swim and Racquet Club</li>
            <li>NorCal Tennis Academy</li>
            <li>Mountain View Tennis</li>
            <li>Lifetime Activities – Santa Clara & Sunnyvale</li>
            <li>Kim Grant Tennis Academy</li>
            <li>Cupertino Hills Swim & Racquet Club</li>
            <li>Kona Kai Swim & Racquet Club</li>
            <li>San José Swim & Racquet Club</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Animal Shelters & Pet Services
          </h3>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>Allie’s Doggie Day Camp</li>
            <li>Lucky Buddies Pet Sitting</li>
            <li>Furrtropolis</li>
            <li>A Pet Villa Dog Boarding and Grooming</li>
          </ul>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl text-center"
      >
        <h4 className="text-lg font-semibold text-white mb-3">
          Interested in partnering with us?
        </h4>
        <p className="text-white/70 mb-6">
          Contact us at{' '}
          <a className="text-[#8bc34a]" href="mailto:bintobetter@gmail.com">
            bintobetter@gmail.com
          </a>{' '}
          to learn how your organization can join the movement.
        </p>
        <div className="flex justify-center">
          <Link href="mailto:bintobetter@gmail.com">
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-6 py-3 rounded-full bg-[#8bc34a] text-[#0d1a14] font-semibold"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
