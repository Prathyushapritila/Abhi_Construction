import { FullWidthBg } from "@/components/full-width-bg";
import { Portfolio3D } from "@/components/portfolio3d";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Explore our portfolio of completed projects including residential homes, luxury villas, interior designs, and renovations in ${siteConfig.location}.`,
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <FullWidthBg 
        image={siteConfig.backgrounds.portfolio}
        overlay={0.7}
      >
        <div className="text-center max-w-4xl mx-auto py-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-marbleWhite mb-6">
            {siteConfig.sections.portfolio.title}
          </h1>
          <p className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed">
            {siteConfig.sections.portfolio.subtitle}
          </p>
        </div>
      </FullWidthBg>

      {/* Portfolio Content */}
      <Portfolio3D />
    </div>
  );
}

