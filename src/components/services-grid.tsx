"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, Hammer, Paintbrush, Ruler, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Custom Home Construction",
    description: "Build your dream home on your lot. Architecture and interiors under one roof with precision, transparency, and timelines you can trust.",
    benefits: [
      "Fixed-bid options available",
      "Dedicated project manager",
      "Award-winning designs",
    ],
  },
  {
    icon: Ruler,
    title: "Design–Build (Architecture)",
    description: "Complete architectural services from concept to completion. We handle design, permits, and construction coordination.",
    benefits: [
      "3D visualization",
      "Permit management",
      "Structural engineering",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Styling",
    description: "Transform your space with professional interior design. From concept to final styling, we create beautiful, functional spaces.",
    benefits: [
      "Space planning",
      "Material selection",
      "Custom millwork",
    ],
  },
  {
    icon: Hammer,
    title: "Kitchen & Bath Renovations",
    description: "Expert kitchen and bathroom remodels that enhance both form and function. Premium fixtures and smart storage solutions.",
    benefits: [
      "High-end fixtures",
      "Smart storage",
      "Energy efficient",
    ],
  },
  {
    icon: Shield,
    title: "Project/Permit Management",
    description: "Comprehensive project management and permit handling. We coordinate vendors, manage timelines, and ensure code compliance.",
    benefits: [
      "Timeline management",
      "Vendor coordination",
      "Code compliance",
    ],
  },
  {
    icon: Building2,
    title: "Smart & Sustainable Homes",
    description: "Eco-friendly homes with smart home integration. Solar panels, energy-efficient systems, and sustainable materials.",
    benefits: [
      "Solar integration",
      "Energy efficient",
      "Sustainable materials",
    ],
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-premiumGold/50 group hover:scale-[1.01]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-royalBlue/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-royalBlue" />
                    </div>
                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    {service.benefits && (
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-premiumGold mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <a
                      href="/services"
                      className="inline-block mt-4 text-royalBlue hover:text-royalBlue/80 font-semibold text-sm transition-colors"
                    >
                      Learn more →
                    </a>
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

