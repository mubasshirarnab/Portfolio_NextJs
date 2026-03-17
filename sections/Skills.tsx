"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { Reveal } from "@/components/ui/reveal";
import { 
  SiCplusplus, SiPython, SiJavascript, SiPhp, SiHtml5, SiCss, 
  SiBootstrap, SiNodedotjs, SiExpress, SiReact, SiMysql, 
  SiTensorflow, SiScikitlearn, SiKeras, SiGit, SiGithub, 
  SiGnubash, SiSelenium, SiFigma, SiCanva, SiLatex, SiArduino, 
  SiKaggle, SiHuggingface, SiC
} from "react-icons/si";
import { 
  FaJava, FaLinux, FaCode, FaLaptopCode, FaDatabase, 
  FaBrain, FaTools, FaVial, FaPaintBrush, FaCloud 
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// Grouped constellation array matching precise user headings, now with Timeline icons
const categorizedSkills = [
  {
    title: "Programming Languages",
    gradient: "from-blue-400 to-cyan-400",
    glowColor: "rgba(56,189,248,0.6)",
    icon: FaCode,
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC", delay: 0.1, yOffset: -6 },
      { name: "C++", icon: SiCplusplus, color: "#00599C", delay: 0.2, yOffset: 10 },
      { name: "Java", icon: FaJava, color: "#ED8B00", delay: 0.3, yOffset: -4 },
      { name: "Python", icon: SiPython, color: "#3776AB", delay: 0.4, yOffset: 12 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", delay: 0.5, yOffset: -10 },
      { name: "PHP", icon: SiPhp, color: "#777BB4", delay: 0.15, yOffset: 6 },
    ]
  },
  {
    title: "Web Technologies",
    gradient: "from-emerald-400 to-teal-400",
    glowColor: "rgba(52,211,153,0.6)",
    icon: FaLaptopCode,
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26", delay: 0.25, yOffset: -12 },
      { name: "CSS", icon: SiCss, color: "#1572B6", delay: 0.35, yOffset: 6 },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", delay: 0.45, yOffset: -6 },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", delay: 0.55, yOffset: 16 },
      { name: "Express", icon: SiExpress, color: "#FFFFFF", delay: 0.12, yOffset: -4 },
      { name: "React.js", icon: SiReact, color: "#61DAFB", delay: 0.22, yOffset: 10 },
    ]
  },
  {
    title: "Databases",
    gradient: "from-amber-400 to-orange-400",
    glowColor: "rgba(251,191,36,0.6)",
    icon: FaDatabase,
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1", delay: 0.32, yOffset: -10 },
    ]
  },
  {
    title: "Machine Learning & Data Science",
    gradient: "from-purple-400 to-pink-400",
    glowColor: "rgba(192,132,252,0.6)",
    icon: FaBrain,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", delay: 0.42, yOffset: 14 },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E", delay: 0.52, yOffset: -6 },
      { name: "Keras", icon: SiKeras, color: "#D00000", delay: 0.18, yOffset: 6 },
    ]
  },
  {
    title: "Developer Tools",
    gradient: "from-indigo-400 to-blue-400",
    glowColor: "rgba(129,140,248,0.6)",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", delay: 0.28, yOffset: -16 },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF", delay: 0.38, yOffset: 6 },
      { name: "VS Code", icon: VscVscode, color: "#007ACC", delay: 0.48, yOffset: -4 },
      { name: "Linux", icon: FaLinux, color: "#FCC624", delay: 0.58, yOffset: 10 },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25", delay: 0.14, yOffset: -10 },
      { name: "Arduino", icon: SiArduino, color: "#00979D", delay: 0.16, yOffset: 14 },
    ]
  },
  {
    title: "Testing & Automation",
    gradient: "from-rose-400 to-red-400",
    glowColor: "rgba(251,113,133,0.6)",
    icon: FaVial,
    skills: [
      { name: "Selenium", icon: SiSelenium, color: "#43B02A", delay: 0.24, yOffset: 4 },
    ]
  },
  {
    title: "Design & Documentation",
    gradient: "from-fuchsia-400 to-purple-400",
    glowColor: "rgba(232,121,249,0.6)",
    icon: FaPaintBrush,
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E", delay: 0.34, yOffset: -12 },
      { name: "Canva", icon: SiCanva, color: "#00C4CC", delay: 0.44, yOffset: 6 },
      { name: "LaTeX", icon: SiLatex, color: "#008080", delay: 0.54, yOffset: -4 },
    ]
  },
  {
    title: "Platforms",
    gradient: "from-yellow-400 to-orange-400",
    glowColor: "rgba(250,204,21,0.6)",
    icon: FaCloud,
    skills: [
      { name: "Kaggle", icon: SiKaggle, color: "#20BEFF", delay: 0.26, yOffset: -6 },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E", delay: 0.36, yOffset: 10 }
    ]
  }
];

const Skills = () => {
  return (
    <ScrollSection id="skills" className="py-32 relative bg-[#0f0f11] z-10 overflow-hidden flex flex-col items-center">
      
      {/* Deep Space Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-purple/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-bright-aqua/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full max-w-6xl">
        
        {/* Header section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">
              Interactive <span className="text-bright-aqua">Nexus</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="w-40 h-[2px] bg-gradient-to-r from-neon-purple via-bright-aqua to-teal-400 mx-auto mt-4 mb-6 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-light-grey/60 text-lg font-light max-w-2xl mx-auto">
              My progressive technology stack and core competencies.
            </p>
          </Reveal>
        </div>

        {/* Timeline Container Wrapping the Categories */}
        <div className="relative max-w-6xl mx-auto mt-8">
          
          {/* Top glowing origin dot (Center is 34px mobile, 50px desktop) */}
          <div className="absolute left-[22px] md:left-[38px] top-0 w-6 h-6 bg-bright-aqua/20 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.8)] z-20 flex items-center justify-center">
             <div className="w-2 h-2 bg-bright-aqua rounded-full animate-pulse shadow-[0_0_10px_white]" />
          </div>

          {/* Vertical progressive scroll-animated line (Increased width to 4px) */}
          <div className="absolute left-[33px] md:left-[49px] top-6 bottom-0 w-[4px] bg-white/5 rounded-full z-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-bright-aqua via-neon-purple to-rose-400 origin-top shadow-[0_0_15px_rgba(255,255,255,0.8)] rounded-full"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <div className="space-y-28 relative">
            {categorizedSkills.map((category, idx) => {
              const CategoryIcon = category.icon;
              return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-full pl-24 md:pl-36 group/category cursor-default"
              >
                
                {/* Timeline Category Icon Pin */}
                <div className="absolute left-[11px] md:left-[27px] top-0 z-10 w-12 h-12 rounded-full bg-[#111114] border-2 border-white/20 flex items-center justify-center transition-all duration-500 overflow-hidden shadow-lg group-hover/category:border-white/60 group-hover/category:scale-110 group-hover/category:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  {/* Subtle pulsing background strictly for the pin on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/category:opacity-20 transition-opacity duration-300`} />
                  
                  {/* The exact Category Icon rendering inside the pin */}
                  <CategoryIcon className="w-5 h-5 text-white/70 group-hover/category:text-white transition-colors duration-300 z-10 relative drop-shadow-md" />
                </div>

                <div className="w-full">
                  {/* Animated Heading Section */}
                  <div className="relative mb-10 inline-flex flex-col items-start z-10">
                    <h3 className="relative text-2xl md:text-3xl lg:text-4xl font-display font-bold">
                      {/* Base text */}
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 group-hover/category:${category.gradient} transition-all duration-500 relative z-10`}>
                        {category.title}
                      </span>
                      
                      {/* Intense Text Glow Copy - using blur for a massive radiant light effect */}
                      <span 
                        className={`absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r ${category.gradient} opacity-0 group-hover/category:opacity-100 transition-opacity duration-500 blur-[12px] z-0 pointer-events-none`}
                        aria-hidden="true"
                      >
                        {category.title}
                      </span>
                    </h3>
                    
                    {/* Expanding structural underline on hover */}
                    <div className={`w-0 group-hover/category:w-full h-[2px] mt-2 bg-gradient-to-r ${category.gradient} transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-full`} style={{ boxShadow: `0 0 10px ${category.glowColor}` }} />
                  </div>

                  {/* The Constellation Grid (Smaller Nodes) */}
                  <div className="flex flex-wrap justify-start gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-10 w-full mb-4">
                    {category.skills.map((skill, i) => (
                      <SkillNode key={i} skill={skill} />
                    ))}
                  </div>
                </div>

              </motion.div>
            )})}
          </div>
        </div>

      </div>
    </ScrollSection>
  );
};

// -----------------------------------------------------------------
// Interactive Magnetic Skill Node Component (Shrunken Size)
// -----------------------------------------------------------------
interface SkillProp {
  name: string;
  icon: any;
  color: string;
  delay: number;
  yOffset: number;
}

const SkillNode = ({ skill }: { skill: SkillProp }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse coordinate to movement (magnetic pull)
  const translateX = useTransform(x, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(y, [-0.5, 0.5], [-12, 12]);

  // Spring physics for snapping back
  const springConfig = { damping: 15, stiffness: 150, mass: 0.2 };
  const smoothX = useSpring(translateX, springConfig);
  const smoothY = useSpring(translateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const pullX = (e.clientX - rect.left) / width - 0.5;
    const pullY = (e.clientY - rect.top) / height - 0.5;
    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 12, 
        delay: skill.delay 
      }}
      className="relative flex flex-col items-center justify-center p-2 cursor-pointer group z-10 hover:z-50"
      style={{
        x: smoothX,
        y: smoothY
      }}
    >
      {/* Continuous idle floating animation */}
      <motion.div
        animate={{ y: [0, skill.yOffset, 0] }}
        transition={{ duration: 4 + skill.delay * 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-3"
      >
        {/* The Node Backing Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{ backgroundColor: skill.color }}
        />
        
        {/* The Glassmorphic Icon Container (Smaller Base) */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-[24px] bg-dark-surface border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_8px_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Inner Light Sweep effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

          {/* Authentic Brand Logo - COLORFUL BY DEFAULT */}
          <Icon 
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300 z-10" 
            style={{ 
              color: skill.color,
              filter: `drop-shadow(0 0 4px rgba(255,255,255,0.05))`
            }} 
          />
          {/* Duplicate Icon for the intense specific color glow on hover */}
          <Icon 
            className="absolute w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 mix-blend-screen" 
            style={{ 
              color: skill.color,
              filter: `drop-shadow(0 0 12px ${skill.color}) drop-shadow(0 0 30px ${skill.color})`
            }} 
          />
        </div>

        {/* Text Label */}
        <motion.span 
          className="text-white/60 font-semibold text-xs md:text-sm tracking-widest uppercase transition-all duration-300"
        >
          {/* Duplicate label behind for colored glow */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" style={{ color: skill.color }}>
            {skill.name}
          </span>
          {/* Foreground bright label */}
          <span className="relative group-hover:text-white drop-shadow-lg transition-colors duration-300">
            {skill.name}
          </span>
        </motion.span>

      </motion.div>
    </motion.div>
  );
};

export default Skills;
