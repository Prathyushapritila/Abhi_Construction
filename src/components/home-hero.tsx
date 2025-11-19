"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HomeHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to light mode overlay until theme is loaded
  const currentTheme = mounted ? theme : "light";

  return (
    <section 
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] w-full overflow-x-hidden"
    >
      {/* Background Image Layer with brightness filter */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-500 bg-stone-900 dark:bg-slate-900"
        style={{
          filter: currentTheme === "light" ? "brightness(1.2) contrast(1.1) saturate(1.1)" : "brightness(1) contrast(1)",
        }}
      >
        <Image
          src="/bg/home-hero.png"
          alt="Modern luxury villa exterior"
          fill
          priority
          className="object-cover"
          quality={90}
          style={{
            objectPosition: "center center",
          }}
          sizes="100vw"
        />
      </div>

      {/* Theme-aware overlay: Lighter in light mode for better image visibility */}
      <div 
        className="absolute inset-0 z-[1] transition-all duration-500"
        style={{
          backgroundColor: currentTheme === "dark" 
            ? "rgba(15, 23, 42, 0.35)" 
            : "rgba(0, 0, 0, 0.25)",
        }}
      />
      
      {/* Additional gradient overlay - lighter in light mode */}
      <div 
        className="absolute inset-0 z-[1] transition-opacity duration-500"
        style={{
          background: currentTheme === "dark"
            ? "linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)"
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />

      {/* Corrected text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] text-center leading-tight">
          Building more than houses—we create timeless spaces
        </p>
      </div>

    </section>
  );
}
