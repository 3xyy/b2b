"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks, programLinks } from "@/content/nav";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-ink/10">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.webp"
            alt="Bin to Better"
            width={120}
            height={30}
            priority
            className="h-[30px] w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-ink hover:text-canvas transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
          >
            About
          </Link>

          {/* Programs dropdown */}
          <div className="group relative">
            <button
              className="text-sm font-medium text-ink hover:text-canvas transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
              aria-haspopup="true"
            >
              Programs
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-52 rounded-[3px] bg-paper border border-ink/10 p-2 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              {programLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block rounded-[2px] px-3 py-2 text-sm text-ink hover:bg-canvas/5 hover:text-canvas transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks
            .filter((l) => l.href !== "/about")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink hover:text-canvas transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
              >
                {l.label}
              </Link>
            ))}

          <Link
            href="/donate"
            className="inline-flex items-center rounded-[3px] bg-court px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col justify-center gap-1.5 md:hidden p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink transition-transform" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink transition-transform" />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-ink/10 bg-paper px-6 py-4 md:hidden">
          {[
            { label: "About", href: "/about" },
            ...programLinks,
            ...navLinks.filter((l) => l.href !== "/about"),
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm text-ink hover:text-canvas transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/donate"
              className="inline-flex items-center rounded-[3px] bg-court px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
