"use client";

import { motion } from "framer-motion";

export function HomeStatsBand() {
  return (
    <section className="py-16 bg-royalNavy text-marbleWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 text-lg md:text-xl lg:text-2xl font-semibold flex-wrap">
            <span>12+ Years</span>
            <span className="text-premiumGold">•</span>
            <span>250+ Homes</span>
            <span className="text-premiumGold">•</span>
            <span>120+ Interiors</span>
            <span className="text-premiumGold">•</span>
            <span>30+ Awards</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

