"use client";

import { motion } from "framer-motion";
import { FullWidthBg } from "./full-width-bg";
import { siteConfig } from "@/config/site";

export function HomeStatementBand() {
  return (
    <FullWidthBg 
      image={siteConfig.backgrounds.homeStatement}
      overlay={0.7}
    >
      <div className="text-center max-w-4xl mx-auto py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-marbleWhite leading-tight">
            We don&apos;t just build homes. We shape the way you live.
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-marbleWhite/90 leading-relaxed">
            Clean lines. Honest materials. Light that moves with your day.
          </p>
        </motion.div>
      </div>
    </FullWidthBg>
  );
}

