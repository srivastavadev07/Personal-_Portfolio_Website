import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        w-4
        h-4
        rounded-full
bg-purple-500/50
backdrop-blur-sm       
shadow-[0_0_20px_#a855f7]
pointer-events-none
        z-[9999]
          hidden md:block
  fixed

      "
      animate={{
        x: position.x - 8,
        y: position.y - 8,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
}

export default CustomCursor;