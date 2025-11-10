import Script from "next/script";

export function LayoutSEO() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://abhiconstructions.com/#organization",
    name: "Abhi Constructions & Innovations",
    image: "https://abhiconstructions.com/og-image.jpg",
    url: "https://abhiconstructions.com",
    telephone: "+919876543210",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.3850",
      longitude: "78.4867",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/abhiconstructions",
      "https://www.instagram.com/abhiconstructions",
      "https://www.linkedin.com/company/abhiconstructions",
    ],
  };

  const homeBuilderSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://abhiconstructions.com/#homebuilder",
    name: "Abhi Constructions & Innovations",
    description: "Custom home builder and interior design company in Hyderabad, India",
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    serviceType: [
      "Custom Home Construction",
      "Design-Build Architecture",
      "Interior Design & Styling",
      "Kitchen & Bath Renovations",
      "Project Management",
      "Smart & Sustainable Homes",
    ],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="home-builder-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBuilderSchema) }}
      />
    </>
  );
}

