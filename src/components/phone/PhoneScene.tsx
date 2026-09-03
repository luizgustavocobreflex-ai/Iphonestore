import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import PhoneModel, { type PhoneColorway } from "./PhoneModel";

function Rig({
  autoRotate,
  colorway,
}: {
  autoRotate: boolean;
  colorway: PhoneColorway;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.22;
    }
  });
  return (
    <group ref={group} rotation={[0.08, -0.5, 0]}>
      <PhoneModel colorway={colorway} />
    </group>
  );
}

interface PhoneSceneProps {
  colorway?: PhoneColorway;
  autoRotate?: boolean;
  interactive?: boolean;
  height?: number | string;
}

export default function PhoneScene({
  colorway = "natural",
  autoRotate = true,
  interactive = true,
  height = "100%",
}: PhoneSceneProps) {
  return (
    <div style={{ width: "100%", height, touchAction: "none" }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.15;
        }}
      >
        <color attach="background" args={["#0a0a0c"]} />
        <PerspectiveCamera makeDefault position={[0, 0, 5.4]} fov={32} />

        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 4, 5]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-4, 1, -2]} intensity={0.5} color="#c9a876" />
        <pointLight position={[0, -2, 3]} intensity={0.4} color="#8fa2c9" />

        <Suspense fallback={null}>
          <Environment resolution={256}>
            <group>
              <Lightformer form="rect" intensity={2.2} color="#ffffff" position={[0, 3, 2]} scale={[4, 2, 1]} target={[0, 0, 0]} />
              <Lightformer form="rect" intensity={1.1} color="#c9a876" position={[-3, 1, 1]} scale={[2, 3, 1]} rotation={[0, Math.PI / 3, 0]} />
              <Lightformer form="rect" intensity={0.8} color="#7a8bab" position={[3, -1, -1]} scale={[2, 3, 1]} rotation={[0, -Math.PI / 3, 0]} />
              <Lightformer form="ring" intensity={1.4} color="#ffffff" position={[0, 0, -4]} scale={6} />
            </group>
          </Environment>

          <group position={[0, -0.15, 0]}>
            <Rig autoRotate={autoRotate} colorway={colorway} />
            <ContactShadows position={[0, -1.7, 0]} opacity={0.55} scale={8} blur={2.4} far={3} resolution={512} color="#000000" />
          </group>
        </Suspense>

        {interactive && (
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3.8}
            maxDistance={7}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 + 0.4}
            rotateSpeed={0.6}
          />
        )}
      </Canvas>
    </div>
  );
}
