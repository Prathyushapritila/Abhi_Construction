import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-premiumGold/30 bg-royalNavy text-marbleWhite">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative">
                <div className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-30 transition-opacity bg-premiumGold/20 rounded-lg" />
                <Image
                  src={siteConfig.logo.image}
                  alt="Abhi Constructions & Innovations"
                  width={180}
                  height={90}
                  className="h-16 md:h-18 w-auto object-contain brightness-110 contrast-110 saturate-110 drop-shadow-md relative z-10 transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="text-sm text-marbleWhite/90 leading-relaxed italic font-medium">
              {siteConfig.logo.caption}
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marbleWhite/60 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marbleWhite/60 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/91${siteConfig.contact.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-marbleWhite/60 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-premiumGold text-lg">Contact Us</h4>
            <ul className="space-y-3">
              {siteConfig.contact.name && (
                <li className="flex items-start space-x-3">
                  <div className="h-4 w-4 text-premiumGold mt-1 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-marbleWhite">{siteConfig.contact.name}</p>
                  </div>
                </li>
              )}
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-premiumGold mt-1 flex-shrink-0" />
                <span className="text-sm text-marbleWhite/80 leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-premiumGold flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold rounded-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-premiumGold flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold rounded-sm break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-premiumGold/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-marbleWhite/60 text-center md:text-left">
              &copy; 2017 {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/91${siteConfig.contact.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-premiumGold rounded-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
