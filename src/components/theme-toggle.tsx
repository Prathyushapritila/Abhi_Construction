"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        aria-label="Toggle theme" 
        className="text-royalNavy dark:text-white w-6 h-6 flex items-center justify-center"
      >
        <Sun className="h-3 w-3 text-royalNavy dark:text-white" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="text-royalNavy dark:text-white hover:text-premiumGold dark:hover:text-premiumGold w-6 h-6 flex items-center justify-center"
    >
      <span className="relative w-3 h-3 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="h-3 w-3 text-royalNavy dark:text-white absolute" />
        ) : (
          <Moon className="h-3 w-3 text-royalNavy dark:text-white absolute" />
        )}
      </span>
    </Button>
  );
}

