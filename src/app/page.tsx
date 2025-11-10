import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { Stats } from "@/components/stats";
import { ProjectsGallery } from "@/components/projects-gallery";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Abhi Constructions - Building excellence, one project at a time. Your trusted partner in construction and design.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Stats />
      <ProjectsGallery />
      <Testimonials />
      <CTA />
    </>
  );
}

