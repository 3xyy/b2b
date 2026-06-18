"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks, programLinks } from "@/content/nav";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.webp" alt="Bin to Better" width={150} height={48} priority />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/about" className="text-sm font-medium text-ink hover:text-emerald">About</Link>
          <div className="group relative">
            <button className="text-sm font-medium text-ink hover:text-emerald">Programs</button>
            <div className="invisible absolute left-0 top-full w-52 rounded-xl bg-white p-2 opacity-0 shadow-lg ring-1 ring-ink/5 transition group-hover:visible group-hover:opacity-100">
              {programLinks.map((p) => (
                <Link key={p.href} href={p.href} className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-paper">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.filter((l) => l.href !== "/about").map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink hover:text-emerald">
              {l.label}
            </Link>
          ))}
          <Button href="/donate">Donate</Button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 px-6 py-4 md:hidden">
          {[{ label: "About", href: "/about" }, ...programLinks, ...navLinks.filter((l) => l.href !== "/about")].map(
            (l) => (
              <Link key={l.href} href={l.href} className="block py-2 text-ink" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            )
          )}
          <div className="pt-3">
            <Button href="/donate">Donate</Button>
          </div>
        </div>
      )}
    </header>
  );
}
