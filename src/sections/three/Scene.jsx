import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import SphereModel from "./SphereModel";
import { Stars } from "@react-three/drei";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>

      <ambientLight intensity={0.8} />

      <pointLight
  position={[0, 0, 3]}
  intensity={15}
  color="#a855f7"
/>

      <directionalLight
        position={[2, 2, 2]}
        intensity={2}
      />

      <Float
        speed={3}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <SphereModel />
      </Float>

      <OrbitControls enableZoom={false} />

    </Canvas>
  );
}

export default Scene;