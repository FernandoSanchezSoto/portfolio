import type { Experience, Project, Certification, Education, Skill } from "@/types";

export const personalInfo = {
  name: "Fernando Sánchez Soto",
  title: "Desarrollador de Software Junior",
  email: "fernandosoto0643@gmail.com",
  phone: "+34 674 577 016",
  location: "Las Palmas de Gran Canaria, España",
  github: "https://github.com/FernandoSanchezSoto",
  linkedin: "https://linkedin.com/in/fernando-sanchez-soto-947891252",
  bio: "Desarrollador de Software Junior con formación en desarrollo de aplicaciones web. Apasionado por construir productos digitales con tecnologías modernas como TypeScript, Next.js y Node.js. Busco nuevas oportunidades para seguir creciendo y aportar valor a equipos de desarrollo.",
  available: true,
};

export const experiences: Experience[] = [
  {
    company: "Acid Tango",
    role: "Desarrollador de Software",
    period: "Mar 2024 — May 2024",
    location: "Las Palmas, España · Remoto",
    type: "Contrato de prácticas",
    description: [
      "Participé como programador en un proyecto ETL, desarrollando procesos de extracción, transformación y carga de datos.",
      "Implementé consumo y transformación de datos desde distintas fuentes usando Node.js y TypeScript.",
      "Trabajé con arquitectura DDD (Domain-Driven Design) y metodología TDD.",
      "Aprendizaje y aplicación de NestJS, NextJS y TypeScript en entorno profesional.",
    ],
    techs: ["TypeScript", "Node.js", "NestJS", "NextJS", "DDD", "TDD", "PHP"],
  },
];

export const projects: Project[] = [
  {
    name: "SOSAnimales",
    period: "Mar 2025 — May 2025",
    description: "Web para dueños de mascotas perdidas — Fullstack",
    longDescription:
      "Plataforma fullstack para dueños de mascotas. Permite registrar mascotas y generar alertas cuando se pierden. Los usuarios pueden ver una descripción del lugar donde desapareció, foto de la mascota e información relevante añadida por el dueño.",
    techs: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "MySQL"],
    github: "https://github.com/FernandoSanchezSoto",
  },
];

export const education: Education[] = [
  {
    institution: "CIFP Villa de Agüimes",
    degree: "CFGS Desarrollo de Aplicaciones Web",
    period: "2022 — 2024",
    location: "Arinaga, Las Palmas de Gran Canaria",
    skills: ["JavaScript", "PHP", "Laravel", "SQL", "Git", "HTML", "CSS", "TypeScript"],
  },
  {
    institution: "IES Amurga",
    degree: "CFGS Instalaciones de Telecomunicaciones",
    period: "2020 — 2022",
    location: "San Fernando, Las Palmas",
    skills: ["Redes", "Telecomunicaciones"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Desarrollo de Aplicaciones iOS/Android",
    issuer: "Grupo ADF",
    date: "May 2025",
    skills: ["Dart", "Flutter", "Git", "Mobile Development"],
  },
  {
    name: "Gestión de proyectos — Implementación CRM",
    issuer: "Certificación Profesional",
    date: "2025",
    skills: ["CRM", "Gestión de proyectos"],
  },
  {
    name: "JavaScript Moderno — Guía Definitiva (+20 proyectos)",
    issuer: "Udemy",
    date: "Feb 2024",
    skills: ["JavaScript", "Tailwind CSS", "ES6+", "DOM", "Async/Await"],
  },
  {
    name: "CSS Complete Course For Beginners",
    issuer: "Udemy",
    date: "Ago 2023",
    skills: ["CSS", "Interfaces", "Responsive Design"],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", level: 90 },
  { name: "CSS3", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Frontend", level: 85 },
  { name: "TypeScript", category: "Frontend", level: 75 },
  { name: "React", category: "Frontend", level: 70 },
  { name: "Next.js", category: "Frontend", level: 70 },
  { name: "Tailwind CSS", category: "Frontend", level: 80 },
  // Backend
  { name: "Node.js", category: "Backend", level: 70 },
  { name: "NestJS", category: "Backend", level: 65 },
  { name: "PHP", category: "Backend", level: 75 },
  { name: "Laravel", category: "Backend", level: 70 },
  // Database
  { name: "SQL / MySQL", category: "Database", level: 70 },
  // Mobile
  { name: "Dart / Flutter", category: "Mobile", level: 55 },
  // Tools
  { name: "Git", category: "Tools", level: 80 },
  { name: "DDD", category: "Tools", level: 60 },
  { name: "TDD", category: "Tools", level: 60 },
  { name: "Figma", category: "Tools", level: 65 },
];

export const skillCategories = ["Frontend", "Backend", "Database", "Mobile", "Tools"] as const;
