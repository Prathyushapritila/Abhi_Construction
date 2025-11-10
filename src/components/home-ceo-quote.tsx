"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HomeCEOQuote() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "light";

  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image Layer - Separate from hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/home-hero.png"
          alt="Construction background"
          fill
          className="object-cover"
          quality={90}
          style={{
            objectPosition: "center",
          }}
        />
      </div>

      {/* Theme-aware overlay for CEO section */}
      <div 
        className="absolute inset-0 z-[1] transition-all duration-500"
        style={{
          backgroundColor: currentTheme === "dark" 
            ? "rgba(15, 23, 42, 0.70)" 
            : "rgba(0, 0, 0, 0.65)",
        }}
      />
      
      {/* Additional gradient overlay */}
      <div 
        className="absolute inset-0 z-[1] transition-opacity duration-500"
        style={{
          background: currentTheme === "dark"
            ? "linear-gradient(to bottom, rgba(15, 23, 42, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)"
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />
      
      {/* Decorative elements - on top of overlay */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-premiumGold/10 dark:bg-premiumGold/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-[2]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royalBlue/10 dark:bg-royalBlue/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-[2]" />
      
      <div className="container mx-auto px-4 relative z-[3]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Quote Icon with animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Quote className="h-16 w-16 text-premiumGold dark:text-premiumGold/80" />
              <div className="absolute inset-0 bg-premiumGold/20 dark:bg-premiumGold/10 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-white leading-relaxed mb-8 text-center relative drop-shadow-2xl"
          >
            <span className="absolute -left-4 md:-left-8 top-0 text-premiumGold text-6xl md:text-8xl font-serif opacity-30 dark:opacity-40">&ldquo;</span>
            <span className="relative z-10">
              We don&apos;t just build houses—we craft homes where families create memories. Every project is a partnership, every detail matters, and every client&apos;s vision becomes our mission.
            </span>
            <span className="absolute -right-4 md:-right-8 bottom-0 text-premiumGold text-6xl md:text-8xl font-serif opacity-30 dark:opacity-40">&rdquo;</span>
          </motion.blockquote>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block px-8 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg border-2 border-premiumGold/30 dark:border-premiumGold/40 shadow-xl">
              <p className="text-xl font-semibold text-royalBlue dark:text-premiumGold mb-1">
                Srikanth Pritila
              </p>
              <p className="text-sm text-steelGray dark:text-slate-300">
                CEO, Abhi Constructions & Innovations
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

