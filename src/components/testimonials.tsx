"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Homeowner",
    content: "Abhi Constructions transformed our vision into reality. The attention to detail and professionalism exceeded our expectations. Highly recommended!",
    rating: 5,
    project: "Residential Home",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "We worked with Abhi Constructions on our office renovation. They delivered on time, within budget, and the quality is outstanding. Exceptional service!",
    rating: 5,
    project: "Commercial Renovation",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Property Developer",
    content: "Professional, reliable, and skilled. Abhi Constructions has been our go-to partner for multiple projects. Their expertise is unmatched in the industry.",
    rating: 5,
    project: "Multi-Unit Development",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Interior Designer",
    content: "Collaborating with Abhi Constructions was a pleasure. They understand design intent and execute with precision. The craftsmanship is top-notch.",
    rating: 5,
    project: "Luxury Renovation",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 bg-royalNavy text-marbleWhite">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-marbleWhite">
            What Our Clients Say
          </h2>
          <p className="text-xl text-marbleWhite/80 max-w-2xl mx-auto">
            Trusted by homeowners and businesses across the region
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 border-premiumGold/30 bg-royalNavy/50">
                <CardContent className="p-8 md:p-12">
                  <Quote className="h-12 w-12 text-premiumGold/40 mb-6" />
                  <p className="text-lg md:text-xl text-marbleWhite mb-6 leading-relaxed">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-heading font-semibold text-xl mb-1">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-muted-foreground mb-2">
                        {currentTestimonial.role}
                      </div>
                      <div className="text-sm text-royalBlue font-medium">
                        {currentTestimonial.project}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-gold text-gold"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="border-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-royalBlue ${
                    index === currentIndex
                      ? "w-8 bg-royalBlue"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="border-2"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

