"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function HomeCEOQuote() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient - NO IMAGE */}
      <div className="absolute inset-0 bg-gradient-to-br from-marbleWhite via-royalNavy/5 to-marbleWhite dark:from-slate-900 dark:via-royalNavy/20 dark:to-slate-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royalBlue/5 dark:bg-royalBlue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] blueprint-grid" />
      
      <div className="container mx-auto px-4 relative z-10">
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

          {/* Quote Text - With opening/closing quotes, no middle quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-royalNavy dark:text-slate-100 leading-relaxed mb-8 text-center relative"
          >
            <span className="absolute -left-4 md:-left-8 top-0 text-premiumGold text-6xl md:text-8xl font-serif opacity-30 dark:opacity-40">&ldquo;</span>
            <span className="relative z-10">
              We don&apos;t just build houses—we craft homes where families create memories. Every project is a partnership, every detail matters, and every client&apos;s vision becomes our mission.
            </span>
            <span className="absolute -right-4 md:-right-8 bottom-0 text-premiumGold text-6xl md:text-8xl font-serif opacity-30 dark:opacity-40">&rdquo;</span>
          </motion.blockquote>

          {/* Author Info - Right Corner - No Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex justify-end"
          >
            <div className="text-right">
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

