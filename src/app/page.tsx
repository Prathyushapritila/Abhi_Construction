import { HomeHero } from "@/components/home-hero";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home | Abhi Constructions & Innovations",
  description: `Crafted Homes. Thoughtful Interiors. We design and build refined living spaces—simple, modern, and made for you in ${siteConfig.location}.`,
};

export default function HomePage() {
  return <HomeHero />;
}
