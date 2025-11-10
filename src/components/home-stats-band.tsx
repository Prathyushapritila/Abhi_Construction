"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { metrics } from "@/config/metrics";

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return prefersReducedMotion;
}

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, prefersReducedMotion]);

  return <span>{count}{suffix}</span>;
}

export function HomeStatsBand() {
  return (
    <section className="py-16 bg-royalNavy text-marbleWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          aria-live="polite"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 text-lg md:text-xl lg:text-2xl font-semibold flex-wrap">
            <span>
              <CountUp end={metrics.years} suffix="+ Years" />
            </span>
            <span className="text-premiumGold">•</span>
            <span>
              <CountUp end={metrics.homes} suffix="+ Homes" />
            </span>
            <span className="text-premiumGold">•</span>
            <span>
              <CountUp end={metrics.interiors} suffix="+ Interiors" />
            </span>
            <span className="text-premiumGold">•</span>
            <span>
              <CountUp end={metrics.awards} suffix="+ Awards" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
