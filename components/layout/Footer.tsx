import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { navLinks, programLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <Image src="/logo-white.png" alt="Bin to Better" width={170} height={54} />
          <p className="mt-4 max-w-xs text-sm text-paper/70">{site.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-paper">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            {[...navLinks, ...programLinks, { label: "Donate", href: "/donate" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-lime">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-paper">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-paper/70">
            <li><a className="hover:text-lime" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-lime" href={site.instagram}>Instagram</a></li>
            <li><a className="hover:text-lime" href={site.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-6 py-6 text-center text-xs text-paper/60">
        {site.copyright}
      </div>
    </footer>
  );
}
