"use client";

import { motion } from "framer-motion";
import { Building2, Home, Wrench } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  status: "completed" | "in-progress";
  images: string[];
  year?: string;
  details?: string[];
}

const residentialProjects: Project[] = [
  {
    id: "1",
    title: "PRIVATE House, Gachibowli",
    location: "Gachibowli, Hyderabad",
    type: "Full Renovation",
    description: "A traditional house in the heart of Gachibowli that had been empty for over 15 years and was in need of a full renovation. This project involved complete interior and exterior restoration while maintaining the traditional architectural character.",
    status: "completed",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    year: "2024",
    details: [
      "Complete roof renovation with traditional tiles",
      "Interior and exterior restoration",
      "Modern amenities integration",
      "Structural reinforcement",
    ],
  },
  {
    id: "2",
    title: "PRIVATE Villa, Jubilee Hills",
    location: "Jubilee Hills, Hyderabad",
    type: "Interior & Exterior Renovation",
    description: "Comprehensive renovation of a luxury villa including both interior and exterior work. The project focused on modernizing the space while preserving its elegant character.",
    status: "completed",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    year: "2024",
    details: [
      "Interior design and renovation",
      "Exterior isolation and finishing",
      "Premium material selection",
      "Smart home integration",
    ],
  },
  {
    id: "3",
    title: "PRIVATE Villa, Banjara Hills",
    location: "Banjara Hills, Hyderabad",
    type: "Complete Renovation",
    description: "Our team renovated the interior and exterior of this luxury villa in Banjara Hills, transforming it into a modern living space with premium finishes.",
    status: "in-progress",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    year: "2024",
    details: [
      "Interior and exterior renovation",
      "Plasterboard installation",
      "Modern fixtures and fittings",
      "Landscaping and outdoor spaces",
    ],
  },
  {
    id: "4",
    title: "Modern Residence, HITEC City",
    location: "HITEC City, Hyderabad",
    type: "New Build",
    description: "A contemporary new build featuring modern design elements and sustainable construction practices. This project showcases our ability to create innovative residential spaces.",
    status: "completed",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    year: "2023",
    details: [
      "Contemporary design",
      "Sustainable materials",
      "Energy-efficient systems",
      "Smart home technology",
    ],
  },
];

export function ResidentialProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Building Restorations and New Builds
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            We work with homeowners and commercial property owners to restore and modernize old buildings. The work is completed to high standards, using quality traditional materials for projects that require renovations to stay within the traditional style. Modern and Contemporary designs are also developed where the clients have requested.
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            *Please note, we are not always able to share and document completed projects, due to client confidentiality.
          </p>
        </motion.div>

        <div className="space-y-16">
          {residentialProjects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
              className="border-b border-premiumGold/20 pb-16 last:border-b-0"
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{project.location}</p>
                    <p className="text-sm text-royalBlue font-semibold">{project.type}</p>
                  </div>
                  {project.status === "in-progress" && (
                    <span className="px-4 py-2 bg-premiumGold/20 text-premiumGold rounded-full text-sm font-semibold border border-premiumGold/30">
                      Work in Progress
                    </span>
                  )}
                  {project.year && project.status === "completed" && (
                    <span className="px-4 py-2 bg-royalBlue/10 text-royalBlue rounded-full text-sm font-semibold border border-royalBlue/30">
                      Completed {project.year}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {project.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                    className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-premiumGold/20 hover:border-premiumGold/50 transition-colors group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-royalBlue/20 to-premiumGold/20 flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-royalBlue/30 group-hover:scale-110 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Project Details */}
              {project.details && (
                <div className="mt-6">
                  <h4 className="text-lg font-heading font-semibold mb-3 text-foreground">Project Details:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-muted-foreground">
                        <Wrench className="h-4 w-4 text-premiumGold mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

