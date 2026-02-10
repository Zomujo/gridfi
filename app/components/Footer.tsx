"use client";

import Link from "next/link";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-white/5">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
            Ready to own<br />your power?
          </h2>
          <Link
            href="#quote"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-brand-gold/20 group shrink-0"
          >
            Get My Quote
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-brand-gold rounded-sm" />
              <span className="text-lg font-bold text-white">GridFi</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lease-to-Own solar financing for African businesses and homes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 tracking-wider uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Why Us", href: "#why-us" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Technology", href: "#tech" },
                { label: "For Installers", href: "#installers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@GridFi.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-brand-gold text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  hello@GridFi.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-brand-gold text-sm transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 tracking-wider uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">GridFi Ghana Ltd.</li>
              <li className="text-gray-500 text-sm">Accra, Ghana</li>
              <li className="text-gray-500 text-sm">
                Energy Commission Licensed (Pending)
              </li>
              <li className="text-gray-500 text-sm">SREP Financing Partner</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} GridFi Ghana Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-mono">
            Powering Africa&apos;s future.
          </p>
        </div>
      </div>
    </footer>
  );
}
