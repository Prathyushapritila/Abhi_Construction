import { Hero } from "@/components/hero";
import { Advantages } from "@/components/advantages";
import { ServicesGrid } from "@/components/services-grid";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Abhi Constructions & Innovations - Building Dreams with Innovation. Custom homes, architecture, and interiors in Hyderabad, India. Precision, transparency, and timelines you can trust.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <ServicesGrid />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

