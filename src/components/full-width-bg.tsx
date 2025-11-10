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
    <section className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
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
              : image.includes("about")
              ? "Construction and design background"
              : "Background image"}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={image.includes("about") || image.includes("home-hero")}
            quality={90}
            unoptimized={false}
            onError={(e) => {
              console.error("Image failed to load:", image);
              // Fallback to a default image if the specified one fails
              const target = e.target as HTMLImageElement;
              if (target && !target.src.includes("placeholder")) {
                target.src = "/projects/interior-1.jpeg";
              }
            }}
          />
        </div>
      </motion.div>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: `rgba(11, 28, 61, ${overlay})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        {children}
      </div>
    </section>
  );
}

