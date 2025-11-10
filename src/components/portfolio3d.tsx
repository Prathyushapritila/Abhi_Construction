"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Building2, Paintbrush, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModelViewer } from "@/components/model-viewer";
import { BeforeAfter } from "@/components/before-after";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

type PortfolioCategory = "all" | "residential" | "villas" | "interiors" | "renovations";

interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  images?: string[];
  model3d?: string;
  specs?: {
    sqft?: number;
    beds?: number;
    baths?: number;
    year?: string;
  };
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Royal Estate Residence",
    category: "villas",
    description: "A stunning 5-bedroom villa with contemporary design and premium finishes overlooking the city.",
    image: "/api/placeholder/600/400",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: { sqft: 4500, beds: 5, baths: 4.5, year: "2024" },
  },
  {
    id: "2",
    title: "Modern Family Home",
    category: "residential",
    description: "Custom-built family home with open floor plan and smart home integration.",
    image: "/api/placeholder/600/400",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: { sqft: 3200, beds: 4, baths: 3, year: "2024" },
  },
  {
    id: "3",
    title: "Luxury Kitchen Renovation",
    category: "interiors",
    description: "Complete kitchen transformation with high-end appliances and custom cabinetry.",
    image: "/api/placeholder/600/400",
    beforeAfter: {
      before: "/api/placeholder/800/600",
      after: "/api/placeholder/800/600",
    },
    specs: { sqft: 450, year: "2023" },
  },
  {
    id: "4",
    title: "Executive Office Complex",
    category: "residential",
    description: "State-of-the-art office building with sustainable design features.",
    image: "/api/placeholder/600/400",
    images: ["/api/placeholder/800/600"],
    specs: { sqft: 12000, year: "2023" },
  },
  {
    id: "5",
    title: "Historic Home Restoration",
    category: "renovations",
    description: "Preserved heritage while adding modern amenities and functionality.",
    image: "/api/placeholder/600/400",
    beforeAfter: {
      before: "/api/placeholder/800/600",
      after: "/api/placeholder/800/600",
    },
    specs: { sqft: 3800, beds: 4, baths: 3.5, year: "2023" },
  },
  {
    id: "6",
    title: "Premium Villa Complex",
    category: "villas",
    description: "Multi-unit villa development with shared amenities and luxury finishes.",
    image: "/api/placeholder/600/400",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    specs: { sqft: 5200, beds: 6, baths: 5, year: "2024" },
  },
  {
    id: "7",
    title: "Master Bedroom Suite",
    category: "interiors",
    description: "Luxurious master suite with walk-in closet and spa-like bathroom.",
    image: "/api/placeholder/600/400",
    beforeAfter: {
      before: "/api/placeholder/800/600",
      after: "/api/placeholder/800/600",
    },
    specs: { sqft: 650, year: "2023" },
  },
  {
    id: "8",
    title: "Contemporary Bungalow",
    category: "residential",
    description: "Single-story home with seamless indoor-outdoor living spaces.",
    image: "/api/placeholder/600/400",
    images: ["/api/placeholder/800/600"],
    specs: { sqft: 2800, beds: 3, baths: 2.5, year: "2022" },
  },
];

const categories: { value: PortfolioCategory; label: string; icon: typeof Home }[] = [
  { value: "all", label: "All Projects", icon: Building2 },
  { value: "residential", label: "Residential", icon: Home },
  { value: "villas", label: "Villas", icon: Building2 },
  { value: "interiors", label: "Interiors", icon: Paintbrush },
  { value: "renovations", label: "Renovations", icon: Wrench },
];

export function Portfolio3D() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const currentImages = selectedItem?.images || [];
  const hasMultipleImages = currentImages.length > 1;

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
            Our Portfolio
          </h2>
          <p className="text-xl text-steelGray max-w-2xl mx-auto">
            Showcasing excellence in every build
          </p>
        </motion.div>

        {/* Filter Tabs - Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center space-x-2 ${
                  activeCategory === category.value
                    ? "bg-royalBlue text-white border-royalBlue"
                    : "border-premiumGold text-premiumGold hover:bg-premiumGold/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.label}</span>
              </Button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-premiumGold/50 group overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item);
                    setCurrentImageIndex(0);
                  }}
                >
                  <div className="relative h-64 bg-gradient-to-br from-royalBlue/20 to-premiumGold/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-royalBlue/30" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-royalBlue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    {item.specs && (
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        {item.specs.sqft && <span>{item.specs.sqft.toLocaleString()} sqft</span>}
                        {item.specs.beds && <span>{item.specs.beds} Beds</span>}
                        {item.specs.baths && <span>{item.specs.baths} Baths</span>}
                      </div>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-premiumGold text-premiumGold hover:bg-premiumGold/10"
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <Dialog.Root open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-royalNavy/80 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl max-h-[90vh] bg-card border-2 border-premiumGold/20 rounded-lg shadow-xl z-50 overflow-y-auto">
            {selectedItem && (
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Dialog.Title className="text-3xl font-heading font-bold mb-2">
                      {selectedItem.title}
                    </Dialog.Title>
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                  </div>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>

                {/* Image Carousel or 3D Viewer */}
                <div className="relative h-[400px] md:h-[500px] mb-6 rounded-lg overflow-hidden border-2 border-premiumGold/20">
                  {selectedItem.model3d ? (
                    <ModelViewer
                      src={selectedItem.model3d}
                      fallback={selectedItem.image}
                      autoRotate
                      className="h-full"
                    />
                  ) : selectedItem.beforeAfter ? (
                    <BeforeAfter
                      before={selectedItem.beforeAfter.before}
                      after={selectedItem.beforeAfter.after}
                      className="h-full"
                    />
                  ) : currentImages.length > 0 ? (
                    <>
                      <div className="relative h-full">
                        <Image
                          src={currentImages[currentImageIndex]}
                          alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      {hasMultipleImages && (
                        <>
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-premiumGold"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
                            }}
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-premiumGold"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
                            }}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {currentImages.map((_, i) => (
                              <button
                                key={i}
                                className={`h-2 rounded-full transition-all ${
                                  i === currentImageIndex ? "w-8 bg-premiumGold" : "w-2 bg-card/50"
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(i);
                                }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="relative h-full">
                      <Image
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                </div>

                {/* Specs */}
                {selectedItem.specs && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {selectedItem.specs.sqft && (
                      <div className="text-center p-4 bg-royalBlue/10 rounded-lg border border-royalBlue/20">
                        <p className="text-2xl font-heading font-bold text-royalBlue">
                          {selectedItem.specs.sqft.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">Square Feet</p>
                      </div>
                    )}
                    {selectedItem.specs.beds && (
                      <div className="text-center p-4 bg-premiumGold/10 rounded-lg border border-premiumGold/20">
                        <p className="text-2xl font-heading font-bold text-premiumGold">
                          {selectedItem.specs.beds}
                        </p>
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                      </div>
                    )}
                    {selectedItem.specs.baths && (
                      <div className="text-center p-4 bg-royalBlue/10 rounded-lg border border-royalBlue/20">
                        <p className="text-2xl font-heading font-bold text-royalBlue">
                          {selectedItem.specs.baths}
                        </p>
                        <p className="text-sm text-muted-foreground">Bathrooms</p>
                      </div>
                    )}
                    {selectedItem.specs.year && (
                      <div className="text-center p-4 bg-premiumGold/10 rounded-lg border border-premiumGold/20">
                        <p className="text-2xl font-heading font-bold text-premiumGold">
                          {selectedItem.specs.year}
                        </p>
                        <p className="text-sm text-muted-foreground">Year Completed</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

