import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-premiumGold/30 bg-royalNavy text-marbleWhite">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-10 md:py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group flex-wrap">
              <div className="relative">
                <div className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-30 transition-opacity bg-premiumGold/20 rounded-lg" />
                <Image
                  src={siteConfig.logo.image}
                  alt="Abhi Constructions & Innovations"
                  width={240}
                  height={120}
                  className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto max-w-[180px] sm:max-w-[200px] md:max-w-[240px] object-contain drop-shadow-2xl relative z-10 transition-all duration-300 group-hover:scale-110 dark:brightness-110 dark:contrast-110 dark:drop-shadow-[0_0_20px_rgba(255,165,0,0.5)]"
                  style={{ backgroundColor: 'transparent' }}
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                />
              </div>
              <span className="text-base sm:text-lg font-semibold text-marbleWhite whitespace-nowrap">
                Constructions and Innovations
              </span>
            </Link>
            <p className="text-sm text-marbleWhite/90 leading-relaxed italic font-medium">
              {siteConfig.logo.caption}
            </p>
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com",
                  color: "#1877F2",
                  Icon: Facebook,
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com",
                  color: "#E4405F",
                  Icon: Instagram,
                },
                {
                  name: "WhatsApp",
                  href: `https://wa.me/91${siteConfig.contact.whatsapp.replace(/\s/g, "")}`,
                  color: "#25D366",
                  Icon: MessageCircle,
                },
              ].map(({ name, href, color, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group focus:outline-none"
                  aria-label={name}
                >
                  <span
                    className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-marbleWhite/90">
                    {name}
                  </span>
                </a>
              ))}
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
                <span className="text-sm text-marbleWhite/80 leading-relaxed whitespace-pre-line">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-premiumGold flex-shrink-0" />
                <a
                  href={`tel:+91${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-sm text-marbleWhite/80 hover:text-premiumGold transition-colors focus:outline-none focus:ring-2 focus:ring-premiumGold rounded-sm"
                >
                  +91 {siteConfig.contact.phone}
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
          </div>
        </div>
      </div>
    </footer>
  );
}
