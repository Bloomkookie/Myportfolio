"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Geometric station shapes
const SHAPES = {
    octahedron: () => <octahedronGeometry args={[4, 0]} />,
    torus: () => <torusGeometry args={[4, 0.15, 8, 32]} />,
    icosahedron: () => <icosahedronGeometry args={[4, 0]} />,
    dodecahedron: () => <dodecahedronGeometry args={[4, 0]} />,
    torusKnot: () => <torusKnotGeometry args={[3, 0.15, 64, 8]} />,
    ring: () => <torusGeometry args={[5, 0.1, 6, 48]} />,
};

export default function SectionStation({
    position = [0, 0, 0],
    shape = "octahedron",
    color = "#a855f7",
}) {
    const wireRef = useRef();
    const glowRef = useRef();

    const ShapeGeo = SHAPES[shape] || SHAPES.octahedron;

    useFrame(() => {
        if (wireRef.current) {
            wireRef.current.rotation.x += 0.002;
            wireRef.current.rotation.y += 0.003;
        }
        if (glowRef.current) {
            const scale = 1 + Math.sin(Date.now() * 0.001) * 0.05;
            glowRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group position={position}>
            {/* Wireframe geometric station */}
            <mesh ref={wireRef}>
                <ShapeGeo />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>

            {/* Glow ring */}
            <mesh ref={glowRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[6, 0.08, 8, 64]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={1}
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Point light at station */}
            <pointLight color={color} intensity={2} distance={50} />
        </group>
    );
}
