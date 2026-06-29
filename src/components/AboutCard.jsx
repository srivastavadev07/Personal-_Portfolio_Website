function AboutCard({ title, description }) {
  return (
    <div className="
    bg-slate-900/80
    backdrop-blur-md
    p-6
    rounded-3xl
    border border-transparent

    hover:border-purple-500
    hover:-translate-y-2
    hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]

    transition-all
    duration-300

">
      
      <h2 className="text-6xl font-bold mb-6"></h2>

<p className="text-gray-400 text-xl leading-relaxed max-w-4xl mb-12">        
    {description}
      </p>

    </div>
  );
}

export default AboutCard;