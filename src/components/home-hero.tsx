"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section 
      className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg/home-hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-6">
            Build Beautiful. Live Better.
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Custom homes, architecture, and interiors — crafted in Hyderabad.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 shadow-lg font-semibold"
          >
            <Link href="/portfolio">
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
