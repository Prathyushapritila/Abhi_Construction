"use client";

import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/home-hero-image.png"
        alt="Modern luxury villa exterior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
