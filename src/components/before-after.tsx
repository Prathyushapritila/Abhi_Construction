"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  }, [isDragging, handleMove]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-premiumGold/20 ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={after}
          alt={afterLabel}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeLabel}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-premiumGold shadow-lg z-10 cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-premiumGold rounded-full flex items-center justify-center shadow-lg border-2 border-royalNavy">
          <ChevronLeft className="h-4 w-4 text-royalNavy" />
          <ChevronRight className="h-4 w-4 text-royalNavy" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-royalNavy/80 text-marbleWhite px-3 py-1 rounded text-sm font-semibold backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-premiumGold/90 text-royalNavy px-3 py-1 rounded text-sm font-semibold">
        {afterLabel}
      </div>
    </div>
  );
}

