"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <Building2 className="h-6 w-6 text-amber-700" />
              <span className="text-sm font-semibold text-amber-800 uppercase tracking-wider">
                Meeting your residential and commercial needs for
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-stone-900 leading-tight">
              Construction In Hyderabad
            </h1>

            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Abhi Constructions & Innovations is a dedicated team of skilled workers, that has been building and renovating homes, historical buildings, and commercial sites in Hyderabad, India for the last 10+ years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6 shadow-lg"
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
