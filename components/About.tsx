
import React from 'react';
import { EDUCATION, EXPERIENCE, CERTIFICATES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Education & Certificates */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            Education
          </h3>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-xl transition-all hover:border-sky-500/50">
            <span className="text-sky-500 font-mono text-sm mb-2 block">{EDUCATION.period}</span>
            <h4 className="text-xl font-bold text-white mb-2">{EDUCATION.degree}</h4>
            <p className="text-slate-400 mb-6">{EDUCATION.institution}</p>
          </div>

          <h3 className="text-2xl font-bold text-white mt-12 mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            Certificates
          </h3>
          <div className="space-y-4">
            {CERTIFICATES.map((cert, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 transition-colors hover:bg-slate-800/50">
                <div className="mt-1 text-sky-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-slate-200 font-medium">{cert.name}</h5>
                  <p className="text-sm text-slate-500">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            Experience
          </h3>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-slate-800">
                <div className="absolute left-[-5px] top-0 w-[12px] h-[12px] rounded-full bg-sky-500 shadow-[0_0_10px_#0ea5e9]"></div>
                <span className="text-sky-500 font-mono text-sm block mb-2">{exp.period}</span>
                <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                <p className="text-slate-400 mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
