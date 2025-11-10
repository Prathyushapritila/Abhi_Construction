import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-royalBlue">
              Abhi Constructions
            </h3>
            <p className="text-sm text-muted-foreground">
              Building excellence, one project at a time. Your trusted partner in construction and design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#residential"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#commercial"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services#renovation"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consultation"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-royalBlue mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Construction Street, Building City, BC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-royalBlue flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-royalBlue flex-shrink-0" />
                <a
                  href="mailto:info@abhiconstructions.com"
                  className="text-sm text-muted-foreground hover:text-royalBlue transition-colors focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
                >
                  info@abhiconstructions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abhi Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

