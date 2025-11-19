import { FullWidthBg } from "@/components/full-width-bg";
import { AboutContent } from "@/components/about-content";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} - ${siteConfig.stats.years}+ years of excellence in construction and design in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <StickyContactButtons />
      {/* Hero Section with Background */}
      <FullWidthBg 
        image="/bg/about.jpg"
        overlay={0.7}
      >
        <div className="text-center max-w-4xl mx-auto py-6 sm:py-8 md:py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-marbleWhite mb-3 sm:mb-4">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-marbleWhite/90 leading-relaxed">
            Where architecture, craftsmanship, and interiors meet to create homes that feel personal—and look unforgettable.
          </p>
        </div>
      </FullWidthBg>

      {/* About Content */}
      <AboutContent />
    </div>
  );
}
