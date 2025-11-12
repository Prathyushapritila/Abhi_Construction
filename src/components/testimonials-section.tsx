"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "K P Rajendra",
    content: "Abhi Constructions and Innovations proved to my expectations in every way. The team was professional, efficient, and delivered thier best results. I recommend them for any construction or interior design projects. all the best.",
  },
  {
    id: 2,
    name: "Krishna C Kammari",
    content: "I'm so happy to have worked with Abhi Constructions and Innovations. Their attention to minute detailings and perseverance to quality is impressive. I would definitely work with them again if I start my next new house.",
  },
  {
    id: 3,
    name: "Arun",
    content: "Working with Abhi Constructions and Innovations was delightful. They made the construction process seamless and stress-free, and the end result was absouletly amazing.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-marbleWhite dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy dark:text-premiumGold gold-underline">
            Testimonials
          </h2>
          <p className="text-xl md:text-2xl text-steelGray dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            What Our Satisfied Clients Are Saying
          </p>
          <p className="text-lg text-steelGray dark:text-slate-400 max-w-3xl mx-auto mt-4 leading-relaxed">
            At Abhi Constructions and Innovations, we&apos;re all about building strong bonding and relationships with our clients. We hear you from getting feedback in order to improve and progress in our service. Insight some of our testimonials given from our profound clients, and contact us to submit your own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-premiumGold/30 dark:border-premiumGold/40 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:border-premiumGold dark:hover:border-premiumGold">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-premiumGold/60 dark:text-premiumGold/70 mb-4" />
                  <p className="text-base md:text-lg text-steelGray dark:text-slate-300 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-premiumGold/20 dark:border-premiumGold/30">
                    <p className="font-heading font-semibold text-royalNavy dark:text-premiumGold text-lg">
                      {testimonial.name}
                    </p>
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

