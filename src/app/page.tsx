import { HeroBg } from "@/components/hero-bg";
import { AboutPreview } from "@/components/about-preview";
import { ServicesGrid } from "@/components/services-grid";
import { ServicesBgSection } from "@/components/services-bg-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: `${siteConfig.name} - ${siteConfig.tagline}. Custom homes, architecture, and interiors in ${siteConfig.location}.`,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Full-Width Background */}
      <HeroBg />

      {/* About Preview Band */}
      <AboutPreview />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Full-Width Background Image Section */}
      <ServicesBgSection />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Testimonials Strip */}
      <Testimonials />

      {/* Final CTA Band */}
      <CTA />
    </>
  );
}
