"use client";

import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/bg/home-hero.png"
        alt="Modern luxury villa exterior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Centered content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-screen-md text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            BUILDING MORE THAN HOMES — CRAFTING LEGACIES
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Where architecture, design, and innovation come together to create timeless spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
