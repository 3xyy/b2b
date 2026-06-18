export const hackathon = {
  datePill: "March 28, 2026 • San Jose, CA",
  title: "Tech to Treasure Hackathon",
  tagline: "Turning ideas into impact. 8 Hours. Infinite Possibilities.",
  infoPills: [
    { icon: "🗓️", label: "March 28, 2026" },
    { icon: "⏰", label: "10:00 AM - 6:00 PM" },
    { icon: "📍", label: "Tully Library", sublabel: "880 Tully Rd, San Jose, CA 95111" },
  ],
  aboutParagraphs: [
    "Tech to Treasure Hackathon is an environmental hackathon powered by Bin to Better, where builders turn ideas into impact in 8 hours. From AI agents to data-driven platforms, participants work together to tackle sustainability challenges using technology.",
    "Through hands-on mentorship, workshops led by industry engineers, and real startup-level tools, join us as we build what's next!",
  ],
  mission: [
    { icon: "🌍", title: "Accessible Tech", desc: "Environmental innovation shouldn't be limited to experts." },
    { icon: "🛠️", title: "Empower Builders", desc: "Tools, mentorship, and space to turn ideas into prototypes." },
    { icon: "🌱", title: "Grow Community", desc: "Connecting creators to build lasting impact together." },
  ],
  prizes: {
    top3: [
      { place: "2nd Place", award: "$400+ in credits", style: "silver" as const },
      { place: "1st Place", award: "$4000+ in credits", style: "gold" as const },
      { place: "3rd Place", award: "$200+ in credits", style: "bronze" as const },
    ],
    rest: [
      { place: "4th Place", award: "$50+ credits" },
      { place: "5th Place", award: "$50+ credits" },
    ],
    wolfram: { icon: "🐺", title: "Wolfram Award", desc: "WolframOne + Scholarship Check" },
    allNote: "Plus $1000+ in platform credits & subscriptions for all participants!",
  },
};

export type SponsorTier = {
  label: string;
  size: "xl" | "lg" | "md" | "sm";
  sponsors: { name: string; src: string; href: string }[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    label: "Tier 1",
    size: "xl",
    sponsors: [
      { name: "Glid Tech", src: "/sponsors/image8.png", href: "https://www.glidtech.us/" },
      { name: "Wolfram", src: "/sponsors/image12.png", href: "https://www.wolfram.com/" },
    ],
  },
  {
    label: "Tier 2",
    size: "lg",
    sponsors: [
      { name: "YRI Science", src: "/sponsors/image13.png", href: "https://www.yriscience.com" },
      { name: "Momen", src: "/sponsors/image5.png", href: "https://momen.app/" },
      { name: "CodeCrafters", src: "/sponsors/image10.png", href: "https://codecrafters.io/" },
      { name: "Featherless AI", src: "/sponsors/image9.png", href: "https://featherless.ai/" },
      { name: "Mobbin", src: "/sponsors/image4.png", href: "https://mobbin.com" },
    ],
  },
  {
    label: "Tier 3",
    size: "md",
    sponsors: [
      { name: "CleanShot X", src: "/sponsors/image20.png", href: "https://cleanshot.com/" },
      { name: "Relay.app", src: "/sponsors/image19.png", href: "https://relay.app" },
      { name: "NordPass", src: "/sponsors/image3.png", href: "https://nordpass.com/" },
      { name: "NordVPN", src: "/sponsors/image6.png", href: "https://nordvpn.com/" },
      { name: "NordProtect", src: "/sponsors/image14.png", href: "https://nordprotect.com" },
      { name: "Saily", src: "/sponsors/image2.png", href: "https://saily.com" },
    ],
  },
  {
    label: "Tier 4",
    size: "sm",
    sponsors: [
      { name: "Incogni", src: "/sponsors/image11.png", href: "https://incogni.com/" },
      { name: ".xyz", src: "/sponsors/image16.png", href: "https://gen.xyz" },
      { name: "Nexos.ai", src: "/sponsors/image1.png", href: "https://nexos.ai" },
    ],
  },
];

// Legacy list kept for backwards compat
export const events: { title: string; date?: string; description: string }[] = [
  {
    title: "Tech to Treasure Hackathon",
    date: "March 28, 2026",
    description:
      "Tech to Treasure Hackathon is an environmental hackathon powered by Bin to Better, where builders turn ideas into impact in 8 hours. From AI agents to data-driven platforms, participants work together to tackle sustainability challenges using technology. Through hands-on mentorship, workshops led by industry engineers, and real startup-level tools, join us as we build what's next!",
  },
  {
    title: "Tech to Treasure Workshop",
    date: "March 1, 2026",
    description:
      "A hands-on stations workshop for kids to touch parts, see how things work, and hear instructors explain each component. Patterson Ranch benches outside the red barn · 5298 Rancho Del Norte Dr, Fremont, CA 94555",
  },
];
