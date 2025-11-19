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
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] w-full overflow-hidden"
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
            objectPosition: "center 20%",
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
      <div className="absolute inset-0 flex items-end justify-center z-10 pb-6 sm:pb-10 md:pb-14 lg:pb-18">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 text-center max-w-7xl w-full">
          <div className="max-w-4xl mx-auto w-full">
            {/* Button - Positioned at the bottom center after "create timeless spaces" text - increased spacing to prevent merging */}
            <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36">
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
      </div>
    </section>
  );
}
