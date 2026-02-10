"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Wrench, Zap } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Get Prequalified",
    subtitle: "2 Minutes",
    desc: "Fill out our simple form. We analyze your energy usage and diesel spend to build a custom savings plan.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Professional Installation",
    subtitle: "Certified SREP Partner",
    desc: "We dispatch a Certified SREP Partner to install your Tier-1 Solar & Battery system. No wires, no mess, no downtime.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Pay As You Save",
    subtitle: "Fixed Monthly Fee",
    desc: "Your system goes live. You pay a fixed monthly fee via Mobile Money or Bank Transfer. We monitor the system 24/7 to ensure peak performance.",
    icon: Zap,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/solar-farm.jpg"
          alt="Solar farm"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/75" />
      </div>

      {/* Subtle background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-brand-gold font-mono text-sm tracking-wider mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1]">
            Turn the Lights On<br />in 3 Steps.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Number + Line */}
                  <div className="shrink-0 flex items-center gap-4 md:w-48">
                    <span className="text-brand-gold font-mono text-sm">[{step.number}]</span>
                    <div className="h-px flex-1 bg-brand-gold/30" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 group">
                    <div className="flex items-start gap-5 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors duration-300">
                          {step.title}
                        </h3>
                        <span className="text-brand-gold/70 font-mono text-xs tracking-wider uppercase">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed ml-17 md:max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
