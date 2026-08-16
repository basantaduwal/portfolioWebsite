import React from "react";
import { ExternalLink, Star, Check } from "lucide-react";
import { GithubIcon } from "./icons";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    id: 1,
    title: "Mini Daraz — E-commerce Platform",
    subtitle: "Full-Stack E-commerce Application",
    description:
      "A full-stack e-commerce platform inspired by online marketplaces, featuring product browsing, authentication, product management, cart functionality, and an admin dashboard.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    features: [
      "User registration and login",
      "Product browsing",
      "Product search/filtering",
      "Shopping cart",
      "Admin dashboard",
      "Product management",
      "Authentication",
      "REST API",
      "MongoDB database",
    ],
    liveUrl: "https://mini-daraz-mern.vercel.app/",
    githubUrl: "https://github.com/basantaduwal/miniDaraz.git", 
    featured: true,
  },
  {
    id: 2,
    title: "MovFlix — Movie Discovery Web App",
    subtitle: "React & TMDB API Application",
    description:
      "A responsive movie browsing application built with React that allows users to explore and discover movies using data from the TMDB API.",
    technologies: ["React", "Vite", "JavaScript", "TMDB API", "CSS"],
    features: [
      "Movie discovery",
      "Search",
      "Movie details",
      "Responsive interface",
      "API integration",
    ],
    liveUrl: "https://movflix404.vercel.app/",
    githubUrl: "https://github.com/basantaduwal/movieWebsite.git",
    featured: false,
  },
  {
    id: 3,
    title: "Gaming Library Tracker",
    subtitle: "Personal Collection Manager",
    description:
      "A web application for managing and organizing a personal collection of games, with user authentication and CRUD functionality.",
    technologies: ["React", "Next.js", "JavaScript", "API Integration"],
    features: [
      "User authentication",
      "Add games",
      "Edit games",
      "Delete games",
      "Game library management",
      "Responsive interface",
    ],
    liveUrl: "https://gaminlib.vercel.app/",
    githubUrl: "https://github.com/basantaduwal/GaminLib.git",
    featured: false,
  },
  {
    id: 4,
    title: "Codelecta — Educational Website",
    subtitle: "HTML, CSS & JavaScript Application",
    description:
      "A static educational website built with HTML, CSS, and JavaScript, providing easy navigation between pages for courses, services, contact, feedback, and user account management.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive course navigation",
      "Service, contact & feedback pages",
      "Login, signup & password recovery",
      "Payment page",
      "Policy pages",
      "Modular page-based styling",
    ],
    liveUrl: "https://codelecta.vercel.app/",
    githubUrl: "https://github.com/Codelecta/Codelecta.git",
    featured: false,
  },
];

const Projects = () => {
  const [ref, isVisible] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="mb-14">
            <span className="section-label">// featured projects</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
              Some of the projects I've built while learning and experimenting
              with modern web technologies.
            </p>
          </div>

          {/* Projects Container */}
          <div className="space-y-10">
            {projects.map((project) => {
              const isFeatured = project.featured;
              return (
                <div
                  key={project.id}
                  className={`glass-card glass-card-hover rounded-2xl overflow-hidden border ${
                    isFeatured
                      ? "border-indigo-500/40 shadow-2xl shadow-indigo-500/10"
                      : "border-slate-800"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Browser Window Mockup Preview */}
                    <div className="lg:col-span-5 bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col">
                      {/* Window Bar */}
                      <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-800/80 justify-between">
                        <div className="flex space-x-1.5">
                          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="font-mono text-xs text-slate-400 bg-slate-950/60 px-3 py-1 rounded-md border border-slate-800 truncate max-w-[200px]">
                          {project.title.split(" ")[0].toLowerCase()}.app
                        </div>
                        {isFeatured && (
                          <div className="flex items-center gap-1 bg-indigo-500/20 text-indigo-300 text-xs px-2.5 py-0.5 rounded-full border border-indigo-500/30 font-medium">
                            <Star className="w-3 h-3 fill-current" />
                            <span>Featured</span>
                          </div>
                        )}
                      </div>

                      {/* Mockup Canvas — live site preview, click to open, vertically centered in column */}
                      <div className="flex-1 flex items-center justify-center py-6">
                        {project.liveUrl && project.liveUrl !== "#" ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo of ${project.title}`}
                            className="h-[280px] w-full relative overflow-hidden group block cursor-pointer bg-slate-900 shrink-0"
                          >
                            {/* Live embedded site */}
                            <iframe
                              src={project.liveUrl}
                              title={`${project.title} live preview`}
                              loading="lazy"
                              tabIndex={-1}
                              className="pointer-events-none absolute top-0 left-0 origin-top-left w-[250%] h-[250%] scale-[0.4] border-0"
                            />

                            {/* Click-to-visit overlay */}
                            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/60 transition-colors duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-indigo-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-xl shadow-lg">
                                <ExternalLink className="w-4 h-4" />
                                <span>Visit live site</span>
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div className="p-8 h-[280px] w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 relative overflow-hidden group shrink-0">
                            {/* Decorative UI Cards in Preview (fallback when no live link) */}
                            <div className="w-full max-w-sm space-y-3 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                              <div className="h-5 bg-indigo-500/30 rounded-md w-3/4" />
                              <div className="h-3 bg-slate-700/50 rounded-md w-1/2" />
                              <div className="grid grid-cols-2 gap-3 pt-4">
                                <div className="h-20 bg-slate-800/60 rounded-xl border border-slate-700/50" />
                                <div className="h-20 bg-slate-800/60 rounded-xl border border-slate-700/50" />
                              </div>
                            </div>

                            {/* Title Overlay on Canvas */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/30 backdrop-blur-[2px]">
                              <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-1">
                                {project.subtitle}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                                {project.title}
                              </h3>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <h3 className="text-2xl font-bold text-white tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Tech Badges */}
                        <div className="mb-6">
                          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                            Technologies Used
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 bg-slate-900 text-indigo-300 border border-indigo-500/20 rounded-md font-mono text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                            Key Features
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.slice(0, 6).map((feat, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                              >
                                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium px-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-700 transition-all"
                        >
                          <GithubIcon size={16} />
                          <span>GitHub</span>
                        </a>
                      </div>
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

export default Projects;
