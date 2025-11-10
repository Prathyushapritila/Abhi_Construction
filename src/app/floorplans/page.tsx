"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Filter, X, MapPin, Home, Bath, Car, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Floorplan {
  id: string;
  name: string;
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
  stories: number;
  price: number;
  image: string;
  featured?: boolean;
}

const sampleFloorplans: Floorplan[] = [
  {
    id: "1",
    name: "The Royal Estate",
    beds: 5,
    baths: 4.5,
    sqft: 4500,
    garage: 3,
    stories: 2,
    price: 850000,
    image: "/api/placeholder/600/400",
    featured: true,
  },
  {
    id: "2",
    name: "Modern Manor",
    beds: 4,
    baths: 3,
    sqft: 3200,
    garage: 2,
    stories: 2,
    price: 650000,
    image: "/api/placeholder/600/400",
  },
  {
    id: "3",
    name: "Luxury Villa",
    beds: 6,
    baths: 5,
    sqft: 5200,
    garage: 4,
    stories: 2,
    price: 1200000,
    image: "/api/placeholder/600/400",
  },
  {
    id: "4",
    name: "Contemporary Classic",
    beds: 3,
    baths: 2.5,
    sqft: 2800,
    garage: 2,
    stories: 1,
    price: 550000,
    image: "/api/placeholder/600/400",
  },
  {
    id: "5",
    name: "Grand Residence",
    beds: 5,
    baths: 4,
    sqft: 4800,
    garage: 3,
    stories: 2,
    price: 950000,
    image: "/api/placeholder/600/400",
  },
  {
    id: "6",
    name: "Elegant Bungalow",
    beds: 4,
    baths: 3.5,
    sqft: 3600,
    garage: 2,
    stories: 1,
    price: 720000,
    image: "/api/placeholder/600/400",
  },
  {
    id: "7",
    name: "Executive Home",
    beds: 4,
    baths: 3,
    sqft: 3400,
    garage: 2,
    stories: 2,
    price: 680000,
    image: "/api/placeholder/600/400",
  },
  {
    id: "8",
    name: "Premium Estate",
    beds: 6,
    baths: 5.5,
    sqft: 5800,
    garage: 4,
    stories: 2,
    price: 1350000,
    image: "/api/placeholder/600/400",
  },
];

type SortOption = "price-asc" | "price-desc" | "sqft-asc" | "sqft-desc" | "newest";

export default function FloorplansPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);

  // Filter state from URL
  const minPrice = searchParams.get("minPrice") ? parseInt(searchParams.get("minPrice")!) : 0;
  const maxPrice = searchParams.get("maxPrice") ? parseInt(searchParams.get("maxPrice")!) : 2000000;
  const beds = searchParams.get("beds") ? parseInt(searchParams.get("beds")!) : 0;
  const baths = searchParams.get("baths") ? parseFloat(searchParams.get("baths")!) : 0;
  const minSqft = searchParams.get("minSqft") ? parseInt(searchParams.get("minSqft")!) : 0;
  const maxSqft = searchParams.get("maxSqft") ? parseInt(searchParams.get("maxSqft")!) : 10000;
  const garage = searchParams.get("garage") ? parseInt(searchParams.get("garage")!) : 0;
  const stories = searchParams.get("stories") ? parseInt(searchParams.get("stories")!) : 0;
  const sort = (searchParams.get("sort") as SortOption) || "newest";

  const updateFilters = (updates: Record<string, string | number>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "0" && value !== 0) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });
    router.push(`/floorplans?${params.toString()}`);
  };

  const activeFilters = [
    minPrice > 0 && `Min: $${minPrice.toLocaleString()}`,
    maxPrice < 2000000 && `Max: $${maxPrice.toLocaleString()}`,
    beds > 0 && `${beds}+ Beds`,
    baths > 0 && `${baths}+ Baths`,
    minSqft > 0 && `Min: ${minSqft} sqft`,
    maxSqft < 10000 && `Max: ${maxSqft} sqft`,
    garage > 0 && `${garage}+ Garage`,
    stories > 0 && `${stories} Stories`,
  ].filter(Boolean);

  const filteredPlans = useMemo(() => {
    let filtered = [...sampleFloorplans];

    if (minPrice > 0) filtered = filtered.filter((p) => p.price >= minPrice);
    if (maxPrice < 2000000) filtered = filtered.filter((p) => p.price <= maxPrice);
    if (beds > 0) filtered = filtered.filter((p) => p.beds >= beds);
    if (baths > 0) filtered = filtered.filter((p) => p.baths >= baths);
    if (minSqft > 0) filtered = filtered.filter((p) => p.sqft >= minSqft);
    if (maxSqft < 10000) filtered = filtered.filter((p) => p.sqft <= maxSqft);
    if (garage > 0) filtered = filtered.filter((p) => p.garage >= garage);
    if (stories > 0) filtered = filtered.filter((p) => p.stories === stories);

    // Sort
    filtered.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "sqft-asc":
          return a.sqft - b.sqft;
        case "sqft-desc":
          return b.sqft - a.sqft;
        default:
          return 0;
      }
    });

    return filtered;
  }, [minPrice, maxPrice, beds, baths, minSqft, maxSqft, garage, stories, sort]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royalNavy/5 via-background to-premiumGold/5 marble-texture">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Explore Our Floorplans
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose from our award-winning portfolio of home designs. Customize any plan to fit your family&apos;s unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <aside className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
              <Card className="border-2 border-premiumGold/20 sticky top-[calc(var(--header-h)+1rem)]">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                      <Filter className="h-5 w-5 text-royalBlue" />
                      Filters
                    </h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowFilters(false)}
                      className="lg:hidden"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Price Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={minPrice || ""}
                        onChange={(e) => updateFilters({ minPrice: e.target.value || 0 })}
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        value={maxPrice === 2000000 ? "" : maxPrice}
                        onChange={(e) => updateFilters({ maxPrice: e.target.value || 2000000 })}
                      />
                    </div>
                  </div>

                  {/* Beds */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Bedrooms</label>
                    <Select
                      value={beds.toString()}
                      onValueChange={(v) => updateFilters({ beds: parseInt(v) })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        {[3, 4, 5, 6].map((n) => (
                          <SelectItem key={n} value={n.toString()}>
                            {n}+ Beds
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Baths */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Bathrooms</label>
                    <Select
                      value={baths.toString()}
                      onValueChange={(v) => updateFilters({ baths: parseFloat(v) })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        {[2, 2.5, 3, 3.5, 4, 4.5, 5].map((n) => (
                          <SelectItem key={n} value={n.toString()}>
                            {n}+ Baths
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Square Feet */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Square Feet</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={minSqft || ""}
                        onChange={(e) => updateFilters({ minSqft: e.target.value || 0 })}
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        value={maxSqft === 10000 ? "" : maxSqft}
                        onChange={(e) => updateFilters({ maxSqft: e.target.value || 10000 })}
                      />
                    </div>
                  </div>

                  {/* Garage */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Garage</label>
                    <Select
                      value={garage.toString()}
                      onValueChange={(v) => updateFilters({ garage: parseInt(v) })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        {[2, 3, 4].map((n) => (
                          <SelectItem key={n} value={n.toString()}>
                            {n}+ Cars
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Stories */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Stories</label>
                    <Select
                      value={stories.toString()}
                      onValueChange={(v) => updateFilters({ stories: parseInt(v) })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        <SelectItem value="1">1 Story</SelectItem>
                        <SelectItem value="2">2 Stories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-premiumGold text-premiumGold"
                    onClick={() => {
                      router.push("/floorplans");
                      setShowFilters(false);
                    }}
                  >
                    Clear All
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Results Grid */}
            <div className="lg:col-span-3">
              {/* Top Bar: Sort & Map */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-4 flex-wrap">
                  {!showFilters && (
                    <Button
                      variant="outline"
                      onClick={() => setShowFilters(true)}
                      className="lg:hidden"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {filteredPlans.length} floorplan{filteredPlans.length !== 1 ? "s" : ""} found
                  </span>
                  {activeFilters.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map((filter, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-royalBlue/10 text-royalBlue text-xs rounded-full border border-royalBlue/20"
                        >
                          {filter}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {/* Map Placeholder */}
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <MapPin className="h-4 w-4 mr-2" />
                    Map View
                  </Button>

                  {/* Sort */}
                  <Select value={sort} onValueChange={(v) => updateFilters({ sort: v })}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="sqft-asc">Size: Small to Large</SelectItem>
                      <SelectItem value="sqft-desc">Size: Large to Small</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Floorplans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-premiumGold/50 group overflow-hidden">
                      <div className="relative h-48 bg-gradient-to-br from-royalBlue/20 to-premiumGold/20">
                        <Home className="h-16 w-16 text-royalBlue/30 absolute inset-0 m-auto" />
                        {plan.featured && (
                          <div className="absolute top-2 right-2 bg-premiumGold text-royalNavy px-2 py-1 rounded text-xs font-semibold">
                            Featured
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-royalBlue transition-colors">
                          {plan.name}
                        </h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Home className="h-4 w-4" />
                              {plan.beds} Beds
                            </span>
                            <span className="flex items-center gap-1">
                              <Bath className="h-4 w-4" />
                              {plan.baths} Baths
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Layers className="h-4 w-4" />
                              {plan.sqft.toLocaleString()} sqft
                            </span>
                            <span className="flex items-center gap-1">
                              <Car className="h-4 w-4" />
                              {plan.garage} Car
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-premiumGold/20">
                          <div>
                            <p className="text-xs text-muted-foreground">Starting at</p>
                            <p className="text-2xl font-heading font-bold text-royalBlue">
                              ${plan.price.toLocaleString()}
                            </p>
                          </div>
                          <Button variant="outline" size="sm" className="border-premiumGold text-premiumGold hover:bg-premiumGold/10">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredPlans.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No floorplans match your filters.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => router.push("/floorplans")}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

