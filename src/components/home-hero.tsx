"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden overflow-y-visible min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] w-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0A1323] dark:bg-[#020812] w-full left-0 right-0">
        <Image
          src="/home-hero-image.png"
          alt="Modern luxury villa exterior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          style={{
            objectPosition: "center",
            filter: "brightness(1.02) contrast(1.05) saturate(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050B16]/65 via-[#080F1C]/55 to-[#050B16]/70 dark:from-[#01050B]/70 dark:via-[#040910]/65 dark:to-[#01050B]/75" />
      </div>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] blueprint-grid z-[1]" />
      {/* Decorative accents toned down */}
      <div className="hidden md:block absolute top-0 right-0 w-72 h-72 bg-premiumGold/6 dark:bg-premiumGold/10 rounded-full blur-3xl z-[1]" />
      <div className="hidden md:block absolute bottom-0 left-0 w-72 h-72 bg-white/5 dark:bg-white/8 rounded-full blur-3xl z-[1]" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl relative z-10">
        <div className="flex items-center justify-center min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]">
          <div className="text-center max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-premiumGold mb-3 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight sm:leading-tight md:leading-tight px-2 sm:px-4"
            >
              BUILDING MORE THAN HOMES — CRAFTING LEGACIES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 leading-relaxed drop-shadow-md px-2 sm:px-4 mt-3 sm:mt-4"
            >
              Where architecture, design, and innovation come together to create timeless spaces.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
