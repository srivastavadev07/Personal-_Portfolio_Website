import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function StarsBackground() {
  return (
<div className="fixed inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
  radius={80}
  depth={40}
  count={3000}
  factor={1}
  saturation={0}
//   fade={false}
  speed={0.5}
/>
      </Canvas>
    </div>
  );
}
export default StarsBackground;