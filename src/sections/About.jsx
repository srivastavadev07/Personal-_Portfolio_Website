import AboutCard from "../components/AboutCard";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-20"
    >
<h2 className="text-6xl font-bold mb-6">
  About <span className="text-purple-500">Me</span>
</h2>
      <p className="text-gray-400 text-xl max-w-4xl mb-12">
        I am Devansh Srivastava, a Computer Science student
        passionate about software development, artificial intelligence,
        and problem-solving.
      </p>

<motion.div
  className="grid md:grid-cols-2 gap-8"
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.6,
  }}
  viewport={{
    once: true,
  }}
>

        <AboutCard
          title="Education"
          description="B.Tech Computer Science Engineering student focused on software development and AI."
          />

        <AboutCard
          title="Goal"
          description="To become a software engineer and build impactful products used by millions."
          />

</motion.div>
      
    </section>
  );
}

export default About;