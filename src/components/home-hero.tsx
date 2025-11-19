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
            objectPosition: "center 40%",
          }}
          sizes="100vw"
        />
      </div>

      {/* Subtle overlay - only at the very bottom to hide "Where architecture..." text, blending naturally with image */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {/* Very subtle bottom overlay - only covers bottom 15-20% where unwanted text is, blends with image */}
        <div 
          className="absolute inset-x-0 bottom-0 h-1/5 sm:h-1/4"
          style={{
            background: currentTheme === "dark"
              ? "linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(28, 25, 23, 0.75) 0%, rgba(28, 25, 23, 0.35) 50%, transparent 100%)",
          }}
        />
      </div>

    </section>
  );
}
