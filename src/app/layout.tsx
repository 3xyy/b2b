import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bintobetter.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.metadata.title,
    template: `%s | ${site.name}`,
  },
  description: site.metadata.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.metadata.title,
    description: site.metadata.description,
    url: siteUrl,
    images: [{ url: "/Untitled_design-removebg-preview.webp", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.title,
    description: site.metadata.description,
    images: ["/Untitled_design-removebg-preview.webp"],
  },
};

// Organization structured data (site-wide).
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  url: siteUrl,
  description: site.metadata.description,
  email: site.contact.primaryEmail,
  sameAs: [site.social.instagram.url, site.social.linkedin.url],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-surface-950 text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
