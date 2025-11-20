import { ContactContent } from "@/components/contact-content";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} in ${siteConfig.location}. Get a free quote for your construction or design project.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 md:min-h-[70vh] overflow-x-hidden overflow-y-visible flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-stone-900 dark:bg-slate-900">
          <Image
            src="/bg/contact.jpg"
            alt="Contact us"
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
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] blueprint-grid z-[1]" />
        {/* Decorative circles - hidden on mobile to prevent orange shades */}
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-premiumGold/10 dark:bg-premiumGold/15 rounded-full blur-3xl z-[1]" />
        <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl z-[1]" />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
              {siteConfig.sections.contact.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md">
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
