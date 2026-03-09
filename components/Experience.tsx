import { useEffect, useRef } from "react";
import { experiences, education, certifications } from "@/data/portfolio";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-enter").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 relative bg-[#111118]/50">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#1e1e2e] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="section-enter flex items-center gap-4 mb-16">
          <span className="font-mono text-[#6ee7b7] text-xs tracking-[0.3em] uppercase">02 — Experiencia & Educación</span>
          <span className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <h2 className="section-enter font-display font-bold text-3xl text-[#e2e8f0] mb-10">
              Experiencia
              <span className="text-gradient"> laboral</span>
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-0 w-px bg-gradient-to-b from-[#6ee7b7]/40 to-transparent" />

              {experiences.map((exp, i) => (
                <div key={i} className="section-enter relative pl-10 mb-10 last:mb-0">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[#6ee7b7] bg-[#0a0a0f] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#6ee7b7] glow-dot" />
                  </div>

                  <div className="p-5 rounded-xl border border-[#1e1e2e] bg-[#16161f] card-hover">
                    <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                      <h3 className="font-display font-bold text-[#e2e8f0] text-lg">{exp.role}</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-mono text-[#818cf8] bg-[#818cf8]/10 border border-[#818cf8]/20 whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#6ee7b7] font-mono text-sm font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#4a4a6a] text-xs font-mono mb-4">
                      <span>{exp.period}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="text-[#94a3b8] text-sm flex items-start gap-2">
                          <span className="text-[#6ee7b7] mt-1 flex-shrink-0">›</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.techs.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono text-[#6ee7b7]/60 bg-[#6ee7b7]/5 border border-[#6ee7b7]/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs Column */}
          <div>
            <h2 className="section-enter font-display font-bold text-3xl text-[#e2e8f0] mb-10">
              Educación &
              <span className="text-gradient-pink"> Certificaciones</span>
            </h2>

            {/* Education */}
            <div className="space-y-4 mb-10">
              {education.map((edu, i) => (
                <div key={i} className="section-enter p-5 rounded-xl border border-[#1e1e2e] bg-[#16161f] card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#818cf8]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-[#e2e8f0] text-base mb-0.5">{edu.degree}</h3>
                      <p className="text-[#818cf8] font-mono text-sm">{edu.institution}</p>
                      <p className="text-[#4a4a6a] font-mono text-xs mt-1">{edu.period} · {edu.location}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.skills.slice(0, 6).map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded text-xs font-mono text-[#94a3b8] bg-[#1e1e2e]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="section-enter font-display font-semibold text-xl text-[#e2e8f0] mb-4">
              Certificaciones
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className="section-enter p-4 rounded-xl border border-[#1e1e2e] bg-[#16161f] card-hover">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f472b6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#f472b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body font-medium text-[#e2e8f0] text-sm leading-snug">{cert.name}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[#f472b6] font-mono text-xs">{cert.issuer}</span>
                        <span className="text-[#4a4a6a] text-xs">·</span>
                        <span className="text-[#4a4a6a] font-mono text-xs">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
