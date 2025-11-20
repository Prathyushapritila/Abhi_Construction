"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, Briefcase, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCategory = "all" | "residential" | "commercial" | "renovation";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    category: "residential",
    description: "A stunning 5-bedroom villa with contemporary design and premium finishes.",
    image: "/api/placeholder/600/400",
    year: "2024",
  },
  {
    id: 2,
    title: "Corporate Office Complex",
    category: "commercial",
    description: "State-of-the-art office building with sustainable design features.",
    image: "/api/placeholder/600/400",
    year: "2024",
  },
  {
    id: 3,
    title: "Historic Building Renovation",
    category: "renovation",
    description: "Preserved heritage while adding modern amenities and functionality.",
    image: "/api/placeholder/600/400",
    year: "2023",
  },
  {
    id: 4,
    title: "Family Home Extension",
    category: "residential",
    description: "Seamless addition that doubled the living space with elegant design.",
    image: "/api/placeholder/600/400",
    year: "2023",
  },
  {
    id: 5,
    title: "Retail Shopping Center",
    category: "commercial",
    description: "Multi-tenant retail space with modern architecture and efficient layout.",
    image: "/api/placeholder/600/400",
    year: "2023",
  },
  {
    id: 6,
    title: "Kitchen & Bath Remodel",
    category: "renovation",
    description: "Complete transformation with high-end fixtures and smart storage solutions.",
    image: "/api/placeholder/600/400",
    year: "2023",
  },
  {
    id: 7,
    title: "Eco-Friendly Residence",
    category: "residential",
    description: "Sustainable home with solar panels and energy-efficient systems.",
    image: "/api/placeholder/600/400",
    year: "2022",
  },
  {
    id: 8,
    title: "Warehouse Facility",
    category: "commercial",
    description: "Large-scale industrial facility with advanced logistics infrastructure.",
    image: "/api/placeholder/600/400",
    year: "2022",
  },
  {
    id: 9,
    title: "Complete Home Makeover",
    category: "renovation",
    description: "Full interior and exterior renovation with modern design elements.",
    image: "/api/placeholder/600/400",
    year: "2022",
  },
];

const categories: { value: ProjectCategory; label: string; icon: typeof Building2 }[] = [
  { value: "all", label: "All Projects", icon: Building2 },
  { value: "residential", label: "Residential", icon: Home },
  { value: "commercial", label: "Commercial", icon: Briefcase },
  { value: "renovation", label: "Renovation", icon: Wrench },
];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-premiumGold">
            Project Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of residential, commercial, and renovation projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "flex items-center space-x-2",
                  activeCategory === category.value
                    ? "bg-royalBlue text-white"
                    : "border-2"
                )}
                aria-pressed={activeCategory === category.value}
              >
                <Icon className="h-4 w-4" />
                <span>{category.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-premiumGold/50 h-full flex flex-col group">
                  <div className="relative h-64 bg-gradient-to-br from-royalBlue/20 to-premiumGold/20 flex items-center justify-center overflow-hidden">
                    <Building2 className="h-16 w-16 text-royalBlue/50 group-hover:scale-110 transition-transform" />
                    <div className="absolute top-4 right-4 bg-royalBlue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </div>
                    <div className="absolute inset-0 bg-royalBlue/0 group-hover:bg-royalBlue/5 transition-colors" />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-royalBlue capitalize">
                        {project.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

