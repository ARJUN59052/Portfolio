
import { SkillCategory, Project, Experience, Certificate } from './types';

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C++', 'C'],
  },
  {
    title: 'Embedded & AI Systems',
    items: ['Machine Learning', 'Edge AI', 'Data Science', 'Cyber Security', 'Computer Networking', 'IoT'],
  },
  {
    title: 'Full-Stack Web Tech',
    items: ['React', 'TypeScript', 'Vite', 'Supabase', 'API Integration', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Adobe Photoshop', 'MS Office'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Bag Bot',
    description: 'Developed an interactive chatbot using Python to automate user interactions and provide real-time responses. Applied Natural Language Processing (NLP) techniques for text preprocessing and intent recognition. Implemented efficient conversation flow logic to handle user queries and fallback scenarios.',
    tags: ['Python', 'NLP', 'Chatbot'],
    image: '/projects/bag_bot.jpg',
    repo: 'https://github.com/ARJUN59052/AI-CHATBOT',
    demo: '',
  },
  {
    title: 'Electronic Nose for Evaluating Seafood Freshness Using Machine Learning',
    description: 'Designed and built an electronic nose system that processes volatile gas sensor array data to automate seafood freshness evaluation. Applied machine learning classification algorithms to extract key features from sensors and predict precise quality levels. Utilized Python and specialized data science libraries to execute data preprocessing and performance validation.',
    tags: ['Machine Learning', 'Sensors', 'Python', 'Data Science'],
    status: 'Completed',
    image: '/projects/electronic_nose.jpg',
    repo: 'https://github.com/ARJUN59052',
    demo: '',
  },
  {
    title: 'Water Monitoring System',
    description: 'Designed and developed an interactive dashboard to monitor real-time sensor metrics and track environmental data. Implemented core application logic and workflows to visualize critical data metrics efficiently. Utilized React, TypeScript, and Vite for building the web application framework, integrated with the Gemini API.',
    tags: ['React', 'TypeScript', 'Vite', 'Gemini API', 'Sensors'],
    image: '/projects/water_monitoring.jpg',
    repo: 'https://github.com/ARJUN59052',
    demo: '',
  },
  {
    title: 'Online Fingerprint Voting System',
    description: 'Designed an online voting system with fingerprint authentication to ensure election security and prevent duplicate votes. Built interactive dashboards for real-time poll creation, candidate management, and live election results tracking. Developed the application using React and TypeScript on the frontend, integrated with Supabase for backend storage and database logic.',
    tags: ['React', 'TypeScript', 'Supabase', 'Authentication'],
    image: '/projects/voting_system.jpg',
    repo: 'https://github.com/ARJUN59052',
    demo: '',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'AI Engineer Intern',
    company: 'Sortyx Venture Pvt, Chennai',
    period: 'Internship',
    highlights: [
      'Developed full-stack features, web dashboards, and automation workflows to process real-time sensor data and track systems.',
      'Integrated embedded hardware with machine learning by deploying edge AI models and configuring I2C communication protocols for microcontrollers.',
      'Utilized embedded computer vision, cloud-connected microcontrollers, and full-stack web technologies to build tracking systems.',
    ],
  },
  {
    role: 'Cyber Security Intern',
    company: 'Retech Solution Pvt, Chennai',
    period: 'Internship',
    highlights: [
      'Identified and mitigated system vulnerabilities by executing hands-on threat analysis and risk assessments.',
      'Conducted digital forensics, image analysis, and geolocation mapping to extract evidence for investigations.',
      'Utilized specialized cybersecurity frameworks and cryptographic tools to implement robust system protection mechanisms.',
    ],
  },
];

export const EDUCATION = {
  degree: 'B.E. in Computer Science Engineering',
  institution: 'Dhanalakshmi Srinivasan Engineering College, Perambalur',
  period: '2022 — 2026',
};

export const CERTIFICATES: Certificate[] = [
  { name: 'Cyber Security Basics', issuer: 'Guvi' },
  { name: 'Mastering Black Hat Techniques: Guide to Hacking & Cyber Security', issuer: 'Udemy' },
  { name: 'ADCP - C, C++, Python', issuer: 'Cadd Cae Computers' },
];
export const SOCIAL_LINKS = {
  github: 'https://github.com/ARJUN59052',
  linkedin: 'https://www.linkedin.com/in/arjun-kumar-763bb6225',
  email: 'mailto:dhiyaarjun073@gmail.com',
  phone: '+91 8122129005',
};
