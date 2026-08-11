import React from 'react';
import { Monitor, Server, Database, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const categories = [
    {
      title: 'Frontend',
      icon: Monitor,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Responsive Web Design'],
      accent: 'indigo',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
      accent: 'emerald',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB'],
      accent: 'amber',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
      accent: 'sky',
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 border-y border-slate-800/40">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-14">
            <span className="section-label">// skills & tools</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
              Technologies I work with to build modern web applications.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                      <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-800 hover:border-indigo-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
