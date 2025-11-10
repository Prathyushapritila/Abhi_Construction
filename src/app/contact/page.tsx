"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Hyderabad, Telangana, India",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@abhiconstructions.com",
    href: "mailto:info@abhiconstructions.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 5:00 PM",
  },
];

export default function ContactPage() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Fill out the form below or reach out to us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                  Contact Information
                </h2>
              </motion.div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4 p-4 rounded-lg border-2 hover:border-royalBlue/50 transition-colors">
                      <div className="h-12 w-12 rounded-lg bg-royalBlue/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-royalBlue" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-royalBlue transition-colors whitespace-pre-line focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

