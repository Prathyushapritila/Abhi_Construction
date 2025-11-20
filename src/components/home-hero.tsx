"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative py-14 sm:py-18 md:py-22 overflow-hidden min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-stone-900 dark:bg-slate-900">
        <Image
          src="/home-hero-image.png"
          alt="Modern luxury villa exterior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          style={{
            objectPosition: "center",
            filter: "brightness(1.15) contrast(1.1) saturate(1.2)",
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
            BUILDING MORE THAN HOMES — CRAFTING LEGACIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md"
          >
            Where architecture, design, and innovation come together to create timeless spaces.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
