import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Icosahedron, Sparkles } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function MineralCrystal({ position, color, scale, speed = 1, distort = 0.25 }) {
    const ref = useRef();
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * 0.15 * speed;
            ref.current.rotation.y += delta * 0.25 * speed;
        }
    });
    return (
        <Float speed={1.2 * speed} rotationIntensity={0.6} floatIntensity={1.2}>
            <Icosahedron ref={ref} args={[1, 1]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    roughness={0.85}
                    metalness={0.08}
                    distort={distort}
                    speed={1.4}
                    flatShading
                />
            </Icosahedron>
        </Float>
    );
}

function ArchitecturalBlock({ position, color, scale = [1, 1, 1] }) {
    const ref = useRef();
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.12;
        }
    });
    return (
        <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.6}>
            <mesh ref={ref} position={position} scale={scale}>
                <boxGeometry args={[1.4, 2.2, 1.4]} />
                <meshStandardMaterial color={color} roughness={0.9} metalness={0.05} flatShading />
            </mesh>
        </Float>
    );
}

export const Scene3D = () => {
    return (
        <Canvas
            data-testid="hero-3d-canvas"
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.1} color="#FFF4E0" />
                <directionalLight position={[-3, -2, -4]} intensity={0.4} color="#C05A45" />
                <pointLight position={[0, 0, 3]} intensity={0.4} color="#DDA74F" />

                <MineralCrystal position={[0, 0.2, 0]} color="#3A4538" scale={1.4} speed={0.8} distort={0.18} />
                <MineralCrystal position={[2.2, 1.1, -1]} color="#C05A45" scale={0.55} speed={1.2} distort={0.3} />
                <MineralCrystal position={[-2.1, -0.6, -0.5]} color="#DDA74F" scale={0.7} speed={1.0} distort={0.25} />
                <MineralCrystal position={[1.6, -1.4, 0.5]} color="#EAE6DA" scale={0.45} speed={1.4} distort={0.35} />
                <ArchitecturalBlock position={[-2.6, 1.3, -2]} color="#EAE6DA" scale={[0.4, 0.7, 0.4]} />

                <Sparkles count={40} scale={[8, 6, 4]} size={2} speed={0.3} color="#DDA74F" opacity={0.6} />

                <Environment preset="apartment" />
                <fog attach="fog" args={["#F5F5F0", 8, 18]} />
            </Suspense>
        </Canvas>
    );
};
