"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeAboutTeaser() {
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
            Design-build, under one roof. We turn ideas into elegant, livable spaces.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-premiumGold text-premiumGold hover:bg-premiumGold hover:text-royalNavy text-lg px-8 py-6"
          >
            <Link href="/about">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

