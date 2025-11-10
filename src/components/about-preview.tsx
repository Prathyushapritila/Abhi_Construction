"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function AboutPreview() {
  return (
    <section className="py-20 bg-marbleWhite">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-royalNavy mb-6 gold-underline">
              {siteConfig.sections.about.title}
            </h2>
            <p className="text-lg text-steelGray leading-relaxed mb-6">
              {siteConfig.sections.about.subtitle}
            </p>
            <p className="text-base text-steelGray/80 leading-relaxed mb-8">
              With over {siteConfig.stats.years} years of experience in the construction industry, we have built a reputation for excellence, reliability, and innovation in {siteConfig.location}. Our commitment to quality and customer satisfaction has made us a trusted name in custom home construction, architecture, and interior design.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-royalBlue hover:bg-royalBlue/90 text-white"
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden border-2 border-premiumGold/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-royalBlue/20 to-premiumGold/20 flex items-center justify-center">
              <span className="text-royalNavy/30 text-6xl font-bold">ACI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

