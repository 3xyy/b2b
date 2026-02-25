"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/#programs" },
  { label: "Corporate Partners", href: "/corporate-partners" },
  { label: "Partners", href: "/partners" },
  { label: "Bounce Back", href: "/bounce-back" },
  { label: "Tech to Treasure", href: "/tech-to-treasure" },
  { label: "Eco-filament", href: "/eco-filament" },
  { label: "Officers & Team", href: "/officers-and-team" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/#contact" },
  { label: "Donate", href: "/donate" },
];

export default function Navbar({ activePage, topOffset = false }: { activePage?: string, topOffset?: boolean }) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed ${topOffset ? 'top-[34px]' : 'top-0'} left-0 right-0 z-50 backdrop-blur-md bg-[#3d5a4e]/80 border-b border-white/10`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold tracking-tight cursor-pointer mr-4"
          >
            <span className="text-[#8bc34a]">bin</span> to{" "}
            <span className="text-[#8bc34a]">better</span>
          </motion.div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.label;

            return (
              <Link key={item.label} href={item.href}>
                <motion.span
                  className={`relative px-2 py-1.5 text-xs font-medium transition-colors cursor-pointer block whitespace-nowrap ${
                    isActive
                      ? "text-[#8bc34a]"
                      : "text-white/80 hover:text-white"
                  }`}
                  onHoverStart={() => setHoveredNav(item.label)}
                  onHoverEnd={() => setHoveredNav(null)}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {hoveredNav === item.label && !isActive && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.span>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
