import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingCube({
  position = [0, 0, 0],
  scale = 1,
  color = "#27384a",
  rotationSpeed = 0.2,
}) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * rotationSpeed * 1.8;
    meshRef.current.rotation.y += delta * rotationSpeed * 1.8;

    // Gentle floating motion
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 1.15) * 0.12;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial color={color} roughness={0.72} metalness={0.15} />
    </mesh>
  );
}

export default FloatingCube;
