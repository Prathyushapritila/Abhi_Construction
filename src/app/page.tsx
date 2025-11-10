import { HomeHero } from "@/components/home-hero";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home | Abhi Constructions & Innovations - Custom Homes in Hyderabad",
  description: `Crafted Homes. Thoughtful Interiors. ${siteConfig.name} designs and builds refined living spaces—simple, modern, and made for you in ${siteConfig.location}.`,
  openGraph: {
    title: "Abhi Constructions & Innovations - Custom Homes in Hyderabad",
    description: `Crafted Homes. Thoughtful Interiors. We design and build refined living spaces—simple, modern, and made for you.`,
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
    "description": `We design and build refined living spaces—simple, modern, and made for you in ${siteConfig.location}.`,
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
      <HomeHero />
    </>
  );
}
