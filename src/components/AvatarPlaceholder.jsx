import { motion } from "framer-motion";

function AvatarPlaceholder() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity
      }}
      className="
      w-80
      h-80
      rounded-full
      bg-purple-500/20
      border
      border-purple-500
      shadow-[0_0_80px_rgba(168,85,247,0.6)]
      "
    />
  );
}

export default AvatarPlaceholder;