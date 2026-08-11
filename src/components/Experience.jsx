import React from 'react';
import { Briefcase, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Experience = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const opportunityCards = [
    {
      icon: Briefcase,
      title: 'Internship',
      description: 'Looking to gain practical industry experience in web and software development.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Interested in working with experienced developers and teams on meaningful projects.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Always exploring new web technologies, software architecture, and improving code quality.',
    },
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Learning',
      desc: 'Building a strong foundation in programming and core web technologies.',
      current: false,
    },
    {
      num: '02',
      title: 'Building',
      desc: 'Creating practical full-stack projects to apply theoretical concepts.',
      current: false,
    },
    {
      num: '03',
      title: 'Improving',
      desc: 'Experimenting with modern architecture, clean UI/UX, performance, and code quality.',
      current: true,
    },
    {
      num: '04',
      title: 'Contributing',
      desc: 'Looking forward to contributing to real-world development teams and products.',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950/40 border-y border-slate-800/40">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-14">
            <span className="section-label">// what i'm looking for</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              What I'm Looking For
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              I'm currently looking for internship and entry-level opportunities in web development and software development where I can contribute to real projects, learn from experienced developers, and grow as a software engineer.
            </p>
          </div>

          {/* Three Opportunity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {opportunityCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4"
                >
                  <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Development Journey Timeline */}
          <div>
            <div className="mb-10">
              <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest block mb-1">
                Roadmap
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                My Development Journey
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {journeySteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`glass-card p-5 rounded-2xl border relative flex flex-col justify-between space-y-3 ${
                    step.current
                      ? 'border-indigo-500/50 bg-indigo-500/10 shadow-lg shadow-indigo-500/10'
                      : 'border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-indigo-400">
                      {step.num}
                    </span>
                    {step.current && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Current Stage
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
