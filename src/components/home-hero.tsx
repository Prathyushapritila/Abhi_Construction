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


    </section>
  );
}
