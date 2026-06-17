import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CVModal from './components/CVModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Elegant preference detection
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fairah-portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [cvOpen, setCvOpen] = useState(false);

  // Sync state transitions to the actual DOM document container
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('fairah-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('fairah-portfolio-theme', 'light');
    }
  }, [darkMode]);

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen text-[#EDEDED] bg-[#0A0A0A] transition-colors duration-300 overflow-x-hidden selection:bg-blue-600/40 selection:text-white print:bg-white print:text-black">
      {/* Dynamic Floating Global Navigator and appearance controls */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Primary Hero Banner with CTA binders */}
      <Hero
        onViewProjects={() => scrollToAnchor('projects')}
        onContactMe={() => scrollToAnchor('contact')}
        onDownloadCV={() => setCvOpen(true)}
      />

      {/* Main flow stack */}
      <main className="relative">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Elegant minimalist Javanese-inspired footer */}
      <footer className="py-12 border-t border-zinc-900 bg-zinc-950/20 text-center text-xs text-zinc-400 print:hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-3.5">
          <p className="font-display font-medium tracking-tight text-zinc-200">
            Designed & Compiled by Fairah Almira © 2026
          </p>
          <div className="flex justify-center items-center gap-3 font-mono text-[10px] text-zinc-400">
            <span>React & Vite</span>
            <span>•</span>
            <span>Tailwind v4</span>
            <span>•</span>
            <span>motion/react</span>
          </div>
          <p className="text-[10px] text-zinc-400 max-w-sm mx-auto leading-relaxed">
            Pristine Apple-inspired Informatics craft demonstrating AI models, predictive systems, layout optimization engines, and modern software design.
          </p>
        </div>
      </footer>

      {/* Printable Dynamic Formal CV Document */}
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
