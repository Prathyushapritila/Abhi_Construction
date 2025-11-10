"use client";

import { motion } from "framer-motion";
import { Building2, Wrench, Hammer, Paintbrush, Ruler, Shield, CheckCircle, Search, DraftingCompass, Construction, Palette, Handshake, DollarSign, Clock, UserCheck, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    id: "residential",
    icon: Building2,
    title: "Residential Construction",
    description: "From custom homes to multi-family developments, we bring your residential vision to life with precision and care.",
    features: [
      "Custom home design and construction",
      "Multi-family housing projects",
      "Luxury residences",
      "Sustainable and eco-friendly homes",
      "Smart home integration",
      "Landscaping and outdoor spaces",
    ],
  },
  {
    id: "commercial",
    icon: Wrench,
    title: "Commercial Projects",
    description: "State-of-the-art commercial facilities designed for functionality, efficiency, and modern aesthetics.",
    features: [
      "Office buildings and complexes",
      "Retail and shopping centers",
      "Restaurants and hospitality",
      "Warehouse and industrial facilities",
      "Mixed-use developments",
      "Commercial renovations",
    ],
  },
  {
    id: "renovation",
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform your existing space with expert renovation services that enhance both form and function.",
    features: [
      "Kitchen and bathroom remodels",
      "Whole home renovations",
      "Additions and extensions",
      "Historic building restoration",
      "Interior and exterior updates",
      "Energy efficiency improvements",
    ],
  },
  {
    id: "interior",
    icon: Paintbrush,
    title: "Interior Design",
    description: "Complete interior design solutions that create beautiful, functional spaces tailored to your lifestyle.",
    features: [
      "Space planning and layout",
      "Material and finish selection",
      "Custom cabinetry and millwork",
      "Lighting design",
      "Color consultation",
      "Furniture and decor coordination",
    ],
  },
  {
    id: "architectural",
    icon: Ruler,
    title: "Architectural Planning",
    description: "Professional architectural services from concept to completion, ensuring your vision becomes reality.",
    features: [
      "Conceptual design and planning",
      "3D modeling and visualization",
      "Building permits and approvals",
      "Structural engineering coordination",
      "Sustainable design solutions",
      "Code compliance and documentation",
    ],
  },
  {
    id: "consultation",
    icon: Shield,
    title: "Consultation & Project Management",
    description: "Expert guidance and comprehensive project management to ensure your project runs smoothly from start to finish.",
    features: [
      "Project feasibility studies",
      "Budget estimation and planning",
      "Timeline development",
      "Vendor and contractor coordination",
      "Quality control and inspection",
      "Post-construction support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royalBlue/10 via-background to-gold/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive construction solutions tailored to your needs. From initial planning to final completion, we handle every aspect of your project with expertise and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-royalBlue/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="h-16 w-16 rounded-lg bg-royalBlue/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-royalBlue" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl font-heading mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-royalBlue mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we guide you through every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Search, title: "Discover", desc: "Understanding your vision, needs, and budget" },
              { icon: DraftingCompass, title: "Design", desc: "Architecture and interior design planning" },
              { icon: Construction, title: "Build", desc: "Quality construction with dedicated project manager" },
              { icon: Palette, title: "Style", desc: "Interior finishes and styling" },
              { icon: Handshake, title: "Handover", desc: "Final walkthrough and warranty support" },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-royalBlue/10 flex items-center justify-center mx-auto mb-4 border-2 border-premiumGold/20">
                    <Icon className="h-8 w-8 text-royalBlue" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Transparent Pricing", desc: "Fixed-bid options with no surprises" },
              { icon: Clock, title: "On-time Delivery", desc: "98% of projects completed on schedule" },
              { icon: UserCheck, title: "Dedicated PM", desc: "Your personal project manager from start to finish" },
              { icon: ShieldCheck, title: "Warranty", desc: "Comprehensive warranty on all work" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-premiumGold/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 rounded-lg bg-premiumGold/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-premiumGold" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-foreground">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "How long does a custom home build typically take?",
                  a: "Most custom homes take 8-12 months from groundbreaking to completion, depending on size and complexity. We provide detailed timelines during the design phase.",
                },
                {
                  q: "Do you offer fixed-price contracts?",
                  a: "Yes, we offer fixed-bid options for complete transparency. You'll know the price upfront with no surprises.",
                },
                {
                  q: "Can I modify existing floor plans?",
                  a: "Absolutely! We specialize in customizing our portfolio designs to fit your family's unique needs and preferences.",
                },
                {
                  q: "What areas do you serve?",
                  a: "We build throughout Hyderabad and the surrounding Telangana region. Contact us to discuss your specific location.",
                },
                {
                  q: "Do you handle permits and approvals?",
                  a: "Yes, our team manages all permits, approvals, and code compliance as part of our comprehensive service.",
                },
                {
                  q: "What warranty do you provide?",
                  a: "We offer a comprehensive warranty on all construction work, with dedicated support for any issues that arise.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-2 border-premiumGold/20 rounded-lg px-4">
                  <AccordionTrigger className="text-left font-heading font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royalBlue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your construction needs and get a free consultation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-royalBlue hover:bg-gray-100 font-semibold px-8 py-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-royalBlue"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

