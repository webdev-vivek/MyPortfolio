import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function CameraRig({ children }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const scroll =
      window.scrollY /
      Math.max(
        document.documentElement.scrollHeight -
          window.innerHeight,
        1
      );

    const targetRotationY =
      state.pointer.x * 0.12 + scroll * 0.12;

    const targetRotationX =
      -state.pointer.y * 0.06 + scroll * 0.06;

    const targetPositionY = -scroll * 0.8;
    const targetPositionX = scroll * 0.35;

    groupRef.current.rotation.y +=
      (targetRotationY - groupRef.current.rotation.y) *
      0.03;

    groupRef.current.rotation.x +=
      (targetRotationX - groupRef.current.rotation.x) *
      0.03;

    groupRef.current.position.y +=
      (targetPositionY - groupRef.current.position.y) *
      0.03;

    groupRef.current.position.x +=
      (targetPositionX - groupRef.current.position.x) *
      0.03;
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
}

export default CameraRig;