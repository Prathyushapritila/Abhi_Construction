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
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#ffffff] dark:bg-slate-900 dark:backdrop-blur-md supports-[backdrop-filter]:bg-[#ffffff] dark:supports-[backdrop-filter]:bg-slate-900 shadow-lg dark:shadow-2xl">
      <nav className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl overflow-visible w-full" style={{ position: 'relative', zIndex: 50 }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 sm:gap-3 group whitespace-nowrap flex-shrink-1 overflow-visible min-w-0"
        >
          <div className="relative flex items-center">
            <Image
              src={siteConfig.logo.image}
              alt="Abhi Constructions & Innovations"
              width={240}
              height={120}
              className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto max-w-[180px] sm:max-w-[200px] md:max-w-[240px] object-contain drop-shadow-2xl transition-all duration-300 group-hover:scale-110 dark:brightness-110 dark:contrast-110 dark:drop-shadow-[0_0_20px_rgba(255,165,0,0.5)]"
              priority
              sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
            />
          </div>
          <span className="text-[18px] sm:text-[20px] font-semibold text-[#E37B29] dark:text-white leading-none whitespace-nowrap">
            Constructions and Innovations
          </span>
        </Link>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-semibold transition-colors duration-300 hover:text-premiumGold focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-md px-3 py-2 relative group whitespace-nowrap",
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
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button - Right Side */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3 overflow-visible flex-shrink-0 ml-2" style={{ 
          display: 'flex', 
          visibility: 'visible', 
          opacity: 1,
          position: 'relative',
          zIndex: 50,
          pointerEvents: 'auto'
        }}>
          <div className="mobile-theme-toggle overflow-visible flex-shrink-0">
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="w-10 h-10 text-royalNavy dark:text-white hover:text-premiumGold dark:hover:text-premiumGold flex-shrink-0 overflow-visible md:hidden"
            style={{ 
              display: 'flex', 
              visibility: 'visible', 
              opacity: 1, 
              zIndex: 50,
              pointerEvents: 'auto',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {isOpen ? <X className="h-6 w-6" style={{ display: 'block', visibility: 'visible', opacity: 1 }} /> : <Menu className="h-6 w-6" style={{ display: 'block', visibility: 'visible', opacity: 1 }} />}
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
            <div className="container mx-auto px-4 py-4 space-y-2 bg-[#ffffff] dark:bg-slate-900 w-full">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-semibold transition-all hover:bg-premiumGold/10 hover:text-premiumGold focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 w-full",
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
