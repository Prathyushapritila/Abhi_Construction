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
      className="relative min-h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg/home-hero.jpg'), linear-gradient(135deg, #0B1C3D 0%, #0A4DAD 50%, #0B1C3D 100%)",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }}
    >
      {/* Theme-aware overlay: darker in light mode, lighter in dark mode */}
      <div 
        className="absolute inset-0 z-0 transition-colors duration-300"
        style={{
          backgroundColor: currentTheme === "dark" ? "rgba(0, 0, 0, 0.55)" : "rgba(0, 0, 0, 0.70)",
        }}
      />
      
      {/* Additional theme-aware filter for image brightness */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          backdropFilter: currentTheme === "dark" ? "brightness(0.85) contrast(1.1)" : "brightness(0.7) contrast(1.15)",
          WebkitBackdropFilter: currentTheme === "dark" ? "brightness(0.85) contrast(1.1)" : "brightness(0.7) contrast(1.15)",
        }}
      />

      {/* Content - Centered */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-6">
          Building More Than Homes{" "}
          <span className="text-premiumGold">—</span>{" "}
          <span className="text-premiumGold">Crafting Legacies.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
          Where architecture, design, and innovation come together to create timeless spaces.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 shadow-lg font-semibold"
        >
          <Link href="/portfolio">
            Discover Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
