"use client";

import { motion } from "framer-motion";
import { FullWidthBg } from "./full-width-bg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Ruler, Paintbrush, Hammer, Shield, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "custom-home",
    icon: Building2,
    title: "Custom Home Construction",
    description: "Build your dream home on your lot in Hyderabad. From foundation to finishing, we deliver quality construction with precision and transparency.",
    benefits: [
      "Fixed-bid options available",
      "Dedicated project manager",
      "Quality craftsmanship",
      "On-time delivery guarantee",
    ],
    image: "/projects/interior-1.jpeg",
  },
  {
    id: "architectural",
    icon: Ruler,
    title: "Architectural Design & Planning",
    description: "Complete architectural services from concept to completion. We handle design, permits, and construction coordination for your dream home.",
    benefits: [
      "3D visualization",
      "Permit management",
      "Structural engineering",
      "Code compliance",
    ],
    image: "/projects/living-room-1.jpeg",
  },
  {
    id: "interior",
    icon: Paintbrush,
    title: "Interior Design & Turnkey Fit-Out",
    description: "Transform your space with professional interior design. From concept to final styling, we create beautiful, functional spaces with turnkey solutions.",
    benefits: [
      "Space planning",
      "Material selection",
      "Custom millwork",
      "Complete fit-out",
    ],
    image: "/projects/kitchen-1.jpeg",
  },
  {
    id: "renovation",
    icon: Hammer,
    title: "Kitchen & Bath Renovations",
    description: "Expert kitchen and bathroom remodels that enhance both form and function. Premium fixtures and smart storage solutions for modern living.",
    benefits: [
      "High-end fixtures",
      "Smart storage",
      "Energy efficient",
      "Premium finishes",
    ],
    image: "/projects/bathroom-1.jpeg",
  },
  {
    id: "management",
    icon: Shield,
    title: "Project Management & Permit Assistance",
    description: "Comprehensive project management and permit handling. We coordinate vendors, manage timelines, and ensure code compliance throughout Hyderabad.",
    benefits: [
      "Timeline management",
      "Vendor coordination",
      "Code compliance",
      "Quality control",
    ],
    image: "/projects/dining-1.jpeg",
  },
  {
    id: "sustainable",
    icon: Zap,
    title: "Smart & Sustainable Homes",
    description: "Eco-friendly homes with smart home integration. Solar panels, energy-efficient systems, and sustainable materials for modern living.",
    benefits: [
      "Solar integration",
      "Energy efficient",
      "Sustainable materials",
      "Smart home tech",
    ],
    image: "/projects/alcove-1.jpeg",
  },
];

export function ServicesDetail() {
  return (
    <div>
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <div key={service.id}>
            {/* Service Section */}
            <section className={`py-20 ${isEven ? "bg-marbleWhite" : "bg-stone-50"}`}>
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="h-16 w-16 rounded-lg bg-royalBlue/10 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-royalBlue" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-royalNavy mb-4 gold-underline">
                      {service.title}
                    </h2>
                    <p className="text-lg text-steelGray leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-premiumGold mt-1">✓</span>
                          <span className="text-steelGray">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="bg-royalBlue hover:bg-royalBlue/90 text-white"
                    >
                      <Link href="/contact">
                        Get a Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </section>

          </div>
        );
      })}
    </div>
  );
}

