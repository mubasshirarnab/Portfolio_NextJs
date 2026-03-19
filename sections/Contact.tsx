"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { Reveal } from "@/components/ui/reveal";
import { Send, Github, Linkedin, Mail, MapPin, Loader2, CheckCircle2, XCircle, ArrowUpRight, Terminal, Wifi, Zap } from "lucide-react";

// ── Radar Animation ────────────────────────────────────────────────────────────
const RadarDisplay = () => {
  return (
    <div className="relative w-44 h-44 mx-auto">
      {/* Rings */}
      {[44, 64, 84, 104].map((r, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bright-aqua/20"
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}
      {/* Cross hairs */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-bright-aqua/15" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bright-aqua/15" />
      {/* Sweep */}
      <motion.div
        className="absolute top-1/2 left-1/2 origin-left"
        style={{ width: 88, height: 2, marginTop: -1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent to-bright-aqua/80 rounded-full" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-bright-aqua rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]" />
      </motion.div>
      {/* Blips */}
      {[
        { top: "30%", left: "65%", color: "bg-bright-aqua", delay: 0.4 },
        { top: "65%", left: "35%", color: "bg-neon-purple", delay: 1.2 },
        { top: "45%", left: "25%", color: "bg-rose-400", delay: 2.1 },
      ].map((b, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${b.color} rounded-full`}
          style={{ top: b.top, left: b.left }}
          animate={{ opacity: [0, 1, 0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: b.delay, ease: "easeOut" }}
        />
      ))}
      {/* Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-bright-aqua rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)]" />
    </div>
  );
};

// ── Signal Strength Bar ────────────────────────────────────────────────────────
const SignalBars = ({ strength = 5 }: { strength?: number }) => (
  <div className="flex items-end gap-[3px] h-4">
    {[1, 2, 3, 4, 5].map(i => (
      <motion.div
        key={i}
        className={`w-1.5 rounded-sm ${i <= strength ? "bg-bright-aqua shadow-[0_0_6px_rgba(45,212,191,0.8)]" : "bg-white/10"}`}
        style={{ height: `${(i / 5) * 100}%` }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: i * 0.1 + 0.5, duration: 0.4, ease: "backOut" }}
      />
    ))}
  </div>
);

// ── Typed Text ─────────────────────────────────────────────────────────────────
const TypingText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const iv = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) clearInterval(iv);
    }, 35);
    return () => clearInterval(iv);
  }, [started, text]);

  return (
    <span className="font-mono">
      {displayed}
      {displayed.length < text.length && started && (
        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="inline-block w-0.5 h-3.5 bg-bright-aqua ml-0.5 align-middle" />
      )}
    </span>
  );
};

// ── Channel Link ─────────────────────────────────────────────────────────────
const channels = [
  {
    id: "GH",
    label: "GitHub",
    handle: "@mubasshirarnab",
    href: "https://github.com/mubasshirarnab",
    Icon: Github,
    freq: "443.0 MHz",
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.2)"
  },
  {
    id: "LI",
    label: "LinkedIn",
    handle: "mubasshir-ahmed-arnab",
    href: "https://www.linkedin.com/in/mubasshir-ahmed263/",
    Icon: Linkedin,
    freq: "80.0 MHz",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.4)"
  },
  {
    id: "EM",
    label: "Email",
    handle: "marnab222263@",
    href: "mailto:marnab222263@bscse.uiu.ac.bd",
    Icon: Mail,
    freq: "2.4 GHz",
    color: "#2dd4bf",
    glow: "rgba(45,212,191,0.4)"
  }
];

const ChannelLink = ({ ch, index }: { ch: typeof channels[0], index: number }) => {
  const [active, setActive] = useState(false);
  return (
    <motion.a
      href={ch.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer"
      style={{ boxShadow: active ? `0 0 30px ${ch.glow}` : "none" }}
    >
      {/* Left freq accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: ch.color }} />

      {/* Icon bubble */}
      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        <ch.Icon className="w-5 h-5" style={{ color: ch.color }} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-mono text-white/25 tracking-widest">{ch.id}</span>
          <span className="text-[10px] font-mono text-bright-aqua/60">{ch.freq}</span>
        </div>
        <p className="text-sm font-semibold text-white group-hover:text-white transition-colors">{ch.label}</p>
        <p className="text-xs text-white/35 truncate font-mono">{ch.handle}</p>
      </div>

      {/* Status + Arrow */}
      <div className="flex flex-col items-end gap-1.5 shrink-0">
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] font-mono text-emerald-400/70 tracking-widest">LIVE</span>
        </div>
        <ArrowUpRight
          className="w-4 h-4 text-white/20 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>
    </motion.a>
  );
};

// ── Form Field ────────────────────────────────────────────────────────────────
const FormField = ({
  label, id, type = "text", placeholder, value, onChange, rows
}: {
  label: string; id: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; rows?: number;
}) => {
  const [focused, setFocused] = useState(false);
  const props = { id, value, placeholder, onFocus: () => setFocused(true), onBlur: () => setFocused(false) };
  const cls = `w-full bg-transparent border-b-2 ${focused ? "border-bright-aqua" : "border-white/10"} pt-2 pb-2.5 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 font-light`;

  return (
    <div className="relative group">
      <label htmlFor={id} className={`absolute -top-5 left-0 text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${focused ? "text-bright-aqua" : "text-white/30"}`}>
        {label}
      </label>
      {rows ? (
        <textarea
          {...props}
          rows={rows}
          required
          className={`${cls} resize-none mt-1`}
          onChange={e => onChange(e.target.value)}
        />
      ) : (
        <input
          {...props}
          type={type}
          required
          className={`${cls} mt-1`}
          onChange={e => onChange(e.target.value)}
        />
      )}
      {/* Animated underline glow */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-bright-aqua rounded-full"
        animate={{ width: focused ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ boxShadow: "0 0 8px rgba(45,212,191,0.8)" }}
      />
    </div>
  );
};

// ── Main Contact ─────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1600));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <ScrollSection id="contact" className="py-20 md:py-32 relative bg-dark-black z-10 border-t border-white/5 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-neon-purple/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-bright-aqua/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-bright-aqua/10 border border-bright-aqua/20 rounded-full">
              <Wifi className="w-3.5 h-3.5 text-bright-aqua" />
              <span className="text-bright-aqua text-xs font-mono tracking-widest uppercase">Signal Online</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
              Establish <span className="gradient-text">Contact</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-bright-aqua mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-light-grey/50 text-base md:text-lg font-light max-w-lg mx-auto leading-relaxed">
              Every great project starts with a conversation. Broadcast your signal — I respond within 24h.
            </p>
          </Reveal>
        </div>

        {/* ── Body Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ── LEFT PANEL: Signal Station ─────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Radar Card */}
            <Reveal delay={0.2} width="100%">
              <div className="relative rounded-[28px] bg-[#0c0c0f] border border-white/8 p-6 overflow-hidden">
                {/* Top label bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-bright-aqua" />
                    <span className="text-xs font-mono text-white/40 tracking-widest uppercase">Signal Station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SignalBars strength={5} />
                    <span className="text-[10px] font-mono text-bright-aqua/60 tracking-widest">100%</span>
                  </div>
                </div>

                {/* Radar */}
                <RadarDisplay />

                {/* Status rows */}
                <div className="mt-6 space-y-3 border-t border-white/5 pt-5">
                  {[
                    { label: "OPERATOR", value: "Mubasshir Ahmed", accent: false },
                    { label: "LOCATION", value: "Dhaka, BD — UTC+6", accent: false },
                    { label: "STATUS", value: "Ready to Deploy", accent: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-white/25 uppercase">{row.label}</span>
                      <span className={`text-xs font-mono ${row.accent ? "text-bright-aqua" : "text-white/70"}`}>
                        {i === 0 ? <TypingText text={row.value} delay={0.8} /> : row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute top-3 right-3 w-full h-full border-t-2 border-r-2 border-bright-aqua/20 rounded-tr-[28px]" />
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20">
                  <div className="absolute bottom-3 left-3 w-full h-full border-b-2 border-l-2 border-neon-purple/20 rounded-bl-[28px]" />
                </div>
              </div>
            </Reveal>

            {/* Channels */}
            <Reveal delay={0.35} width="100%">
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-1 mb-4">
                  <Zap className="w-3.5 h-3.5 text-neon-purple" />
                  <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Active Channels</span>
                </div>
                {channels.map((ch, i) => (
                  <ChannelLink key={ch.id} ch={ch} index={i} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT PANEL: Transmission Console ──────────────── */}
          <div className="lg:col-span-7">
            <Reveal delay={0.25} width="100%">
              <div className="relative rounded-[28px] bg-[#0c0c0f] border border-white/8 overflow-hidden p-7 md:p-10">

                {/* Top console bar */}
                <div className="flex items-center justify-between mb-10 pb-5 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-white/25 tracking-widest">TRANSMISSION CONSOLE v2.1</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-bright-aqua"
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[10px] font-mono text-bright-aqua/60 tracking-widest">LIVE</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="pt-5">
                      <FormField
                        label="Sender Name"
                        id="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={v => setForm({ ...form, name: v })}
                      />
                    </div>
                    <div className="pt-5">
                      <FormField
                        label="Return Address"
                        id="email"
                        type="email"
                        placeholder="email@domain.com"
                        value={form.email}
                        onChange={v => setForm({ ...form, email: v })}
                      />
                    </div>
                  </div>

                  <div className="pt-5">
                    <FormField
                      label="Signal Subject"
                      id="subject"
                      placeholder="What's the transmission about?"
                      value={form.subject}
                      onChange={v => setForm({ ...form, subject: v })}
                    />
                  </div>

                  <div className="pt-5">
                    <FormField
                      label="Message Payload"
                      id="message"
                      placeholder="Compose your message here…"
                      value={form.message}
                      onChange={v => setForm({ ...form, message: v })}
                      rows={5}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4 pt-2">
                    <motion.button
                      type="submit"
                      disabled={submitting || status === "success"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-semibold text-sm tracking-widest uppercase overflow-hidden text-white disabled:cursor-not-allowed transition-all duration-500 bg-gradient-to-r from-neon-purple via-purple-500 to-bright-aqua shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(45,212,191,0.4)]"
                    >
                      {/* Sweep shimmer */}
                      <div className="absolute inset-0 bg-white/10 -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none skew-x-12" />

                      <AnimatePresence mode="wait">
                        {submitting ? (
                          <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" /> Transmitting…
                          </motion.span>
                        ) : status === "success" ? (
                          <motion.span key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-emerald-300">
                            <CheckCircle2 className="w-4 h-4" /> Signal Received!
                          </motion.span>
                        ) : status === "error" ? (
                          <motion.span key="e" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-400">
                            <XCircle className="w-4 h-4" /> Transmission Failed
                          </motion.span>
                        ) : (
                          <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                            <Send className="w-4 h-4" /> Broadcast Signal
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    <p className="text-white/20 text-xs font-mono leading-snug">
                      Encrypted &amp;<br />Delivered Safely
                    </p>
                  </div>
                </form>

                {/* Blueprint corner decorations */}
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                  <div className="absolute top-4 right-4 w-full h-full border-t border-r border-bright-aqua/10" />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none">
                  <div className="absolute bottom-4 left-4 w-full h-full border-b border-l border-neon-purple/10" />
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </ScrollSection>
  );
};

export default Contact;
