"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, HeartPulse, GraduationCap, Home } from "lucide-react";

const industries = [
  {
    label: "Factories & Cold Stores",
    desc: "Protect your inventory from spoilage.",
    img: "/warehouse-2.jpeg",
    icon: Factory,
  },
  {
    label: "Private Clinics",
    desc: "Ensure life-saving equipment never goes offline.",
    img: "/local-installer-1.webp",
    icon: HeartPulse,
  },
  {
    label: "Schools & Offices",
    desc: "Reduce overheads and boost profitability.",
    img: "/spintex-warehouse.jpg",
    icon: GraduationCap,
  },
  {
    label: "Gated Communities",
    desc: "Reliable power without the noise of generators.",
    img: "/gated_community.jpg",
    icon: Home,
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brand-gold font-mono text-sm tracking-wider mb-4 block">
            WHO IS THIS FOR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1]">
            Built for the<br />African Industry.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            // First card spans 7 cols, second spans 5 cols, third spans 5 cols, fourth spans 7 cols
            const colSpan = index === 0 || index === 3
              ? "lg:col-span-7"
              : "lg:col-span-5";
            const height = index === 0 || index === 3
              ? "h-72 md:h-80"
              : "h-72 md:h-80";

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} group relative ${height} rounded-2xl overflow-hidden cursor-pointer`}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/50 to-transparent group-hover:via-brand-navy/60 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-gold" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 ml-12">
                    {item.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
