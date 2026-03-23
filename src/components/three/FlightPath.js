"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SECTION_POINTS = [
    new THREE.Vector3(0, 0, 10),
    new THREE.Vector3(5, 3, -60),
    new THREE.Vector3(-8, -2, -160),
    new THREE.Vector3(10, 5, -260),
    new THREE.Vector3(-5, -3, -370),
    new THREE.Vector3(0, 2, -480),
    new THREE.Vector3(0, 0, -530),
];

const LOOKAT_POINTS = [
    new THREE.Vector3(0, 0, -20),
    new THREE.Vector3(0, 0, -90),
    new THREE.Vector3(0, 0, -190),
    new THREE.Vector3(0, 0, -290),
    new THREE.Vector3(0, 0, -400),
    new THREE.Vector3(0, 0, -510),
    new THREE.Vector3(0, 0, -560),
];

export default function FlightPath({ scrollRef }) {
    const { camera } = useThree();

    const positionCurve = useMemo(
        () => new THREE.CatmullRomCurve3(SECTION_POINTS, false, "catmullrom", 0.5),
        []
    );
    const lookAtCurve = useMemo(
        () => new THREE.CatmullRomCurve3(LOOKAT_POINTS, false, "catmullrom", 0.5),
        []
    );

    const targetPos = useRef(new THREE.Vector3());
    const targetLookAt = useRef(new THREE.Vector3());
    const currentPos = useRef(new THREE.Vector3(0, 0, 10));
    const currentLookAt = useRef(new THREE.Vector3(0, 0, -20));

    useFrame(() => {
        const offset = scrollRef.current; // 0 → 1 from page scroll

        positionCurve.getPoint(offset, targetPos.current);
        lookAtCurve.getPoint(offset, targetLookAt.current);

        currentPos.current.lerp(targetPos.current, 0.06);
        currentLookAt.current.lerp(targetLookAt.current, 0.06);

        camera.position.copy(currentPos.current);
        camera.lookAt(currentLookAt.current);

        const roll = Math.sin(offset * Math.PI * 3) * 0.02;
        camera.rotation.z = roll;
    });

    return null;
}

export { SECTION_POINTS };
