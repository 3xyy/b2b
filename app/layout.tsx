import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, DM_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bin to Better | Turning Waste into Opportunity",
  description:
    "At Bin to Better, we believe that waste isn't just trash, it's opportunity. Join us in creating a more sustainable, circular future.",
  metadataBase: new URL("https://bin2b.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(hanken.variable, inter.variable, dmMono.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
