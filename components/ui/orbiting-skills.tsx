"use client";
import React, { useEffect, useState, memo } from 'react';
import {
  SiCplusplus, SiPython, SiJavascript, SiPhp, SiHtml5, SiCss,
  SiBootstrap, SiNodedotjs, SiExpress, SiReact, SiMysql,
  SiTensorflow, SiScikitlearn, SiKeras, SiGit, SiGithub,
  SiGnubash, SiSelenium, SiFigma, SiCanva, SiLatex, SiArduino,
  SiKaggle, SiHuggingface, SiC
} from "react-icons/si";
import {
  FaJava, FaLinux, FaCode
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// --- Type Definitions ---
type GlowColor = 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose';

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  icon: React.ReactNode;
  iconColor: string;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// Helper to create an orbit
const createOrbit = (
  radius: number,
  speed: number,
  glowColor: GlowColor,
  size: number,
  items: { id: string, label: string, icon: React.ReactNode, iconColor: string }[]
): SkillConfig[] => {
  return items.map((item, index) => ({
    ...item,
    orbitRadius: radius,
    size,
    speed,
    phaseShift: (2 * Math.PI / items.length) * index,
    glowColor
  }));
};

// 28 Skills categorized into 4 orbits
const orbit1 = createOrbit(120, 0.8, 'cyan', 50, [
  { id: 'c', label: 'C', icon: <SiC className="w-full h-full" />, iconColor: '#A8B9CC' },
  { id: 'cpp', label: 'C++', icon: <SiCplusplus className="w-full h-full" />, iconColor: '#00599C' },
  { id: 'java', label: 'Java', icon: <FaJava className="w-full h-full" />, iconColor: '#ED8B00' },
  { id: 'python', label: 'Python', icon: <SiPython className="w-full h-full" />, iconColor: '#3776AB' },
  { id: 'javascript', label: 'JavaScript', icon: <SiJavascript className="w-full h-full" />, iconColor: '#F7DF1E' },
  { id: 'php', label: 'PHP', icon: <SiPhp className="w-full h-full" />, iconColor: '#777BB4' },
]);

const orbit2 = createOrbit(200, -0.6, 'purple', 50, [
  { id: 'html', label: 'HTML', icon: <SiHtml5 className="w-full h-full" />, iconColor: '#E34F26' },
  { id: 'css', label: 'CSS', icon: <SiCss className="w-full h-full" />, iconColor: '#1572B6' },
  { id: 'bootstrap', label: 'Bootstrap', icon: <SiBootstrap className="w-full h-full" />, iconColor: '#7952B3' },
  { id: 'nodejs', label: 'Node.js', icon: <SiNodedotjs className="w-full h-full" />, iconColor: '#339933' },
  { id: 'express', label: 'Express', icon: <SiExpress className="w-full h-full" />, iconColor: '#FFFFFF' },
  { id: 'react', label: 'React.js', icon: <SiReact className="w-full h-full" />, iconColor: '#61DAFB' },
  { id: 'mysql', label: 'MySQL', icon: <SiMysql className="w-full h-full" />, iconColor: '#4479A1' },
]);

const orbit3 = createOrbit(280, 0.45, 'emerald', 50, [
  { id: 'tensorflow', label: 'TensorFlow', icon: <SiTensorflow className="w-full h-full" />, iconColor: '#FF6F00' },
  { id: 'scikit', label: 'Scikit-Learn', icon: <SiScikitlearn className="w-full h-full" />, iconColor: '#F7931E' },
  { id: 'keras', label: 'Keras', icon: <SiKeras className="w-full h-full" />, iconColor: '#D00000' },
  { id: 'kaggle', label: 'Kaggle', icon: <SiKaggle className="w-full h-full" />, iconColor: '#20BEFF' },
  { id: 'huggingface', label: 'Hugging Face', icon: <SiHuggingface className="w-full h-full" />, iconColor: '#FFD21E' },
  { id: 'latex', label: 'LaTeX', icon: <SiLatex className="w-full h-full" />, iconColor: '#008080' },
  { id: 'selenium', label: 'Selenium', icon: <SiSelenium className="w-full h-full" />, iconColor: '#43B02A' },
]);

const orbit4 = createOrbit(360, -0.3, 'rose', 50, [
  { id: 'git', label: 'Git', icon: <SiGit className="w-full h-full" />, iconColor: '#F05032' },
  { id: 'github', label: 'GitHub', icon: <SiGithub className="w-full h-full" />, iconColor: '#FFFFFF' },
  { id: 'vscode', label: 'VS Code', icon: <VscVscode className="w-full h-full" />, iconColor: '#007ACC' },
  { id: 'linux', label: 'Linux', icon: <FaLinux className="w-full h-full" />, iconColor: '#FCC624' },
  { id: 'bash', label: 'Bash', icon: <SiGnubash className="w-full h-full" />, iconColor: '#4EAA25' },
  { id: 'arduino', label: 'Arduino', icon: <SiArduino className="w-full h-full" />, iconColor: '#00979D' },
  { id: 'figma', label: 'Figma', icon: <SiFigma className="w-full h-full" />, iconColor: '#F24E1E' },
  { id: 'canva', label: 'Canva', icon: <SiCanva className="w-full h-full" />, iconColor: '#00C4CC' },
]);

const skillsConfig: SkillConfig[] = [...orbit1, ...orbit2, ...orbit3, ...orbit4];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, icon, iconColor, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 50 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2.5 bg-[#111114]/90 border border-white/10 backdrop-blur-md
          rounded-2xl flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-150 shadow-2xl z-50' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 20px ${iconColor}40, inset 0 0 10px ${iconColor}20`
            : undefined,
          borderColor: isHovered ? `${iconColor}80` : undefined,
        }}
      >
        <div 
           className="w-full h-full transition-transform duration-300 flex items-center justify-center drop-shadow-md" 
           style={{ color: iconColor }}
        >
            {icon}
        </div>
        {isHovered && (
          <div 
             className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#111114] border border-white/20 backdrop-blur-md rounded-lg text-xs text-white font-medium whitespace-nowrap pointer-events-none drop-shadow-xl z-50"
             style={{
                boxShadow: `0 4px 20px ${iconColor}40`
             }}
           >
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: { primary: 'rgba(6, 182, 212, 0.4)', secondary: 'rgba(6, 182, 212, 0.15)', border: 'rgba(6, 182, 212, 0.2)' },
    purple: { primary: 'rgba(147, 51, 234, 0.4)', secondary: 'rgba(147, 51, 234, 0.15)', border: 'rgba(147, 51, 234, 0.2)' },
    emerald: { primary: 'rgba(16, 185, 129, 0.4)', secondary: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.2)' },
    amber: { primary: 'rgba(245, 158, 11, 0.4)', secondary: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.2)' },
    rose: { primary: 'rgba(225, 29, 72, 0.4)', secondary: 'rgba(225, 29, 72, 0.15)', border: 'rgba(225, 29, 72, 0.2)' }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse opacity-50"
        style={{
          background: `radial-gradient(circle, transparent 40%, ${colors.secondary} 80%, ${colors.primary} 100%)`,
          boxShadow: `0 0 40px ${colors.primary}, inset 0 0 40px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Slowed down baseline speed by multiplying deltaTime by 0.2
      setTime(prevTime => prevTime + deltaTime * 0.2);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 120, glowColor: 'cyan', delay: 0 },
    { radius: 200, glowColor: 'purple', delay: 1.5 },
    { radius: 280, glowColor: 'emerald', delay: 3 },
    { radius: 360, glowColor: 'rose', delay: 4.5 }
  ];

  return (
    <div className="w-full relative h-[360px] sm:h-[450px] md:h-[600px] lg:h-[800px] flex items-center justify-center overflow-visible">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center scale-[0.45] sm:scale-[0.55] md:scale-75 lg:scale-100 origin-center transition-transform duration-500 z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central Core Icon */}
        <div className="w-28 h-28 bg-[#111114] border border-white/20 rounded-full flex items-center justify-center z-10 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-white/90">
            <FaCode className="w-12 h-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          </div>
        </div>

        {/* Render paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skills */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </div>
  );
}
