
import { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon?: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
  url: string;
}
