"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Icon3D } from "./Icon3D";

export default function ThreeComponents() {
  const icons = [
    { name: "HTML", path: "/icons/html.png" },
    { name: "CSS", path: "/icons/css.png" },
    { name: "JavaScript", path: "/icons/javascript.png" },
    { name: "React", path: "/icons/react.png" },
    { name: "Node.js", path: "/icons/nodejs.png" },
    { name: "Database", path: "/icons/database.png" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {icons.map((icon) => (
        <div key={icon.name} className="aspect-square">
          <Suspense
            fallback={
              <div className="w-full h-full bg-slate-800/50 rounded-lg animate-pulse" />
            }
          >
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Icon3D iconPath={icon.path} />
            </Canvas>
          </Suspense>
          <p className="text-center text-white font-medium mt-2">{icon.name}</p>
        </div>
      ))}
    </div>
  );
}
