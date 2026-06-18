export type Program = {
  slug: string;
  title: string;
  tagline: string;
  sections: { heading: string; body: string }[];
  steps?: { title: string; body: string }[];
  logos?: string[];
};

export const programs: Record<
  "bounce-back" | "tech-to-treasure" | "eco-filament" | "workshop",
  Program
> = {
  "bounce-back": {
    slug: "bounce-back",
    title: "Bounce Back Project",
    tagline: "Giving used tennis balls a second life in schools, animal shelters, and assisted living.",
    sections: [
      {
        heading: "The Focus of Our Efforts",
        body: "Nearly all of the 330 million tennis balls produced each year end up in landfills, where they can take more than 400 years to decompose. The Bounce Back Project reduces waste by finding creative ways to give used tennis balls a second life.",
      },
    ],
    steps: [
      {
        title: "Collection",
        body: "Every month our team collects between 3,000 and 5,000 used balls from local clubs.",
      },
      {
        title: "Reuse",
        body: "Balls are donated to schools (chair legs), animal shelters (enrichment toys), and assisted living centers (walker feet).",
      },
      {
        title: "Impact",
        body: "Since launching just over a year ago we have collected more than 100,000 tennis balls and donated over 30,000 to organizations that can use them effectively.",
      },
      {
        title: "Get Involved",
        body: "Clubs interested in participating can visit the Partners page or contact us directly to arrange a pickup.",
      },
    ],
    logos: [
      "/bounce-back-logos/page-28-xref-114.png",
      "/bounce-back-logos/page-29-xref-117.png",
      "/bounce-back-logos/page-30-xref-120.png",
      "/bounce-back-logos/page-31-xref-123.png",
    ],
  },

  "tech-to-treasure": {
    slug: "tech-to-treasure",
    title: "Tech to Treasure",
    tagline: "Turning e-waste into educational tools and responsible recycling.",
    sections: [
      {
        heading: "A Device's Second Chance",
        body: "Millions of electronics are discarded each year, often without proper recycling, contributing to growing e‑waste and environmental harm. Tech to Treasure addresses this issue while inspiring the next generation of innovators.",
      },
      {
        heading: "Get Involved",
        body: "Students interested should join our Discord to get involved for future events.",
      },
    ],
    steps: [
      {
        title: "Collection & Education",
        body: "We gather unused devices and transform them into educational tools through free, interactive workshops.",
      },
      {
        title: "Hands‑On Learning",
        body: "Students disassemble devices to learn about RAM, memory, circuit boards, and power systems.",
      },
      {
        title: "Responsible Recycling",
        body: "After sessions, all parts are responsibly recycled through certified e‑waste programs.",
      },
    ],
  },

  "eco-filament": {
    slug: "eco-filament",
    title: "Eco-filament",
    tagline: "Repurposing plastic waste into 3D printer filament for tools and toys.",
    sections: [
      {
        heading: "The New Building Blocks of Society",
        body: "Eco-filament repurposes plastic waste (collected from trash cleanups in local parks) into 3D printer filament used to develop toys and tools for kids with special needs. It's a simple yet effective way to keep plastic out of landfills and give it a second life.\n\nIf you are interested in attending volunteering events (you will get volunteer hours) to clean up our parks, please join our Discord: https://tinyurl.com/b2bdisc",
      },
    ],
  },

  workshop: {
    slug: "workshop",
    title: "Tech to Treasure Workshop",
    tagline: "Turning e-waste into educational tools and responsible recycling.",
    sections: [
      {
        heading: "A Device's Second Chance",
        body: "Millions of electronics are discarded each year, often without proper recycling, contributing to growing e‑waste and environmental harm. Tech to Treasure addresses this issue while inspiring the next generation of innovators.",
      },
      {
        heading: "Get Involved",
        body: "Students interested should join our Discord to get involved for future events.",
      },
      {
        heading: "Past Events",
        body: "March 1, 2026 · Fremont, CA — Tech to Treasure: A hands-on stations workshop for kids to touch parts, see how things work, and hear instructors explain each component. Patterson Ranch benches outside the red barn · 5298 Rancho Del Norte Dr, Fremont, CA 94555",
      },
    ],
    steps: [
      {
        title: "Collection & Education",
        body: "We gather unused devices and transform them into educational tools through free, interactive workshops.",
      },
      {
        title: "Hands‑On Learning",
        body: "Students disassemble devices to learn about RAM, memory, circuit boards, and power systems.",
      },
      {
        title: "Responsible Recycling",
        body: "After sessions, all parts are responsibly recycled through certified e‑waste programs.",
      },
    ],
  },
};
