"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Paintbrush, Building2, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type PortfolioCategory = "residential" | "villas" | "commercial" | "interiors";

interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  location?: string;
}

// Portfolio items organized by category folders
// Images should be placed in: /public/Residential/, /public/Villas/, /public/Commercial/, /public/Interiors/
const portfolioItemsByCategory: Record<PortfolioCategory, string[]> = {
  residential: [
    "/Residential/1.jpg",
    "/Residential/2.jpg",
    "/Residential/3.jpg",
    "/Residential/4.jpg",
    "/Residential/5.jpg",
    "/Residential/6.jpg",
  ],
  villas: [
    "/Villas/1.jpg",
    "/Villas/2.jpg",
    "/Villas/3.jpg",
    "/Villas/4.jpg",
    "/Villas/5.jpg",
    "/Villas/6.jpg",
  ],
  commercial: [
    "/Commercial/1.jpg",
    "/Commercial/2.jpg",
    "/Commercial/3.jpg",
    "/Commercial/4.jpg",
    "/Commercial/5.jpg",
    "/Commercial/6.jpg",
  ],
  interiors: [
    "/Interiors/1.jpg",
    "/Interiors/2.jpg",
    "/Interiors/3.jpg",
    "/Interiors/4.jpg",
    "/Interiors/5.jpg",
    "/Interiors/6.jpg",
  ],
};

const categories: { value: PortfolioCategory; label: string; icon: typeof Home }[] = [
  { value: "residential", label: "Residential", icon: Home },
  { value: "villas", label: "Villas", icon: Building2 },
  { value: "commercial", label: "Commercial", icon: Building },
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
    if (lowerParam === "villas") return "villas";
    if (lowerParam === "commercial") return "commercial";
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
          allItems.push({
            id: `${cat}-${index + 1}`,
            title: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Project ${index + 1}`,
            category: cat as PortfolioCategory,
            description: `Premium ${cat} project showcasing our expertise and craftsmanship.`,
            image,
            location: "Hyderabad",
          });
        });
      });
      return allItems;
    }
    
    // Show items for specific category
    return portfolioItemsByCategory[category].map((image, index) => ({
      id: `${category}-${index + 1}`,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Project ${index + 1}`,
      category,
      description: `Premium ${category} project showcasing our expertise and craftsmanship.`,
      image,
      location: "Hyderabad",
    }));
  };

  const filteredItems = getItemsForCategory(activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-marbleWhite dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy dark:text-premiumGold gold-underline">
            Our Portfolio
          </h2>
          <p className="text-xl text-steelGray dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing excellence in every build
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(activeCategory === category.value ? null : category.value)}
                className={`flex items-center space-x-2 ${
                  activeCategory === category.value
                    ? "bg-royalBlue text-white border-royalBlue hover:bg-royalBlue/90"
                    : "border-premiumGold text-premiumGold hover:bg-premiumGold/10 dark:border-premiumGold dark:text-premiumGold"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-premiumGold/50 group overflow-hidden bg-white dark:bg-slate-800">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-royalNavy dark:text-slate-100 group-hover:text-premiumGold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-steelGray dark:text-slate-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  {item.location && (
                    <p className="text-xs text-premiumGold font-semibold mb-4">
                      {item.location}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

