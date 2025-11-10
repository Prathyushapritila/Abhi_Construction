"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Wrench, Hammer, Paintbrush, Ruler, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Custom Home Construction",
    description: "Build your dream home on your lot in Hyderabad. From foundation to finishing, we deliver quality construction with precision and transparency.",
    benefits: [
      "Fixed-bid options available",
      "Dedicated project manager",
      "Quality craftsmanship",
    ],
    image: "/projects/interior-1.jpeg",
  },
  {
    icon: Ruler,
    title: "Architectural Design & Planning",
    description: "Complete architectural services from concept to completion. We handle design, permits, and construction coordination for your dream home.",
    benefits: [
      "3D visualization",
      "Permit management",
      "Structural engineering",
    ],
    image: "/projects/living-room-1.jpeg",
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Turnkey Fit-Out",
    description: "Transform your space with professional interior design. From concept to final styling, we create beautiful, functional spaces with turnkey solutions.",
    benefits: [
      "Space planning",
      "Material selection",
      "Custom millwork",
    ],
    image: "/projects/kitchen-1.jpeg",
  },
  {
    icon: Hammer,
    title: "Kitchen & Bath Renovations",
    description: "Expert kitchen and bathroom remodels that enhance both form and function. Premium fixtures and smart storage solutions for modern living.",
    benefits: [
      "High-end fixtures",
      "Smart storage",
      "Energy efficient",
    ],
    image: "/projects/bathroom-1.jpeg",
  },
  {
    icon: Shield,
    title: "Project Management & Permit Assistance",
    description: "Comprehensive project management and permit handling. We coordinate vendors, manage timelines, and ensure code compliance throughout Hyderabad.",
    benefits: [
      "Timeline management",
      "Vendor coordination",
      "Code compliance",
    ],
    image: "/projects/dining-1.jpeg",
  },
  {
    icon: Building2,
    title: "Smart & Sustainable Homes",
    description: "Eco-friendly homes with smart home integration. Solar panels, energy-efficient systems, and sustainable materials for modern living.",
    benefits: [
      "Solar integration",
      "Energy efficient",
      "Sustainable materials",
    ],
    image: "/projects/alcove-1.jpeg",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-marbleWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
            Our Services
          </h2>
          <p className="text-xl text-steelGray max-w-2xl mx-auto">
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-premiumGold/50 group hover:scale-[1.01] overflow-hidden bg-white">
                  {service.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4 h-12 w-12 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-6 w-6 text-royalBlue" />
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    {!service.image && (
                      <div className="h-12 w-12 rounded-lg bg-royalBlue/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-royalBlue" />
                      </div>
                    )}
                    <CardTitle className="text-xl font-heading text-royalNavy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 text-steelGray">
                      {service.description}
                    </CardDescription>
                    {service.benefits && (
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-steelGray">
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

