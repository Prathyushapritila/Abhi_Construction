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
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-stone-100 via-marbleWhite to-stone-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] blueprint-grid" />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royalBlue/5 dark:bg-royalBlue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 text-royalNavy dark:text-premiumGold px-2 sm:px-0">
              {siteConfig.sections.contact.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-steelGray dark:text-slate-300 leading-relaxed px-2 sm:px-0">
              {siteConfig.sections.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactContent />
    </div>
  );
}
