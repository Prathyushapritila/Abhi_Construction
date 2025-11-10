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
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
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

