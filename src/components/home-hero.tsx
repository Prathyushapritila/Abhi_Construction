"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: "url('/bg/home-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient Fallback */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #0B1C3D 0%, #0A4DAD 50%, #0B1C3D 100%)",
        }}
      />

      {/* Theme-aware overlay: optimized for both modes */}
      <div 
        className="absolute inset-0 z-[1] transition-all duration-500"
        style={{
          backgroundColor: currentTheme === "dark" 
            ? "rgba(11, 28, 61, 0.75)" 
            : "rgba(0, 0, 0, 0.65)",
        }}
      />
      
      {/* Additional gradient overlay for better text contrast */}
      <div 
        className="absolute inset-0 z-[1] transition-opacity duration-500"
        style={{
          background: currentTheme === "dark"
            ? "linear-gradient(to bottom, rgba(11, 28, 61, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)"
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* Content - Centered with proper spacing and contrast */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 drop-shadow-2xl">
            <span className="text-white">Building More Than Homes</span>{" "}
            <span className="text-premiumGold">—</span>{" "}
            <span className="text-premiumGold">Crafting Legacies.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto text-white drop-shadow-lg font-medium">
            Where architecture, design, and innovation come together to create timeless spaces.
          </p>

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
