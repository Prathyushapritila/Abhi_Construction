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
    image: "/bg/cards/design-build-excellence.jpg", // Placeholder - replace when image is provided
    fallback: "/projects/interior-1.jpeg",
  },
  {
    icon: Clock,
    title: "Fixed-Bid Pricing, Guaranteed Timelines",
    description: "No surprise costs. No missed deadlines. We provide transparent quotes and stick to them—your project manager tracks every milestone in real-time.",
    highlight: "On-Time, On-Budget",
    image: "/bg/cards/fixed-bid-timelines.jpg", // Placeholder - replace when image is provided
    fallback: "/projects/kitchen-1.jpeg",
  },
  {
    icon: Award,
    title: "Curated Materials, Crafted Details",
    description: "We source premium finishes and fixtures directly from trusted suppliers. Every joint, every surface, every fixture is inspected—luxury isn't optional, it's standard.",
    highlight: "Premium by Default",
    image: "/bg/cards/curated-materials.jpg", // Placeholder - replace when image is provided
    fallback: "/projects/dining-1.jpeg",
  },
  {
    icon: Zap,
    title: "Future-Ready Smart Homes",
    description: "3D walkthroughs before construction, smart-home integration, and sustainable building practices. Your home adapts to technology and environmental standards.",
    highlight: "Built for Tomorrow",
    image: "/bg/cards/smart-homes.jpg", // Placeholder - replace when image is provided
    fallback: "/projects/living-room-1.jpeg",
  },
  {
    icon: MapPin,
    title: "Hyderabad's Trusted Builder Network",
    description: "Deep local knowledge of permits, regulations, and suppliers. We've built relationships that get approvals faster and materials delivered on schedule.",
    highlight: "Local Advantage",
    image: "/bg/cards/hyderabad-network.jpg", // Placeholder - replace when image is provided
    fallback: "/projects/interior-2.jpeg",
  },
  {
    icon: Shield,
    title: "Comprehensive Warranty & Support",
    description: "Post-handover support with structured warranties. We stand behind our work—your peace of mind is part of the package.",
    highlight: "Long-Term Partnership",
    image: "/bg/cards/warranty-support.jpg", // Placeholder - replace when image is provided
    fallback: "/projects/bathroom-1.jpeg",
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
        
        <div className="container mx-auto px-4 relative z-10">
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
