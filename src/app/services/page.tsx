import { FullWidthBg } from "@/components/full-width-bg";
import { ServicesDetail } from "@/components/services-detail";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: `Comprehensive construction and design services in ${siteConfig.location}. Custom homes, architecture, interior design, and more.`,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <FullWidthBg 
        image={siteConfig.backgrounds.services}
        overlay={0.7}
      >
        <div className="text-center max-w-4xl mx-auto py-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-marbleWhite mb-6">
            {siteConfig.sections.services.title}
          </h1>
          <p className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed">
            {siteConfig.sections.services.subtitle}
          </p>
        </div>
      </FullWidthBg>

      {/* Services Detail Sections */}
      <ServicesDetail />
    </div>
  );
}
