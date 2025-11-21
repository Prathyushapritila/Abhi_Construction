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

  const baseClasses =
    "text-royalNavy dark:text-white hover:text-premiumGold dark:hover:text-premiumGold w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-transparent active:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-premiumGold/40 focus-visible:ring-offset-0 flex-shrink-0";

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className={baseClasses}
      >
        <Sun className="h-3.5 w-3.5 md:h-4 md:w-4 text-royalNavy dark:text-white" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={baseClasses}
    >
      <span className="relative w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="h-3.5 w-3.5 md:h-4 md:w-4 text-royalNavy dark:text-white absolute" />
        ) : (
          <Moon className="h-3.5 w-3.5 md:h-4 md:w-4 text-royalNavy dark:text-white absolute" />
        )}
      </span>
    </Button>
  );
}

