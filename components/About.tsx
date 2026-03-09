import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { value: "2+", label: "Años de estudio" },
  { value: "DAW", label: "CFGS Completado" },
  { value: "FS", label: "Fullstack Dev" },
  { value: "·∿·", label: "Open to work" },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#6ee7b7]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="section-enter flex items-center gap-4 mb-16">
          <span className="font-mono text-[#6ee7b7] text-xs tracking-[0.3em] uppercase">01 — About</span>
          <span className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <div>
            <h2 className="section-enter font-display font-bold text-4xl md:text-5xl text-[#e2e8f0] mb-8 leading-tight">
              Código limpio,
              <br />
              <span className="text-gradient">soluciones reales.</span>
            </h2>

            <div className="space-y-4 text-[#94a3b8] font-body leading-relaxed">
              <p className="section-enter">
                Soy Fernando, desarrollador de software con formación en <span className="text-[#e2e8f0]">Desarrollo de Aplicaciones Web (DAW)</span> por el CIFP Villa de Agüimes. Me especializo en el desarrollo fullstack con tecnologías web modernas.
              </p>
              <p className="section-enter">
                Durante mis prácticas en <span className="text-[#6ee7b7]">Acid Tango</span>, trabajé en un proyecto ETL real usando <span className="text-[#e2e8f0]">TypeScript, Node.js y NestJS</span>, aplicando arquitectura DDD y metodología TDD en un entorno profesional.
              </p>
              <p className="section-enter">
                Además de la web, he ampliado mis conocimientos en <span className="text-[#818cf8]">desarrollo móvil con Flutter/Dart</span> y en gestión de proyectos CRM.
              </p>
            </div>

            <div className="section-enter flex gap-4 mt-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-[#6ee7b7] border-b border-[#6ee7b7]/30 hover:border-[#6ee7b7] transition-colors pb-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/FernandoSanchezSoto
              </a>
            </div>
          </div>

          {/* Right - stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="section-enter card-hover p-6 rounded-2xl border border-[#1e1e2e] bg-[#111118]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-[#4a4a6a] text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Contact info card */}
            <div className="section-enter col-span-2 p-6 rounded-2xl border border-[#1e1e2e] bg-[#111118]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#6ee7b7]/10 flex items-center justify-center text-[#6ee7b7] flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-[#94a3b8] text-xs font-mono truncate">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#818cf8]/10 flex items-center justify-center text-[#818cf8] flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-[#94a3b8] text-xs font-mono">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
