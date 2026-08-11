import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useInView } from '../hooks/useInView';

const Hero = () => {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background soft glowing elements */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Left Column: Bio & CTA Buttons */}
          <div className="flex flex-col items-start space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available for Web Development Internships
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-indigo-400">Basanta Duwal</span>.
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
                I build modern web experiences.
              </h2>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              I'm a BSc (Hons) Computing student passionate about web development and building practical, user-focused applications. I enjoy turning ideas into functional and responsive digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all text-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Basanta-Duwal-CV.pdf"
                download="Basanta-Duwal-CV.pdf"
                className="btn-secondary inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium px-6 py-3 rounded-xl border border-slate-700/80 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all text-sm"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-slate-300 hover:text-indigo-400 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/basantaduwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl text-slate-300 hover:text-white transition-all shadow-md"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/basantaduwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl text-slate-300 hover:text-white transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Code Editor Mockup & Floating Badges */}
          <div className="relative lg:ml-auto w-full max-w-lg mt-6 lg:mt-0">
            {/* Floating Tech Badges */}
            <div className="absolute -top-4 -left-4 z-20 animate-float">
              <div className="glass-card px-3.5 py-1.5 rounded-xl text-xs font-mono text-indigo-300 font-medium border border-indigo-500/20 shadow-lg">
                React
              </div>
            </div>
            <div className="absolute top-1/4 -right-4 z-20 animate-float-reverse">
              <div className="glass-card px-3.5 py-1.5 rounded-xl text-xs font-mono text-emerald-300 font-medium border border-emerald-500/20 shadow-lg">
                Node.js
              </div>
            </div>
            <div className="absolute bottom-1/4 -left-6 z-20 animate-float-slow">
              <div className="glass-card px-3.5 py-1.5 rounded-xl text-xs font-mono text-amber-300 font-medium border border-amber-500/20 shadow-lg">
                JavaScript
              </div>
            </div>
            <div className="absolute -bottom-4 right-8 z-20 animate-float">
              <div className="glass-card px-3.5 py-1.5 rounded-xl text-xs font-mono text-sky-300 font-medium border border-sky-500/20 shadow-lg">
                MongoDB
              </div>
            </div>
            <div className="absolute top-2 right-1/4 z-20 animate-float-reverse">
              <div className="glass-card px-3 py-1 rounded-xl text-xs font-mono text-slate-300 font-medium border border-slate-700 shadow-lg">
                Git
              </div>
            </div>

            {/* Code Window Container */}
            <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl relative z-10 bg-slate-950/80 backdrop-blur-2xl">
              {/* Window Titlebar */}
              <div className="flex items-center px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 text-center font-mono text-xs text-slate-400">
                  developer.js
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="text-slate-300 whitespace-pre">
                  <span className="syntax-keyword">const</span>{' '}
                  <span className="syntax-const">developer</span>{' '}
                  <span className="syntax-punctuation">=</span>{' '}
                  <span className="syntax-bracket">{'{'}</span>
                  <br />
                  {'  '}<span className="syntax-property">name</span><span className="syntax-punctuation">:</span>{' '}
                  <span className="syntax-string">"Basanta Duwal"</span><span className="syntax-punctuation">,</span>
                  <br />
                  {'  '}<span className="syntax-property">role</span><span className="syntax-punctuation">:</span>{' '}
                  <span className="syntax-string">"Web Developer"</span><span className="syntax-punctuation">,</span>
                  <br />
                  {'  '}<span className="syntax-property">location</span><span className="syntax-punctuation">:</span>{' '}
                  <span className="syntax-string">"Bhaktapur, Nepal"</span><span className="syntax-punctuation">,</span>
                  <br />
                  {'  '}<span className="syntax-property">available</span><span className="syntax-punctuation">:</span>{' '}
                  <span className="syntax-boolean">true</span>
                  <br />
                  <span className="syntax-bracket">{'}'}</span><span className="syntax-punctuation">;</span>
                  <span className="typing-cursor inline-block w-2 h-4 ml-1 bg-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
