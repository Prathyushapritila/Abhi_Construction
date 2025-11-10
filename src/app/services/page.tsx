"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, Hammer, Paintbrush, Ruler, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "residential",
    icon: Building2,
    title: "Residential Construction",
    description: "From custom homes to multi-family developments, we bring your residential vision to life with precision and care.",
    features: [
      "Custom home design and construction",
      "Multi-family housing projects",
      "Luxury residences",
      "Sustainable and eco-friendly homes",
      "Smart home integration",
      "Landscaping and outdoor spaces",
    ],
  },
  {
    id: "commercial",
    icon: Wrench,
    title: "Commercial Projects",
    description: "State-of-the-art commercial facilities designed for functionality, efficiency, and modern aesthetics.",
    features: [
      "Office buildings and complexes",
      "Retail and shopping centers",
      "Restaurants and hospitality",
      "Warehouse and industrial facilities",
      "Mixed-use developments",
      "Commercial renovations",
    ],
  },
  {
    id: "renovation",
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with expert renovation services that enhance both form and function.",
    features: [
      "Kitchen and bathroom remodels",
      "Whole home renovations",
      "Additions and extensions",
      "Historic building restoration",
      "Interior and exterior updates",
      "Energy efficiency improvements",
    ],
  },
  {
    id: "interior",
    icon: Paintbrush,
    title: "Interior Design",
    description: "Complete interior design solutions that create beautiful, functional spaces tailored to your lifestyle.",
    features: [
      "Space planning and layout",
      "Material and finish selection",
      "Custom cabinetry and millwork",
      "Lighting design",
      "Color consultation",
      "Furniture and decor coordination",
    ],
  },
  {
    id: "architectural",
    icon: Ruler,
    title: "Architectural Planning",
    description: "Professional architectural services from concept to completion, ensuring your vision becomes reality.",
    features: [
      "Conceptual design and planning",
      "3D modeling and visualization",
      "Building permits and approvals",
      "Structural engineering coordination",
      "Sustainable design solutions",
      "Code compliance and documentation",
    ],
  },
  {
    id: "consultation",
    icon: Shield,
    title: "Consultation & Project Management",
    description: "Expert guidance and comprehensive project management to ensure your project runs smoothly from start to finish.",
    features: [
      "Project feasibility studies",
      "Budget estimation and planning",
      "Timeline development",
      "Vendor and contractor coordination",
      "Quality control and inspection",
      "Post-construction support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royalBlue/10 via-background to-gold/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive construction solutions tailored to your needs. From initial planning to final completion, we handle every aspect of your project with expertise and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-royalBlue/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="h-16 w-16 rounded-lg bg-royalBlue/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-royalBlue" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl font-heading mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-royalBlue mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royalBlue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your construction needs and get a free consultation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-royalBlue hover:bg-gray-100 font-semibold px-8 py-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-royalBlue"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

