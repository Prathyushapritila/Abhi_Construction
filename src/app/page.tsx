import { HomeHero } from "@/components/home-hero";
import { HomeAboutTeaser } from "@/components/home-about-teaser";
import { HomeWhatWeDo } from "@/components/home-what-we-do";
import { HomeFeaturedTeaser } from "@/components/home-featured-teaser";
import { HomeWhyChoose } from "@/components/home-why-choose";
import { HomeFinalCTA } from "@/components/home-final-cta";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home | Abhi Constructions & Innovations",
  description: `Crafted Homes. Thoughtful Interiors. We design and build refined living spaces—simple, modern, and made for you in ${siteConfig.location}.`,
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAboutTeaser />
      <HomeWhatWeDo />
      <HomeFeaturedTeaser />
      <HomeWhyChoose />
      <HomeFinalCTA />
    </>
  );
}
