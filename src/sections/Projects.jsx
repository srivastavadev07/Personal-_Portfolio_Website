import { FaRobot, FaGlobe } from "react-icons/fa";
function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      status: "🚧 In Progress",
      description:
        "A modern 3D portfolio website built using React, Tailwind CSS, and Three.js with interactive animations and responsive design.",
      tech: ["React", "Tailwind", "Three.js"],
      demo: "#",
    },
    {
      title: "Jarvis AI Assistant",
      status: "🚧 In Progress",
      description:
        "An AI-powered voice assistant capable of speech recognition, text-to-speech, and automation using Python.",
      tech: ["Python", "SpeechRecognition", "pyttsx3"],
      github: "https://github.com/yourusername/jarvis-ai-assistant",

    },
    {
      title: "Next Project",
      status: "🔥 Coming Soon",
      description:
        "Currently exploring DSA, Backend Development, and AI. New projects will be added soon.",
      tech: ["Learning", "Building", "Growing"],
       buttonText: "Coming Soon",
  buttonLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-20"
    >
      <h2 className="text-5xl font-bold text-center mb-4">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Projects I've built and learned from
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              bg-slate-900/80
              backdrop-blur-md
              p-6
              rounded-3xl
              flex flex-col justify-between
              border border-transparent
              hover:border-purple-500
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-purple-400 mb-4">
              {project.status}
            </p>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="
                    px-3 py-1
                    rounded-full
                    bg-purple-500/20
                    border border-purple-500/40
                    text-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>
            {project.demo && (
  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    className="inline-block mt-4 px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
  >
    Live Demo
  </a>
)}
            {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-block mt-6 px-4 py-2 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition"
  >
    View Code
  </a>
)}
{project.buttonText && (
  <a
    href={project.buttonLink}
    className="
      mt-6
      inline-block
      px-6
      py-3
      rounded-full
      bg-gradient-to-r
      from-purple-600
      to-fuchsia-500
      text-white
      font-medium
      hover:scale-105
      transition-all
      duration-300
    "
  >
    {project.buttonText}
  </a>
)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;