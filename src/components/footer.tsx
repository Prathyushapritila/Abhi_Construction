import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-premiumGold/30 bg-royalNavy text-marbleWhite">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative">
                <div className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-30 transition-opacity bg-premiumGold/20 rounded-lg" />
                <Image
                  src="/projects/logo.jpeg"
                  alt="Abhi Constructions & Innovations"
                  width={180}
                  height={90}
                  className="h-16 md:h-18 w-auto object-contain brightness-110 contrast-110 saturate-110 drop-shadow-md relative z-10 transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="text-sm text-marbleWhite/80 leading-relaxed">
              {siteConfig.tagline}. Building excellence, one project at a time.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-marbleWhite/60 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-marbleWhite/60 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-marbleWhite/60 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-marbleWhite/60 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-premiumGold text-lg">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm inline-block"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
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
              <li className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-premiumGold mt-1 flex-shrink-0" />
                <div className="text-sm text-marbleWhite/80">
                  <p className="font-medium text-marbleWhite">Mon-Sat: 9AM-7PM</p>
                  <p>Sun: 10AM-5PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-premiumGold/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-marbleWhite/60 text-center md:text-left">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
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
