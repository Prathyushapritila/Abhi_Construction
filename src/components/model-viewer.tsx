"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Group } from "three";
import Image from "next/image";

type EnvironmentPreset = "apartment" | "city" | "dawn" | "forest" | "lobby" | "night" | "park" | "studio" | "sunset" | "warehouse";

interface ModelViewerProps {
  src?: string;
  fallback?: string;
  autoRotate?: boolean;
  exposure?: number;
  environment?: EnvironmentPreset;
  className?: string;
}

function Model({ src, autoRotate }: { src: string; autoRotate?: boolean }) {
  const { scene } = useGLTF(src);
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (ref.current && autoRotate) {
      const prefersReducedMotion = typeof window !== "undefined" 
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
        : false;
      if (!prefersReducedMotion) {
        ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      }
    }
  });

  return <primitive ref={ref} object={scene} />;
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royalBlue"></div>
    </div>
  );
}

export function ModelViewer({
  src,
  fallback,
  autoRotate = false,
  exposure = 1,
  environment = "city" as EnvironmentPreset,
  className = "",
}: ModelViewerProps) {
  if (!src && fallback) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image
          src={fallback}
          alt="3D Model Preview"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }

  if (!src) {
    return null;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <Suspense fallback={<LoadingFallback />}>
          <Stage environment={environment} intensity={0.5} adjustCamera={false}>
            <Model src={src} autoRotate={autoRotate} />
          </Stage>
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

