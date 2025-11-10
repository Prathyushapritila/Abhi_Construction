"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface GoldUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export function GoldUnderline({ children, className = "" }: GoldUnderlineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.classList.add("animate");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`gold-underline ${className}`}>
      {children}
    </div>
  );
}

