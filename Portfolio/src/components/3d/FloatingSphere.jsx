import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingSphere({
  position = [0, 0, 0],
  color = "#ffd38a",
  scale = 1,
}) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 1.8) * 0.15;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      castShadow
    >
      <sphereGeometry args={[0.7, 48, 48]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        roughness={0.25}
      />
    </mesh>
  );
}

export default FloatingSphere;