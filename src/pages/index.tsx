import { NavBar } from "@/components/navbar";
import { Name } from "@/components/name";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavBar name="FSS" />

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center px-6 md:px-10 pt-20">
        <div className="w-full">
          <p className="text-purple-400 text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-purple-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse inline-block" />
            Open to Work · Las Palmas de Gran Canaria
          </p>
          <Name firstName="Fernando" lastName="Sanchez Soto" />
          <p className="text-gray-400 text-sm md:text-lg mt-6 max-w-xl leading-relaxed">
            <span className="text-white font-semibold">Desarrollador de Software Junior</span> especializado en
            JavaScript · TypeScript · PHP · Laravel.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:-translate-y-1">
              Ver proyectos
            </a>
            <a href="#contact" className="px-5 py-3 border border-gray-600 hover:border-purple-400 text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:-translate-y-1 hover:text-purple-400">
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="about" className="py-20 px-6 md:px-10 bg-[#0f0f1a]">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-purple-400 inline-block" /> Tecnologías
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Mi Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
          {['HTML5','CSS3','Tailwind CSS','JavaScript','TypeScript','PHP','Laravel','SQL / MySQL','Node.js','Scrum','REST APIs','Git','GitHub'].map(skill => (
            <div key={skill} className="flex items-center justify-center p-2 md:p-3 rounded-lg bg-[#13131f] border border-[#1e1e30] text-gray-400 text-xs font-medium text-center hover:border-purple-500 hover:text-purple-400 transition-all duration-300 cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experience" className="py-20 px-6 md:px-10">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-purple-400 inline-block" /> Trayectoria
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Experiencia</h2>
        <div className="relative border-l border-purple-600 pl-6 md:pl-8 space-y-10">
          <div className="relative">
            <span className="absolute -left-[1.9rem] md:-left-[2.4rem] top-1 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] border-2 border-[#0a0a0f]" />
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-1">Mar 2024 — May 2024 · 3 meses</p>
            <h3 className="text-xl md:text-2xl font-bold text-white">Desarrollador de Software</h3>
            <p className="text-gray-400 text-sm mb-2">Acid Tango · Prácticas · En remoto</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Participé como programador en un proyecto ETL, desarrollando procesos de extracción,
              transformación y carga de datos aplicando metodologías ágiles y arquitectura DDD.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['TypeScript','DDD','ETL','Scrum','En remoto'].map(t => (
                <span key={t} className="text-xs px-2 py-1 border border-[#1e1e30] rounded text-gray-400">{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <span className="absolute -left-[1.9rem] md:-left-[2.4rem] top-1 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] border-2 border-[#0a0a0f]" />
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-1">Sept 2022 — May 2024</p>
            <h3 className="text-xl md:text-2xl font-bold text-white">CFGS Desarrollo de Aplicaciones Web</h3>
            <p className="text-gray-400 text-sm mb-2">CIFP Villa de Agüimes · Formación</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ciclo formativo de grado superior centrado en el desarrollo web full-stack.
              Aprendizaje de HTML, CSS, JavaScript, PHP, bases de datos y metodologías modernas.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['JavaScript','PHP','SQL','Git'].map(t => (
                <span key={t} className="text-xs px-2 py-1 border border-[#1e1e30] rounded text-gray-400">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="py-20 px-6 md:px-10 bg-[#0f0f1a]">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-purple-400 inline-block" /> Trabajo
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { num: '01', name: 'SOSAnimales', period: 'Mar 2025 – May 2025', desc: 'Aplicación web fullstack para dueños de mascotas. Permite registrar el perfil de tu mascota y generar alertas si se pierde, con descripción del lugar, foto e información relevante.', stack: ['HTML','CSS','JavaScript','PHP','Laravel','SQL'] },
            { num: '02', name: 'Proyecto ETL', period: 'Mar 2024 – May 2024', desc: 'Desarrollo de procesos ETL en Acid Tango. Implementación de pipelines de datos con arquitectura DDD y TypeScript en un entorno profesional y remoto.', stack: ['TypeScript','DDD','Node.js','Git'] },
          ].map(p => (
            <div key={p.num} className="bg-[#13131f] border border-[#1e1e30] rounded-xl p-5 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-5xl font-bold text-white/5 leading-none mb-3">{p.num}</p>
              <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
              <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">{p.period}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-400">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section id="certs" className="py-20 px-6 md:px-10">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="w-6 h-px bg-purple-400 inline-block" /> Formación continua
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Certificaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '📱', name: 'Desarrollo de Aplicaciones iOS/Android', issuer: 'GRUPO ADF', date: 'Mayo 2025' },
            { icon: '⚡', name: 'JavaScript Moderno — Guía Definitiva +20 Proyectos', issuer: 'Udemy', date: 'Febrero 2024' },
            { icon: '🎨', name: 'CSS Complete Course For Beginners', issuer: 'Udemy', date: 'Agosto 2023' },
          ].map((cert, i) => (
            <div key={i} className="bg-[#13131f] border border-[#1e1e30] rounded-xl p-4 flex gap-3 items-start hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-lg flex-shrink-0">{cert.icon}</div>
              <div>
                <p className="text-white text-sm font-bold leading-snug mb-1">{cert.name}</p>
                <p className="text-purple-400 text-xs font-medium">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-20 px-6 md:px-10 bg-[#0f0f1a] text-center">
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-purple-400 inline-block" /> Hablemos
        </p>
        <h2 className="text-5xl md:text-8xl font-bold text-transparent mb-8" style={{ WebkitTextStroke: '1px rgba(240,240,248,0.15)' }}>
          ¿Trabajamos<br />juntos?
        </h2>
        <a href="mailto:fernandosoto0643@gmail.com" className="text-base md:text-2xl text-purple-400 border-b border-purple-400/30 pb-1 hover:text-white hover:border-white transition-all duration-300 block mb-10 break-all">
          fernandosoto0643@gmail.com
        </a>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/fernando-sanchez-soto-947891252/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 border border-[#1e1e30] rounded-lg text-gray-400 text-sm font-semibold hover:border-purple-400 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/FernandoSanchezSoto" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 border border-[#1e1e30] rounded-lg text-gray-400 text-sm font-semibold hover:border-purple-400 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-6 border-t border-[#1e1e30] flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-2 text-center">
        <span>© 2025 <span className="text-purple-400">Fernando Sanchez Soto</span></span>
        <span>Desarrollador de Software Junior · Las Palmas, Canarias</span>
      </footer>
    </div>
  );
}
