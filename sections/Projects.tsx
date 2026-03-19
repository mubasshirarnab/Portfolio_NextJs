"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { Reveal } from "@/components/ui/reveal";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { Github, ExternalLink, Activity, Network, Smartphone, Cpu } from "lucide-react";

const projectsData = [
  {
    id: "mediai",
    title: "MediAI",
    subtitle: "AI-Powered Healthcare Ecosystem",
    icon: <Activity className="w-6 h-6" />,
    color: "from-rose-500 to-red-600",
    themeColor: "#e11d48",
    description: "An intelligent healthcare platform combining AI diagnostics with comprehensive hospital management. Integrates CNN disease detection models directly with high-volume operations.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "PHP", "MySQL", "NLP"],
    image: "/features/mediai.png",
    github: "https://github.com/mubasshirarnab/MediAI",
    live: "#"
  },
  {
    id: "unisphere",
    title: "UniSphere",
    subtitle: "Unified Campus Management Platform",
    icon: <Network className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    themeColor: "#06b6d4",
    description: "A robust application integrating academic resources, peer-to-peer services, and campus operations into a single desktop-grade environment. Engineered with pure Java concurrency.",
    tech: ["Java", "JavaFX", "Maven", "MySQL", "Sockets"],
    image: "/features/unisphere.png",
    github: "https://github.com/mubasshirarnab/UniShpere",
    live: "#"
  },
  {
    id: "urides",
    title: "URides",
    subtitle: "University Transportation Network",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-purple-500 to-fuchsia-500",
    themeColor: "#a855f7",
    description: "A localized ride-sharing platform optimizing student transit networks. Maps real-time shuttle locations and facilitates highly accurate peer ride-matching on campus.",
    tech: ["PHP", "MySQL", "Vanilla JS", "TailwindCSS"],
    image: "/features/urides.png",
    github: "https://github.com/mubasshirarnab/URides",
    live: "#"
  },
  {
    id: "atcr",
    title: "Autonomous ATCR",
    subtitle: "Trash Collector Robotics",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-yellow-400 to-orange-500",
    themeColor: "#eab308",
    description: "Led the engineering of an automated waste collection robot. Designed the complete mechanical chassis in Fusion 360 and programmed intelligent autonomous traversal logic in C++.",
    tech: ["Arduino", "C++", "Fusion 360", "Sensors"],
    image: "/features/atcr.webp",
    github: "https://github.com/mubasshirarnab",
    live: "#"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0].id);
  const currentProject = projectsData.find(p => p.id === activeProject) || projectsData[0];

  return (
    <ScrollSection id="projects" className="relative py-20 md:py-32 bg-gray-50 dark:bg-dark-black transition-colors duration-500 border-t border-slate-200 dark:border-white/5">

      {/* Dynamic ambient backdrop bound to active project color */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none transition-colors duration-1000"
        style={{ background: `radial-gradient(circle at 70% 50%, ${currentProject.themeColor}, transparent 60%)` }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center justify-center mb-10 md:mb-24 w-full">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4 inline-block text-center w-full">
              Featured <span className="gradient-text">Deployments</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 dark:text-light-grey/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Explore the core infrastructure, algorithms, and interfaces I&apos;ve built. Select a deployment to expand its architectural details.
            </p>
          </Reveal>
        </div>

        {/* Interactive Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">

          {/* Left Side: Navigation Tabs */}
          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={`group relative text-left p-4 md:p-6 rounded-2xl transition-all duration-500 overflow-hidden ${activeProject === project.id
                    ? "bg-white dark:bg-dark-surface shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-200 dark:border-white/10"
                    : "bg-transparent border border-transparent hover:border-slate-200 hover:bg-white/50 dark:hover:border-white/5 dark:hover:bg-white/5"
                  }`}
              >
                {/* Active Indicator Line */}
                {activeProject === project.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${project.color}`}
                  />
                )}

                <div className="flex items-center gap-4 relative z-10">
                  <div className={`p-3 rounded-xl transition-colors duration-500 ${activeProject === project.id
                      ? "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white"
                      : "bg-slate-100/50 dark:bg-white/5 text-slate-500 dark:text-white/50 group-hover:text-slate-700 dark:group-hover:text-white/80"
                    }`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-display font-bold transition-colors duration-500 ${activeProject === project.id ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-white/60"
                      }`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm tracking-wide mt-1 transition-colors duration-500 ${activeProject === project.id ? "text-slate-500 dark:text-light-grey/80" : "text-slate-400 dark:text-white/40"
                      }`}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Detailed Project Inspector */}
          <div className="w-full lg:w-[65%] flex flex-col h-full items-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex-1 w-full h-full"
              >
                <GlowingShadow className="w-full h-full">
                  <div className="flex flex-col h-full w-full bg-slate-50 dark:bg-dark-black rounded-[0.9rem] overflow-hidden text-left shadow-inner">

                    {/* Cinematic Image Header */}
                    <div className="relative w-full h-64 sm:h-80 md:h-96 shrink-0 bg-slate-100 dark:bg-dark-black">
                      {currentProject.id !== 'atcr' ? (
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover object-top opacity-90"
                        />
                      ) : (
                        <>
                          {/* We are utilizing a stylized generic gradient background until actual images exist */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.color} opacity-20 dark:opacity-40`} />
                          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

                          {/* Decorative mesh to simulate complex tech UX */}
                          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        </>
                      )}

                      {/* Gradient shadow overlay for smooth bridging into text */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-50 dark:from-dark-black to-transparent" />
                    </div>

                    {/* Content details */}
                    <div className="p-8 sm:p-10 flex flex-col flex-1 relative z-10 -mt-10">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-4 mb-6">
                        <div>
                          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">{currentProject.title}</h3>
                          <p className="text-slate-600 dark:text-light-grey/70 text-lg uppercase tracking-widest font-display text-sm relative pl-4 border-l-2" style={{ borderLeftColor: currentProject.themeColor }}>
                            {currentProject.subtitle}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 mt-4 sm:mt-0">
                          <a href={currentProject.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors">
                            <Github className="w-5 h-5" />
                          </a>
                          <a href={currentProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-full text-white font-medium text-sm transition-transform hover:scale-105 shadow-lg" style={{ backgroundColor: currentProject.themeColor }}>
                            Execute Build
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-light-grey/80 leading-relaxed font-light mb-8 text-base sm:text-lg">
                        {currentProject.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="mt-auto">
                        <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-white/40 mb-3 font-display">Technology Architecture</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.tech.map((t, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-white/10 rounded-md text-xs font-medium text-slate-600 dark:text-light-grey/60">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowingShadow>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </ScrollSection>
  );
};

export default Projects;
