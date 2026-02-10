"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstallersSection() {
  return (
    <section id="installers" className="relative py-24 md:py-32">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/local-installer-main.webp"
          alt="Local solar installer working"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-mono text-sm tracking-wider mb-4 block">
              FOR INSTALLERS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Stop Losing Deals<br />to &ldquo;No Cash.&rdquo;
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
          >
            You are the technical experts; we are the financial engine. Partner with GridFi to offer your clients instant Lease-to-Own financing. We pay you 100% of the hardware and installation cost upfront. You focus on the roof; we handle the risk.
          </motion.p>

          {/* Key stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex gap-8 mb-10"
          >
            <div>
              <div className="text-3xl font-bold text-brand-gold">100%</div>
              <div className="text-sm text-gray-400">Paid Upfront</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-brand-gold">0</div>
              <div className="text-sm text-gray-400">Risk to You</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-brand-gold">SREP</div>
              <div className="text-sm text-gray-400">Certified</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="#partner-apply"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-brand-gold/20 group"
            >
              Apply to be a Partner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
