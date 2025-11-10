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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valuePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-premiumGold/50 transition-colors bg-white hover:shadow-lg">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-royalBlue/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-royalBlue" />
                      </div>
                      <CardTitle className="text-xl font-heading text-royalNavy">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-steelGray">
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
              How We Work
            </h2>
            <p className="text-xl text-steelGray mb-8">
              One seamless journey, one dedicated project manager, zero stress.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="h-16 w-16 rounded-full bg-royalBlue/10 flex items-center justify-center mb-3 border-2 border-premiumGold/30">
                    <Icon className="h-8 w-8 text-royalBlue" />
                  </div>
                  <span className="text-lg font-heading font-semibold text-royalNavy">{item.step}</span>
                  {index < processSteps.length - 1 && (
                    <span className="hidden md:block text-premiumGold text-2xl font-bold mx-2">→</span>
                  )}
                </motion.div>
              );
            })}
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

      {/* Optional Micro-copy Footer */}
      <section className="py-12 bg-marbleWhite border-t border-premiumGold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-steelGray">
            <span className="font-medium italic">Built for life. Finished for joy.</span>
            <span className="text-premiumGold">•</span>
            <span className="font-medium italic">Details you can feel.</span>
            <span className="text-premiumGold">•</span>
            <span className="font-medium italic">{siteConfig.location}&apos;s design-build, perfected.</span>
            <span className="text-premiumGold">•</span>
            <span className="font-medium italic">Precision in every line. Warmth in every room.</span>
          </div>
        </div>
      </section>
    </>
  );
}
