"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeFeaturedTeaser() {
  return (
    <section className="py-16 md:py-20 bg-marbleWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-royalNavy leading-relaxed mb-6">
            Work that speaks for itself. See villas, apartments, and interiors we&apos;ve crafted.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-royalBlue hover:bg-royalBlue/90 text-white text-lg px-8 py-6"
          >
            <Link href="/portfolio">
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

