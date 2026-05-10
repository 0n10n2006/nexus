"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function GlowButton({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg overflow-hidden group cursor-pointer";

  const variants = {
    primary:
      "bg-white text-black hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
    secondary:
      "bg-zinc-800/50 text-white border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]",
    outline:
      "bg-transparent text-white border border-zinc-600 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </Component>
  );
}
