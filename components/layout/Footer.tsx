import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { navLinks, programLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="bg-canvas text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.png"
            alt="Bin to Better"
            width={140}
            height={44}
            className="h-auto w-[140px]"
          />
          <p className="mt-4 max-w-xs text-sm text-paper/60 leading-relaxed">
            {site.tagline}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-paper/70">
            {[...navLinks, ...programLinks, { label: "Donate", href: "/donate" }].map(
              (l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-court transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-sage mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-court transition-colors"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-court transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-court transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 px-6 py-6 text-center font-mono text-xs text-paper/40 tracking-wide">
        {site.copyright}
      </div>
    </footer>
  );
}
