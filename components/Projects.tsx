import { useEffect, useRef } from "react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-enter").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6ee7b7]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="section-enter flex items-center gap-4 mb-16">
          <span className="font-mono text-[#6ee7b7] text-xs tracking-[0.3em] uppercase">03 — Proyectos</span>
          <span className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        <div className="section-enter mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e2e8f0] leading-tight">
            Lo que he
            <span className="text-gradient"> construido</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="section-enter group relative p-8 rounded-2xl border border-[#1e1e2e] bg-[#16161f] card-hover overflow-hidden"
            >
              {/* Background number */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display font-bold text-[120px] text-[#1e1e2e] leading-none select-none pointer-events-none transition-all duration-500 group-hover:text-[#6ee7b7]/5">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6ee7b7]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6ee7b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="font-mono text-xs text-[#4a4a6a] uppercase tracking-widest">{project.period}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-[#e2e8f0] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#6ee7b7] font-mono text-sm mb-4">{project.description}</p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e1e2e] text-[#94a3b8] text-sm font-mono hover:border-[#6ee7b7]/50 hover:text-[#6ee7b7] transition-all duration-200"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Código
                      </a>
                    )}
                  </div>
                </div>

                {/* Right - tech stack */}
                <div>
                  <p className="font-mono text-xs text-[#4a4a6a] uppercase tracking-widest mb-4">Stack tecnológico</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-sm font-mono text-[#6ee7b7] bg-[#6ee7b7]/5 border border-[#6ee7b7]/15 hover:bg-[#6ee7b7]/10 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visual decoration */}
                  <div className="mt-8 p-4 rounded-xl bg-[#0a0a0f] border border-[#1e1e2e]">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f472b6]/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#6ee7b7]/60" />
                      <span className="font-mono text-[#4a4a6a] text-xs ml-2">SOSAnimales</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-[#1e1e2e] rounded w-3/4" />
                      <div className="h-2 bg-[#6ee7b7]/20 rounded w-1/2" />
                      <div className="h-2 bg-[#1e1e2e] rounded w-5/6" />
                      <div className="h-2 bg-[#818cf8]/20 rounded w-2/3" />
                      <div className="h-2 bg-[#1e1e2e] rounded w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="section-enter mt-12 text-center">
          <a
            href="https://github.com/FernandoSanchezSoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#1e1e2e] text-[#94a3b8] font-mono text-sm hover:border-[#6ee7b7]/40 hover:text-[#6ee7b7] transition-all duration-300 group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver más proyectos en GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
