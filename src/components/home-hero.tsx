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
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/home-hero.png"
          alt="Modern luxury villa exterior"
          fill
          priority
          className="object-cover"
          quality={90}
          style={{
            objectPosition: "center",
          }}
        />
      </div>

      {/* Theme-aware overlay: Optimized for better image visibility */}
      <div 
        className="absolute inset-0 z-[1] transition-all duration-500"
        style={{
          backgroundColor: currentTheme === "dark" 
            ? "rgba(15, 23, 42, 0.35)" 
            : "rgba(0, 0, 0, 0.50)",
        }}
      />
      
      {/* Additional gradient overlay for better text contrast */}
      <div 
        className="absolute inset-0 z-[1] transition-opacity duration-500"
        style={{
          background: currentTheme === "dark"
            ? "linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)"
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.55) 100%)",
        }}
      />

      {/* Content - Only CTA button, text is in the image */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 shadow-2xl font-semibold border-2 border-premiumGold/50"
            >
              <Link href="/portfolio">
                Discover Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
