"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HomeAboutTeaser() {
  return (
    <section className="py-16 md:py-24 bg-marbleWhite dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-royalNavy dark:text-slate-100 mb-4">
              {siteConfig.sections.hero.headline}
            </h2>
            <p className="text-lg md:text-xl text-steelGray dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {siteConfig.sections.hero.description}
            </p>
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-royalBlue dark:bg-blue-600 hover:bg-royalBlue/90 dark:hover:bg-blue-700 text-white text-lg px-8 py-6"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

