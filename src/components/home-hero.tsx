"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FullWidthBg } from "./full-width-bg";
import { siteConfig } from "@/config/site";

export function HomeHero() {
  return (
    <FullWidthBg 
      image={siteConfig.backgrounds.homeHero}
      overlay={0.65}
    >
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-marbleWhite leading-tight">
              Build Beautiful. Live Better.
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-marbleWhite/90 leading-relaxed max-w-3xl mx-auto">
              Custom homes, architecture, and interiors—crafted in {siteConfig.location} with precision and heart.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 shadow-lg font-semibold"
              >
                <Link href="/portfolio">
                  Explore Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-marbleWhite text-marbleWhite hover:bg-marbleWhite/10 bg-transparent"
              >
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-royalNavy/90 backdrop-blur-sm border-t border-premiumGold/20 py-4 z-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-marbleWhite flex-wrap">
            <span className="font-semibold">250+ Homes</span>
            <span className="text-premiumGold">•</span>
            <span className="font-semibold">120+ Interiors</span>
            <span className="text-premiumGold">•</span>
            <span className="font-semibold">12+ Years</span>
            <span className="text-premiumGold">•</span>
            <span className="font-semibold">30+ Awards</span>
          </div>
        </div>
      </motion.div>
    </FullWidthBg>
  );
}

