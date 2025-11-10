"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeAboutPreview() {
  return (
    <section className="py-20 bg-marbleWhite">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-royalNavy gold-underline">
              Your Vision, Built End-to-End
            </h2>
            <p className="text-xl md:text-2xl text-steelGray leading-relaxed mb-8">
              From the first sketch to the final cushion, we design, build, and style spaces that feel refined, warm, and unmistakably yours. One expert team. One seamless journey. On time, on budget, beautifully delivered.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-royalBlue text-royalBlue hover:bg-royalBlue hover:text-white text-lg px-8 py-6"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

