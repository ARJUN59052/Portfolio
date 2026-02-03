
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Arjun GS. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-slate-600">
          <span>Design: Tech-Noir Professional</span>
          <span className="w-1 h-1 rounded-full bg-slate-800"></span>
          <span>Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
