"use client";

import { motion } from "framer-motion";
import { Building2, Paintbrush } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const services = [
  {
    icon: Building2,
    title: "Residential",
    description: "Custom home construction and residential projects",
    href: "/portfolio?category=Residential",
  },
  {
    icon: Paintbrush,
    title: "Interiors",
    description: "Interior design and turnkey fit-out services",
    href: "/portfolio?category=Interiors",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-royalNavy via-royalBlue to-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-heading font-bold mb-6"
            >
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed"
            >
              Explore our construction and design services
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-marbleWhite dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-premiumGold/50 group hover:scale-[1.02] cursor-pointer bg-white dark:bg-slate-800">
                      <CardHeader>
                        <div className="h-16 w-16 rounded-lg bg-royalBlue/10 dark:bg-royalBlue/20 flex items-center justify-center mb-4 group-hover:bg-premiumGold/20 dark:group-hover:bg-premiumGold/30 transition-all duration-300">
                          <Icon className="h-8 w-8 text-royalBlue dark:text-premiumGold group-hover:text-premiumGold transition-colors duration-300" />
                        </div>
                        <CardTitle className="text-2xl font-heading text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base text-steelGray dark:text-slate-300 mb-4">
                          {service.description}
                        </p>
                        <span className="inline-block text-royalBlue dark:text-premiumGold font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                          View Projects →
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
