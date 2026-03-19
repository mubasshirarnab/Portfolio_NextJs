"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Radio } from "lucide-react";
import { ScrollSection } from "@/components/ui/scroll-section";
import { Reveal } from "@/components/ui/reveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <ScrollSection id="contact" className="py-20 md:py-32 relative bg-dark-black z-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col items-center mb-10 md:mb-20">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 text-center">
              Initiate <span className="gradient-text">Connection</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-bright-aqua/10 flex items-center justify-center">
                    <Radio className="w-5 h-5 text-bright-aqua animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white">Status: Online</h3>
                </div>
                
                <p className="text-light-grey/70 font-light text-lg mb-10">
                  Ready to engineer your next big concept. Drop a message to discuss algorithms, architecture, or collaborative ventures.
                </p>

                <div className="space-y-6">
                  <a href="mailto:marnab222263@bscse.uiu.ac.bd" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-bright-aqua/10 group-hover:text-bright-aqua group-hover:border-bright-aqua/30 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-light-grey/50 uppercase tracking-widest font-display">Email</p>
                      <p className="text-white font-medium group-hover:text-bright-aqua transition-colors text-sm md:text-base break-all">marnab222263@bscse.uiu.ac.bd</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-light-grey/50 uppercase tracking-widest font-display">Location</p>
                      <p className="text-white font-medium">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 mt-10 border-t border-white/10 flex gap-4">
                <a href="https://github.com/mubasshirarnab" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/mubasshir-ahmed-arnab" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-neon-purple hover:border-neon-purple transition-all group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-display uppercase tracking-widest text-light-grey/50">Name</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bright-aqua focus:bg-white/10 transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-display uppercase tracking-widest text-light-grey/50">Email</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bright-aqua focus:bg-white/10 transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-display uppercase tracking-widest text-light-grey/50">Subject</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:bg-white/10 transition-colors"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-display uppercase tracking-widest text-light-grey/50">Message</label>
                  <textarea 
                    required 
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bright-aqua focus:bg-white/10 transition-colors resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="mt-4 w-full py-4 bg-white text-dark-black font-display font-bold rounded-xl hover:bg-bright-aqua transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-dark-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Transmit Signal
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm text-center">Transmission successful. I&apos;ll read it shortly.</motion.p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </ScrollSection>
  );
};

export default Contact;
