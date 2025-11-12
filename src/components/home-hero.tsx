"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
      className="relative min-h-[100vh] sm:min-h-[90vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Layer with brightness filter */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          filter: currentTheme === "light" ? "brightness(1.2) contrast(1.1) saturate(1.1)" : "brightness(1) contrast(1)",
        }}
      >
        <Image
          src="/bg/home-hero.png"
          alt="Modern luxury villa exterior"
          fill
          priority
          className="object-contain sm:object-cover md:object-cover"
          quality={90}
          style={{
            objectPosition: "center top",
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

      {/* Content - Text is in the image, button positioned after "create timeless spaces" */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 text-center py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Empty space for text that's in the background image - reduced on mobile for better spacing */}
          <div className="h-[38vh] sm:h-[40vh] md:h-[45vh]"></div>
          
          {/* Button - Positioned after "create timeless spaces" text in the image - closer on mobile */}
          <div className="mt-2 sm:mt-4 md:mt-6">
            <Button
              asChild
              size="lg"
              className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-2xl font-semibold border-2 border-premiumGold/50 w-full sm:w-auto"
            >
              <Link href="/portfolio" className="flex items-center justify-center">
                Discover Our Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
