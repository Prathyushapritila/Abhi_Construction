"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HomeAboutTeaser() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-royalNavy/5 via-marbleWhite to-royalBlue/5 dark:from-slate-900 dark:via-slate-800 dark:to-royalNavy/30" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-royalBlue/5 dark:bg-royalBlue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-royalNavy dark:text-slate-100 mb-6"
            >
              {siteConfig.sections.hero.headline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-steelGray dark:text-slate-300 leading-relaxed max-w-4xl mx-auto"
            >
              {siteConfig.sections.hero.description}
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Building2, value: siteConfig.stats.projects, label: "Projects Completed" },
              { icon: Users, value: siteConfig.stats.interiors, label: "Interiors Delivered" },
              { icon: Award, value: siteConfig.stats.years, label: "Years of Excellence" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-premiumGold/20 dark:border-premiumGold/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-premiumGold/10 dark:bg-premiumGold/20 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-premiumGold" />
                    </div>
                    <p className="text-3xl md:text-4xl font-heading font-bold text-royalNavy dark:text-slate-100 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-steelGray dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-royalBlue dark:bg-blue-600 hover:bg-royalBlue/90 dark:hover:bg-blue-700 text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

