"use client";

import { motion } from "framer-motion";
import { Building2, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "30+",
    label: "Projects Completed",
    description: "Successful construction projects across Hyderabad",
  },
  {
    icon: Users,
    value: "30+",
    label: "Interiors Completed",
    description: "Turnkey interior design projects",
  },
  {
    icon: Award,
    value: "10",
    label: "Years of Service",
    description: "Building dreams with innovation",
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-stone-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-600/20 mb-4">
                  <Icon className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-5xl font-heading font-bold mb-2 text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-stone-300">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

