import React from 'react';
import { BookOpen, MapPin, Code2, Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const infoCards = [
    {
      icon: BookOpen,
      label: 'Currently',
      value: 'BSc (Hons) Computing Student',
    },
    {
      icon: MapPin,
      label: 'Based in',
      value: 'Bhaktapur, Nepal',
    },
    {
      icon: Code2,
      label: 'Interested in',
      value: 'Web Development & Software Engineering',
    },
    {
      icon: Briefcase,
      label: 'Looking for',
      value: 'Internship / Junior Opportunities',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Heading */}
          <div className="mb-12">
            <span className="section-label">// about me</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a computing student from Nepal with a strong interest in web development and software engineering. I enjoy learning new technologies and building projects that solve practical problems.
              </p>
              <p>
                Through academic and personal projects, I've worked with both frontend and backend technologies and gained experience building responsive interfaces, REST APIs, authentication systems, databases, and full-stack applications.
              </p>
              <p>
                I'm currently looking for opportunities where I can gain professional experience, work with a development team, and continue improving my technical skills.
              </p>
            </div>

            {/* Right Column: Info Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3"
                  >
                    <div className="p-2.5 bg-indigo-500/10 rounded-xl w-fit text-indigo-400 border border-indigo-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block mb-1">
                        {card.label}
                      </span>
                      <p className="text-slate-200 font-medium text-sm sm:text-base leading-snug">
                        {card.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
