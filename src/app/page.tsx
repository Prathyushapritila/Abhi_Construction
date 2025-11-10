import { HomeHero } from "@/components/home-hero";
import { HomeAboutPreview } from "@/components/home-about-preview";
import { HomeServices } from "@/components/home-services";
import { HomeStatementBand } from "@/components/home-statement-band";
import { HomeFeaturedProjects } from "@/components/home-featured-projects";
import { HomeTestimonials } from "@/components/home-testimonials";
import { HomeStatsBand } from "@/components/home-stats-band";
import { HomeCTA } from "@/components/home-cta";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${siteConfig.name} - Build Beautiful. Live Better. Custom homes, architecture, and interiors crafted in ${siteConfig.location} with precision and heart.`,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Full-Width Background */}
      <HomeHero />

      {/* About Preview */}
      <HomeAboutPreview />

      {/* Services Grid */}
      <HomeServices />

      {/* Statement Band with Background Image */}
      <HomeStatementBand />

      {/* Featured Projects */}
      <HomeFeaturedProjects />

      {/* Testimonials */}
      <HomeTestimonials />

      {/* Stats Band */}
      <HomeStatsBand />

      {/* Final CTA with Background Image */}
      <HomeCTA />
    </>
  );
}
