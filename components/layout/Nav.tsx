"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, programLinks } from "@/content/nav";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const linkClass = (href: string) =>
    `link-underline text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas ${
      isActive(href) ? "text-canvas" : "text-ink hover:text-canvas"
    }`;

  return (
    <header
      data-scrolled={scrolled || undefined}
      className="sticky top-0 z-50 border-b border-ink/10 bg-paper transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-[var(--ease-out-hover)] data-[scrolled]:bg-paper/80 data-[scrolled]:backdrop-blur-md data-[scrolled]:shadow-[0_1px_8px_rgba(0,0,0,0.05)]"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 transition-[height] duration-300 ease-[var(--ease-out-hover)] data-[scrolled]:h-14 h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-transform duration-200 ease-[var(--ease-out-hover)] hover:scale-[1.04]"
        >
          <Image
            src="/logo.webp"
            alt="Bin to Better"
            width={120}
            height={30}
            priority
            className="h-[60px] w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          {/* Programs dropdown */}
          <div className="group/dd relative">
            <button
              className="link-underline inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
              aria-haspopup="true"
            >
              Programs
              <span
                aria-hidden="true"
                className="inline-block text-[10px] transition-transform duration-200 ease-[var(--ease-out-hover)] group-hover/dd:rotate-180"
              >
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-[opacity,transform] duration-200 ease-[var(--ease-out-hover)] translate-y-1 group-hover/dd:visible group-hover/dd:opacity-100 group-hover/dd:translate-y-0">
              <div className="w-52 rounded-[3px] border border-ink/10 bg-paper p-2 shadow-lg">
                {programLinks.map((p, i) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block rounded-[2px] px-3 py-2 text-sm text-ink transition-all duration-200 ease-[var(--ease-out-hover)] hover:bg-canvas/5 hover:text-canvas hover:translate-x-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks
            .filter((l) => l.href !== "/about")
            .map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}

          <Link
            href="/donate"
            className="inline-flex items-center rounded-[3px] bg-court px-4 py-2 text-sm font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-[transform,box-shadow,filter] duration-200 ease-[var(--ease-out-hover)] hover:-translate-y-[1px] hover:brightness-95 hover:shadow-[0_6px_14px_-4px_rgba(0,0,0,0.18)] active:translate-y-[1px] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative flex h-10 w-10 items-center justify-center md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="absolute block h-[2px] w-6 bg-ink transition-transform duration-300 ease-[var(--ease-out-hover)]"
            style={{ transform: open ? "translateY(0) rotate(45deg)" : "translateY(-6px)" }}
          />
          <span
            className="absolute block h-[2px] w-6 bg-ink transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="absolute block h-[2px] w-6 bg-ink transition-transform duration-300 ease-[var(--ease-out-hover)]"
            style={{ transform: open ? "translateY(0) rotate(-45deg)" : "translateY(6px)" }}
          />
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className="grid overflow-hidden border-t border-ink/10 transition-[grid-template-rows] duration-300 ease-[var(--ease-out-hover)] md:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <div className="bg-paper px-6 py-4">
            {[
              { label: "About", href: "/about" },
              ...programLinks,
              ...navLinks.filter((l) => l.href !== "/about"),
            ].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-2.5 text-sm text-ink transition-all duration-300 ease-[var(--ease-out-hover)] hover:text-canvas"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(-4px)",
                  transitionDelay: open ? `${i * 30}ms` : "0ms",
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/donate"
                className="inline-flex items-center rounded-[3px] bg-court px-4 py-2 text-sm font-medium text-ink transition-[transform,filter] duration-200 ease-[var(--ease-out-hover)] hover:-translate-y-[1px] hover:brightness-95 active:translate-y-[1px] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
