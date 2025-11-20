import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
            <div className="flex items-center gap-4 sm:gap-6 pt-2 flex-wrap">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com",
                  color: "#1877F2",
                  iconPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com",
                  color: "#E4405F",
                  iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  name: "WhatsApp",
                  href: `https://wa.me/91${siteConfig.contact.whatsapp.replace(/\s/g, "")}`,
                  color: "#25D366",
                  iconPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
                },
              ].map(({ name, href, color, iconPath }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-lg p-1"
                  aria-label={`Open ${name} in a new tab`}
                >
                  <span
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110 flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={iconPath} fill="white" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-marbleWhite/90 whitespace-nowrap">
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
