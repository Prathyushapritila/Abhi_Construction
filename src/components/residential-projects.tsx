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
    title: "Luxury Interior Design, Hyderabad",
    location: "Hyderabad, Telangana",
    type: "Complete Interior Design & Renovation",
    description: "A stunning modern interior design project featuring a blend of spiritual elements, contemporary design, and natural materials. This project showcases our expertise in creating harmonious living spaces with premium finishes, sophisticated lighting, and thoughtful space planning.",
    status: "completed",
    images: [
      "/projects/interior-1.jpeg",
      "/projects/interior-2.jpeg",
      "/projects/living-room-1.jpeg",
    ],
    year: "2024",
    details: [
      "Modern living and dining area design",
      "Sophisticated lighting with LED strips and chandeliers",
      "Premium furniture and upholstery selection",
      "Spiritual art integration with Buddha artwork",
      "Natural wood accents and warm lighting",
    ],
  },
  {
    id: "2",
    title: "Modern Kitchen Design, Hyderabad",
    location: "Hyderabad, Telangana",
    type: "Kitchen Renovation & Design",
    description: "A sleek, contemporary kitchen featuring high-gloss white cabinets, light blue glass backsplash, and modern appliances. This project demonstrates our attention to detail in creating functional yet beautiful kitchen spaces.",
    status: "completed",
    images: [
      "/projects/kitchen-1.jpeg",
    ],
    year: "2024",
    details: [
      "High-gloss handleless cabinetry",
      "Light blue glass backsplash",
      "Modern black gas hob and range hood",
      "Under-cabinet LED lighting",
      "Premium countertops and fixtures",
    ],
  },
  {
    id: "3",
    title: "Luxury Living Room & Media Wall",
    location: "Hyderabad, Telangana",
    type: "Interior Design & Media Wall Installation",
    description: "An elegant living room featuring a sophisticated media wall with wooden slats, modern lighting, and premium furniture. The space combines functionality with luxury design elements.",
    status: "completed",
    images: [
      "/projects/living-room-1.jpeg",
    ],
    year: "2024",
    details: [
      "Custom media wall with wooden slats",
      "L-shaped sectional sofa with premium upholstery",
      "Modern linear LED lighting",
      "Floating media console",
      "Polished white tile flooring",
    ],
  },
  {
    id: "4",
    title: "Spiritual Alcove & Built-in Seating",
    location: "Hyderabad, Telangana",
    type: "Custom Interior Design",
    description: "A beautifully designed alcove featuring illuminated Buddha artwork, built-in upholstered bench with integrated storage, and warm wooden paneling. This project showcases our ability to create serene, meditative spaces within modern homes.",
    status: "completed",
    images: [
      "/projects/alcove-1.jpeg",
      "/projects/interior-1.jpeg",
    ],
    year: "2024",
    details: [
      "Custom illuminated artwork installation",
      "Built-in bench with storage drawers",
      "Warm wooden ceiling and paneling",
      "Ambient LED lighting",
      "Artificial turf flooring for unique aesthetic",
    ],
  },
  {
    id: "5",
    title: "Modern Dining & Bathroom Design",
    location: "Hyderabad, Telangana",
    type: "Interior Design & Space Planning",
    description: "A sophisticated dining area separated by a decorative geometric partition from a modern bathroom vanity. This project demonstrates our expertise in open-plan design and space division.",
    status: "completed",
    images: [
      "/projects/dining-1.jpeg",
      "/projects/bathroom-1.jpeg",
    ],
    year: "2024",
    details: [
      "Geometric partition with mirrored panels",
      "Modern dining area with premium furniture",
      "Contemporary bathroom vanity design",
      "Wooden slatted ceiling with cove lighting",
      "Polished tile flooring throughout",
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
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${imgIndex + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

