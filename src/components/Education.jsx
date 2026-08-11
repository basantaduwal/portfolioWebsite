import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Education = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-label">// education</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education
            </h2>
          </div>

          {/* Education Entry Card */}
          <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start">
            {/* Left Accent Bar */}
            <div className="w-1.5 h-full absolute left-0 top-0 bg-gradient-to-b from-indigo-500 to-emerald-400" />

            {/* Icon */}
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20 shrink-0 mt-1">
              <GraduationCap className="w-7 h-7" />
            </div>

            {/* Content */}
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  BSc (Hons) Computing
                </h3>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-mono text-xs font-medium">
                  Currently Pursuing
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Nepal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Undergraduate Degree</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2 border-t border-slate-800">
                Building a strong foundation in computer science, software engineering, databases, REST APIs, and modern web development technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
