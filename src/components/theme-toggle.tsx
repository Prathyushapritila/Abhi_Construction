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
        className="text-royalNavy dark:text-white w-4 h-4 flex items-center justify-center"
      >
        <Sun className="h-2 w-2 text-royalNavy dark:text-white" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="text-royalNavy dark:text-white hover:text-premiumGold dark:hover:text-premiumGold w-4 h-4 flex items-center justify-center"
    >
      <span className="relative w-2 h-2 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="h-2 w-2 text-royalNavy dark:text-white absolute" />
        ) : (
          <Moon className="h-2 w-2 text-royalNavy dark:text-white absolute" />
        )}
      </span>
    </Button>
  );
}

