"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: siteConfig.contact.address,
  },
  {
    icon: Phone,
    title: "Phone",
    content: `+91 ${siteConfig.contact.phone}`,
    href: `tel:+91${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    content: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export function ContactContent() {
  return (
    <>
      <section className="section-standard bg-gradient-to-br from-stone-50 via-marbleWhite to-stone-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {siteConfig.contact.name && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-premiumGold/30 dark:border-premiumGold/40 shadow-lg"
              >
                <h3 className="text-xl font-heading font-semibold mb-2 text-royalNavy dark:text-slate-100">
                  Contact Person
                </h3>
                <p className="text-lg text-premiumGold dark:text-premiumGold font-medium">
                  {siteConfig.contact.name}
                </p>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-royalNavy dark:text-slate-100">
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
                  <div className="flex items-start space-x-4 p-4 rounded-lg border-2 hover:border-premiumGold/50 transition-colors bg-white dark:bg-slate-800 shadow-md">
                    <div className="h-12 w-12 rounded-lg bg-premiumGold/20 dark:bg-premiumGold/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-premiumGold dark:text-premiumGold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2 text-royalNavy dark:text-slate-100">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-royalNavy dark:text-slate-200 hover:text-premiumGold dark:hover:text-premiumGold transition-colors whitespace-pre-line focus:outline-none focus:ring-2 focus:ring-premiumGold rounded-sm font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-royalNavy dark:text-slate-200 whitespace-pre-line font-medium">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Call Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <h3 className="font-heading font-semibold text-lg text-royalNavy dark:text-slate-100 mb-4">
                Quick Contact
              </h3>
              <div className="w-full" style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
                <Link 
                  href={`tel:+91${siteConfig.contact.phone.replace(/\s/g, "")}`} 
                  className="block w-full" 
                  style={{ maxWidth: '100%', width: '100%', boxSizing: 'border-box' }}
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 border-royalBlue text-royalBlue hover:bg-royalBlue hover:text-white text-base sm:text-lg font-semibold py-6 sm:py-7 min-h-[48px] sm:min-h-[52px] dark:border-white dark:text-white dark:bg-transparent dark:hover:text-white dark:hover:bg-white/10 flex items-center justify-center gap-3 px-4 rounded-lg transition-all duration-200"
                    style={{ 
                      maxWidth: '100%', 
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '1.5rem 1rem',
                    }}
                  >
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-current dark:text-white" />
                    <span className="whitespace-nowrap text-current dark:text-white">Call Us Now</span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Google Maps Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6"
            >
              <h3 className="font-heading font-semibold text-lg text-royalNavy dark:text-slate-100 mb-4">
                Our Location
              </h3>
              <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border-2 border-premiumGold/30 dark:border-premiumGold/40 bg-stone-100 dark:bg-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.258317674889!2d78.486715315315!3d17.385044188045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Abhi Constructions Location - Hyderabad, Telangana, India"
                />
              </div>
              <p className="text-sm text-royalNavy dark:text-slate-200 mt-2 font-medium">
                {siteConfig.contact.address}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

