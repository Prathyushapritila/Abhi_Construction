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
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#ffffff] dark:bg-[#0B1426] dark:backdrop-blur-md supports-[backdrop-filter]:bg-[#ffffff] dark:supports-[backdrop-filter]:bg-[#0B1426] shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
      <nav className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 sm:px-8 lg:px-12 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 sm:gap-3 group whitespace-nowrap flex-shrink-0"
        >
          <div className="relative flex items-center">
            <Image
              src={siteConfig.logo.image}
              alt="Abhi Constructions & Innovations"
              width={240}
              height={120}
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto max-w-[140px] sm:max-w-[165px] md:max-w-[185px] lg:max-w-[210px] object-contain drop-shadow-2xl transition-all duration-300 group-hover:scale-110 dark:brightness-[1.15] dark:contrast-[1.1] dark:drop-shadow-[0_0_18px_rgba(255,165,0,0.45)]"
              priority
              sizes="(max-width: 640px) 140px, (max-width: 768px) 165px, (max-width: 1024px) 185px, 210px"
            />
          </div>
          <span className="text-[18px] sm:text-[20px] font-semibold text-[#E37B29] dark:text-white leading-none whitespace-nowrap tracking-tight">
            Constructions and Innovations
          </span>
        </Link>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden md:flex items-center space-x-8 xl:space-x-10 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-semibold transition-colors duration-300 hover:text-premiumGold focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-md px-3.5 py-2 relative group whitespace-nowrap",
                pathname === item.href
                  ? "text-premiumGold dark:text-premiumGold"
                  : "text-royalNavy dark:text-white dark:hover:text-premiumGold"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-premiumGold rounded-full" />
              )}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-premiumGold/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
          <div className="desktop-theme-toggle ml-6">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button - Right Side */}
        <div className="mobile-nav-buttons flex md:hidden items-center gap-3">
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="w-10 h-10 text-royalNavy dark:text-white hover:text-premiumGold dark:hover:text-premiumGold"
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
            <div className="container mx-auto px-4 py-4 space-y-2 bg-[#ffffff] dark:bg-slate-900">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-semibold transition-all hover:bg-premiumGold/10 hover:text-premiumGold focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2",
                    pathname === item.href
                      ? "text-premiumGold bg-premiumGold/10 border-l-4 border-premiumGold dark:!text-premiumGold"
                      : "text-royalNavy dark:!text-white"
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

