"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users, Target, CheckCircle2, Eye, Zap, MapPin, Clock, Shield, Palette, DraftingCompass } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InnovationTimeline } from "@/components/innovation-timeline";
import { FullWidthBg } from "./full-width-bg";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const valuePillars = [
  {
    icon: Building2,
    title: "End-to-End Design-Build Excellence",
    description: "From architectural blueprints to final interior styling—one team, one vision, zero handoff gaps. We eliminate the chaos of coordinating multiple contractors.",
    highlight: "Single Point of Contact",
    image: "/blueprints.jpeg",
    fallback: "/blueprints.jpeg",
  },
  {
    icon: Clock,
    title: "Fixed-Bid Pricing, Guaranteed Timelines",
    description: "No surprise costs. No missed deadlines. We provide transparent quotes and stick to them—your project manager tracks every milestone in real-time.",
    highlight: "On-Time, On-Budget",
    image: "/timeline.jpeg",
    fallback: "/timeline.jpeg",
  },
  {
    icon: Award,
    title: "Curated Materials, Crafted Details",
    description: "We source premium finishes and fixtures directly from trusted suppliers. Every joint, every surface, every fixture is inspected—luxury isn't optional, it's standard.",
    highlight: "Premium by Default",
    image: "/crafted-details.jpeg",
    fallback: "/crafted-details.jpeg",
  },
  {
    icon: Zap,
    title: "Future-Ready Smart Homes",
    description: "3D walkthroughs before construction, smart-home integration, and sustainable building practices. Your home adapts to technology and environmental standards.",
    highlight: "Built for Tomorrow",
    image: "/smarthome.jpeg",
    fallback: "/smarthome.jpeg",
  },
  {
    icon: MapPin,
    title: "Hyderabad's Trusted Builder Network",
    description: "Deep local knowledge of permits, regulations, and suppliers. We've built relationships that get approvals faster and materials delivered on schedule.",
    highlight: "Local Advantage",
    image: "/hyd.jpeg",
    fallback: "/hyd.jpeg",
  },
  {
    icon: Shield,
    title: "Comprehensive Warranty & Support",
    description: "Post-handover support with structured warranties. We stand behind our work—your peace of mind is part of the package.",
    highlight: "Long-Term Partnership",
    image: "/warranty.jpeg",
    fallback: "/warranty.jpeg",
  },
];

const processSteps = [
  { step: "Discover", icon: Eye },
  { step: "Design", icon: DraftingCompass },
  { step: "Detail", icon: Palette },
  { step: "Build", icon: Building2 },
  { step: "Style", icon: Award },
];

export function AboutContent() {
  return (
    <>
      {/* Hero Band with Quote */}
      <FullWidthBg 
        image="/bg/about-quote.png"
        overlay={0.75}
      >
        <div className="text-center max-w-4xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl md:text-5xl font-heading font-bold text-marbleWhite leading-tight mb-6">
              We don&apos;t just build homes. We shape the way you live.
            </p>
            <p className="text-xl md:text-2xl text-marbleWhite/90 leading-relaxed">
              From the first sketch to the final cushion, our team designs, builds, and styles spaces that feel refined, warm, and beautifully yours.
            </p>
          </motion.div>
        </div>
      </FullWidthBg>

      {/* Credibility Line */}
      <section className="py-12 sm:py-16 bg-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl font-semibold">
              <strong>{siteConfig.stats.residential}</strong> residential completed, <strong>{siteConfig.stats.interiors}</strong> interior projects, <strong>{siteConfig.stats.years}</strong> years of trusted execution across {siteConfig.location}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-standard bg-stone-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <Image
            src="/projects/interior-1.jpeg"
            alt="Our Promise"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/95 via-stone-50/90 to-stone-50/95 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/95" />
        </div>
        
        {/* Background animation */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] marble-texture" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-premiumGold/10 dark:bg-premiumGold/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8 text-royalNavy dark:text-premiumGold gold-underline">
                Our Promise
              </h2>
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl text-steelGray dark:text-slate-300">
                <p className="font-semibold">We listen deeply.</p>
                <p className="font-semibold">We design boldly.</p>
                <p className="font-semibold">We deliver beautifully—without surprises, compromises, or shortcuts.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Value Pillars */}
      <section className="section-standard bg-marbleWhite dark:bg-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] blueprint-grid" />
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-royalBlue/10 dark:bg-royalBlue/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-royalNavy dark:text-premiumGold gold-underline">
              What Sets Us Apart
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-steelGray dark:text-slate-400 max-w-2xl mx-auto">
              Six pillars that define how we build differently—and why our clients choose us again and again.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {valuePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              // Different background patterns for each card
              const bgPatterns = [
                "bg-gradient-to-br from-premiumGold/5 via-transparent to-royalBlue/5",
                "bg-gradient-to-bl from-royalBlue/5 via-transparent to-premiumGold/5",
                "bg-gradient-to-tr from-premiumGold/5 via-transparent to-royalBlue/5",
                "bg-gradient-to-tl from-royalBlue/5 via-transparent to-premiumGold/5",
                "bg-gradient-to-br from-premiumGold/8 via-royalBlue/3 to-premiumGold/8",
                "bg-gradient-to-bl from-royalBlue/8 via-premiumGold/3 to-royalBlue/8",
              ];
              const pattern = bgPatterns[index % bgPatterns.length];
              
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group"
                >
                  <Card className="h-full border-2 border-premiumGold/20 dark:border-premiumGold/30 hover:border-premiumGold dark:hover:border-premiumGold transition-all duration-300 bg-white dark:bg-slate-800 hover:shadow-2xl relative overflow-hidden">
                    {/* Background Image - More visible for all cards with custom images */}
                    <div className={`absolute inset-0 z-0 ${
                      pillar.image && (pillar.image.includes("blueprints") || pillar.image.includes("timeline") || pillar.image.includes("crafted") || pillar.image.includes("smarthome") || pillar.image.includes("hyd") || pillar.image.includes("warranty"))
                        ? "opacity-80 dark:opacity-70 group-hover:opacity-90 dark:group-hover:opacity-80" 
                        : "opacity-25 dark:opacity-35 group-hover:opacity-35 dark:group-hover:opacity-45"
                    } transition-opacity duration-300`}>
                      <Image
                        src={pillar.fallback || pillar.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          // Fallback to placeholder if main image doesn't exist
                          const target = e.target as HTMLImageElement;
                          if (target && pillar.fallback && !target.src.includes(pillar.fallback)) {
                            target.src = pillar.fallback;
                          }
                        }}
                      />
                      {/* Overlay for text readability - lighter for custom image cards to show image better */}
                      <div className={`absolute inset-0 ${
                        pillar.image && (pillar.image.includes("blueprints") || pillar.image.includes("timeline") || pillar.image.includes("crafted") || pillar.image.includes("smarthome") || pillar.image.includes("hyd") || pillar.image.includes("warranty"))
                          ? "bg-gradient-to-b from-white/50 via-white/40 to-white/55 dark:from-slate-900/50 dark:via-slate-900/40 dark:to-slate-900/55"
                          : "bg-gradient-to-b from-white/85 via-white/75 to-white/90 dark:from-slate-800/75 dark:via-slate-800/65 dark:to-slate-800/80"
                      }`} />
                    </div>
                    
                    {/* Background pattern overlay */}
                    <div className={`absolute inset-0 ${pattern} opacity-40 dark:opacity-30`} />
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-bl-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-royalBlue/5 dark:bg-royalBlue/10 rounded-tr-full blur-xl" />
                    
                    {/* Gold accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-premiumGold/0 via-premiumGold to-premiumGold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <motion.div 
                        className={`h-16 w-16 rounded-xl bg-gradient-to-br from-premiumGold/20 to-royalBlue/20 dark:from-premiumGold/30 dark:to-royalBlue/30 flex items-center justify-center mb-4 group-hover:from-premiumGold/40 group-hover:to-royalBlue/40 transition-all duration-300 shadow-lg relative z-20 ${
                          pillar.image && (pillar.image.includes("blueprints") || pillar.image.includes("timeline") || pillar.image.includes("crafted") || pillar.image.includes("smarthome") || pillar.image.includes("hyd") || pillar.image.includes("warranty")) ? "backdrop-blur-sm bg-white/80 dark:bg-slate-900/80" : ""
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-royalBlue dark:text-premiumGold dark:group-hover:text-premiumGold group-hover:text-premiumGold transition-colors duration-300" />
                      </motion.div>
                      <h3 className={`text-xl font-heading font-bold text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors duration-300 relative z-20 mb-2 ${
                        pillar.image && (pillar.image.includes("blueprints") || pillar.image.includes("timeline") || pillar.image.includes("crafted") || pillar.image.includes("smarthome") || pillar.image.includes("hyd") || pillar.image.includes("warranty")) ? "drop-shadow-lg [text-shadow:_2px_2px_4px_rgba(255,255,255,0.8)] dark:[text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]" : ""
                      }`}>{pillar.title}</h3>
                      {pillar.highlight && (
                        <p className={`text-sm font-semibold text-premiumGold mt-2 relative z-20 ${
                          pillar.image && (pillar.image.includes("blueprints") || pillar.image.includes("timeline") || pillar.image.includes("crafted") || pillar.image.includes("smarthome") || pillar.image.includes("hyd") || pillar.image.includes("warranty")) ? "drop-shadow-md [text-shadow:_1px_1px_3px_rgba(255,255,255,0.8)] dark:[text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)]" : ""
                        }`}>{pillar.highlight}</p>
                      )}
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className={`text-base text-steelGray dark:text-slate-300 leading-relaxed ${
                        pillar.image && (pillar.image.includes("blueprints") || pillar.image.includes("timeline") || pillar.image.includes("crafted") || pillar.image.includes("smarthome") || pillar.image.includes("hyd") || pillar.image.includes("warranty")) ? "drop-shadow-md [text-shadow:_1px_1px_2px_rgba(255,255,255,0.9)] dark:[text-shadow:_1px_1px_2px_rgba(0,0,0,0.9)] font-medium" : ""
                      }`}>
                        {pillar.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-standard bg-stone-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <Image
            src="/projects/living-room-1.jpeg"
            alt="Our Story"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/95 via-stone-50/90 to-stone-50/95 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-800/95" />
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] marble-texture" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-royalNavy dark:text-premiumGold gold-underline text-center">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-steelGray dark:text-slate-300 leading-relaxed">
                Founded in 2017, Abhi Constructions & Innovations began as a local construction team in {siteConfig.location}. Over the years, we&apos;ve evolved into a comprehensive design-build firm serving families throughout the region. Our approach focuses on <strong className="text-royalNavy dark:text-premiumGold">thoughtful design and quality execution</strong>. We believe in creating spaces that reflect your lifestyle—where functionality meets aesthetics, and every detail is carefully considered to enhance daily living.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - 5 Step Process */}
      <section className="section-standard bg-gradient-to-br from-marbleWhite via-royalNavy/5 to-marbleWhite dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <Image
            src="/projects/kitchen-1.jpeg"
            alt="How We Work"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-marbleWhite/95 via-marbleWhite/90 to-marbleWhite/95 dark:from-slate-900/95 dark:via-slate-800/90 dark:to-slate-900/95" />
        </div>
        
        {/* Decorative background elements with animation */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-royalBlue/5 dark:bg-royalBlue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy dark:text-premiumGold gold-underline">
              How We Work
            </h2>
            <p className="text-xl text-steelGray dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              One seamless journey, one dedicated project manager, zero stress.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-premiumGold/20 dark:border-premiumGold/30 hover:border-premiumGold dark:hover:border-premiumGold transition-all duration-300 hover:shadow-2xl relative overflow-hidden h-full">
                      {/* Background gradient pattern */}
                      <div className={`absolute inset-0 opacity-30 dark:opacity-20 ${
                        index % 2 === 0 
                          ? "bg-gradient-to-br from-premiumGold/10 to-royalBlue/10" 
                          : "bg-gradient-to-bl from-royalBlue/10 to-premiumGold/10"
                      }`} />
                      
                      {/* Step number in top-left corner */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="h-10 w-10 rounded-full bg-premiumGold text-royalNavy dark:text-royalNavy font-bold text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 pt-12">
                        {/* Icon */}
                        <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-premiumGold/20 to-royalBlue/20 dark:from-premiumGold/30 dark:to-royalBlue/30 flex items-center justify-center mb-4 mx-auto group-hover:from-premiumGold/40 group-hover:to-royalBlue/40 transition-all duration-300 shadow-lg">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="h-10 w-10 text-royalBlue dark:text-premiumGold group-hover:text-premiumGold transition-colors duration-300" />
                          </motion.div>
                        </div>
                        
                        {/* Step name */}
                        <h3 className="text-xl font-heading font-bold text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors duration-300 text-center mb-3">
                          {item.step}
                        </h3>
                        
                        {/* Decorative bottom accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-premiumGold/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Badges */}
      <section className="py-12 sm:py-16 bg-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="flex flex-wrap justify-center gap-6 text-lg md:text-xl">
              <p className="font-semibold">On time. Fixed scope. Clear pricing.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-lg md:text-xl">
              <p className="font-semibold">98% client referral rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-royalBlue/10 via-marbleWhite to-premiumGold/5 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] blueprint-grid" />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-premiumGold/5 dark:bg-premiumGold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-royalNavy dark:text-premiumGold">
                A home is more than square feet.
              </h2>
              <p className="text-xl md:text-2xl text-steelGray dark:text-slate-300 leading-relaxed mb-8">
                It&apos;s the way your morning light falls across the floor. The way your living room holds a celebration. The way every corner feels made for you.
              </p>
              <p className="text-2xl md:text-3xl font-heading font-bold text-royalBlue dark:text-premiumGold">
                That&apos;s what we build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to start the conversation?
            </h2>
            <p className="text-xl md:text-2xl text-marbleWhite/90 mb-8">
              Let&apos;s design your home—beautifully, intelligently, and on time.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-premiumGold hover:bg-premiumGold/90 text-royalNavy text-lg px-8 py-6 font-semibold"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </>
  );
}
