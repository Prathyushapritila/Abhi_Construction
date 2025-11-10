"use client";

import { motion } from "framer-motion";
import { FileCheck, DollarSign, MapPin, Award, Home, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const advantages = [
  {
    icon: Home,
    title: "Custom + Construct Approach",
    description: "We'll keep you informed every step of the home building process. With our simple two-phased approach to building your dream home, we ensure you get the home you want, the way you want it.",
  },
  {
    icon: DollarSign,
    title: "Firm Contract Pricing",
    description: "There are no surprises with Abhi Constructions. You're informed of the price of your home and design selections upfront and in writing.",
  },
  {
    icon: MapPin,
    title: "Free Site Analysis",
    description: "We'll evaluate what improvements your home site will need, such as tree clearing, utilities and grading.",
  },
  {
    icon: Award,
    title: "Award-Winning Portfolio of Homes",
    description: "Choose from Abhi Constructions' portfolio of award-winning home designs, offering a variety of options to suit your family's unique needs.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with experienced professionals dedicated to bringing your vision to life with quality craftsmanship and attention to detail.",
  },
  {
    icon: FileCheck,
    title: "Build on Your Lot",
    description: "Build your custom home on your own lot. We provide comprehensive services from site evaluation to final construction.",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            The Abhi Constructions Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With Abhi Constructions Custom Homes, you&apos;ll enjoy legendary craftsmanship, the flexibility to modify your floor plan, countless options, and a wide variety of interior and exterior finishes - all in less time and at a fraction of the custom price.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-amber-600/50 bg-white">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <CardTitle className="text-xl font-heading">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

