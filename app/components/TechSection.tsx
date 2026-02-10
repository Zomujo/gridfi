"use client";

import { motion } from "framer-motion";
import { Sun, Battery, Gauge } from "lucide-react";

const capabilities = [
  {
    icon: Sun,
    title: "Prioritizes Free Solar",
    desc: "Automatically routes solar energy first, reducing your dependence on the grid.",
  },
  {
    icon: Battery,
    title: "Manages Battery Health",
    desc: "Intelligent charge cycles extend battery life and maximize storage efficiency.",
  },
  {
    icon: Gauge,
    title: "Minimizes Grid Draw",
    desc: "Reduces grid consumption to save you money while you sleep.",
  },
];

export default function TechSection() {
  return (
    <section id="tech" className="py-24 md:py-32 bg-brand-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-mono text-sm tracking-wider mb-4 block">
              TECHNOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Powered by The<br />GridFi Engine.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-12"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              We don&apos;t just install panels; we manage energy. Every system is equipped with our proprietary Smart Controller, which automatically optimizes your power flow — saving you money while you sleep.
            </p>
          </motion.div>
        </div>

        {/* Engine Visual + Capabilities */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Engine Visual - Takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative h-[350px] md:h-[400px] bg-brand-surface rounded-2xl border border-white/5 overflow-hidden group"
          >
            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                className="absolute w-64 h-64 rounded-full border border-brand-gold/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-gold/40" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                className="absolute w-44 h-44 rounded-full border border-brand-gold/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-brand-gold/60" />
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/40" />
              </motion.div>

              {/* Inner ring */}
              <motion.div
                className="absolute w-24 h-24 rounded-full border border-brand-gold/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-brand-gold/80" />
              </motion.div>

              {/* Center icon */}
              <div className="relative w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shadow-[0_0_40px_rgba(245,183,49,0.2)]">
                <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Corner labels */}
            <div className="absolute top-6 left-6">
              <span className="font-mono text-xs text-brand-gold/50">GRIDFI ENGINE v2.0</span>
            </div>
            <div className="absolute bottom-6 right-6">
              <motion.span
                className="font-mono text-xs text-brand-gold/70"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                OPTIMIZING...
              </motion.span>
            </div>

            {/* Status indicators */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-gray-500">SYSTEM ACTIVE</span>
            </div>

            {/* Radial glow on hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-gold)_0%,transparent_70%)] opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          </motion.div>

          {/* Capabilities - Takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex-1"
                >
                  <div className="bg-brand-surface/60 border border-white/5 rounded-xl p-6 h-full hover:border-brand-gold/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
