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
    <div className="min-h-screen page-with-watermark">
      <StickyContactButtons />
      {/* Hero Section with Background */}
      <FullWidthBg 
        image="/bg/about.jpg"
        overlay={0.7}
      >
        <div className="flex items-center justify-center min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]">
          <div className="text-center max-w-4xl mx-auto w-full px-2 sm:px-4 py-8 sm:py-12 md:py-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-premiumGold mb-3 sm:mb-4 md:mb-6 leading-tight sm:leading-tight md:leading-tight px-2 sm:px-4">
              About Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-marbleWhite/90 leading-relaxed px-2 sm:px-4 mt-3 sm:mt-4">
              Where architecture, craftsmanship, and interiors meet to create homes that feel personal—and look unforgettable.
            </p>
          </div>
        </div>
      </FullWidthBg>

      {/* About Content */}
      <AboutContent />
    </div>
  );
}
