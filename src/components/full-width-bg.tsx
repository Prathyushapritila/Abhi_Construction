"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FullWidthBgProps {
  image: string;
  overlay?: number;
  children: React.ReactNode;
  className?: string;
  parallax?: boolean;
}

export function FullWidthBg({ 
  image, 
  overlay = 0.7,
  children,
  className = "",
  parallax = true
}: FullWidthBgProps) {
  return (
    <section className={`relative py-14 sm:py-18 md:py-22 overflow-x-hidden overflow-y-visible min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] ${className}`}>
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-stone-900 dark:bg-slate-900"
        initial={parallax ? { scale: 1.1 } : { scale: 1 }}
        whileInView={parallax ? { scale: 1 } : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={image.includes("home-hero")
              ? "Modern luxury villa exterior in Hyderabad at dusk with warm architectural lighting"
              : image.includes("home-statement") 
              ? "Architectural stone and steel textures with soft light"
              : image.includes("home-cta")
              ? "Elegant living room interior with warm golden lighting"
              : image.includes("about") || image.includes("projects")
              ? "Construction and design background"
              : "Background image"}
            fill
            className="object-cover"
            style={{
              objectPosition: "center",
            }}
            sizes="100vw"
            priority={image.includes("about") || image.includes("home-hero") || image.includes("projects")}
            quality={90}
            unoptimized={false}
          />
        </div>
      </motion.div>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: `rgba(11, 28, 61, ${overlay})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-20">
        {children}
      </div>
    </section>
  );
}

