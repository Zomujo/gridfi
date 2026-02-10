"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({ 
  href, 
  children, 
  variant = "primary",
  className = "" 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic effect - pull towards cursor but limit distance
    setPosition({ 
      x: x * 0.3, 
      y: y * 0.3 
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = variant === "primary"
    ? "px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-lg hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:shadow-brand-gold/20"
    : "px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium text-lg rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/30";

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link
        ref={buttonRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`inline-block transition-all duration-300 ${baseClasses} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
