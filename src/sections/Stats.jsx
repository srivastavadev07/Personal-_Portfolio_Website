function Stats() {
  const stats = [
    { number: "2+", label: "Projects" },
    { number: "1+", label: "Years Learning" },
    { number: "100+", label: "DSA Problems (Goal)" },
    { number: "∞", label: "Curiosity" },
  ];

  return (
    <section className="py-24 px-20">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              bg-slate-900/80
              backdrop-blur-md
              rounded-3xl
              p-8
              text-center
              hover:-translate-y-2
              hover:border-purple-500
              hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
              transition-all
              duration-300
            "
          >
            <h3 className="text-4xl font-bold text-purple-500">
              {stat.number}
            </h3>

            <p className="text-gray-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;