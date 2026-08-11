import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 text-center md:text-left">
          {/* Left Side: Logo & Tagline */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-mono text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="text-indigo-500">&lt;</span>
              <span>Basanta Duwal</span>
              <span className="text-indigo-500">/&gt;</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-sm">
              BSc (Hons) Computing Student & Web Developer based in Bhaktapur, Nepal.
            </p>
          </div>

          {/* Right Side: Links & Social Icons */}
          <div className="flex flex-col items-center md:items-end space-y-5">
            <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
              <a href="#home" className="text-slate-300 hover:text-indigo-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors">
                About
              </a>
              <a href="#skills" className="text-slate-300 hover:text-indigo-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-slate-300 hover:text-indigo-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/basantaduwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/basantaduwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:basantaduwal10@gmail.com"
                className="p-2.5 bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-all"
                aria-label="Email Direct"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-mono">
          <p>&copy; 2026 Basanta Duwal. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
