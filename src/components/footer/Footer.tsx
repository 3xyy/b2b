"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1a14] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            <Link href="/">
              <span className="text-[#8bc34a]">bin</span>{" "}
              <span className="text-white/60">to</span>{" "}
              <span className="text-[#8bc34a]">better</span>
            </Link>
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
                title={social}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © 2026 Bin to Better. All rights reserved. Turning waste into opportunity.
        </div>
      </div>
    </footer>
  );
}
