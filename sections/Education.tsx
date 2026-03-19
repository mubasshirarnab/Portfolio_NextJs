"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Calendar, MapPin, School } from "lucide-react";
import { ScrollSection } from "@/components/ui/scroll-section";
import { Reveal } from "@/components/ui/reveal";
import { FaGraduationCap, FaUniversity, FaBookReader } from "react-icons/fa";

// Holographic Card Component
const HolographicCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spotlight tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const pullX = (e.clientX - rect.left - width / 2) / (width / 2);
    const pullY = (e.clientY - rect.top - height / 2) / (height / 2);

    x.set(pullX * 10); // max tilt 10 deg
    y.set(pullY * -10);

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Spring physics for snapping back
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const isEven = index % 2 === 0;

  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: isEven ? 30 : -30 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col md:flex-row items-center justify-between group/card ${isEven ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Timeline Dot & Icon */}
      <div className="absolute left-[24px] md:left-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a0a0c] border border-white/10 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 transition-all duration-500 cursor-default group-hover/card:border-bright-aqua/80 group-hover/card:shadow-[0_0_30px_rgba(45,212,191,0.6)] group-hover/card:scale-110 overflow-hidden mt-6 md:mt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bright-aqua/20 to-neon-purple/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <Icon className="text-2xl text-light-grey/60 group-hover/card:text-white transition-colors duration-300 relative z-10" />

        {/* Icon Intense Glow Copy */}
        <Icon className="absolute text-2xl text-bright-aqua opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 blur-[6px] mix-blend-screen z-0 pointer-events-none" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[42%]" />

      {/* Futuristic Holographic Card */}
      <div className="w-full md:w-[45%] pl-14 md:pl-0 mt-4 md:mt-0 perspective-[1000px]">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformStyle: "preserve-3d"
          }}
          className="relative w-full rounded-2xl md:rounded-[2rem] border border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl p-8 transition-colors duration-500 overflow-hidden cursor-default group-hover/card:border-bright-aqua/30 group-hover/card:shadow-[0_20px_40px_rgba(45,212,191,0.1)]"
        >
          {/* Spotlight Effect that tracks mouse */}
          <motion.div
            className="absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl md:rounded-[2rem]"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  500px circle at ${mouseX}px ${mouseY}px,
                  rgba(14, 20, 41, 0.76),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Holographic Glowing Corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-transparent group-hover/card:border-bright-aqua transition-colors duration-500 rounded-tl-2xl md:rounded-tl-[2rem] opacity-0 group-hover/card:opacity-100 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-transparent group-hover/card:border-neon-purple transition-colors duration-500 rounded-br-2xl md:rounded-br-[2rem] opacity-0 group-hover/card:opacity-100 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />

          {/* Deep Space Background Glow inside card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 blur-[50px] group-hover/card:bg-neon-purple/15 pointer-events-none transition-colors duration-500" />

          {/* Card Content with Z-Translation for 3D depth */}
          <div
            className="relative z-10"
            style={{
              transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
              transition: "transform 0.3s ease-out"
            }}
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-2 relative group-hover/card:text-bright-aqua transition-colors duration-300 inline-block">
              {item.degree}
              {/* Massive Drop Shadow Text Glow directly behind */}
              <span className="absolute inset-0 text-bright-aqua opacity-0 group-hover/card:opacity-100 blur-[10px] transition-opacity duration-500 pointer-events-none selection:bg-transparent">
                {item.degree}
              </span>
            </h3>

            <div className="flex flex-col gap-2 mb-6 mt-2">
              <div className="flex items-center text-light-grey/80">
                <School className="w-4 h-4 mr-3 text-neon-purple group-hover/card:text-bright-aqua transition-colors" />
                <span className="font-medium group-hover/card:text-white transition-colors">{item.institution}</span>
              </div>
              <div className="flex items-center text-light-grey/60 text-sm">
                <MapPin className="w-4 h-4 mr-3" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-light-grey/60 text-sm">
                <Calendar className="w-4 h-4 mr-3" />
                <span className="group-hover/card:text-teal-300 transition-colors">{item.duration}</span>
              </div>
            </div>

            <p className="text-light-grey/70 font-light leading-relaxed mb-6 group-hover/card:text-slate-300 transition-colors">
              {item.description}
            </p>

            {item.cgpa && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-display text-sm backdrop-blur-md group-hover/card:bg-bright-aqua/10 group-hover/card:border-bright-aqua/40 transition-all duration-300 shadow-[0_0_0_transparent] group-hover/card:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                <span className="text-slate-400">GPA:</span>
                <span className="text-bright-aqua font-bold text-base drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]">{item.cgpa}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const educationData = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "United International University",
      location: "Dhaka, Bangladesh",
      duration: "2022 – Present",
      description: "Focusing on advanced algorithms, scalable software architecture, and artificial intelligence. Active participant in undergraduate research and coding competitions.",
      icon: FaUniversity
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Pirganj Govt. College",
      location: "Rangpur, Bangladesh",
      duration: "2018 – 2020",
      cgpa: "5.00 / 5.00",
      description: "Advanced Science track with a heavy focus on Mathematics and Physics.",
      icon: FaBookReader
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Pirganj Pilot High School",
      location: "Rangpur, Bangladesh",
      duration: "2017 – 2018",
      cgpa: "5.00 / 5.00",
      description: "Foundational science education yielding outstanding academic distinction.",
      icon: FaGraduationCap
    }
  ];

  return (
    <ScrollSection id="education" className="py-20 md:py-32 relative bg-[#0f0f11] z-10 border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bright-aqua/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl" ref={containerRef}>
        <div className="flex flex-col items-center mb-12 md:mb-28">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight">
              Academic <span className="text-bright-aqua drop-shadow-[0_0_15px_rgba(45,212,191,0.4)]">Journey</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-light-grey/60 max-w-2xl text-center text-lg font-light">
              Formal education and foundational background shaping my highly analytical approach to software engineering.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Advanced Neon Glowing Timeline Pathway */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-0 w-[4px] bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-bright-aqua via-neon-purple to-rose-400 shadow-[0_0_15px_rgba(45,212,191,0.8)] rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10 md:space-y-16 lg:space-y-32">
            {educationData.map((item, index) => (
              <HolographicCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default Education;
