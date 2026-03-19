"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { Reveal } from "@/components/ui/reveal";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { Briefcase, Users, Code, Activity, Crown } from "lucide-react";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const experienceData = [
    {
      role: "Project Lead",
      organization: "MediAI",
      duration: "Present",
      description: "Driving the development of an AI-powered healthcare management ecosystem. Orchestrating a team of developers to seamlessly integrate deep learning diagnostics with robust hospital operations algorithms.",
      icon: <Activity className="w-6 h-6" />,
      color: "from-rose-500 to-red-600",
      highlights: ["CNN Disease Detection Architecture", "End-to-End System Design", "Team Orchestration"]
    },
    {
      role: "Project Lead",
      organization: "UniSphere",
      duration: "Sept 2023 – Dec 2023",
      description: "Spearheaded a unified desktop campus management platform in Java. Designed and implemented complex multithreading architectures, optimized database access schemas, and established a scalable peer-to-peer tutoring network within the ecosystem.",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      highlights: ["Multithreaded Networking", "JavaFX Desktop Environments", "Database Schema Optimization"]
    },
    {
      role: "Peer Tutor",
      organization: "United International University",
      duration: "Mar 2023 – Present",
      description: "Mentoring undergraduate students in fundamental and advanced algorithmic concepts, object-oriented paradigms, and system architecture. Facilitating higher academic achievement through structured weekly sessions and personalized code-reviews.",
      icon: <Users className="w-6 h-6" />,
      color: "from-neon-purple to-fuchsia-500",
      highlights: ["Algorithms & Data Structures", "Object-Oriented Design", "Code Review & Mentorship"]
    }
  ];

  return (
    <ScrollSection id="experience" className="py-32 relative bg-dark-black z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-bright-aqua/5 via-neon-purple/5 to-transparent blur-[150px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={containerRef}>
        
        <div className="flex flex-col items-center mb-24 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">
              Professional <span className="gradient-text">Experiences</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-bright-aqua mx-auto mt-6 mb-6 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-light-grey/60 max-w-2xl text-lg font-light leading-relaxed">
              Leadership roles and mentoring positions that bridge the gap between technical execution and team collaboration.
            </p>
          </Reveal>
        </div>

        {/* Cinematic Path Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Animated SVG Path for the Timeline */}
          <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-2 hidden md:block z-0">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 8 1000" fill="none">
              <path d="M 4 0 L 4 1000" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="8 8" />
              <motion.path 
                d="M 4 0 L 4 1000" 
                stroke="url(#experience-gradient)" 
                strokeWidth="4" 
                style={{ pathLength }} 
                className="drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
              />
              <defs>
                <linearGradient id="experience-gradient" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-16 md:pl-28 pr-4"
              >
                {/* Node Icon */}
                <div className="absolute left-0 md:left-4 top-0 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-dark-black border border-white/10 flex items-center justify-center z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                    {item.role === "Project Lead" ? <Crown className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" /> : item.icon}
                  </div>
                </div>

                {/* Content Card wrapped in GlowingShadow */}
                <GlowingShadow className="w-full">
                  <div className="glass-panel w-full p-6 md:p-8 rounded-[18px] transition-all duration-500 group relative overflow-hidden text-left bg-dark-surface">
                    {/* Subtle hover glow inside card */}
                    <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`} />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight mb-1">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-neon-purple" />
                          <span className="text-base text-light-grey/90 font-medium">{item.organization}</span>
                        </div>
                      </div>
                      
                      <div className="shrink-0 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-bright-aqua/90 text-xs tracking-widest font-display uppercase self-start md:self-auto shadow-inner">
                        {item.duration}
                      </div>
                    </div>

                    <p className="text-light-grey/70 font-light leading-relaxed mb-6 text-sm md:text-base">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4 mt-4">
                      {item.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-dark-black border border-white/5 rounded-lg text-light-grey/60 text-xs font-light hover:text-bright-aqua hover:border-bright-aqua/30 transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowingShadow>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default Experience;
