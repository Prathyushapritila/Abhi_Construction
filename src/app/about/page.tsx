import { FullWidthBg } from "@/components/full-width-bg";
import { AboutContent } from "@/components/about-content";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} - ${siteConfig.stats.years}+ years of excellence in construction and design in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <FullWidthBg 
        image="/bg/about-hero.png"
        overlay={0.7}
      >
        <div className="text-center max-w-4xl mx-auto py-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-marbleWhite mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed">
            Where architecture, craftsmanship, and interiors meet to create homes that feel personal—and look unforgettable.
          </p>
        </div>
      </FullWidthBg>

      {/* About Content */}
      <AboutContent />
    </div>
  );
}
