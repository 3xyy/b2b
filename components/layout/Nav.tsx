"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks, programLinks } from "@/content/nav";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-paper/10">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-white.png"
            alt="Bin to Better"
            width={120}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-paper/80 hover:text-court transition-colors"
          >
            About
          </Link>

          {/* Programs dropdown */}
          <div className="group relative">
            <button
              className="text-sm font-medium text-paper/80 hover:text-court transition-colors"
              aria-haspopup="true"
            >
              Programs
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-52 rounded-[3px] bg-field p-2 opacity-0 shadow-lg ring-1 ring-paper/10 transition-all group-hover:visible group-hover:opacity-100">
              {programLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block rounded-[2px] px-3 py-2 text-sm text-paper/80 hover:bg-canvas hover:text-court transition-colors"
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
                className="text-sm font-medium text-paper/80 hover:text-court transition-colors"
              >
                {l.label}
              </Link>
            ))}

          <Button href="/donate" variant="primary">
            Donate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col justify-center gap-1.5 md:hidden p-1"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-paper transition-transform" />
          <span className="block h-0.5 w-6 bg-paper" />
          <span className="block h-0.5 w-6 bg-paper transition-transform" />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-paper/10 bg-canvas px-6 py-4 md:hidden">
          {[
            { label: "About", href: "/about" },
            ...programLinks,
            ...navLinks.filter((l) => l.href !== "/about"),
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm text-paper/80 hover:text-court transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button href="/donate" variant="primary">
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
