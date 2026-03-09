import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/portfolio";

const techBadges = ["TypeScript", "Next.js", "React", "Node.js", "PHP", "Laravel"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 231, 183, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(110, 231, 183, ${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6ee7b7]/5 blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#818cf8]/5 blur-[100px] animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(110,231,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,183,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e1e2e] bg-[#111118]/80 backdrop-blur-sm mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#6ee7b7] glow-dot animate-pulse" />
          <span className="text-[#6ee7b7] text-xs font-mono tracking-widest uppercase">
            Disponible para trabajar
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="text-[#e2e8f0]">Fernando</span>
          <br />
          <span className="text-gradient">Sánchez Soto</span>
        </h1>

        {/* Title */}
        <div
          className="flex items-center justify-center gap-3 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span className="h-px w-12 bg-[#6ee7b7]/40" />
          <p className="font-mono text-[#6ee7b7] text-sm md:text-base tracking-widest uppercase">
            {personalInfo.title}
          </p>
          <span className="h-px w-12 bg-[#6ee7b7]/40" />
        </div>

        {/* Bio */}
        <p
          className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          {personalInfo.bio}
        </p>

        {/* Tech badges */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono text-[#6ee7b7]/70 border border-[#6ee7b7]/20 bg-[#6ee7b7]/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 rounded-full bg-[#6ee7b7] text-[#0a0a0f] font-display font-bold text-sm tracking-wide hover:bg-[#a7f3d0] transition-all duration-300 hover:scale-105"
          >
            Hablemos
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 rounded-full border border-[#1e1e2e] text-[#e2e8f0] font-display font-bold text-sm tracking-wide hover:border-[#6ee7b7]/50 hover:text-[#6ee7b7] transition-all duration-300"
          >
            Ver proyectos
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-[#4a4a6a] text-xs font-mono">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#4a4a6a] to-transparent" />
        </div>
      </div>
    </section>
  );
}
