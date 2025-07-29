
import React from 'react';
import { Project, Experience, Education, Certificate } from './types';

// Portfolio Data
export const SKILL_CATEGORIES: { [key: string]: { name: string }[] } = {
  'Programming Languages': [
    { name: 'Python' },
    { name: 'SQL' },
  ],
  'Web Technologies/Libraries': [
    { name: 'Flask' },
    { name: 'REST APIs' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
  ],
  'Databases': [
    { name: 'PostgreSQL' },
    { name: 'MySQL' },
    { name: 'MongoDB' },
  ],
  'AI / Data Science Libraries': [
    { name: 'Numpy' },
    { name: 'Pandas' },
    { name: 'Scikit-Learn' },
    { name: 'Matplotlib' },
    { name: 'Seaborn' },
  ],
  'Version Control / Tools': [
    { name: 'Git & GitHub' },
    { name: 'VS Code' },
    { name: 'Google Colab' },
    { name: 'Jupyter Notebook' },
    { name: 'Anaconda' },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Feedback Analyzer Web API',
    description: 'A Flask-based web API that receives user feedback and uses an advanced NLP model to instantly classify its sentiment as positive or negative. This project demonstrates end-to-end skills in backend development and AI, suitable for full stack engineer and GenAI roles.',
    tags: ['Flask', 'Python', 'NLP', 'REST API', 'Backend'],
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-95fc6962c2f7?q=80&w=400&h=250&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Hybrid Forecasting model for Cloud Environment',
    description: 'Designed a hybrid forecasting model for cloud environments, integrating statistical and machine learning techniques to predict resource demands and optimize allocation. This enhanced prediction accuracy and cost efficiency, enabling proactive resource scaling, minimized downtime, and improved performance for cloud-based applications.',
    tags: ['Machine Learning', 'Forecasting', 'Data Analysis', 'Cloud Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1614036728368-070741279930?q=80&w=400&h=250&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive personal portfolio website showcasing projects, skills, resume, and contact information. Implemented a clean, modern UI and deployed using GitHub Pages to ensure accessibility and visibility.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    imageUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=400&h=250&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const EXPERIENCES: Experience[] = [
    {
    role: 'Data Scientist',
    company: 'Evoastra Ventures Inc',
    period: '07/2025 — PRESENT',
    description: [
      'Contributing to real-world business projects by analyzing data, building models, and delivering actionable insights.',
      'Working with project leads to ensure timely, high-quality deliverables with a proactive and accountable approach.',
      'Enhancing technical and professional skills in solving data-driven challenges.'
    ],
  },
  {
    role: 'Trainee',
    company: 'Devtown',
    period: '09/2024 — 12/2024',
    description: [
      'Gained valuable knowledge in Python and libraries, analyzing data and using visualization tools to uncover insights and make useful recommendations.',
      'Built foundational skills in writing clean, maintainable code and understanding the analysis and software development life cycle.'
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Technology (CSE-Artificial Intelligence)',
    institution: 'DR.M.G.R Educational and Research Institute, Chennai',
    period: '2021 — 2025',
    details: 'CGPA: 8.4',
  },
  {
    degree: 'Higher Secondary Education (MPC)',
    institution: 'MPRM Sriviswasanthi Junior College, Vuyyur',
    period: '2019 — 2021',
    details: 'Percentage: 95.5%',
  },
  {
    degree: 'Secondary School Education (SSC)',
    institution: 'Sivani Public School, Ongole',
    period: '2018 — 2019',
    details: 'CGPA: 9.8',
  },
];

export const CERTIFICATES: Certificate[] = [
   {
    name: 'Data Science with Python',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    url: '#',
  },
   {
    name: 'Data Analytics Course',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    url: '#',
  },
  {
    name: 'Data Science Course',
    issuer: 'Devtown',
    year: '2024',
    url: '#',
  },
  {
    name: 'Cloud Computing and Distributed Systems',
    issuer: 'NPTEL',
    year: '2024',
    url: '#',
  },
];
