import AvatarPlaceholder from "./AvatarPlaceholder";
import { motion } from "framer-motion";
import Scene from "../sections/three/Scene";
function Hero() {
  return (
    <section className="h-[85vh] flex items-center justify-center pl-24">

      <div className="grid grid-cols-2 gap-8 items-center ml-32">

<motion.div
  initial={{
    opacity: 0,
    x: -100,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 1,
  }}
>

  <p className="text-purple-500 text-2xl">
    Hello! I'm
  </p>

<h1 className="text-8xl font-bold mt-2 leading-none">  
      DEVANSH SRIVASTAVA
  </h1>

  <p className="text-2xl mt-6">
    Aspiring Software Engineer
  </p>

  <p className="text-xl text-gray-400 mt-2">
    Python Developer | AI Enthusiast
  </p>

  <button className="
    bg-purple-600
    px-8 py-4
    rounded-xl
    mt-8
    transition-all
    duration-300
    hover:scale-110
    hover:bg-purple-500
    hover:shadow-[0_0_30px_#a855f7]
  ">
    View Projects
  </button>

</motion.div>
<div className="w-[500px] h-[500px]">
  <Scene />
</div>

      </div>

    </section>
  );
}

export default Hero;