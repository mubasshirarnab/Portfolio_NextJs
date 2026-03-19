"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowRight, Home, User, Code, Briefcase, Layers, GraduationCap, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "home", icon: Home },
  { name: "About", href: "about", icon: User },
  { name: "Skills", href: "skills", icon: Code },
  { name: "Experience", href: "experience", icon: Briefcase },
  { name: "Projects", href: "projects", icon: Layers },
  { name: "Education", href: "education", icon: GraduationCap },
  { name: "Contact", href: "contact", icon: Mail }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        if (window.scrollY >= top - 300) {
          current = section.getAttribute("id") || "";
        }
      });
      if (current) setActiveSection(current);
      else if (window.scrollY < 100) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    const element = document.getElementById(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const handleResumeDownload = () => window.open("/Arnab_CV.pdf", "_blank");

  if (!mounted) return null;

  // Animation Variants
  const menuVariants = {
    closed: { opacity: 0, clipPath: "circle(0% at sticky right top)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
    open: { opacity: 1, clipPath: "circle(150% at right top)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    })
  };

  return (
    <>
      {/* Desktop & Mobile Header Container */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${
          scrolled ? "py-4 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-sm border-b border-gray-800" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mr-3 group-hover:scale-95 transition-transform duration-300">
              <span className="text-slate-900 font-display font-bold text-xl leading-none">A</span>
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight group-hover:tracking-wider transition-all duration-300">
              Arnab<span className="text-bright-aqua">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-gray-800 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative text-sm font-medium transition-colors duration-300 group flex items-center gap-2"
              >
                <Icon className={`relative z-10 w-4 h-4 transition-colors duration-300 ${activeSection === item.href ? "text-white" : "text-gray-400 group-hover:text-white"}`} />
                <span className={`relative z-10 transition-colors duration-300 ${activeSection === item.href ? "text-slate-900 dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white"}`}>
                  {item.name}
                </span>
                {activeSection === item.href && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            )})}
          </div>

          {/* Actions: CV and Hamburger */}
          <div className="flex items-center gap-3 md:gap-5">

            <button
              onClick={handleResumeDownload}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-[60] p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <motion.div animate={isOpen ? { rotate: 90 } : { rotate: 0 }}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 100vh Fullscreen Overlay Menu for Mobile/Tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] bg-[#0a0a0a] min-h-[100vh] flex flex-col justify-center px-8 md:px-20 lg:hidden"
          >
            {/* Background huge typography decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] font-extrabold text-transparent opacity-5 pointer-events-none" style={{ WebkitTextStroke: '2px currentColor' }}>
              MENU
            </div>

            <div className="flex flex-col gap-6 relative z-10 w-full max-w-sm mx-auto">
              {navLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                <motion.div
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  key={item.name}
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="group flex items-center justify-between w-full text-left"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                      <span className="text-4xl md:text-5xl font-display font-light text-white group-hover:ml-4 transition-all duration-300">
                        {item.name}
                      </span>
                    </div>
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                  </button>
                </motion.div>
              )})}

              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center"
              >
                <div className="text-sm text-gray-400">
                  <p>Mubasshir Ahmed</p>
                  <p>AI Developer</p>
                </div>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-slate-900 hover:scale-110 transition-transform"
                >
                  <Download className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
