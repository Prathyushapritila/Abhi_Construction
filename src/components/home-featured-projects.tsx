"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const featuredProjects = [
  {
    id: "1",
    title: "Lakeview Villa, Kokapet",
    description: "A calm, sun-lit family home with indoor–outdoor flow.",
    image: "/projects/interior-1.jpeg",
  },
  {
    id: "2",
    title: "Premium 3BHK, Bachupally",
    description: "Minimal lines, warm wood, and layered lighting.",
    image: "/projects/living-room-1.jpeg",
  },
  {
    id: "3",
    title: "Modern Kitchen, Nizampet",
    description: "Efficient storage meets elegant finishes.",
    image: "/projects/kitchen-1.jpeg",
  },
];

export function HomeFeaturedProjects() {
  return (
    <section className="section-standard bg-marbleWhite dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-royalNavy dark:text-premiumGold gold-underline">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 group h-full bg-white dark:bg-slate-800">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-slate-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royalNavy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-heading font-bold text-marbleWhite mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-premiumGold">{project.description}</p>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 sm:mb-3 text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-steelGray dark:text-slate-300 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-premiumGold text-premiumGold hover:bg-premiumGold hover:text-royalNavy dark:hover:text-royalNavy font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/portfolio">
              Explore the Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

