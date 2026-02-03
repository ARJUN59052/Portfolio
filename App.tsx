
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20 bg-slate-900/50">
          <About />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="projects" className="py-20 bg-slate-900/50">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
