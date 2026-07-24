import Link from "next/link";
import { site } from "@/lib/content";

const socialUrls: Record<string, string> = {
  Instagram: site.social.instagram.url,
  LinkedIn: site.social.linkedin.url,
};

// Primary sitemap-style links (exclude in-page anchors for a clean footer).
const footerNav = site.nav.filter((i) => !i.href.includes("#"));

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-brand">bin</span>{" "}
              <span className="text-white/60">to</span>{" "}
              <span className="text-brand">better</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              {site.taglineLong}
            </p>
            <a
              href={`mailto:${site.contact.primaryEmail}`}
              className="mt-4 inline-block text-sm text-brand hover:underline"
            >
              {site.contact.primaryEmail}
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="text-sm">
            <h2 className="mb-4 font-semibold text-white/80">Explore</h2>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/55 hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect + legal */}
          <div className="text-sm">
            <h2 className="mb-4 font-semibold text-white/80">Connect</h2>
            <ul className="space-y-2.5">
              {site.footerSocialLinks.map((social) => (
                <li key={social}>
                  <a
                    href={socialUrls[social]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-brand transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          {site.copyright}
        </div>
      </div>
    </footer>
  );
}
