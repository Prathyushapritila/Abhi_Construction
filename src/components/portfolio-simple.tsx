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

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Modern Family Home",
    category: "residential",
    description: "Custom-built family home with open floor plan and premium finishes.",
    image: "/projects/interior-1.jpeg",
    location: "Hyderabad",
  },
  {
    id: "2",
    title: "Luxury Villa",
    category: "villas",
    description: "Contemporary villa with stunning architecture and landscaping.",
    image: "/projects/living-room-1.jpeg",
    location: "Hyderabad",
  },
  {
    id: "3",
    title: "Elegant Living Room",
    category: "interiors",
    description: "Sophisticated interior design with modern furniture and lighting.",
    image: "/projects/kitchen-1.jpeg",
    location: "Hyderabad",
  },
  {
    id: "4",
    title: "Premium Kitchen Design",
    category: "interiors",
    description: "High-end kitchen with custom cabinetry and premium appliances.",
    image: "/projects/bathroom-1.jpeg",
    location: "Hyderabad",
  },
  {
    id: "5",
    title: "Contemporary Residence",
    category: "residential",
    description: "Beautiful home featuring clean lines and natural materials.",
    image: "/projects/dining-1.jpeg",
    location: "Hyderabad",
  },
  {
    id: "6",
    title: "Master Bedroom Suite",
    category: "interiors",
    description: "Luxurious bedroom with elegant furnishings and warm ambiance.",
    image: "/projects/alcove-1.jpeg",
    location: "Hyderabad",
  },
  {
    id: "7",
    title: "Luxury Villa Estate",
    category: "villas",
    description: "Spacious villa with modern amenities and elegant design.",
    image: "/projects/interior-2.jpeg",
    location: "Hyderabad",
  },
  {
    id: "8",
    title: "Commercial Office Space",
    category: "commercial",
    description: "Modern commercial office with professional design and layout.",
    image: "/projects/interior-1.jpeg",
    location: "Hyderabad",
  },
];

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

  const filteredItems = activeCategory
    ? portfolioItems.filter((item) => item.category === activeCategory)
    : portfolioItems;

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

