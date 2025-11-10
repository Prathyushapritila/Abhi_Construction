import { FullWidthBg } from "@/components/full-width-bg";
import { ContactContent } from "@/components/contact-content";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} in ${siteConfig.location}. Get a free quote for your construction or design project.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <FullWidthBg 
        image={siteConfig.backgrounds.contact}
        overlay={0.7}
      >
        <div className="text-center max-w-4xl mx-auto py-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-marbleWhite mb-6">
            {siteConfig.sections.contact.title}
          </h1>
          <p className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed">
            {siteConfig.sections.contact.subtitle}
          </p>
        </div>
      </FullWidthBg>

      {/* Contact Section */}
      <ContactContent />
    </div>
  );
}
