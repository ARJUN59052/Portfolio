
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Proficiency</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive toolkit focused on software engineering, security analysis, and specialized technical fields.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div
            key={category.title}
            className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-sky-500/30 transition-all duration-300 group shadow-2xl"
          >
            <h3 className="text-sky-500 font-mono text-sm tracking-widest uppercase mb-6 pb-2 border-b border-slate-800 flex justify-between items-center">
              {category.title}
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-sm font-medium border border-slate-800 hover:border-sky-500/50 hover:text-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
