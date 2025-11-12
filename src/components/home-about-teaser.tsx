"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useState, useEffect, useRef } from "react";

// CountUp component for animated numbers
function CountUp({ 
  value, 
  duration = 1500 
}: { 
  value: string; 
  duration?: number;
}) {
  const [count, setCount] = useState(1); // Start from 1 instead of 0
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract number and suffix from value string (e.g., "30+" -> 30, "+")
  const match = value.match(/(\d+)(.*)/);
  const end = match ? parseInt(match[1], 10) : 1;
  const suffix = match ? match[2] : "";
  
  useEffect(() => {
    // Intersection Observer to trigger animation when in view
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    observer.observe(currentRef);
    
      return () => {
        observer.unobserve(currentRef);
      };
  }, [isVisible, hasAnimated]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      // Map from 1 to end (not 0 to end) - fast counting
      const currentCount = Math.max(1, Math.min(end, Math.floor(1 + (easeOutCubic * (end - 1)))));
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end at exact value
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);
  
  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function HomeAboutTeaser() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-royalNavy/5 via-marbleWhite to-royalBlue/5 dark:from-slate-900 dark:via-slate-800 dark:to-royalNavy/30" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-royalBlue/5 dark:bg-royalBlue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-royalNavy dark:text-slate-100 mb-6"
            >
              {siteConfig.sections.hero.headline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-steelGray dark:text-slate-300 leading-relaxed max-w-4xl mx-auto"
            >
              {siteConfig.sections.hero.description}
            </motion.p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Building2, value: siteConfig.stats.residential, label: "Residential Completed" },
              { icon: Users, value: siteConfig.stats.interiors, label: "Interiors Delivered" },
              { icon: Award, value: siteConfig.stats.years, label: "Years of Excellence" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border-2 border-premiumGold/30 dark:border-premiumGold/40 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="h-16 w-16 rounded-full bg-premiumGold/10 dark:bg-premiumGold/20 flex items-center justify-center mb-4 group-hover:bg-premiumGold/20 dark:group-hover:bg-premiumGold/30 transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-8 w-8 text-premiumGold group-hover:scale-125 transition-transform duration-300" />
                    </motion.div>
                    <motion.p 
                      className="text-3xl md:text-4xl font-heading font-bold text-royalNavy dark:text-slate-100 mb-2 group-hover:text-premiumGold transition-colors duration-300"
                      style={{
                        textShadow: "0 0 20px rgba(255, 140, 0, 0.4)",
                      }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <CountUp value={stat.value} duration={1200} />
                    </motion.p>
                    <p className="text-sm text-steelGray dark:text-slate-400 group-hover:text-premiumGold transition-colors duration-300 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-royalNavy dark:text-premiumGold">
              What Our Satisfied Clients Are Saying
            </h3>
            <p className="text-base md:text-lg text-steelGray dark:text-slate-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              At Abhi Constructions and Innovations, we&apos;re all about building strong bonding and relationships with our clients. We hear you from getting feedback in order to improve and progress in our service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "K P Rajendra",
                  content: "Abhi Constructions and Innovations proved to my expectations in every way. The team was professional, efficient, and delivered thier best results. I recommend them for any construction or interior design projects. all the best.",
                },
                {
                  name: "Krishna C Kammari",
                  content: "I'm so happy to have worked with Abhi Constructions and Innovations. Their attention to minute detailings and perseverance to quality is impressive. I would definitely work with them again if I start my next new house.",
                },
                {
                  name: "Arun",
                  content: "Working with Abhi Constructions and Innovations was delightful. They made the construction process seamless and stress-free, and the end result was absouletly amazing.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border-2 border-premiumGold/30 dark:border-premiumGold/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-sm md:text-base text-steelGray dark:text-slate-300 leading-relaxed italic mb-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-premiumGold/20 dark:border-premiumGold/30">
                    <p className="font-heading font-semibold text-royalNavy dark:text-premiumGold">
                      {testimonial.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-royalBlue dark:border-blue-600 text-royalBlue dark:text-blue-400 hover:bg-royalBlue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


