import { Suspense } from "react";
import { PortfolioSimple } from "@/components/portfolio-simple";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Explore our portfolio of completed projects including residential homes and interior designs in ${siteConfig.location}.`,
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen page-with-watermark">
      <StickyContactButtons />
      {/* Hero Section with Background */}
      <section className="relative py-14 sm:py-18 md:py-22 overflow-hidden min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-stone-900 dark:bg-slate-900">
          <Image
            src="/bg/portfolio.jpg"
            alt="Portfolio background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            style={{
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70 dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-900/80" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto py-12 sm:py-16 md:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-premiumGold mb-4 sm:mb-6 drop-shadow-lg">
              {siteConfig.sections.portfolio.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              {siteConfig.sections.portfolio.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <Suspense fallback={<div className="py-20 text-center">Loading portfolio...</div>}>
        <PortfolioSimple />
      </Suspense>
    </div>
  );
}

