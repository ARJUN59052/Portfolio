
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject]);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl">
            A selection of my technical work, ranging from NLP chatbots to machine learning applications in industrial quality control.
          </p>
        </div>
        <a href="https://github.com/ARJUN59052" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-2 group text-sm font-semibold uppercase tracking-widest">
          View all on GitHub
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedProject(project);
                e.preventDefault();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Open details for ${project.title}`}
            className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group hover:border-sky-500/30 transition-all duration-500 shadow-2xl flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden group">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-indigo-900/20"></div>
                  <span className="text-slate-700 font-bold text-4xl select-none transition-transform duration-500 group-hover:scale-110">
                    {project.title.charAt(0)}
                  </span>
                </>
              )}

              {/* Hover overlay caption */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center px-4">
                  <h4 className="text-white font-semibold text-lg">{project.title}</h4>
                  <p className="text-sm text-slate-200 mt-1 hidden sm:block">{project.tags.join(' • ')}</p>
                </div>
              </div>

              {project.status && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-widest rounded-full border border-sky-500/20">
                  {project.status}
                </span>
              )}
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-900 text-slate-500 text-[10px] font-mono uppercase tracking-wider rounded border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          ))}
      </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div
              className="relative max-w-3xl w-full mx-6 bg-slate-950 rounded-2xl overflow-hidden shadow-2xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  {selectedProject.image ? (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <span className="text-6xl text-slate-600">{selectedProject.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-slate-400 mb-4">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-2 py-1 bg-slate-900 text-slate-400 text-xs rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.repo && (
                      <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md">
                        View Repo
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo.length > 0 && (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-md">
                        Live Demo
                      </a>
                    )}
                    <button onClick={() => setSelectedProject(null)} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Projects;
