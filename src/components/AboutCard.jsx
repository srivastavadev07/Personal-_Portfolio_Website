function AboutCard({ title, description }) {
  return (
    <div className="
bg-[#08142e]
rounded-3xl
p-8
hover:scale-105
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