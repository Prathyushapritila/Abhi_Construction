"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-royalBlue to-royalBlue/80 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can bring your construction vision to life. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-royalBlue hover:bg-gray-100 text-lg px-8 py-6"
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
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Link href="tel:+1234567890">
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

