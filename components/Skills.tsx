import { useEffect, useRef } from "react";

const skills = [
  // Frontend
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  // Backend
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  // Database
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  // Mobile
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
  // Tools
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-enter").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="section-enter flex items-center gap-4 mb-16">
          <span className="font-mono text-[#6ee7b7] text-xs tracking-[0.3em] uppercase">
            03 — Stack
          </span>
          <span className="h-px flex-1 bg-white/5" />
        </div>

        <div className="section-enter mb-14">
          <h2 className="font-mono font-bold text-4xl md:text-5xl text-white/90 leading-tight">
            Tecnologías que{" "}
            <span className="text-gradient">uso</span>
          </h2>
          <p className="mt-4 text-white/40 font-mono text-sm max-w-xl">
          </p>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="section-enter group flex flex-col items-center gap-3 p-5 rounded-xl border border-white/5 bg-white/[0.03] hover:border-purple-500/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                width={36}
                height={36}
                className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <span className="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300 text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
