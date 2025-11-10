import { ProjectsGallery } from "@/components/projects-gallery";
import { CTA } from "@/components/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of completed construction projects including residential, commercial, and renovation work.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-royalBlue/10 via-background to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of completed projects. Each one represents our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>
      <ProjectsGallery />
      <CTA />
    </>
  );
}

