import * as THREE from "three";

export const createEnvironment = () => {
  const envMap = new THREE.CubeTextureLoader().load([
    "/env/px.jpg", "/env/nx.jpg",
    "/env/py.jpg", "/env/ny.jpg",
    "/env/pz.jpg", "/env/nz.jpg",
  ]);
  // In Three.js r152+, encoding was replaced with colorSpace
  envMap.colorSpace = THREE.SRGBColorSpace;
  return envMap;
};

export const defaultCameraPosition: [number, number, number] = [0, 0, 5];

export const defaultLighting = {
  ambient: 0.4,
  directional: 0.8,
};

