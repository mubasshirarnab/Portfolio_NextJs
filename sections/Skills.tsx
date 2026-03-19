"use client";

import React from "react";
import { ScrollSection } from "@/components/ui/scroll-section";
import { Reveal } from "@/components/ui/reveal";
import OrbitingSkills from "@/components/ui/orbiting-skills";

import {
  SiCplusplus, SiPython, SiJavascript, SiPhp, SiHtml5, SiCss,
  SiBootstrap, SiNodedotjs, SiExpress, SiReact, SiMysql,
  SiTensorflow, SiScikitlearn, SiKeras, SiGit, SiGithub,
  SiGnubash, SiSelenium, SiFigma, SiCanva, SiLatex, SiArduino,
  SiKaggle, SiHuggingface, SiC
} from "react-icons/si";
import { FaJava, FaLinux, FaCode, FaLaptopCode, FaBrain, FaTools, FaDatabase, FaPaintBrush } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const categorizedSkills = [
  {
    title: "Programming",
    icon: FaCode,
    gradient: "from-blue-400 to-cyan-400",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "C", icon: SiC, color: "#A8B9CC" }
    ]
  },
  {
    title: "Web Technologies",
    icon: FaLaptopCode,
    gradient: "from-emerald-400 to-teal-400",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ]
  },
  {
    title: "ML & Data Science",
    icon: FaBrain,
    gradient: "from-purple-400 to-pink-400",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "Kaggle", icon: SiKaggle, color: "#20BEFF" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    gradient: "from-amber-400 to-orange-400",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "Arduino", icon: SiArduino, color: "#00979D" },
    ]
  },
  {
    title: "Databases & Design",
    icon: FaDatabase,
    gradient: "from-rose-400 to-red-400",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Canva", icon: SiCanva, color: "#00C4CC" },
      { name: "LaTeX", icon: SiLatex, color: "#008080" },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
    ]
  }
];

const Skills = () => {
  return (
    <ScrollSection id="skills" className="py-24 md:py-32 relative bg-dark-black z-10 overflow-hidden border-t border-white/5 flex flex-col items-center">

      {/* Deep Space Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-purple/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-bright-aqua/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto relative z-10 w-full flex flex-col items-center">

        {/* Header section */}
        <div className="flex flex-col items-center mt-6 mb-4 text-center px-4 lg:px-12 w-full max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">
              Interactive <span className="text-bright-aqua">Nexus</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-bright-aqua mx-auto mt-6 mb-6 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-light-grey/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              My progressive technology stack and core competencies traversing a unified ecosystem.
            </p>
          </Reveal>
        </div>

        {/* Orbiting Skills Component */}
        <div className="w-full flex justify-center mt-0 mb-4 px-4 lg:px-12 max-w-7xl mx-auto">
          <Reveal delay={0.4} width="100%">
            <OrbitingSkills />
          </Reveal>
        </div>

        {/* Modern Bento-Box Skills Grid for User Friendliness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl mx-auto mt-8 md:mt-4 relative z-20 px-4 lg:px-12 pb-12">
          {categorizedSkills.map((category, idx) => {
            const CategoryIcon = category.icon;
            
            return (
              <Reveal key={idx} delay={0.1 * idx} width="100%">
                <div className="bg-[#111114]/90 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 hover:border-white/20 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] h-full flex flex-col relative overflow-hidden">
                  
                  {/* Subtle ambient glow behind the card */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl pointer-events-none rounded-full`} />

                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5 relative z-10">
                     {/* Subtle underline animated gradient */}
                     <div className={`absolute bottom-[-1px] left-0 h-[1.5px] w-0 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-700 rounded-full`} />
                     
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                        <CategoryIcon className="w-6 h-6 text-white/90 group-hover:text-white transition-colors" />
                     </div>
                     <h3 className={`text-xl font-display font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}>
                       {category.title}
                     </h3>
                  </div>

                  {/* Skills List in 2 columns */}
                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 mt-auto relative z-10">
                    {category.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={sIdx} className="flex items-center gap-3 group/skill cursor-default">
                          <div className="w-10 h-10 rounded-xl bg-dark-black/50 flex items-center justify-center border border-white/5 group-hover/skill:border-white/20 transition-all duration-300 group-hover/skill:shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0">
                             <SkillIcon className="w-5 h-5 opacity-70 group-hover/skill:opacity-100 transition-all duration-300 group-hover/skill:scale-110 drop-shadow-sm" style={{ color: skill.color }} />
                          </div>
                          <span className="text-sm md:text-base font-medium text-light-grey/80 group-hover/skill:text-white transition-colors duration-300 tracking-wide truncate">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

      </div>
    </ScrollSection>
  );
};

export default Skills;
