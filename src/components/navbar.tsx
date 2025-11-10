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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/floorplans", label: "Floorplans" },
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
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-premiumGold/20 bg-royalNavy/95 backdrop-blur supports-[backdrop-filter]:bg-royalNavy/80 shadow-lg">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4" aria-label="Main navigation">
            <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 blur-xl opacity-30 group-hover:opacity-50 transition-opacity bg-premiumGold/20 rounded-lg" />
            <Image
              src="/projects/logo.jpeg"
              alt="Abhi Constructions & Innovations"
              width={180}
              height={90}
              className="h-16 md:h-20 w-auto object-contain brightness-110 contrast-110 saturate-110 drop-shadow-lg relative z-10 transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-premiumGold focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 rounded-sm px-2 py-1",
                pathname === item.href
                  ? "text-premiumGold"
                  : "text-marbleWhite/80"
              )}
            >
              {item.label}
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
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-royalBlue focus:ring-offset-2",
                    pathname === item.href
                      ? "text-royalBlue bg-accent"
                      : "text-foreground"
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

