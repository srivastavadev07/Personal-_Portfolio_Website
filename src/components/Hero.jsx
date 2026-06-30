import { motion } from "framer-motion";
import Scene from "../sections/three/Scene";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <p className="text-purple-500 text-xl md:text-2xl">
            Hello! I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-2 leading-tight break-words">
            DEVANSH
            <br />
            SRIVASTAVA
          </h1>

          <p className="text-xl md:text-2xl mt-6">
            Aspiring Software Engineer
          </p>

          <p className="text-base md:text-xl text-gray-400 mt-2">
            Python Developer | AI Enthusiast
          </p>

<a
  href="#projects"
  className="
    inline-block
    bg-purple-600
    px-8
    py-4
    rounded-xl
    mt-8
    transition-all
    duration-300
    hover:scale-110
    hover:bg-purple-500
    hover:shadow-[0_0_30px_#a855f7]
  "
>
  View Projects
</a>        </motion.div>

        {/* Right Side */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <Scene />
        </div>

      </div>
    </section>
  );
}

export default Hero;