"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function StickyContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-full"
        aria-label="WhatsApp"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </Link>
      <Link
        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
        className="focus:outline-none focus:ring-2 focus:ring-royalBlue focus:ring-offset-2 rounded-full"
        aria-label="Call"
      >
        <Button
          size="lg"
          variant="outline"
          className="h-14 w-14 rounded-full border-2 border-royalBlue bg-white text-royalBlue hover:bg-royalBlue hover:text-white shadow-lg hover:scale-110 transition-transform"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
}

