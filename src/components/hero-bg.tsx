"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface HeroBgProps {
  image?: string;
  overlay?: number;
  parallax?: boolean;
}

export function HeroBg({ 
  image = siteConfig.backgrounds.hero, 
  overlay = 0.65,
  parallax = true 
}: HeroBgProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={parallax ? { scale: 1 } : { scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
          />
        </div>
      </motion.div>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: `rgba(11, 28, 61, ${overlay})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="text-sm font-semibold text-premiumGold uppercase tracking-wider">
                {siteConfig.sections.hero.subheadline}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-marbleWhite leading-tight">
              {siteConfig.sections.hero.headline}
            </h1>

            <p className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed max-w-3xl mx-auto">
              {siteConfig.sections.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 shadow-lg font-semibold"
              >
                <Link href="/about">
                  Learn More
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
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

