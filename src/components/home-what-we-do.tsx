"use client";

import { motion } from "framer-motion";

export function HomeWhatWeDo() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-royalNavy/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-steelGray dark:text-marbleWhite/80 font-medium">
            Custom homes • Architectural design • Interior fit-outs • Renovations
          </p>
        </motion.div>
      </div>
    </section>
  );
}

