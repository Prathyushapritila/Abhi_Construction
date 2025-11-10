"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content: "On time, every milestone—and the finishes are flawless.",
    name: "Rohit M.",
    area: "Kokapet",
  },
  {
    id: 2,
    content: "They listened first, then designed around our life.",
    name: "Sravani K.",
    area: "Bachupally",
  },
  {
    id: 3,
    content: "A single team from drawings to décor made it stress-free.",
    name: "Vikram R.",
    area: "Nizampet",
  },
];

export function HomeTestimonials() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-premiumGold/30 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Quote className="h-12 w-12 text-premiumGold/40 mx-auto mb-4" />
                  <p className="text-lg md:text-xl text-steelGray leading-relaxed italic mb-4" aria-live="polite">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-premiumGold/20">
                    <p className="font-heading font-semibold text-royalNavy">{testimonial.name}</p>
                    <p className="text-sm text-steelGray">{testimonial.area}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

