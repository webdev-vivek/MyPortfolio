import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingCylinder({
  position = [0, 0, 0],
  color = "#301b1d",
  scale = 1,
}) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.z += delta * 0.65;

    meshRef.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 1.3) * 0.08;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      rotation={[0, 0, Math.PI / 2]}
      castShadow
    >
      <cylinderGeometry args={[0.45, 0.45, 1.8, 32]} />

      <meshStandardMaterial
        color={color}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

export default FloatingCylinder;