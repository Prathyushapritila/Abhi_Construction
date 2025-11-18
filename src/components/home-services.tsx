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
    <section id="services" className="section-standard bg-stone-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-royalNavy dark:text-premiumGold gold-underline">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 group hover:scale-[1.02] overflow-hidden bg-white dark:bg-slate-800 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-premiumGold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <CardHeader className="p-6 sm:p-8">
                    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-premiumGold/10 dark:bg-premiumGold/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-premiumGold/20 dark:group-hover:bg-premiumGold/30 transition-all duration-300">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-premiumGold" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-heading font-bold text-royalNavy dark:text-slate-100">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 pt-0">
                    <CardDescription className="text-base sm:text-lg text-steelGray dark:text-slate-300 mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    {service.benefit && (
                      <div className="flex items-start gap-2 text-sm sm:text-base text-steelGray dark:text-slate-400">
                        <span className="text-premiumGold mt-0.5 font-bold">✓</span>
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

