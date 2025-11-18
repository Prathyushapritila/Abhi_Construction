/**
 * Design System - Standardized spacing, typography, and layout values
 * Use these constants across all components for consistency
 */

export const DesignSystem = {
  // Container widths
  container: {
    default: "max-w-7xl", // 1280px - standard container
    narrow: "max-w-5xl", // 1024px - for content sections
    wide: "max-w-[1536px]", // For full-width with padding
  },

  // Standardized padding
  padding: {
    section: "py-16 sm:py-20 md:py-24 lg:py-28", // Section vertical padding
    container: "px-4 sm:px-6 md:px-8", // Container horizontal padding
    card: "p-6 sm:p-8", // Card padding
    button: "px-6 py-3 sm:px-8 sm:py-4", // Button padding
  },

  // Standardized spacing (gap)
  spacing: {
    xs: "gap-4", // 16px - tight spacing
    sm: "gap-6", // 24px - default spacing
    md: "gap-8", // 32px - medium spacing
    lg: "gap-12", // 48px - large spacing
  },

  // Typography scale
  typography: {
    h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold",
    h2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold",
    h3: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold",
    h4: "text-xl sm:text-2xl md:text-3xl font-heading font-semibold",
    body: "text-base sm:text-lg md:text-xl",
    bodySmall: "text-sm sm:text-base",
  },

  // Image aspect ratios
  aspectRatio: {
    square: "aspect-square", // 1:1
    landscape: "aspect-[4/3]", // 4:3
    portrait: "aspect-[3/4]", // 3:4
    wide: "aspect-video", // 16:9
  },

  // Hero section heights
  hero: {
    mobile: "min-h-[60vh]",
    tablet: "sm:min-h-[70vh]",
    desktop: "md:min-h-[80vh]",
  },

  // Button styles
  button: {
    primary: "bg-premiumGold hover:bg-premiumGold/90 text-royalNavy font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
    outline: "border-2 border-premiumGold text-premiumGold hover:bg-premiumGold hover:text-royalNavy font-semibold transition-all duration-300",
    ghost: "text-royalNavy dark:text-white hover:text-premiumGold hover:bg-premiumGold/10 transition-all duration-300",
  },

  // Card styles
  card: {
    base: "bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
    border: "border-2 border-premiumGold/20 dark:border-premiumGold/30 hover:border-premiumGold",
  },
} as const;

