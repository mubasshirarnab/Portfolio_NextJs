"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-black border-t border-white/5 pt-20 overflow-hidden z-10">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-bright-aqua/5 blur-[120px] pointer-events-none rounded-t-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-12 mb-8">

          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-bright-aqua/10 flex items-center justify-center border border-bright-aqua/20">
                <Code2 className="w-5 h-5 text-bright-aqua" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                Arnab<span className="text-bright-aqua">.</span>
              </h3>
            </motion.div>

            <p className="text-light-grey/60 font-light leading-relaxed mb-8 max-w-sm">
              Engineering cinematic digital experiences through advanced AI integration and robust full-stack architectures.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/mubasshirarnab" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mubasshir-ahmed263/" },
                { icon: Mail, href: "mailto:marnab222263@bscse.uiu.ac.bd" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-bright-aqua hover:text-dark-black hover:border-bright-aqua transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-display font-semibold uppercase tracking-widest text-white mb-6">Directory</h4>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Projects', 'Skills', 'Education'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-light-grey/60 hover:text-bright-aqua text-sm font-light transition-colors inline-block w-fit"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Core Technologies */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-sm font-display font-semibold uppercase tracking-widest text-white mb-6">Core Tech</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "TensorFlow", "React", "Next.js", "Java", "Tailwind"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-light-grey/70 font-light cursor-default hover:border-neon-purple hover:text-neon-purple transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright & Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light tracking-wide text-light-grey/50">
          <p>© {currentYear} Mubasshir Ahmed Arnab. All rights reserved.</p>

          <a href="#home" className="hover:text-bright-aqua transition-colors flex items-center gap-1">
            Return to Nexus <span className="text-lg leading-none">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
