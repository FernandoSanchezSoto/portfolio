export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  techs: string[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
  longDescription: string;
  techs: string[];
  github?: string;
  live?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  skills: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}
