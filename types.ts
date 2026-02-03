
export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  image?: string;
  repo?: string;
  demo?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
}
