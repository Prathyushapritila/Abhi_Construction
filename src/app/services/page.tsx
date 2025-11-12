"use client";

import { motion } from "framer-motion";
import { Building2, Paintbrush, Wrench, Hammer, Paintbrush2, Square, HardHat, Plug, Settings } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const services = [
  {
    icon: Building2,
    title: "Residential",
    description: "Custom home construction and residential projects",
    href: "/portfolio?category=residential",
  },
  {
    icon: Paintbrush,
    title: "Interiors",
    description: "Interior design and turnkey fit-out services",
    href: "/portfolio?category=interiors",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-stone-100 via-marbleWhite to-stone-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] blueprint-grid" />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royalBlue/5 dark:bg-royalBlue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Hero Content Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-premiumGold/20 dark:border-premiumGold/30 shadow-2xl overflow-hidden"
            >
              {/* Background Image - Residential & Interiors */}
              <div className="absolute inset-0 opacity-20 dark:opacity-15 z-0">
                <Image
                  src="/projects/interior-1.jpeg"
                  alt="Residential and Interiors"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/80 dark:from-slate-800/80 dark:via-slate-800/70 dark:to-slate-800/80" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 text-royalNavy dark:text-premiumGold"
                >
                  Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-steelGray dark:text-slate-300 leading-relaxed px-2 sm:px-0"
                >
                  Explore our construction and design services
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-marbleWhite dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full"
                >
                  <Link href={service.href}>
                    <motion.div
                      whileHover={{ y: -12, scale: 1.02 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="h-full"
                    >
                      <Card className="h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] hover:shadow-2xl transition-all duration-250 border-2 border-premiumGold/30 hover:border-premiumGold dark:border-premiumGold/40 dark:hover:border-premiumGold group cursor-pointer bg-gradient-to-br from-white via-white to-stone-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-premiumGold/0 via-premiumGold/5 to-premiumGold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                        <div className="absolute inset-0 bg-gradient-to-tl from-royalBlue/0 via-royalBlue/5 to-royalBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                        
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-premiumGold/5 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-royalBlue/5 rounded-tr-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                        
                        <CardHeader className="relative z-10 p-8">
                          <motion.div 
                            className="h-24 w-24 rounded-2xl bg-gradient-to-br from-royalBlue/20 to-premiumGold/20 dark:from-royalBlue/30 dark:to-premiumGold/30 flex items-center justify-center mb-6 group-hover:from-premiumGold/30 group-hover:to-royalBlue/30 dark:group-hover:from-premiumGold/40 dark:group-hover:to-royalBlue/40 transition-all duration-250 shadow-xl group-hover:shadow-2xl"
                            whileHover={{ rotate: 360, scale: 1.15 }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <Icon className="h-12 w-12 text-royalBlue dark:text-premiumGold group-hover:text-premiumGold transition-colors duration-250" />
                          </motion.div>
                          <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors duration-250 mb-3 sm:mb-4">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 p-8 pt-0">
                          <p className="text-lg md:text-xl text-steelGray dark:text-slate-300 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <motion.span 
                            className="inline-flex items-center gap-2 text-royalNavy dark:text-premiumGold font-bold text-base md:text-lg group-hover:text-premiumGold transition-colors duration-250"
                            whileHover={{ x: 8 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            View Projects
                            <motion.span
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              →
                            </motion.span>
                          </motion.span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Handyman Services Section */}
      <section className="py-20 bg-stone-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-royalNavy dark:text-premiumGold">
              Handyman Services
            </h2>
            <p className="text-lg md:text-xl text-steelGray dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We answer your emails & phone calls, show up on time, get the job done quickly, clean up behind ourselves, and employ only reliable, friendly skilled professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: Paintbrush2, name: "Painting" },
              { icon: Square, name: "Tiling" },
              { icon: Hammer, name: "Carpentry" },
              { icon: Wrench, name: "Assembly" },
              { icon: HardHat, name: "Plastering" },
              { icon: Settings, name: "Plasterboards" },
              { icon: Building2, name: "Exterior" },
              { icon: Plug, name: "Installation" },
              { icon: Wrench, name: "Repairs" },
              { icon: Settings, name: "Maintenance" },
              { icon: Building2, name: "Commercial" },
              { icon: Plug, name: "Plumbing & Electrical" },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-200 border-2 border-premiumGold/20 hover:border-premiumGold dark:border-premiumGold/30 dark:hover:border-premiumGold group cursor-pointer bg-white dark:bg-slate-800 text-center">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-lg bg-royalBlue/10 dark:bg-royalBlue/20 flex items-center justify-center mb-3 mx-auto group-hover:bg-premiumGold/20 dark:group-hover:bg-premiumGold/30 transition-all duration-200">
                        <Icon className="h-6 w-6 text-royalBlue dark:text-premiumGold group-hover:text-premiumGold transition-colors duration-200" />
                      </div>
                      <p className="text-sm font-semibold text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors duration-200">
                        {service.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-base text-steelGray dark:text-slate-300 mb-4">
              All prices will be given upon request. Please <Link href="/contact" className="text-premiumGold hover:underline font-semibold">contact us</Link> for further information.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
