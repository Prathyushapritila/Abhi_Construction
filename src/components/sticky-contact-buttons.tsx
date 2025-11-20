"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function StickyContactButtons() {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 sm:gap-4 md:gap-5 safe-area-inset-bottom">
      <Link
        href={`https://wa.me/91${siteConfig.contact.whatsapp.replace(/\s/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-full transition-transform hover:scale-105 active:scale-95"
        aria-label="WhatsApp - Contact us on WhatsApp"
      >
        <Button
          size="lg"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-200 flex items-center justify-center p-0"
          aria-label="WhatsApp - Contact us on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" strokeWidth={2.5} fill="none" />
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
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-royalBlue bg-white text-royalBlue hover:bg-royalBlue hover:text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center p-0"
          aria-label={`Call us at +91 ${siteConfig.contact.phone}`}
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </Link>
    </div>
  );
}

