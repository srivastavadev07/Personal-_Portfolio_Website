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
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-20"
    >
<h2 className="text-6xl font-bold mb-12">
  My <span className="text-purple-500">Skills</span>
</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="
              bg-slate-900/80
              p-6
              rounded-3xl
              transition-all
              duration-300
              hover:scale-105
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
    className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/20 border border-purple-500/40"
  >
    {skills.icon}
    {skills.name}
  </span>
))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;