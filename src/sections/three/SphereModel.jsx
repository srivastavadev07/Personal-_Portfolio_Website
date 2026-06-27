import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function SphereModel() {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 32, 32]} />

      <meshStandardMaterial
        color="#a855f7"
        wireframe
      />
    </mesh>
  );
}

export default SphereModel;