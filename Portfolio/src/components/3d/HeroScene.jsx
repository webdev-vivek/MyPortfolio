import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  PerspectiveCamera,
  Sparkles,
  RoundedBox,
} from "@react-three/drei";

import FloatingCube from "./FloatingCube";
import FloatingSphere from "./FloatingSphere";
import FloatingCylinder from "./FloatingCylinder";
import SceneLights from "./SceneLights";
import CameraRig from "./CameraRig";

function SceneObjects() {
  return (
    <CameraRig>
      {/* LEFT — SMALL FLOATING CUBE */}
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={1}>
        <FloatingCube
          position={[-4.8, 2.4, -3]}
          scale={0.65}
          color="#3f2670"
          rotationSpeed={0.05}
        />
      </Float>

      {/* RIGHT — SMALL BACK CUBE */}
      <Float speed={1.3} rotationIntensity={0.1} floatIntensity={0.1}>
        <FloatingCube
          position={[4.5, 1.8, -3]}
          scale={0.65}
          color="#312E81"
          rotationSpeed={0.04}
        />
      </Float>
      {/* CENTER — FLOATING FRAME */}
      <Float speed={1.3} rotationIntensity={0.18} floatIntensity={1.5}>
        <RoundedBox
          position={[2.2, 0.1, -4]}
          args={[1.25, 0.85, 0.08]}
          radius={0.08}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#6D28D9"
            roughness={0.4}
            metalness={0.6}
            emissive="#4C1D95"
            emissiveIntensity={0.12}
          />
        </RoundedBox>
      </Float>

      {/* LOWER RIGHT — SMALL DARK CUBE */}
      <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.5}>
        <FloatingCube
          position={[4.2, -2.6, -2]}
          scale={0.7}
          color="#34178c"
          rotationSpeed={0.06}
        />
      </Float>

      {/* SMALL LAVENDER ORB */}
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.6}>
        <FloatingSphere
          position={[-3.5, -1.8, -1]}
          scale={0.18}
          color="#6D28D9"
        />
      </Float>

      {/* SMALL RIGHT CYLINDER */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <FloatingCylinder
          position={[4.6, -0.7, -1]}
          scale={0.45}
          color="#791ff0"
        />
      </Float>
      {/* SMALL UPPER-LEFT SPHERE */}
      <Float speed={1.6} rotationIntensity={0.05} floatIntensity={0.6}>
        <FloatingSphere
          position={[-5.2, -0.4, -2]}
          scale={0.11}
          color="#172554"
        />
      </Float>

      {/* SMALL LOWER-LEFT CUBE */}
      <Float speed={0.9} rotationIntensity={0.16} floatIntensity={0.4}>
        <FloatingCube
          position={[-4.4, -2.6, -2.5]}
          scale={0.45}
          color="#4C1D95"
          rotationSpeed={0.06}
        />
      </Float>
    </CameraRig>
  );
}

function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 11]} fov={45} />

        <SceneLights />

        <SceneObjects />

        <Sparkles
          count={35}
          scale={[12, 8, 8]}
          size={1}
          speed={0.15}
          opacity={0.25}
        />

        <Environment preset="night" />

        {/* Ground */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3.35, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />

          <shadowMaterial opacity={0.25} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default HeroScene;
