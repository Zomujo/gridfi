"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What happens if I miss a payment?",
    answer:
      'We offer a grace period for all clients. However, our systems are "Smart-Managed," meaning service may be temporarily paused if accounts are significantly overdue, similar to a prepaid meter. Power is restored instantly upon payment.',
  },
  {
    question: "Who handles maintenance?",
    answer:
      "We do. Your monthly fee includes full insurance and maintenance. If an inverter breaks or a panel needs cleaning, our partner network fixes it at no extra cost to you.",
  },
  {
    question: "How long is the lease term?",
    answer:
      "Our standard lease term is 3 to 5 years depending on the system size and your payment plan. After the lease term, you own the system outright and enjoy free solar power for the next 15+ years.",
  },
  {
    question: "What equipment do you install?",
    answer:
      "We only use Tier-1 solar panels and batteries from globally recognized manufacturers. Every installation is done by a Certified SREP Partner to ensure quality and safety standards.",
  },
  {
    question: "How do I make payments?",
    answer:
      "We accept payments via Mobile Money (MTN, Vodafone, AirtelTigo) and direct bank transfer. Payments are fixed monthly — no surprises, no hidden fees.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-brand-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-brand-gold font-mono text-sm tracking-wider mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
              Questions?<br />We&apos;ve got answers.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Everything you need to know about GridFi&apos;s Lease-to-Own solar financing.
            </p>
          </motion.div>

          {/* Right - Accordion */}
          <div className="lg:col-span-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border-b border-white/5"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <h3
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isOpen ? "text-brand-gold" : "text-white group-hover:text-brand-gold"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <Plus
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isOpen ? "text-brand-gold" : "text-gray-500"
                        }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 leading-relaxed pb-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
