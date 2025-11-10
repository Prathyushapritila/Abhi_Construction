"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

function ATower() {
  const meshRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main A Tower - Extruded Prism */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 3, 0.3]} />
        <meshStandardMaterial color="#0A4DAD" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Left leg */}
      <mesh position={[-0.4, -0.8, 0]} castShadow>
        <boxGeometry args={[0.2, 1.5, 0.3]} />
        <meshStandardMaterial color="#0A4DAD" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Right leg */}
      <mesh position={[0.4, -0.8, 0]} castShadow>
        <boxGeometry args={[0.2, 1.5, 0.3]} />
        <meshStandardMaterial color="#0A4DAD" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Crossbar */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshStandardMaterial color="#0A4DAD" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Gold mullions */}
      {[-0.3, 0, 0.3].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.2]} castShadow>
          <boxGeometry args={[0.05, 3, 0.05]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
      <ATower />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!window.matchMedia("(prefers-reduced-motion: reduce)").matches}
        autoRotateSpeed={0.5}
      />
      <Environment preset="city" />
    </>
  );
}

export function Hero3D() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-royalNavy/5 via-background to-premiumGold/5 marble-texture">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-royalBlue" />
              <span className="text-sm font-semibold text-royalBlue uppercase tracking-wider">
                Building Dreams with Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
              Custom Homes
              <span className="block text-royalBlue">Built to Perfection</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Architecture and interiors under one roof. Precision, transparency, and timelines you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-royalBlue hover:bg-royalBlue/90 text-white text-lg px-8 py-6 gold-shimmer"
              >
                <Link href="/floorplans">
                  Explore Floorplans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-premiumGold text-premiumGold hover:bg-premiumGold/10"
              >
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] w-full"
          >
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full bg-card rounded-lg border-2 border-royalBlue/20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royalBlue"></div>
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                className="rounded-lg"
              >
                <Scene />
              </Canvas>
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Marquee Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 bg-royalNavy/80 backdrop-blur-sm border-t border-premiumGold/20 py-4"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-sm text-marbleWhite flex-wrap">
            <span className="font-semibold">250+ Homes Delivered</span>
            <span className="text-premiumGold">•</span>
            <span className="font-semibold">120+ Interiors</span>
            <span className="text-premiumGold">•</span>
            <span className="font-semibold">12+ Years</span>
            <span className="text-premiumGold">•</span>
            <span className="font-semibold">30+ Awards</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

