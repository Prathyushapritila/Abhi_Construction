import { HomeHero } from "@/components/home-hero";
import { HomeAboutPreview } from "@/components/home-about-preview";
import { HomeServices } from "@/components/home-services";
import { HomeStatementBand } from "@/components/home-statement-band";
import { HomeFeaturedProjects } from "@/components/home-featured-projects";
import { HomeTestimonials } from "@/components/home-testimonials";
import { HomeStatsBand } from "@/components/home-stats-band";
import { HomeCTA } from "@/components/home-cta";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home | Abhi Constructions & Innovations - Custom Homes in Hyderabad",
  description: `Build Beautiful. Live Better. ${siteConfig.name} crafts custom homes, architecture, and interiors in ${siteConfig.location} with precision and heart. Design-build services with premium finishes.`,
  openGraph: {
    title: "Abhi Constructions & Innovations - Custom Homes in Hyderabad",
    description: `Build Beautiful. Live Better. Custom homes, architecture, and interiors crafted in ${siteConfig.location} with precision and heart.`,
    type: "website",
    locale: "en_IN",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://abhiconstructions.com",
    "name": siteConfig.name,
    "description": `Custom homes, architecture, and interiors crafted in ${siteConfig.location} with precision and heart.`,
    "url": "https://abhiconstructions.com",
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.3850",
      "longitude": "78.4867",
    },
    "areaServed": [
      "Hyderabad",
      "Kokapet",
      "Bachupally",
      "Nizampet",
      "Pragathi Nagar",
      "Kukatpally",
    ],
    "serviceType": [
      "Home Builder",
      "Interior Designer",
      "Architectural Services",
      "Construction Company",
    ],
    "priceRange": "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section - Minimal & Elegant */}
      <HomeHero />

      {/* About Preview */}
      <HomeAboutPreview />

      {/* Services Grid */}
      <HomeServices />

      {/* Statement Band with Background Image */}
      <HomeStatementBand />

      {/* Featured Projects */}
      <HomeFeaturedProjects />

      {/* Testimonials */}
      <HomeTestimonials />

      {/* Stats Band */}
      <HomeStatsBand />

      {/* Final CTA with Background Image */}
      <HomeCTA />

      {/* Sticky Contact Buttons */}
      <StickyContactButtons />
    </>
  );
}
