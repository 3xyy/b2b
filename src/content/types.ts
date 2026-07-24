// TypeScript interfaces for the content/*.json files.
// These describe the shape of the extracted site content so components can
// consume typed data instead of raw JSON. Keep in sync with the JSON files.

export interface LinkRef {
  label: string;
  href: string | null;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  logo: { wordmark: string; styledParts: string[] };
  tagline: string;
  taglineLong: string;
  metadata: { title: string; description: string };
  copyright: string;
  contact: {
    primaryEmail: string;
    partnersEmail: string;
    discord: string;
    donate: string;
  };
  social: {
    instagram: { handle: string; url: string };
    linkedin: { url: string };
  };
  nav: NavItem[];
  footerSocialLinks: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProjectCard {
  title: string;
  icon: string;
  description: string;
  href: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface HomeContent {
  slug: string;
  title: string;
  hero: {
    badge: string;
    heading: string;
    subheading: string;
    subheadingSecondary: string;
    ctas: LinkRef[];
    stats: Stat[];
    image: string;
    imageAlt: string;
  };
  mission: { eyebrow: string; heading: string; paragraphs: string[] };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: ProjectCard[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Testimonial[];
  };
  contact: {
    heading: string;
    intro: string;
    methods: { label: string; value: string; href: string }[];
    note: string;
  };
}

export interface Founder {
  name: string;
  role: string;
  image: string;
}

export interface IconItem {
  icon: string;
  title: string;
  description: string;
}

export interface AboutContent {
  slug: string;
  title: string;
  hero: { badge: string; heading: string; subheading: string };
  missionVision: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    pillars: { icon: string; label: string }[];
    centerBadge: { icon: string; label: string };
    floatingIcons: string[];
  };
  originStory: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    founders: Founder[];
  };
  approach: { eyebrow: string; heading: string; items: IconItem[] };
  cta: { heading: string; text: string; buttons: LinkRef[] };
}

export interface WhatWeDoItem {
  title: string;
  description: string;
  link?: { text: string; href: string };
}

export interface ProgramSection {
  heading: string;
  body: string;
}

export interface CtaRef {
  label: string;
  href: string;
}

export interface BounceBackContent {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  sections: ProgramSection[];
  whatWeDo: { heading: string; items: WhatWeDoItem[] };
  statCard: { icon: string; value: string; label: string };
  gallery: string[];
}

export interface TechToTreasureContent {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  sections: ProgramSection[];
  whatWeDo: { heading: string; items: WhatWeDoItem[] };
  getInvolved: { heading: string; body: string; cta: CtaRef };
}

export interface EcoFilamentContent {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  sections: ProgramSection[];
  callout: { body: string; link: { text: string; href: string } };
  statCard: { icon: string; value: string; label: string };
}

export interface WorkshopStation {
  name: string;
  parts: string[];
  promptsLabel: string;
  prompts: string[];
}

export interface WorkshopEvent {
  date: string;
  location: string;
  status: string;
  title: string;
  description: string;
  venue: string;
  details: { label: string; value: string }[];
  format: string;
  stationsHeading: string;
  stations: WorkshopStation[];
}

export interface WorkshopContent {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  sections: ProgramSection[];
  whatWeDo: { heading: string; items: WhatWeDoItem[] };
  getInvolved: { heading: string; body: string; cta: CtaRef };
  pastEvents: { heading: string; events: WorkshopEvent[] };
}

export interface TeamMember {
  name: string;
  role: string;
  school: string;
  fact: string;
  image: string;
  imagePosition?: string;
}

export interface TeamGroup {
  category: string;
  members: TeamMember[];
}

export interface OfficersContent {
  slug: string;
  title: string;
  heading: string;
  intro: string;
  applyPrompt: { text: string; linkText: string; href: string };
  groups: TeamGroup[];
}

export interface Sponsor {
  name: string;
  image: string;
  link: string;
}

export interface EventsContent {
  slug: string;
  title: string;
  hero: { eyebrow: string; heading: string; subheading: string };
  featuredEvent: {
    sectionHeading: string;
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    facts: { icon: string; value: string; detail?: string }[];
    about: { heading: string; paragraphs: string[] };
    mission: { heading: string; items: IconItem[] };
    prizes: {
      heading: string;
      podium: { place: string; prize: string }[];
      additional: { place: string; prize: string; icon?: string }[];
      footnote: string;
    };
    keynote: { icon: string; heading: string; status: string };
  };
  sponsors: {
    heading: string;
    tiers: { tier: number; sponsors: Sponsor[] }[];
  };
}

export interface DonateClass {
  icon: string;
  title: string;
  description: string;
  note: string;
  cta: CtaRef;
}

export interface DonateContent {
  slug: string;
  title: string;
  classes: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: DonateClass[];
  };
  donate: { heading: string; body: string; cta: CtaRef };
}

export interface PartnerList {
  heading: string;
  items: string[];
}

export interface PartnersContent {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  intro: string;
  logos: string[];
  whyPartner: { heading: string; points: string[] };
  corporatePartners: {
    heading: string;
    subheading: string;
    partners: { name: string; image: string }[];
    note: string;
    contactEmail: string;
  };
  partnerLists: PartnerList[];
  cta: {
    heading: string;
    body: string;
    contactEmail: string;
    button: CtaRef;
  };
}
