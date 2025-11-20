"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const previewProjects = [
  {
    id: "1",
    title: "Luxury Interior Design",
    category: "Interiors",
    image: "/projects/interior-1.jpeg",
  },
  {
    id: "2",
    title: "Modern Kitchen Design",
    category: "Renovations",
    image: "/projects/kitchen-1.jpeg",
  },
  {
    id: "3",
    title: "Living Room & Media Wall",
    category: "Interiors",
    image: "/projects/living-room-1.jpeg",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-20 bg-marbleWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-premiumGold mb-4 gold-underline">
            {siteConfig.sections.portfolio.title}
          </h2>
          <p className="text-xl text-steelGray max-w-2xl mx-auto">
            {siteConfig.sections.portfolio.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-premiumGold/50 group h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royalNavy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-heading font-bold text-marbleWhite mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-premiumGold">{project.category}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-royalBlue text-royalBlue hover:bg-royalBlue hover:text-white"
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

