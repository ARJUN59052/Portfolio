
import { SkillCategory, Project, Experience, Certificate } from './types';

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming',
    items: ['Python', 'C++', 'C'],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Computer Networking', 'Adobe Photoshop', 'MS Office'],
  },
  {
    title: 'Specializations',
    items: ['Cyber Security', 'Machine Learning', 'NLP'],
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
    title: 'Electronic Nose for Seafood Freshness',
    description: 'Developing a Machine Learning system to evaluate seafood freshness by analyzing volatile gas sensor data. Performing data preprocessing, feature extraction, and model training. Demonstrates the use of sensor-based intelligent systems for food quality monitoring applications.',
    tags: ['Machine Learning', 'Sensors', 'Python', 'Data Science'],
    status: 'Ongoing',
    image: '/projects/electronic_nose.jpg',
    repo: 'https://github.com/ARJUN59052',
    demo: '',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Cyber Security Intern',
    company: 'Retech Solution Pvt, Chennai',
    period: 'Internship',
    highlights: [
      'Completed Cyber Security internship with hands-on exposure to fundamental security concepts and threat analysis.',
      'Gained practical experience in image analysis and digital evidence detailing for basic cyber investigations.',
      'Learned map reading and geolocation fundamentals to support situational awareness and cyber intelligence tasks.',
      'Studied common cyber attacks and security mechanisms, including basic prevention and system protection techniques.',
      'Developed foundational understanding of security systems, vulnerabilities, and safe computing practices.',
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
  { name: 'ADCP - C, C++, Python', issuer: 'Cadd Cae Campus' },
];
export const SOCIAL_LINKS = {
  github: 'https://github.com/ARJUN59052',
  linkedin: 'https://www.linkedin.com/in/arjun-kumar-763bb6225',
  email: 'mailto:dhiyaarjun073@gmail.com',
  phone: '+91 8122129005',
};
