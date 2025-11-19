"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HomeHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to light mode overlay until theme is loaded
  const currentTheme = mounted ? theme : "light";

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 md:min-h-[70vh] flex items-center justify-center">
      {/* Background Image with lighting filter */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-500 bg-stone-900 dark:bg-slate-900"
        style={{
          filter: currentTheme === "light" ? "brightness(1.2) contrast(1.1) saturate(1.1)" : "brightness(1) contrast(1)",
        }}
      >
        <Image
          src="/bg/home-hero.png"
          alt="Modern luxury villa exterior"
          fill
          priority
          className="object-cover"
          quality={90}
          style={{
            objectPosition: "center",
          }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70 dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-900/80" />
      </div>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] blueprint-grid z-[1]" />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-premiumGold/10 dark:bg-premiumGold/15 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl z-[1]" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto py-12 sm:py-16 md:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
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
