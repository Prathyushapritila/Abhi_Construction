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

const valuePillars = [
  {
    icon: Building2,
    title: "Design-Build Under One Roof",
    description: "Architecture, construction, and interiors handled by one expert team.",
  },
  {
    icon: Clock,
    title: "Transparent & Timely",
    description: "Clear scopes, tracked milestones, and handovers that happen when we say they will.",
  },
  {
    icon: Award,
    title: "Premium, Always",
    description: "Curated materials, meticulous detailing, and finishes that feel genuinely luxurious.",
  },
  {
    icon: Zap,
    title: "Innovation in Practice",
    description: "3D visualizations, smart-home options, and sustainable choices that future-proof your space.",
  },
  {
    icon: MapPin,
    title: "Hyderabad Expertise",
    description: "Local approvals, reliable partners, and on-ground experience you can count on.",
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
        image={siteConfig.backgrounds.about}
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

      {/* Short Intro */}
      <section className="py-20 bg-marbleWhite">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none text-center"
            >
              <p className="text-xl md:text-2xl text-steelGray leading-relaxed mb-6">
                Born in {siteConfig.location}, we blend <strong className="text-royalNavy">architectural vision</strong> with <strong className="text-royalNavy">engineering precision</strong> and <strong className="text-royalNavy">interior artistry</strong>. For over a decade, we&apos;ve delivered homes that balance function with feeling—crafted thoughtfully, finished impeccably, and handed over on time.
              </p>
              <p className="text-xl md:text-2xl text-steelGray leading-relaxed font-semibold">
                Your dream, our blueprint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Line */}
      <section className="py-12 bg-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl font-semibold">
              <strong>{siteConfig.stats.projects}</strong> homes delivered, <strong>{siteConfig.stats.interiors}</strong> interior projects, <strong>{siteConfig.stats.years}</strong> years of trusted execution across {siteConfig.location}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-royalNavy gold-underline">
                Our Promise
              </h2>
              <div className="space-y-4 text-xl md:text-2xl text-steelGray">
                <p className="font-semibold">We listen deeply.</p>
                <p className="font-semibold">We design boldly.</p>
                <p className="font-semibold">We deliver beautifully—without surprises, compromises, or shortcuts.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Value Pillars */}
      <section className="py-20 bg-marbleWhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valuePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-2 border-premiumGold/20 hover:border-premiumGold transition-all duration-300 bg-white hover:shadow-2xl relative overflow-hidden">
                    {/* Gold accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-premiumGold/0 via-premiumGold to-premiumGold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <CardHeader className="pb-4">
                      <motion.div 
                        className="h-16 w-16 rounded-xl bg-gradient-to-br from-premiumGold/20 to-royalBlue/20 flex items-center justify-center mb-4 group-hover:from-premiumGold/30 group-hover:to-royalBlue/30 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-royalBlue group-hover:text-premiumGold transition-colors duration-300" />
                      </motion.div>
                      <CardTitle className="text-xl font-heading text-royalNavy group-hover:text-premiumGold transition-colors duration-300">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-steelGray leading-relaxed">
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
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-royalNavy gold-underline text-center">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-steelGray leading-relaxed">
                What started as a small, hands-on studio has grown into a full-service, design-led firm trusted by families across {siteConfig.location}. We&apos;ve learned that the best homes don&apos;t scream—they <strong className="text-royalNavy">whisper quality</strong>. Clean lines, honest materials, balanced light, crafted joinery—these are the quiet details that make every day feel exceptional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - 5 Step Process */}
      <section className="py-20 bg-gradient-to-br from-marbleWhite via-royalNavy/5 to-marbleWhite relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-premiumGold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royalBlue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
              How We Work
            </h2>
            <p className="text-xl text-steelGray mb-8 max-w-2xl mx-auto">
              One seamless journey, one dedicated project manager, zero stress.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-premiumGold/30 via-premiumGold/50 to-premiumGold/30" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                {processSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="flex flex-col items-center group relative"
                    >
                      {/* Step number badge */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="h-8 w-8 rounded-full bg-premiumGold text-royalNavy font-bold text-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Icon container with gradient */}
                      <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-premiumGold/20 via-royalBlue/20 to-premiumGold/20 flex items-center justify-center mb-4 border-2 border-premiumGold/30 group-hover:border-premiumGold group-hover:shadow-xl transition-all duration-300 relative z-10">
                        <Icon className="h-10 w-10 text-royalNavy group-hover:text-premiumGold transition-colors duration-300" />
                      </div>
                      
                      {/* Step name */}
                      <span className="text-lg font-heading font-bold text-royalNavy group-hover:text-premiumGold transition-colors duration-300 text-center">
                        {item.step}
                      </span>
                      
                      {/* Arrow connector (desktop only) */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-12 -right-2 z-10">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.3 }}
                            className="text-premiumGold text-2xl font-bold"
                          >
                            →
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Badges */}
      <section className="py-16 bg-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4">
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
              <p className="font-semibold">30+ awards & recognitions.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-lg md:text-xl">
              <p className="font-semibold">98% client referral rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-royalBlue/10 via-marbleWhite to-premiumGold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-royalNavy">
                A home is more than square feet.
              </h2>
              <p className="text-xl md:text-2xl text-steelGray leading-relaxed mb-8">
                It&apos;s the way your morning light falls across the floor. The way your living room holds a celebration. The way every corner feels made for you.
              </p>
              <p className="text-2xl md:text-3xl font-heading font-bold text-royalBlue">
                That&apos;s what we build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4">
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
