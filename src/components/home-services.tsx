"use client";

import { motion } from "framer-motion";
import { Building2, DraftingCompass, Palette, Wrench, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Custom Home Construction",
    description: "Design-build on your plot with premium finishes and clear timelines.",
    benefit: "Fixed-bid pricing with dedicated project manager",
  },
  {
    icon: DraftingCompass,
    title: "Architectural Design & Planning",
    description: "Intelligent layouts, elegant elevations, build-ready drawings.",
    benefit: "3D visualizations and permit management included",
  },
  {
    icon: Palette,
    title: "Interior Design & Turnkey Fit-Out",
    description: "From mood boards to move-in, crafted details that feel luxurious.",
    benefit: "Complete styling from concept to final touches",
  },
  {
    icon: Wrench,
    title: "Kitchen & Bath Renovations",
    description: "Modern function, layered lighting, beautiful materials.",
    benefit: "Smart storage solutions and premium fixtures",
  },
  {
    icon: Shield,
    title: "Project & Permit Management",
    description: "Single-point accountability, transparent tracking, warranties.",
    benefit: "Real-time milestone tracking and code compliance",
  },
  {
    icon: Zap,
    title: "Smart & Sustainable Homes",
    description: "Energy-wise choices and future-ready automation.",
    benefit: "Solar integration and smart home technology",
  },
];

export function HomeServices() {
  return (
    <section id="services" className="py-20 bg-stone-50">
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-premiumGold/50 group hover:scale-[1.01] overflow-hidden bg-white relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-premiumGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-royalBlue/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-royalBlue" />
                    </div>
                    <CardTitle className="text-xl font-heading text-royalNavy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-steelGray mb-3">
                      {service.description}
                    </CardDescription>
                    {service.benefit && (
                      <div className="flex items-start gap-2 text-sm text-steelGray">
                        <span className="text-premiumGold mt-0.5">✓</span>
                        <span>{service.benefit}</span>
                      </div>
                    )}
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

