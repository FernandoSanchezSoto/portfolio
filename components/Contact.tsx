import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#6ee7b7]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section label */}
        <div className="section-enter flex items-center gap-4 mb-16">
          <span className="h-px flex-1 bg-[#1e1e2e]" />
          <span className="font-mono text-[#6ee7b7] text-xs tracking-[0.3em] uppercase">05 — Contacto</span>
          <span className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        <h2 className="section-enter font-display font-bold text-4xl md:text-6xl text-[#e2e8f0] mb-6 leading-tight">
          ¿Tienes un proyecto?
          <br />
          <span className="text-gradient">Hablemos.</span>
        </h2>

        <p className="section-enter text-[#94a3b8] text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Estoy disponible para nuevas oportunidades laborales, proyectos freelance o simplemente para charlar sobre tecnología.
        </p>

        {/* Contact cards */}
        <div className="section-enter grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group p-5 rounded-2xl border border-[#1e1e2e] bg-[#16161f] card-hover flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-[#6ee7b7]/10 flex items-center justify-center group-hover:bg-[#6ee7b7]/20 transition-colors">
              <svg className="w-6 h-6 text-[#6ee7b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-xs text-[#4a4a6a] uppercase tracking-wider mb-1">Email</p>
              <p className="text-[#e2e8f0] text-sm font-mono break-all">{personalInfo.email}</p>
            </div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl border border-[#1e1e2e] bg-[#16161f] card-hover flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-[#818cf8]/10 flex items-center justify-center group-hover:bg-[#818cf8]/20 transition-colors">
              <svg className="w-6 h-6 text-[#818cf8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-xs text-[#4a4a6a] uppercase tracking-wider mb-1">LinkedIn</p>
              <p className="text-[#e2e8f0] text-sm font-mono">Fernando Sánchez</p>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl border border-[#1e1e2e] bg-[#16161f] card-hover flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-[#f472b6]/10 flex items-center justify-center group-hover:bg-[#f472b6]/20 transition-colors">
              <svg className="w-6 h-6 text-[#f472b6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-xs text-[#4a4a6a] uppercase tracking-wider mb-1">GitHub</p>
              <p className="text-[#e2e8f0] text-sm font-mono">FernandoSanchezSoto</p>
            </div>
          </a>
        </div>

        {/* Main CTA */}
        <div className="section-enter">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#6ee7b7] text-[#0a0a0f] font-display font-bold text-base tracking-wide hover:bg-[#a7f3d0] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(110,231,183,0.3)]"
          >
            Enviar mensaje
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
