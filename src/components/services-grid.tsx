"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, Hammer, Paintbrush, Ruler, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Residential Construction",
    description: "Custom homes and residential projects built to your specifications with attention to detail and quality craftsmanship.",
  },
  {
    icon: Wrench,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial facilities designed for functionality and modern aesthetics.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with expert renovation services that enhance both form and function.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Complete interior design solutions that create beautiful, functional spaces tailored to your lifestyle.",
  },
  {
    icon: Ruler,
    title: "Architectural Planning",
    description: "Professional architectural services from concept to completion, ensuring your vision becomes reality.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control and inspection services to ensure every project meets the highest standards.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-royalBlue/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-royalBlue/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-royalBlue" />
                    </div>
                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

