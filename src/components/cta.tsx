"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-royalNavy text-marbleWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-marbleWhite/90 mb-8">
            Not seeing your dream location? Contact us! We want to learn more about your unique build and help you create the home you&apos;ve always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 font-semibold"
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-marbleWhite text-marbleWhite hover:bg-marbleWhite/10 text-lg px-8 py-6"
            >
              <Link href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

