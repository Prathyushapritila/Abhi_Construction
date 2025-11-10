"use client";

import { motion } from "framer-motion";
import { Award, Building2, Leaf, Cpu, Users } from "lucide-react";

const milestones = [
  {
    year: "2012",
    title: "Company Founded",
    description: "Started with a vision to bring innovation to construction",
    icon: Building2,
  },
  {
    year: "2015",
    title: "BIM Adoption",
    description: "Integrated Building Information Modeling for precision",
    icon: Cpu,
  },
  {
    year: "2018",
    title: "Sustainable Focus",
    description: "Launched eco-friendly and energy-efficient building practices",
    icon: Leaf,
  },
  {
    year: "2020",
    title: "Award Recognition",
    description: "Received first industry award for excellence in design",
    icon: Award,
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to 50+ professionals across architecture and construction",
    icon: Users,
  },
  {
    year: "2024",
    title: "250+ Projects",
    description: "Milestone of 250+ homes delivered with 98% client satisfaction",
    icon: Building2,
  },
];

export function InnovationTimeline() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Innovation Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey of growth and innovation
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-premiumGold/30 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center md:text-left`}>
                    <div className="inline-block bg-card border-2 border-premiumGold/20 rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-2 md:justify-start">
                        <div className="h-10 w-10 rounded-lg bg-premiumGold/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-premiumGold" />
                        </div>
                        <span className="text-premiumGold font-heading font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-premiumGold rounded-full border-4 border-background shadow-lg z-10" />

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

