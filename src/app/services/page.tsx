"use client";

import { motion } from "framer-motion";
import { Building2, Paintbrush, Wrench, Hammer, Paintbrush2, Square, HardHat, Plug, Settings } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const services = [
  {
    icon: Building2,
    title: "Residential",
    description: "Custom home construction and residential projects",
    href: "/portfolio?category=residential",
    bgImage: "/bg/residential.jpg",
  },
  {
    icon: Paintbrush,
    title: "Interiors",
    description: "Interior design and turnkey fit-out services",
    href: "/portfolio?category=interiors",
    bgImage: "/bg/interiors.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen page-with-watermark">
      <StickyContactButtons />
      {/* Hero Section */}
      <section className="relative py-14 sm:py-18 md:py-22 overflow-hidden min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-stone-900 dark:bg-slate-900">
          <Image
            src="/bg/services.jpg"
            alt="Construction and design services"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            style={{
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-800/75 to-stone-900/80 dark:from-slate-900/85 dark:via-slate-800/80 dark:to-slate-900/85" />
        </div>
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] blueprint-grid z-[1]" />
        {/* Decorative circles - hidden on mobile to prevent orange shades */}
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-premiumGold/10 dark:bg-premiumGold/15 rounded-full blur-3xl z-[1]" />
        <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl z-[1]" />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto py-12 sm:py-16 md:py-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-premiumGold mb-4 sm:mb-6 drop-shadow-lg"
            >
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md"
            >
              Explore our construction and design services
            </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-standard bg-marbleWhite dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
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
                      <Card className="service-card h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] hover:shadow-2xl transition-all duration-250 !border-0 group cursor-pointer relative overflow-hidden shadow-lg">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src={service.bgImage}
                            alt={`${service.title} background`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 via-white/50 to-stone-50/50 dark:from-slate-800/50 dark:via-slate-800/50 dark:to-slate-900/50" />
                        </div>
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-premiumGold/0 via-premiumGold/5 to-premiumGold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-tl from-royalBlue/0 via-royalBlue/5 to-royalBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-10" />
                        
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-premiumGold/5 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-10" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-royalBlue/5 rounded-tr-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-10" />
                        
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
                          <p className="text-lg md:text-xl text-royalNavy dark:text-white mb-6 leading-relaxed font-semibold drop-shadow-lg">
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
      <section className="section-standard bg-stone-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-premiumGold dark:text-premiumGold">
              Handyman Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-steelGray dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We answer your emails & phone calls, show up on time, get the job done quickly, clean up behind ourselves, and employ only reliable, friendly skilled professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
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
                  <Card className="service-card h-full hover:shadow-lg transition-all duration-200 !border-0 group cursor-pointer bg-white dark:bg-slate-800 text-center">
                    <CardContent className="p-6 sm:p-8">
                      <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-premiumGold/10 dark:bg-premiumGold/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-premiumGold/20 dark:group-hover:bg-premiumGold/30 transition-all duration-300">
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-premiumGold transition-colors duration-300" />
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors duration-300">
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
