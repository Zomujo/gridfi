"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    id: "capital",
    number: "01",
    title: "Zero Upfront Capital",
    desc: "Keep your working capital for your business. We pay 100% of the equipment and installation costs. You simply pay for the service.",
    icon: DollarSign,
    stat: "₵0",
    statLabel: "Upfront Cost",
  },
  {
    id: "cheaper",
    number: "02",
    title: "Cheaper Than The Alternative",
    desc: "Our monthly lease is designed to be 30-40% lower than the combined cost of ECG tariffs and diesel generator fuel.",
    icon: TrendingDown,
    stat: "30-40%",
    statLabel: "Lower Costs",
  },
  {
    id: "uptime",
    number: "03",
    title: "99.9% Uptime Guarantee",
    desc: "Say goodbye to 'Dumsor.' Our smart-managed battery systems switch seamlessly in milliseconds. Your machines never stop running.",
    icon: Zap,
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    id: "ownership",
    number: "04",
    title: "Path to Ownership",
    desc: "This isn't just a rental. After your lease term (3-5 years), you own the system 100%. Free power for the next 15+ years.",
    icon: CheckCircle,
    stat: "15+",
    statLabel: "Years Free Power",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-brand-navy relative">
      {/* Background accents */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Mobile: Stacked layout */}
        <div className="lg:hidden py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-brand-gold font-mono text-sm tracking-wider mb-4 block">
              WHY GRIDFI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-[1.1]">
              The Smartest Way to Power Your Business.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              A financing solution designed for African businesses that need reliable power without the upfront capital.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-brand-surface/80 border border-white/5 rounded-xl p-6 hover:border-brand-gold/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-brand-gold text-sm">[{feature.number}]</span>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-brand-gold" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.desc}</p>
                    <div className="flex items-end gap-2 pt-3 border-t border-white/5">
                      <span className="text-3xl font-bold text-brand-gold">{feature.stat}</span>
                      <span className="text-gray-500 text-xs pb-1">{feature.statLabel}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Split screen with sticky */}
        <div className="hidden lg:flex gap-20 py-24">
          
          {/* Left Side - Sticky */}
          <div className="w-1/2">
            <div 
              className="sticky top-32"
              style={{ position: 'sticky', top: '8rem' }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-brand-gold font-mono text-sm tracking-wider mb-4 block">
                  WHY GRIDFI
                </span>
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                  The Smartest Way to Power Your Business.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  A financing solution designed for African businesses that need reliable power without the upfront capital.
                </p>
                
                {/* Progress indicators */}
                <div className="flex gap-2">
                  {features.map((_, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-1 rounded-full bg-white/10"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right Side - Scrolling Cards */}
          <div className="w-1/2 space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-brand-surface/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-brand-gold/30 transition-all duration-500 relative overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-linear-to-br from-brand-gold/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Top row: Number + Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-brand-gold text-sm">
                          [{feature.number}]
                        </span>
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-brand-gold" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {feature.desc}
                      </p>
                      
                      {/* Stat */}
                      <div className="flex items-end gap-2 pt-4 border-t border-white/5">
                        <span className="text-4xl font-bold text-brand-gold">
                          {feature.stat}
                        </span>
                        <span className="text-gray-500 text-sm pb-1">
                          {feature.statLabel}
                        </span>
                      </div>
                    </div>
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

