"use client";

import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export function Icon3D({ iconPath }: { iconPath: string }) {
  const texture = useLoader(THREE.TextureLoader, iconPath);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
      <mesh>
        {/* Box có độ dày thay vì Plane */}
        <boxGeometry args={[1.2, 1.2, 0.1]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
    </Float>
  );
}
