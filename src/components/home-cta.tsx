"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FullWidthBg } from "./full-width-bg";
import { siteConfig } from "@/config/site";

export function HomeCTA() {
  return (
    <FullWidthBg 
      image={siteConfig.backgrounds.homeCta}
      overlay={0.7}
    >
      <div className="text-center max-w-4xl mx-auto py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-marbleWhite leading-tight">
            Ready to start your project?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-marbleWhite/90 leading-relaxed">
            Let&apos;s design and build something remarkable—tailored to your life in {siteConfig.location}.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 shadow-lg font-semibold mt-6 focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 focus:ring-offset-royalNavy"
          >
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </FullWidthBg>
  );
}

