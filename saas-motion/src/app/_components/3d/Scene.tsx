import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
function Box() {
  return (
    <Float speed={2} rotationIntensity={2.5} floatIntensity={2}>
      <mesh rotation={[0.4, 0.2, 0]}>
        <torusKnotGeometry args={[1, 0.4, 128, 32]} />
        <meshStandardMaterial color={"#6366f1"} />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} intensity={1} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}
