"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-h", `${height}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [isOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/95 dark:bg-royalNavy/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 dark:supports-[backdrop-filter]:bg-royalNavy/85 shadow-lg">
      <nav className="container mx-auto flex h-24 md:h-28 items-center justify-between px-4 md:px-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            {/* Enhanced glow effect - no white box */}
            <Image
              src={siteConfig.logo.image}
              alt="Abhi Constructions & Innovations"
              width={240}
              height={120}
              className="h-20 md:h-24 lg:h-28 w-auto object-contain brightness-115 contrast-115 saturate-115 drop-shadow-2xl relative z-10 transition-all duration-300 group-hover:brightness-130 group-hover:scale-110 filter"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-semibold transition-all duration-300 hover:text-premiumGold focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-md px-3 py-2 relative group",
                pathname === item.href
                  ? "text-premiumGold"
                  : "text-royalNavy dark:text-marbleWhite/90"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-premiumGold rounded-full" />
              )}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-premiumGold/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-2 bg-white dark:bg-royalNavy">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-semibold transition-all hover:bg-premiumGold/10 hover:text-premiumGold focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2",
                    pathname === item.href
                      ? "text-premiumGold bg-premiumGold/10 border-l-4 border-premiumGold"
                      : "text-royalNavy dark:text-marbleWhite"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

