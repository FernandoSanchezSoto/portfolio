import { NavBar } from "@/components/navbar";
import { Name } from "@/components/name";

const skills = ['HTML5','CSS3','Tailwind CSS','JavaScript','TypeScript','PHP','Laravel','SQL / MySQL','Node.js','Scrum','REST APIs','Git','GitHub']

const projects = [
  {
    num: '01', name: 'SOSAnimales', period: 'Mar 2025 – May 2025',
    desc: 'Aplicación web fullstack para dueños de mascotas. Permite registrar el perfil de tu mascota y generar alertas si se pierde, con descripción del lugar, foto e información relevante.',
    stack: ['HTML','CSS','JavaScript','PHP','Laravel','SQL'],
  },
  {
    num: '02', name: 'Proyecto ETL', period: 'Mar 2024 – May 2024',
    desc: 'Desarrollo de procesos ETL en Acid Tango. Implementación de pipelines de datos con arquitectura DDD y TypeScript en un entorno profesional y remoto.',
    stack: ['TypeScript','DDD','Node.js','Git'],
  },
]

const certs = [
  { icon: '📱', name: 'Desarrollo de Aplicaciones iOS/Android', issuer: 'GRUPO ADF', date: 'Mayo 2025' },
  { icon: '⚡', name: 'JavaScript Moderno — Guía Definitiva +20 Proyectos', issuer: 'Udemy', date: 'Febrero 2024' },
  { icon: '🎨', name: 'CSS Complete Course For Beginners', issuer: 'Udemy', date: 'Agosto 2023' },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }}>
      <NavBar name="FSS" />

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center px-6 md:px-10 pt-20">
        <div className="w-full">
          <p className="text-xs tracking-widest uppercase mb-4 flex items-center gap-2" style={{ color: '#a855f7' }}>
            <span className="inline-block w-6 h-px" style={{ background: '#a855f7' }} />
            <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ background: '#a855f7' }} />
            Open to Work · Las Palmas de Gran Canaria
          </p>
          <Name firstName="Fernando" lastName="Sanchez Soto" />
          <p className="text-sm md:text-lg mt-6 max-w-xl leading-relaxed" style={{ color: '#9ca3af' }}>
            <span className="font-semibold text-white">Desarrollador de Software Junior</span> especializado en
            JavaScript · TypeScript · PHP · Laravel.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects"
              className="px-5 py-3 text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#9333ea' }}>
              Ver proyectos
            </a>
            <a href="#contact"
              className="px-5 py-3 text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid #4b5563' }}>
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="about" className="py-20 px-6 md:px-10" style={{ backgroundColor: '#0f0f1a' }}>
        <p className="text-xs tracking-widest uppercase mb-2 flex items-center gap-2" style={{ color: '#a855f7' }}>
          <span className="inline-block w-6 h-px" style={{ background: '#a855f7' }} /> Tecnologías
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Mi Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
          {skills.map(skill => (
            <div key={skill}
              className="flex items-center justify-center p-2 md:p-3 rounded-lg text-xs font-medium text-center transition-all duration-300 cursor-default"
              style={{ background: '#13131f', border: '1px solid #1e1e30', color: '#9ca3af' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#a855f7'; (e.currentTarget as HTMLDivElement).style.color = '#a855f7' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e30'; (e.currentTarget as HTMLDivElement).style.color = '#9ca3af' }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experience" className="py-20 px-6 md:px-10">
        <p className="text-xs tracking-widest uppercase mb-2 flex items-center gap-2" style={{ color: '#a855f7' }}>
          <span className="inline-block w-6 h-px" style={{ background: '#a855f7' }} /> Trayectoria
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Experiencia</h2>
        <div className="relative pl-6 md:pl-8 space-y-10" style={{ borderLeft: '1px solid #9333ea' }}>

          {[
            {
              date: 'Mar 2024 — May 2024 · 3 meses',
              role: 'Desarrollador de Software',
              company: 'Acid Tango · Prácticas · En remoto',
              desc: 'Participé como programador en un proyecto ETL, desarrollando procesos de extracción, transformación y carga de datos aplicando metodologías ágiles y arquitectura DDD.',
              tags: ['TypeScript','DDD','ETL','Scrum','En remoto'],
            },
            {
              date: 'Sept 2022 — May 2024',
              role: 'CFGS Desarrollo de Aplicaciones Web',
              company: 'CIFP Villa de Agüimes · Formación',
              desc: 'Ciclo formativo de grado superior centrado en el desarrollo web full-stack. Aprendizaje de HTML, CSS, JavaScript, PHP, bases de datos y metodologías modernas.',
              tags: ['JavaScript','PHP','SQL','Git'],
            },
          ].map((exp, i) => (
            <div key={i} className="relative">
              <span className="absolute top-1 w-3 h-3 rounded-full border-2"
                style={{ left: '-2.35rem', background: '#a855f7', boxShadow: '0 0 10px #a855f7', borderColor: '#0a0a0f' }} />
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#a855f7' }}>{exp.date}</p>
              <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-sm mb-2" style={{ color: '#9ca3af' }}>{exp.company}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{exp.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded" style={{ border: '1px solid #1e1e30', color: '#9ca3af' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="py-20 px-6 md:px-10" style={{ backgroundColor: '#0f0f1a' }}>
        <p className="text-xs tracking-widest uppercase mb-2 flex items-center gap-2" style={{ color: '#a855f7' }}>
          <span className="inline-block w-6 h-px" style={{ background: '#a855f7' }} /> Trabajo
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(p => (
            <div key={p.num} className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ background: '#13131f', border: '1px solid #1e1e30' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(168,85,247,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e30'}>
              <p className="font-bold leading-none mb-3" style={{ fontSize: '3.5rem', color: 'rgba(255,255,255,0.05)' }}>{p.num}</p>
              <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#a855f7' }}>{p.period}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded"
                    style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section id="certs" className="py-20 px-6 md:px-10">
        <p className="text-xs tracking-widest uppercase mb-2 flex items-center gap-2" style={{ color: '#a855f7' }}>
          <span className="inline-block w-6 h-px" style={{ background: '#a855f7' }} /> Formación continua
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Certificaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <div key={i} className="rounded-xl p-4 flex gap-3 items-start transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#13131f', border: '1px solid #1e1e30' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(168,85,247,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e30'}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.2)' }}>
                {cert.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-snug mb-1">{cert.name}</p>
                <p className="text-xs font-medium" style={{ color: '#a855f7' }}>{cert.issuer}</p>
                <p className="text-xs" style={{ color: '#6b7280' }}>{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-20 px-6 md:px-10 text-center" style={{ backgroundColor: '#0f0f1a' }}>
        <p className="text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-2" style={{ color: '#a855f7' }}>
          <span className="inline-block w-6 h-px" style={{ background: '#a855f7' }} /> Hablemos
        </p>
        <h2 className="text-5xl md:text-8xl font-bold mb-8"
          style={{ color: 'transparent', WebkitTextStroke: '1px rgba(240,240,248,0.15)' }}>
          ¿Trabajamos<br />juntos?
        </h2>
        <a href="mailto:fernandosoto0643@gmail.com"
          className="text-base md:text-2xl pb-1 block mb-10 break-all transition-all duration-300 hover:tracking-wider"
          style={{ color: '#a855f7', borderBottom: '1px solid rgba(168,85,247,0.3)' }}>
          fernandosoto0643@gmail.com
        </a>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { href: 'https://www.linkedin.com/in/fernando-sanchez-soto-947891252/', label: 'LinkedIn' },
            { href: 'https://github.com/FernandoSanchezSoto', label: 'GitHub' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid #1e1e30', color: '#9ca3af' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#a855f7'; (e.currentTarget as HTMLAnchorElement).style.color = '#a855f7' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1e1e30'; (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af' }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-6 flex flex-col md:flex-row justify-between items-center text-xs gap-2 text-center"
        style={{ borderTop: '1px solid #1e1e30', color: '#4b5563' }}>
        <span>© 2025 <span style={{ color: '#a855f7' }}>Fernando Sanchez Soto</span></span>
        <span>Desarrollador de Software Junior · Las Palmas, Canarias</span>
      </footer>
    </div>
  )
}
