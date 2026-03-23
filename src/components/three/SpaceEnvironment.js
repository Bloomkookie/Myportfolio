"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

/* ─── Procedural star-field ─── */
function Starfield({ count = 5000, radius = 700 }) {
    const ref = useRef();

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            const r = radius * (0.2 + Math.random() * 0.8);
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);

            const hue = Math.random() < 0.2 ? 0.7 + Math.random() * 0.15 : Math.random() < 0.3 ? 0.55 : 0.0;
            const sat = Math.random() * 0.4;
            const lit = 0.6 + Math.random() * 0.4;
            color.setHSL(hue, sat, lit);
            col[i * 3] = color.r;
            col[i * 3 + 1] = color.g;
            col[i * 3 + 2] = color.b;
        }

        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
        return geo;
    }, [count, radius]);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.002;
            ref.current.rotation.x += delta * 0.0008;
        }
    });

    return (
        <points ref={ref} geometry={geometry}>
            <pointsMaterial
                size={2}
                vertexColors
                transparent
                opacity={0.95}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

/* ─── Shooting stars ─── */
function ShootingStar({ delay = 0 }) {
    const ref = useRef();
    const time = useRef(delay);

    const startPos = useMemo(() => new THREE.Vector3(
        (Math.random() - 0.5) * 200,
        50 + Math.random() * 100,
        -Math.random() * 600
    ), []);

    const velocity = useMemo(() => new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        -(2 + Math.random() * 3),
        -(1 + Math.random() * 2)
    ), []);

    useFrame((_, delta) => {
        time.current += delta;
        if (!ref.current) return;

        const cycle = time.current % 8; // repeat every 8 seconds
        if (cycle < 1.5) {
            ref.current.visible = true;
            ref.current.position.set(
                startPos.x + velocity.x * cycle * 40,
                startPos.y + velocity.y * cycle * 40,
                startPos.z + velocity.z * cycle * 40
            );
            ref.current.scale.setScalar(1 - cycle / 1.5);
        } else {
            ref.current.visible = false;
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.3, 4, 4]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
    );
}

/* ─── Nebula cloud ─── */
function Nebula({ position, color = "#7c3aed", size = 80, opacity = 0.1 }) {
    const ref = useRef();

    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.z += delta * 0.008;
    });

    return (
        <sprite ref={ref} position={position} scale={[size, size, 1]}>
            <spriteMaterial
                color={color}
                transparent
                opacity={opacity}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </sprite>
    );
}

/* ─── Planet mesh ─── */
function Planet({ position, radius = 5, color1 = "#7c3aed", color2 = "#c084fc", speed = 0.1 }) {
    const ref = useRef();
    const ringRef = useRef();

    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.y += delta * speed;
        if (ringRef.current) ringRef.current.rotation.x += delta * speed * 0.5;
    });

    return (
        <group position={position}>
            <mesh ref={ref}>
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial
                    color={color1}
                    emissive={color2}
                    emissiveIntensity={0.2}
                    roughness={0.7}
                    metalness={0.3}
                />
            </mesh>
            <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[radius * 1.8, 0.2, 8, 64]} />
                <meshStandardMaterial
                    color={color2}
                    emissive={color2}
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.5}
                />
            </mesh>
            <pointLight color={color2} intensity={1} distance={radius * 8} />
        </group>
    );
}

/* ─── Asteroid cluster ─── */
function Asteroids({ center = [0, 0, 0], count = 15, spread = 30 }) {
    const meshes = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            position: [
                center[0] + (Math.random() - 0.5) * spread,
                center[1] + (Math.random() - 0.5) * spread,
                center[2] + (Math.random() - 0.5) * spread,
            ],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
            scale: 0.3 + Math.random() * 1.2,
            speed: 0.1 + Math.random() * 0.3,
        }));
    }, [center, count, spread]);

    return (
        <group>
            {meshes.map((a) => (
                <AsteroidMesh key={a.id} data={a} />
            ))}
        </group>
    );
}

function AsteroidMesh({ data }) {
    const ref = useRef();
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * data.speed;
            ref.current.rotation.z += delta * data.speed * 0.7;
        }
    });
    return (
        <mesh ref={ref} position={data.position} rotation={data.rotation} scale={data.scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#2d1a4e" emissive="#4c1d95" emissiveIntensity={0.1} roughness={0.9} metalness={0.3} />
        </mesh>
    );
}

/* ─── Main environment ─── */
export default function SpaceEnvironment() {
    return (
        <group>
            <Stars radius={150} depth={50} count={6000} factor={6} saturation={0} fade speed={1.5} />
            <Starfield count={5000} radius={700} />

            {/* Shooting stars */}
            <ShootingStar delay={0} />
            <ShootingStar delay={2} />
            <ShootingStar delay={4} />
            <ShootingStar delay={5.5} />
            <ShootingStar delay={7} />

            {/* Brighter nebulae */}
            <Nebula position={[-40, 20, -30]} color="#7c3aed" size={150} opacity={0.1} />
            <Nebula position={[50, -10, -100]} color="#a855f7" size={120} opacity={0.08} />
            <Nebula position={[-30, 15, -200]} color="#4c1d95" size={180} opacity={0.12} />
            <Nebula position={[60, -20, -320]} color="#6d28d9" size={130} opacity={0.07} />
            <Nebula position={[-50, 25, -450]} color="#c084fc" size={160} opacity={0.1} />
            <Nebula position={[30, -15, -550]} color="#7c3aed" size={140} opacity={0.08} />
            <Nebula position={[0, 0, -150]} color="#a855f7" size={200} opacity={0.05} />
            <Nebula position={[-20, -30, -400]} color="#c084fc" size={170} opacity={0.06} />

            {/* Planets with brighter emissive */}
            <Planet position={[35, 15, -60]} radius={7} color1="#4c1d95" color2="#a855f7" speed={0.08} />
            <Planet position={[-40, -10, -220]} radius={9} color1="#1e1b4b" color2="#6d28d9" speed={0.05} />
            <Planet position={[45, 20, -380]} radius={6} color1="#581c87" color2="#c084fc" speed={0.1} />
            <Planet position={[-35, -15, -500]} radius={12} color1="#0f0a2e" color2="#7c3aed" speed={0.03} />

            {/* Asteroids */}
            <Asteroids center={[20, -5, -400]} count={25} spread={50} />
            <Asteroids center={[-15, 10, -150]} count={12} spread={30} />

            {/* Brighter lighting */}
            <ambientLight intensity={0.25} />
            <pointLight position={[0, 30, 0]} intensity={1.2} color="#c084fc" distance={300} />
            <pointLight position={[30, -20, -150]} intensity={0.8} color="#a855f7" distance={200} />
            <pointLight position={[-20, 10, -350]} intensity={0.8} color="#6d28d9" distance={200} />
            <pointLight position={[0, 0, -550]} intensity={1} color="#c084fc" distance={250} />
        </group>
    );
}
