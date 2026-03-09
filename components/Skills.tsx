import { useEffect, useRef, useState } from "react";
import { skills, skillCategories } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "#6ee7b7",
  Backend: "#818cf8",
  Database: "#f472b6",
  Mobile: "#fbbf24",
  Tools: "#94a3b8",
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-enter").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 relative bg-[#111118]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="section-enter flex items-center gap-4 mb-16">
          <span className="font-mono text-[#6ee7b7] text-xs tracking-[0.3em] uppercase">04 — Habilidades</span>
          <span className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        <div className="section-enter mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e2e8f0] leading-tight">
            Mi stack
            <span className="text-gradient"> tecnológico</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="section-enter flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "text-[#0a0a0f] font-medium"
                  : "text-[#4a4a6a] border border-[#1e1e2e] hover:border-[#6ee7b7]/30 hover:text-[#94a3b8]"
              }`}
              style={
                activeCategory === cat
                  ? { backgroundColor: categoryColors[cat] }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {filteredSkills.map((skill, i) => (
            <div key={skill.name} className="section-enter p-5 rounded-xl border border-[#1e1e2e] bg-[#16161f]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-medium text-[#e2e8f0] text-sm">{skill.name}</span>
                <span
                  className="font-mono text-xs"
                  style={{ color: categoryColors[skill.category] }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    backgroundColor: categoryColors[skill.category],
                    transitionDelay: `${i * 0.08}s`,
                    boxShadow: `0 0 8px ${categoryColors[skill.category]}40`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* All tech cloud */}
        <div className="section-enter">
          <p className="font-mono text-[#4a4a6a] text-xs uppercase tracking-widest mb-6 text-center">Todas las tecnologías</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="group px-4 py-2 rounded-full border border-[#1e1e2e] bg-[#16161f] text-[#94a3b8] text-sm font-mono hover:border-opacity-50 transition-all duration-200 cursor-default"
                style={{
                  ["--hover-color" as string]: categoryColors[skill.category],
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = categoryColors[skill.category] + "50";
                  (e.currentTarget as HTMLElement).style.color = categoryColors[skill.category];
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.color = "";
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
