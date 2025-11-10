"use client";

import { motion } from "framer-motion";
import { FullWidthBg } from "./full-width-bg";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function ServicesBgSection() {
  return (
    <FullWidthBg 
      image={siteConfig.backgrounds.services}
      overlay={0.65}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-marbleWhite mb-6">
          {siteConfig.sections.services.title}
        </h2>
        <p className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed mb-8">
          {siteConfig.sections.services.subtitle}
        </p>
        <Link
          href="/services"
          className="inline-block bg-premiumGold hover:bg-premiumGold/90 text-royalNavy px-8 py-4 rounded-md font-semibold text-lg transition-colors"
        >
          View All Services
        </Link>
      </motion.div>
    </FullWidthBg>
  );
}

