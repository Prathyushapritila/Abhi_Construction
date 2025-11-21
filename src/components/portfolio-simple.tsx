"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Paintbrush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PortfolioCategory = "residential" | "interiors";

interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  location?: string;
}

// Portfolio items organized by category folders
// Images should be placed in: /public/Residential/, /public/Interiors/
const portfolioItemsByCategory: Record<PortfolioCategory, string[]> = {
  residential: [
    "/Residential/1.jpg",
    "/Residential/2.jpg",
    "/Residential/3.jpg",
    "/Residential/4.jpg",
  ],
  interiors: [
    "/Interiors/1.jpg",
    "/Interiors/3.jpg",
    "/Interiors/4.jpg",
    "/Interiors/5.jpg",
    "/Interiors/padmaranagar-1.jpeg",
    "/Interiors/padmaranagar-2.jpeg",
    "/Interiors/padmaranagar-3.jpeg",
    "/Interiors/padmaranagar-4.jpeg",
    "/Interiors/manikonda-1.jpeg",
    "/Interiors/manikonda-2.jpeg",
    "/Interiors/manikonda-3.jpeg",
    "/Interiors/manikonda-4.jpeg",
    "/Interiors/narsingi-1.jpeg",
    "/Interiors/narsingi-2.jpeg",
    "/Interiors/narsingi-3.jpeg",
    "/Interiors/narsingi-4.jpeg",
  ],
};

// Location labels for residential images
const residentialLocations = [
  "Rajendranagar, Hyderabad",
  "Manikonda, Hyderabad",
  "Kokapet",
  "Lb nagar",
];

// Location labels for interiors images
const interiorsLocations = [
  "Manikonda",
  "Manikonda",
  "Manikonda",
  "Manikonda",
  "PadmaRao Nagar",
  "PadmaRao Nagar",
  "PadmaRao Nagar",
  "PadmaRao Nagar",
  "Manikonda",
  "Manikonda",
  "Manikonda",
  "Manikonda",
  "Narsingi",
  "Narsingi",
  "Narsingi",
  "Narsingi",
];

const categories: { value: PortfolioCategory; label: string; icon: typeof Home }[] = [
  { value: "residential", label: "Residential", icon: Home },
  { value: "interiors", label: "Interiors", icon: Paintbrush },
];

export function PortfolioSimple() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category");
  
  // Map URL category to component category (case-insensitive)
  const getCategoryFromParam = (param: string | null): PortfolioCategory | null => {
    if (!param) return null;
    const lowerParam = param.toLowerCase();
    if (lowerParam === "residential") return "residential";
    if (lowerParam === "interiors") return "interiors";
    return null;
  };

  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | null>(
    getCategoryFromParam(categoryParam)
  );

  // Update category when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(getCategoryFromParam(categoryParam));
    } else {
      setActiveCategory(null);
    }
  }, [categoryParam]);

  // Get items based on active category or show all
  const getItemsForCategory = (category: PortfolioCategory | null) => {
    if (!category) {
      // Show all categories
      const allItems: PortfolioItem[] = [];
      Object.entries(portfolioItemsByCategory).forEach(([cat, images]) => {
        images.forEach((image, index) => {
          const locations = cat === "residential" ? residentialLocations : interiorsLocations;
          allItems.push({
            id: `${cat}-${index + 1}`,
            title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Portfolio`,
            category: cat as PortfolioCategory,
            description: `Premium ${cat} project showcasing our expertise and craftsmanship.`,
            image,
            location: locations[index] || "Hyderabad",
          });
        });
      });
      return allItems;
    }
    
    // Show items for specific category with location labels
    const locations = category === "residential" ? residentialLocations : interiorsLocations;
    return portfolioItemsByCategory[category].map((image, index) => ({
      id: `${category}-${index + 1}`,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Portfolio`,
      category,
      description: `Premium ${category} project showcasing our expertise and craftsmanship.`,
      image,
      location: locations[index] || "Hyderabad",
    }));
  };

  const filteredItems = getItemsForCategory(activeCategory);

  return (
    <section id="portfolio" className="section-standard bg-marbleWhite dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-premiumGold dark:text-premiumGold gold-underline">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-steelGray dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing excellence in every build
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-12 md:mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.value;
            return (
              <motion.div
                key={category.value}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              >
                <Button
                  variant="outline"
                  onClick={() => setActiveCategory(isActive ? null : category.value)}
                  className={cn(
                    "flex items-center justify-center space-x-2 rounded-full border-2 px-6 py-3 text-base font-semibold transition-all duration-300 min-w-[140px] shadow-sm group cursor-pointer focus:outline-none focus:ring-2 focus:ring-premiumGold focus:ring-offset-2 bg-white dark:bg-white box-border overflow-visible",
                    isActive
                      ? "bg-premiumGold border-premiumGold text-white shadow-xl hover:bg-premiumGold/90 hover:border-premiumGold/90 hover:shadow-2xl"
                      : "border-royalNavy text-royalNavy dark:border-royalNavy dark:text-royalNavy hover:border-premiumGold dark:hover:border-premiumGold hover:shadow-lg dark:hover:shadow-lg"
                  )}
                >
                <Icon 
                  className={cn(
                    "h-4 w-4 flex-shrink-0 transition-colors duration-300",
                    isActive ? "text-white" : "text-royalNavy dark:text-royalNavy group-hover:text-premiumGold dark:group-hover:text-premiumGold"
                  )}
                />
                <span className={cn(
                  "transition-colors duration-300 whitespace-nowrap",
                  isActive ? "text-white" : "text-royalNavy dark:text-royalNavy group-hover:text-premiumGold dark:group-hover:text-premiumGold"
                )}>{category.label}</span>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        {activeCategory && filteredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full overflow-hidden border-0 transition-all duration-300 hover:shadow-2xl cursor-pointer bg-white dark:bg-white group" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      loading={index < 12 ? "eager" : "lazy"}
                      onError={(e) => {
                        // Hide image if it fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {item.category === "interiors" && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-heading font-semibold text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {item.location}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <CardContent className="p-4 sm:p-6 group flex-shrink-0 flex items-center justify-center min-h-[60px]" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflow: 'visible', minWidth: 0, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60px' }}>
                    <p className="text-sm sm:text-base text-steelGray dark:text-slate-400 text-center font-medium group-hover:text-[#E37B29] dark:group-hover:text-[#E37B29] transition-colors duration-300 px-2" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflow: 'visible', wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', margin: 0, padding: '0 0.5rem', display: 'block', lineHeight: '1.5', textAlign: 'center' }}>
                      {item.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeCategory && filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-lg text-steelGray dark:text-slate-400">
              No images found for <span className="font-semibold text-premiumGold">{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</span> category.
            </p>
            <p className="text-sm text-steelGray dark:text-slate-500 mt-2">
              Please add images to <code className="bg-stone-100 dark:bg-slate-800 px-2 py-1 rounded">/public/{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}/</code> folder
            </p>
          </motion.div>
        )}
        
        {!activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-lg text-steelGray dark:text-slate-400">
              Select a category above to view projects
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

