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
          <span className="inline-flex rounded-md bg-paper p-2 transition-transform duration-300 ease-[var(--ease-out-hover)] hover:scale-[1.03]">
            <Image
              src="/logo.webp"
              alt="Bin to Better"
              width={120}
              height={30}
              className="h-[30px] w-auto"
            />
          </span>
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
                    className="link-underline inline-block transition-colors hover:text-court"
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
                className="link-underline inline-block transition-colors hover:text-court"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block transition-colors hover:text-court"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block transition-colors hover:text-court"
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
