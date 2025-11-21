"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function StickyContactButtons() {
  return (
    <div className="fixed bottom-16 right-3 sm:bottom-6 sm:right-4 md:bottom-8 md:right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col gap-2.5 sm:gap-3 md:gap-4 safe-area-inset-bottom" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}>
      <Link
        href={`https://wa.me/91${siteConfig.contact.whatsapp.replace(/\s/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-full transition-transform hover:scale-105 active:scale-95"
        aria-label="WhatsApp - Contact us on WhatsApp"
      >
        <Button
          size="lg"
          className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-200 flex items-center justify-center p-0"
          aria-label="WhatsApp - Contact us on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white flex-shrink-0 m-auto" strokeWidth={2.5} fill="none" />
        </Button>
      </Link>
      <Link
        href={`tel:+91${siteConfig.contact.phone.replace(/\s/g, "")}`}
        className="focus:outline-none focus:ring-2 focus:ring-royalBlue focus:ring-offset-2 rounded-full md:hidden"
        aria-label={`Call us at +91 ${siteConfig.contact.phone}`}
      >
        <Button
          size="lg"
          variant="outline"
          className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border-2 border-royalBlue bg-white dark:bg-slate-800 dark:border-white text-royalBlue dark:text-white hover:bg-royalBlue dark:hover:bg-white/10 hover:text-white dark:hover:text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center p-2 sm:p-2.5"
          aria-label={`Call us at +91 ${siteConfig.contact.phone}`}
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0 text-current" />
        </Button>
      </Link>
    </div>
  );
}

