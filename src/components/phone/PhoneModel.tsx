import { useMemo, useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { makeBrushedRoughnessMap, makeScreenTexture } from "./textures";

export type PhoneColorway = "natural" | "desert" | "black";

const COLORWAYS: Record<PhoneColorway, { body: string; camera: string }> = {
  natural: { body: "#9a958c", camera: "#3a3733" },
  desert: { body: "#c9ab84", camera: "#4a3f30" },
  black: { body: "#3c3c3e", camera: "#141416" },
};

const W = 1.48;
const H = 3.05;
const D = 0.145;
const RADIUS = 0.22;

function CameraLens({ position, size = 0.19 }: { position: [number, number, number]; size?: number }) {
  return (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[size, size, 0.05, 48]} />
        <meshStandardMaterial color="#1a1a1c" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0, 0.028]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[size, 0.012, 16, 48]} />
        <meshStandardMaterial color="#d9d9d9" metalness={1} roughness={0.15} />
      </mesh>
      <mesh position={[0, 0, 0.026]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[size - 0.02, 48]} />
        <meshPhysicalMaterial
          color="#0a0e14"
          metalness={0}
          roughness={0.05}
          transmission={0.4}
          thickness={0.2}
          clearcoat={1}
        />
      </mesh>
    </group>
  );
}

export default function PhoneModel({ colorway = "natural" }: { colorway?: PhoneColorway }) {
  const palette = COLORWAYS[colorway];
  const roughnessMap = useMemo(() => makeBrushedRoughnessMap(), []);
  const screenTexture = useMemo(() => makeScreenTexture("#c9a876"), []);
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group}>
      {/* Body / frame */}
      <RoundedBox args={[W, H, D]} radius={RADIUS} smoothness={6} creaseAngle={0.4}>
        <meshPhysicalMaterial
          color={palette.body}
          metalness={0.92}
          roughness={0.38}
          roughnessMap={roughnessMap}
          clearcoat={0.35}
          clearcoatRoughness={0.4}
          reflectivity={0.6}
        />
      </RoundedBox>

      {/* Back glass panel (subtle inset) */}
      <mesh position={[0, 0, -D / 2 - 0.001]}>
        <planeGeometry args={[W - 0.045, H - 0.045]} />
        <meshPhysicalMaterial color={palette.body} metalness={0.55} roughness={0.5} clearcoat={0.6} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, D / 2 + 0.002]}>
        <planeGeometry args={[W - 0.05, H - 0.05]} />
        <meshBasicMaterial map={screenTexture} toneMapped={false} />
      </mesh>
      {/* Cover glass sheen on top of screen */}
      <mesh position={[0, 0, D / 2 + 0.004]}>
        <planeGeometry args={[W - 0.05, H - 0.05]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.18}
          color="#ffffff"
          metalness={0}
          roughness={0.08}
          transmission={0.9}
          clearcoat={1}
        />
      </mesh>

      {/* Dynamic Island */}
      <mesh position={[0, H * 0.36, D / 2 + 0.006]}>
        <capsuleGeometry args={[0.052, 0.22, 4, 16]} />
        <meshStandardMaterial color="#000000" roughness={0.3} />
      </mesh>

      {/* Camera bump plate */}
      <group position={[-W * 0.24, H * 0.31, -D / 2 - 0.03]}>
        <RoundedBox args={[0.62, 0.62, 0.06]} radius={0.14} smoothness={4}>
          <meshPhysicalMaterial color={palette.camera} metalness={0.7} roughness={0.5} clearcoat={0.3} />
        </RoundedBox>
        <CameraLens position={[-0.15, 0.15, 0.05]} />
        <CameraLens position={[0.15, 0.15, 0.05]} />
        <CameraLens position={[-0.15, -0.15, 0.05]} />
        <mesh position={[0.15, -0.15, 0.045]}>
          <circleGeometry args={[0.05, 24]} />
          <meshStandardMaterial color="#e7dcc9" metalness={0.4} roughness={0.6} />
        </mesh>
      </group>

      {/* Side buttons */}
      <mesh position={[W / 2 + 0.008, H * 0.18, 0.05]}>
        <boxGeometry args={[0.02, 0.32, 0.09]} />
        <meshStandardMaterial color={palette.camera} metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[-W / 2 - 0.008, H * 0.12, 0.06]}>
        <boxGeometry args={[0.02, 0.16, 0.08]} />
        <meshStandardMaterial color={palette.camera} metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[-W / 2 - 0.008, -H * 0.02, 0.08]}>
        <boxGeometry args={[0.02, 0.5, 0.08]} />
        <meshStandardMaterial color={palette.camera} metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}
