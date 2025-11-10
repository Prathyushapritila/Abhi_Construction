"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function HomeCEOQuote() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="h-12 w-12 text-premiumGold mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-royalNavy dark:text-slate-100 leading-relaxed mb-6">
            &ldquo;We don&apos;t just build houses—we craft homes where families create memories. Every project is a partnership, every detail matters, and every client&apos;s vision becomes our mission.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="text-lg font-semibold text-royalBlue dark:text-premiumGold">
              Srikanth Pritila
            </p>
            <p className="text-sm text-steelGray dark:text-slate-400 mt-1">
              CEO, Abhi Constructions & Innovations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

