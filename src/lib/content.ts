// Typed content loaders. Components import these getters instead of raw JSON so
// they receive fully-typed data. JSON is statically imported (resolveJsonModule),
// so this works under `output: "export"` with zero runtime cost.

import siteJson from "@/content/site.json";
import homeJson from "@/content/home.json";
import aboutJson from "@/content/about.json";
import bounceBackJson from "@/content/bounce-back.json";
import techToTreasureJson from "@/content/tech-to-treasure.json";
import ecoFilamentJson from "@/content/eco-filament.json";
import workshopJson from "@/content/workshop.json";
import officersJson from "@/content/officers-and-team.json";
import eventsJson from "@/content/events.json";
import donateJson from "@/content/donate.json";
import partnersJson from "@/content/partners.json";

import type {
  SiteContent,
  HomeContent,
  AboutContent,
  BounceBackContent,
  TechToTreasureContent,
  EcoFilamentContent,
  WorkshopContent,
  OfficersContent,
  EventsContent,
  DonateContent,
  PartnersContent,
} from "@/content/types";

export const site = siteJson as SiteContent;

export const getSite = (): SiteContent => site;
export const getHome = (): HomeContent => homeJson as HomeContent;
export const getAbout = (): AboutContent => aboutJson as AboutContent;
export const getBounceBack = (): BounceBackContent =>
  bounceBackJson as BounceBackContent;
export const getTechToTreasure = (): TechToTreasureContent =>
  techToTreasureJson as TechToTreasureContent;
export const getEcoFilament = (): EcoFilamentContent =>
  ecoFilamentJson as EcoFilamentContent;
export const getWorkshop = (): WorkshopContent => workshopJson as WorkshopContent;
export const getOfficers = (): OfficersContent => officersJson as OfficersContent;
export const getEvents = (): EventsContent => eventsJson as EventsContent;
export const getDonate = (): DonateContent => donateJson as DonateContent;
export const getPartners = (): PartnersContent => partnersJson as PartnersContent;
