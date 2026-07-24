/**
 * Logos in the partner wall. `name` becomes the image alt text; the extracted
 * logos below have no confirmed organisation name yet, so they stay decorative
 * (empty alt) rather than repeating "Partner logo" fourteen times to a screen
 * reader. Fill in a `name` as each one is identified.
 *
 * Sun Dragon Computers and eWasteDirect are intentionally absent — they get a
 * full write-up in `corporatePartners` further down this file, and listing them
 * here rendered each logo twice on the same page.
 */
export const partnerLogos: { src: string; name?: string }[] = [
  { src: "/partners-logos/page-21-xref-82.png" },
  { src: "/partners-logos/page-21-xref-84.png" },
  { src: "/partners-logos/page-22-xref-87.png" },
  { src: "/partners-logos/page-22-xref-88.png" },
  { src: "/partners-logos/page-23-xref-91.png" },
  { src: "/partners-logos/page-23-xref-92.png" },
  { src: "/partners-logos/page-23-xref-94.png" },
  { src: "/partners-logos/page-24-xref-97.png" },
  { src: "/partners-logos/page-24-xref-99.png" },
  { src: "/partners-logos/page-25-xref-102.png" },
  { src: "/partners-logos/page-26-xref-105.png" },
  { src: "/partners-logos/page-26-xref-106.png" },
];

export const whyPartner: string[] = [
  "Make a measurable impact by redirecting usable materials to communities in need.",
  "Support education and sustainability through hands-on initiatives and workshops.",
  "Increase corporate social responsibility visibility and employee engagement.",
];

export const corporatePartners: { name: string; logo: string; note: string }[] = [
  {
    name: "Sun Dragon Computers",
    logo: "/partners-logos/sun-dragon-computers.png",
    note: "Interested in becoming a corporate partner? Contact us at outreach@bintobetter.org to learn how your organization can support Bin to Better and be featured as a partner.",
  },
  {
    name: "eWasteDirect.com",
    logo: "/partners-logos/ewaste-direct.webp",
    note: "eWaste Direct partners with us on Tech to Treasure, making sure every device that passes through our workshops is recycled responsibly through certified e-waste channels.",
  },
];

export const tennisClubs: string[] = [
  "Mission Hills Swim and Racquet Club",
  "Los Gatos Swim and Racquet Club",
  "NorCal Tennis Academy",
  "Mountain View Tennis",
  "Lifetime Activities – Santa Clara & Sunnyvale",
  "Kim Grant Tennis Academy",
  "Cupertino Hills Swim & Racquet Club",
  "Kona Kai Swim & Racquet Club",
  "San José Swim & Racquet Club",
];

export const animalShelters: string[] = [
  "Allie's Doggie Day Camp",
  "Lucky Buddies Pet Sitting",
  "Furrtropolis",
  "A Pet Villa Dog Boarding and Grooming",
];
