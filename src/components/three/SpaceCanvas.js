"use client";

import { useRef, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import SpaceEnvironment from "./SpaceEnvironment";
import FlightPath from "./FlightPath";
import RobotCompanion from "./RobotCompanion";
import SectionStation from "./SectionStation";

const POSITIONS = {
    hero: [0, 0, -25],
    about: [3, 2, -90],
    projects: [-5, -1, -185],
    skills: [7, 3, -285],
    experience: [-3, -2, -395],
    contact: [0, 1, -510],
};

const SHAPES = {
    hero: "octahedron",
    about: "icosahedron",
    projects: "dodecahedron",
    skills: "torusKnot",
    experience: "torus",
    contact: "ring",
};

const COLORS = {
    hero: "#c084fc",
    about: "#a855f7",
    projects: "#7c3aed",
    skills: "#6d28d9",
    experience: "#4c1d95",
    contact: "#c084fc",
};

const SECTIONS = ["hero", "about", "projects", "skills", "experience", "contact"];

function ScrollTracker({ scrollRef }) {
    useFrame(() => {
        if (typeof window === "undefined") return;
        const scrollTop = window.scrollY || 0;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollRef.current = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    });
    return null;
}

export default function SpaceCanvas() {
    const scrollRef = useRef(0);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
            }}
        >
            <Canvas
                camera={{ fov: 60, near: 0.1, far: 2000, position: [0, 0, 10] }}
                dpr={[1, 1.5]}
                style={{ background: "#030108" }}
            >
                <color attach="background" args={["#030108"]} />
                <fog attach="fog" args={["#030108", 200, 900]} />

                <ScrollTracker scrollRef={scrollRef} />

                <Suspense fallback={null}>
                    <FlightPath scrollRef={scrollRef} />
                    <RobotCompanion scrollRef={scrollRef} />
                    <SpaceEnvironment />
                    {SECTIONS.map((key) => (
                        <SectionStation
                            key={key}
                            position={POSITIONS[key]}
                            shape={SHAPES[key]}
                            color={COLORS[key]}
                        />
                    ))}
                </Suspense>
            </Canvas>
        </div>
    );
}
