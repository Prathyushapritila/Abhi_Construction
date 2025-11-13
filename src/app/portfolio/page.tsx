import { Suspense } from "react";
import { PortfolioSimple } from "@/components/portfolio-simple";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Explore our portfolio of completed projects including residential homes and interior designs in ${siteConfig.location}.`,
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/living-room-1.jpeg"
            alt="Portfolio background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-800/75 to-stone-900/80 dark:from-slate-900/85 dark:via-slate-800/80 dark:to-slate-900/85" />
        </div>
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] blueprint-grid z-[1]" />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-premiumGold/10 dark:bg-premiumGold/15 rounded-full blur-3xl z-[1]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl z-[1]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto py-20">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
              {siteConfig.sections.portfolio.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
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

