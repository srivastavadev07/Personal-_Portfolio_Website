import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
} from "react-icons/si";

function Skills() {
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
];

  return (
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
      id="skills"
      className="min-h-screen flex items-center flex-col justify-center px-6 md:px-20"
    >
<h2 className="text-6xl font-bold mb-12">
  My <span className="text-purple-500">Skills</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="
              bg-slate-900/80
              p-6
              rounded-3xl
              transition-all
              duration-300
              hover:scale-105
              hover:-translate-y-2
hover:border-purple-500
hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
transition-all
duration-300
              hover:border
              hover:border-purple-500
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
{category.skills.map((skills) => (
  <span
    key={skills.name}
    className=" bg-slate-900/80
    backdrop-blur-md
    p-6
    rounded-3xl
    border border-transparent

    hover:border-purple-500
    hover:-translate-y-2
    hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]

    transition-all
    duration-300
"
  >
    {skills.icon}
    {skills.name}
  </span>
))}
            </div>
          </div>
        ))}
      </div>
</motion.section>  );
}

export default Skills;