"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 md:min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-stone-900 dark:bg-slate-900">
        <Image
          src="/home-hero-new.png"
          alt="Modern luxury villa exterior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          style={{
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70 dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-900/80" />
      </div>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] blueprint-grid z-[1]" />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-premiumGold/10 dark:bg-premiumGold/15 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl z-[1]" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10 w-full">
        <div className="max-w-screen-md mx-auto w-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight px-4"
          >
            BUILDING MORE THAN HOMES — CRAFTING LEGACIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed drop-shadow-md px-4"
          >
            Where architecture, design, and innovation come together to create timeless spaces.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
