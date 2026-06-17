export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  role: string;
  achievements: string[];
  tech: string[];
  link?: string;
  image: string;
  category: 'ai' | 'web' | 'data';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tag?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  specialization?: string;
  details?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: { name: string; level: 'Beginner' | 'Intermediate' | 'Advanced' | string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}
