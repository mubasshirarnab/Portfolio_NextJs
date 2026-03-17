"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["900"] });

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for Profile Image based on mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Image translations (moves opposite to mouse)
  const imageX = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const imageY = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);

  // Hover states for the aura glow
  const [hoveredBtn, setHoveredBtn] = useState<"swe" | "ai" | null>(null);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalize mouse coordinates from -0.5 to 0.5
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Determine shadow color based on hover state
  const getShadowColor = () => {
    if (isImageHovered) return "drop-shadow(0px -10px 40px rgba(0, 240, 255, 0.4))";
    if (hoveredBtn === "swe") return "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))";
    if (hoveredBtn === "ai") return "drop-shadow(0 0 40px rgba(0, 255, 255, 0.4))";
    // Default pulsing subtle aura
    return "drop-shadow(0 0 20px rgba(255, 255, 255, 0.15))";
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className={`relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#0f0f11] font-sans transition-colors duration-500`}
    >
      {/* 2. Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[14%] z-20 text-center w-full px-4"
      >
        <p className="text-base sm:text-[1.1rem] md:text-[1.2rem] text-[#A0A0A0] font-normal tracking-wide">
          👋 My name is <strong className="text-white">Mubasshir Ahmed</strong> and I am a ML Engineer.
        </p>
      </motion.div>

      {/* 3. The Massive Typography Layering (Z-Index Sandwich) */}
      <div
        className={`absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full pointer-events-auto ${interTight.className}`}
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
      >

        {/* Solid Text - Front (Z: 3) */}
        <motion.h1
          className="relative z-30 text-[clamp(1.5rem,5.5vw,12rem)] sm:text-[clamp(2.5rem,7vw,12rem)] md:text-[clamp(4rem,9vw,12rem)] font-black uppercase whitespace-nowrap leading-[0.9] tracking-[-0.04em] animate-shimmer"
          style={{
            backgroundImage: isTextHovered
              ? "linear-gradient(90deg, #00f0ff, #8B5CF6, #00f0ff)"
              : "linear-gradient(90deg, #ffffff, #c0c0c0, #ffffff)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background-image 0.5s ease"
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          SOFTWARE DEVELOPER
        </motion.h1>

      </div>

      <div
        className={`absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full pointer-events-none ${interTight.className}`}
        style={{ marginTop: 'clamp(1.5rem, 6vw, 10.5rem)' }}
      >
        {/* Outline Text - Back (Z: 1) */}
        <motion.h2
          className="relative z-10 text-[clamp(1.5rem,5.5vw,12rem)] sm:text-[clamp(2.5rem,7vw,12rem)] md:text-[clamp(4rem,9vw,12rem)] font-black uppercase whitespace-nowrap leading-[0.9] tracking-[-0.04em] animate-shimmer"
          style={{
            backgroundImage: isTextHovered
              ? "linear-gradient(90deg, #00f0ff, #8B5CF6, #00f0ff)"
              : "linear-gradient(90deg, #ffffff, #c0c0c0, #ffffff)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "1px transparent",
            color: "#0f0f11", // Fill matches background to create outline effect that shimmers
            transition: "background-image 0.5s ease"
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        >
          & AI ENGINEER
        </motion.h2>
      </div>

      {/* 4. The Profile Image Outline (Z-Index: 2) */}
      <motion.div
        className="absolute bottom-0 left-1/2 z-20 h-[65vh] md:h-[75vh] aspect-[3/4] origin-bottom pointer-events-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: "-50%" }}
      >
        <motion.div
          className="relative w-full h-full origin-bottom"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
          animate={{
            scale: isImageHovered ? 1.02 : 1,
            filter: getShadowColor(),
          }}
          transition={{ duration: 0.3 }}
          style={{
            translateX: imageX,
            translateY: imageY,
          }}
        >
          <Image
            src="/profile_cutout.png"
            alt="Mubasshir Ahmed Portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom"
          />

          {/* Breathing aura effect when not hovered */}
          {!hoveredBtn && !isImageHovered && (
            <motion.div
              className="absolute inset-0 z-[-1]"
              animate={{ filter: ["drop-shadow(0 0 15px rgba(255,255,255,0.1))", "drop-shadow(0 0 35px rgba(255,255,255,0.3))", "drop-shadow(0 0 15px rgba(255,255,255,0.1))"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* 5. The Buttons Container (Z-Index: 10) */}
      <motion.div
        className="absolute bottom-[2%] md:bottom-[5%] left-[5%] z-40 flex flex-col gap-[10px] md:gap-[15px] items-start pointer-events-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Button 1 (SWE) */}
        <MagneticButton
          onMouseEnter={() => setHoveredBtn("swe")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="px-4 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 bg-white text-black font-semibold rounded-[8px] text-xs sm:text-sm md:text-lg shadow-[0_4px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300"
        >
          You need a software engineer
        </MagneticButton>

        {/* Button 2 (AI) */}
        <MagneticButton
          onMouseEnter={() => setHoveredBtn("ai")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="px-4 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 bg-transparent border border-white text-white font-semibold rounded-[8px] text-xs sm:text-sm md:text-lg backdrop-blur-[5px] hover:bg-white/10 transition-colors duration-300"
        >
          You need an AI expert
        </MagneticButton>
      </motion.div>
    </section>
  );
};

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Reusable Magnetic Button Component
const MagneticButton = ({ children, className, onMouseEnter, onMouseLeave }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onMouseEnter={onMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="cursor-pointer"
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
};

export default Hero;
