"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SECTION_POINTS } from "./FlightPath";

const ROBOT_OFFSET = new THREE.Vector3(4, -1.5, -8);

export default function RobotCompanion({ scrollRef }) {
    const groupRef = useRef();
    const timeRef = useRef(0);

    const robotCurve = useMemo(() => {
        const offsetPoints = SECTION_POINTS.map(
            (p) => new THREE.Vector3(p.x + ROBOT_OFFSET.x, p.y + ROBOT_OFFSET.y, p.z + ROBOT_OFFSET.z)
        );
        return new THREE.CatmullRomCurve3(offsetPoints, false, "catmullrom", 0.5);
    }, []);

    const targetPos = useRef(new THREE.Vector3());
    const currentPos = useRef(new THREE.Vector3(ROBOT_OFFSET.x, ROBOT_OFFSET.y, ROBOT_OFFSET.z + 10));

    useFrame(({ camera }, delta) => {
        timeRef.current += delta;
        const offset = scrollRef.current;

        robotCurve.getPoint(offset, targetPos.current);
        targetPos.current.y += Math.sin(timeRef.current * 1.5) * 0.5;

        currentPos.current.lerp(targetPos.current, 0.04);

        if (groupRef.current) {
            groupRef.current.position.copy(currentPos.current);
            groupRef.current.lookAt(camera.position);
            groupRef.current.rotation.z = Math.sin(timeRef.current * 1.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Body */}
            <mesh>
                <sphereGeometry args={[1.2, 16, 16]} />
                <meshStandardMaterial color="#1a1035" emissive="#7c3aed" emissiveIntensity={0.3} roughness={0.3} metalness={0.8} />
            </mesh>
            {/* Head */}
            <mesh position={[0, 1.0, 0]}>
                <sphereGeometry args={[0.7, 16, 16]} />
                <meshStandardMaterial color="#0f0a1e" emissive="#a855f7" emissiveIntensity={0.4} roughness={0.2} metalness={0.9} />
            </mesh>
            {/* Left eye */}
            <mesh position={[-0.25, 1.15, 0.55]}>
                <sphereGeometry args={[0.12, 8, 8]} />
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
            </mesh>
            {/* Right eye */}
            <mesh position={[0.25, 1.15, 0.55]}>
                <sphereGeometry args={[0.12, 8, 8]} />
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
            </mesh>
            {/* Antenna */}
            <mesh position={[0, 1.7, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
                <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0, 2.0, 0]}>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={3} />
            </mesh>
            {/* Jetpack flame */}
            <JetpackFlame />
            {/* Light on robot */}
            <pointLight color="#a855f7" intensity={1.5} distance={15} />
        </group>
    );
}

function JetpackFlame() {
    const ref = useRef();
    useFrame(() => {
        if (ref.current) {
            ref.current.scale.y = 0.8 + Math.random() * 0.6;
            ref.current.scale.x = 0.8 + Math.random() * 0.3;
        }
    });
    return (
        <mesh ref={ref} position={[0, -1.8, 0]}>
            <coneGeometry args={[0.3, 1.2, 8]} />
            <meshStandardMaterial color="#ff6b35" emissive="#ff4444" emissiveIntensity={2} transparent opacity={0.8} />
        </mesh>
    );
}
