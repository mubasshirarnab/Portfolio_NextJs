"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { Zap, MapPin, GraduationCap, Code2, Cpu, Layers, LayoutTemplate } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden bg-gray-50 dark:bg-dark-black transition-colors duration-500"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <Reveal>
          <div className="flex flex-col mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Who I <span className="text-bright-aqua">Am</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-bright-aqua rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:auto-rows-[160px]">
          {/* Profile Card - Col 1, Row 1-2 */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 md:row-span-2 relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-dark-surface border border-slate-200 dark:border-white/10 min-h-[280px] md:min-h-0"
          >
            <motion.div 
              className="absolute inset-0 z-10 bg-gradient-to-t from-dark-black/90 via-dark-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-70 pointer-events-none"
            />
            <Image
              src="/profile.png"
              alt="Mubasshir Arnab"
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
            <div 
              className="absolute bottom-0 left-0 p-8 z-20 w-full transform transition-all duration-500 group-hover:-translate-y-4"
              style={{ transform: "translateZ(50px)" }}
            >
              <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-bright-aqua transition-colors duration-300 drop-shadow-md">Mubasshir Arnab</h3>
              <p className="text-light-grey/80 font-light text-sm drop-shadow-sm">Software Engineer</p>
            </div>
          </TiltCard>

          {/* Philosophy Card - Col 2-3, Row 1 */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 md:row-span-1 rounded-[24px] md:rounded-[32px] bg-white dark:bg-[#0f0f11] border border-slate-200 dark:border-white/5 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Spotlight Hover Effect */}
            <div className="absolute -inset-full w-[300%] h-[300%] bg-gradient-to-tr from-neon-purple/20 to-bright-aqua/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-12 blur-[80px] pointer-events-none" />
            
            <div 
              className="relative z-10 flex items-center gap-3 mb-4 transform transition-transform duration-500 group-hover:translate-x-2"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="p-2 rounded-xl bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <Zap className="w-5 h-5 text-neon-purple group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-neon-purple transition-colors duration-300">The Philosophy</h3>
            </div>
            <p 
              className="relative z-10 text-slate-600 dark:text-light-grey/60 text-base md:text-sm lg:text-base font-light leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300"
              style={{ transform: "translateZ(40px)" }}
            >
              I am passionate about creating robust full-stack software that is mathematically rigorous under the hood, yet beautiful and intuitive externally. Bridging the gap between deep machine learning logic and high-performance pixels.
            </p>
          </TiltCard>

          {/* Location Card - Col 2, Row 2 */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 md:row-span-1 rounded-[24px] md:rounded-[32px] bg-white dark:bg-[#0f0f11] border border-slate-200 dark:border-white/5 p-6 md:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            {/* Floating Pulse Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse-slow pointer-events-none" />
            
            <motion.div 
              className="relative w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:-translate-y-2"
              style={{ transform: "translateZ(40px)" }}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-6 h-6 text-red-500 group-hover:text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full border border-red-500/30 group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            </motion.div>
            <h4 
              className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-red-400 transition-colors duration-300"
              style={{ transform: "translateZ(30px)" }}
            >
              Dhaka, Bangladesh
            </h4>
            <p 
              className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-medium"
              style={{ transform: "translateZ(20px)" }}
            >Location</p>
          </TiltCard>

          {/* Core Capabilities - Col 3, Row 2-3 */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 md:row-span-2 rounded-[24px] md:rounded-[32px] bg-slate-900 dark:bg-dark-surface border border-slate-200 dark:border-white/5 p-6 md:p-8 flex flex-col transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-bright-aqua/10 blur-[60px] rounded-full group-hover:bg-bright-aqua/30 transition-colors duration-500 pointer-events-none" />
            
            <h3 
              className="text-xl md:text-2xl font-display font-bold text-white mb-6 relative z-10 group-hover:text-bright-aqua transition-colors duration-300 drop-shadow-md"
              style={{ transform: "translateZ(40px)" }}
            >Core Capabilities</h3>
            <div className="flex flex-col gap-4 flex-1 justify-center relative z-10" style={{ transform: "translateZ(30px)" }}>
              {[
                { icon: <Code2 className="w-4 h-4" />, title: "Full-Stack Web Dev", color: "text-bright-aqua", bg: "hover:bg-bright-aqua/10", border: "hover:border-bright-aqua/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]" },
                { icon: <Cpu className="w-4 h-4" />, title: "Machine Learning", color: "text-neon-purple", bg: "hover:bg-neon-purple/10", border: "hover:border-neon-purple/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]" },
                { icon: <Layers className="w-4 h-4" />, title: "System Architecture", color: "text-slate-400", bg: "hover:bg-slate-500/10", border: "hover:border-slate-500/50 hover:shadow-[0_0_20px_rgba(148,163,184,0.2)]" },
                { icon: <LayoutTemplate className="w-4 h-4" />, title: "UI/UX Alignment", color: "text-rose-400", bg: "hover:bg-rose-500/10", border: "hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(251,113,133,0.2)]" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 8, scale: 1.03 }}
                  className={`flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 transition-all duration-300 cursor-pointer ${item.bg} ${item.border} group/item`}
                >
                  <div className={`${item.color} drop-shadow-[0_0_10px_currentColor] group-hover/item:scale-125 transition-transform duration-300`}>{item.icon}</div>
                  <span className="text-sm font-medium text-white/90 group-hover/item:text-white transition-colors duration-300">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </TiltCard>

          {/* Education - Col 1-2, Row 3 */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 md:row-span-1 rounded-[24px] md:rounded-[32px] bg-white dark:bg-[#0f0f11] border border-slate-200 dark:border-white/5 p-6 md:p-8 flex items-center gap-6 relative overflow-hidden"
          >
            {/* Animated Shine Border Effect */}
            <div className="absolute inset-0 w-full h-full border-2 border-transparent group-hover:border-bright-aqua/50 rounded-[32px] transition-colors duration-500 group-hover:shadow-[inset_0_0_20px_rgba(0,240,255,0.15)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-transparent via-bright-aqua/10 to-transparent -translate-x-[150%] group-hover:translate-x-[50%] transition-transform duration-[2s] ease-in-out rotate-45 pointer-events-none" />

            <div 
              className="w-16 h-16 rounded-2xl bg-bright-aqua/10 flex items-center justify-center shrink-0 group-hover:bg-bright-aqua/20 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] z-10"
              style={{ transform: "translateZ(30px)" }}
            >
              <GraduationCap className="w-8 h-8 text-bright-aqua group-hover:scale-125 transition-transform duration-300" />
            </div>
            <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-bright-aqua transition-all duration-500">Computer Science & Engineering</h3>
              <p className="text-slate-600 dark:text-light-grey/80 text-sm mb-3">United International University</p>
              <motion.span 
                className="inline-block px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-medium text-slate-500 dark:text-white/60 group-hover:border-bright-aqua/50 group-hover:text-bright-aqua group-hover:bg-bright-aqua/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                BSc in CSE
              </motion.span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------
// Reusable 3D Tilt Card Component with Mouse Glow
// ----------------------------------------------------
interface TiltCardProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
}

const TiltCard = ({ children, className, ...rest }: TiltCardProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse glow tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map mouse coordinate ratios to degrees (subtle 5 degree tilt)
  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Physics animation easing
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Tilt ratio from -0.5 to 0.5 centered
    const tiltX = (e.clientX - rect.left) / width - 0.5;
    const tiltY = (e.clientY - rect.top) / height - 0.5;
    x.set(tiltX);
    y.set(tiltY);

    // Exact pixels for the spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Snap back to 0
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
      {...rest}
    >
      {/* High-End Spotlight Cursor Glow overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100 z-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.08),
              transparent 60%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
};

export default About;
