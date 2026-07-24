"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { cn } from "@/lib/cn";

// Split the Donate item out as a highlighted CTA button.
const donateItem = site.nav.find((i) => i.label === "Donate");

// Program pages grouped under a desktop dropdown to keep the bar uncluttered.
const programLabels = [
  "Bounce Back",
  "Tech to Treasure",
  "Eco-filament",
  "Workshop",
];
const programItems = site.nav.filter((i) => programLabels.includes(i.label));
// Desktop top level = everything except Donate and the grouped program pages.
const topLevelItems = site.nav.filter(
  (i) => i.label !== "Donate" && !programLabels.includes(i.label),
);
const programActiveLabels = new Set(programLabels);

function Wordmark() {
  return (
    <span className="text-xl font-bold tracking-tight whitespace-nowrap">
      <span className="text-brand">BIN</span> TO{" "}
      <span className="text-brand">BETTER</span>
    </span>
  );
}

export default function Navbar({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={cn(
          "transition-colors duration-300 border-b",
          scrolled || open
            ? "bg-surface-950/85 backdrop-blur-md border-white/10"
            : "bg-transparent border-transparent",
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Bin to Better home" className="shrink-0">
            <Wordmark />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {topLevelItems.map((item) => {
              const linkClass = (active: boolean) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap",
                  active
                    ? "text-brand"
                    : "text-white/75 hover:text-white hover:bg-white/5",
                );

              // "Programs" becomes a hover/focus dropdown of the program pages.
              if (item.label === "Programs") {
                const isActive =
                  activePage === "Programs" ||
                  (!!activePage && programActiveLabels.has(activePage));
                return (
                  <div key="Programs" className="group relative">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(linkClass(isActive), "inline-flex items-center gap-1")}
                    >
                      Programs
                      <svg
                        className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden
                      >
                        <path strokeLinecap="round" d="M3 4.5L6 7.5l3-3" />
                      </svg>
                    </Link>
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="min-w-56 rounded-xl border border-white/10 bg-surface-950/95 p-2 shadow-xl shadow-black/40 backdrop-blur-md">
                        {programItems.map((p) => (
                          <Link
                            key={p.label}
                            href={p.href}
                            aria-current={activePage === p.label ? "page" : undefined}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm transition-colors",
                              activePage === p.label
                                ? "text-brand"
                                : "text-white/75 hover:bg-white/5 hover:text-white",
                            )}
                          >
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={activePage === item.label ? "page" : undefined}
                  className={linkClass(activePage === item.label)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {donateItem && (
              <Link
                href={donateItem.href}
                className="hidden sm:inline-flex items-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-surface-950 transition-all hover:bg-brand-light hover:-translate-y-0.5"
              >
                Donate
              </Link>
            )}

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden p-2 -mr-2 text-white/80 hover:text-white"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-surface-950/95 backdrop-blur-md border-b border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-6 py-4 flex flex-col">
              {site.nav.map((item) => {
                const isActive = activePage === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "py-3 text-base font-medium border-b border-white/5 last:border-0",
                      isActive ? "text-brand" : "text-white/80",
                    )}
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
