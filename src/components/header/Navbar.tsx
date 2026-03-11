"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/#programs" },
  { label: "Partners", href: "/partners" },
  { label: "Bounce Back", href: "/bounce-back" },
  { label: "Tech to Treasure", href: "/tech-to-treasure" },
  { label: "Workshop", href: "/workshop" },
  { label: "Eco-filament", href: "/eco-filament" },
  { label: "Officers & Team", href: "/officers-and-team" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/#contact" },
  { label: "Donate", href: "/donate" },
];

export default function Navbar({ activePage, topOffset = false }: { activePage?: string, topOffset?: boolean }) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed ${
        topOffset ? "top-[34px]" : "top-0"
      } left-0 right-0 z-50`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-50 backdrop-blur-md bg-[#3d5a4e]/80 border-b border-white/10"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold tracking-tight cursor-pointer mr-4"
            >
              <span className="text-[#8bc34a]">BIN</span> TO{" "}
              <span className="text-[#8bc34a]">BETTER</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.label;

              return (
                <Link key={item.label} href={item.href}>
                  <motion.span
                    className={`relative px-3 py-2 text-sm font-medium transition-colors cursor-pointer block whitespace-nowrap ${
                      isActive ? "text-[#8bc34a]" : "text-white/80 hover:text-white"
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-white/80 hover:text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 h-screen bg-[#0d1a14] z-40 lg:hidden overflow-y-auto"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activePage === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium py-2 border-b border-white/5 ${
                      isActive ? "text-[#8bc34a]" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
