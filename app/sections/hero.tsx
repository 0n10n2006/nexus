"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { FloatingParticles } from "../components/ui/floating-particles";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 pb-12"
      aria-label="Hero"
    >
      <FloatingParticles count={30} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-5 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full glass text-xs font-medium text-cyan-300 border border-cyan-500/20">
            <span
              className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
              aria-hidden="true"
            />
            Next-Gen AI Infrastructure
          </span>
        </motion.div>

        <motion.h1
          className="font-extrabold tracking-tight leading-[0.9] mb-6 sm:mb-8"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6.75rem)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="gradient-text">Intelligence</span>
          <br />
          <span className="text-white">Engineered</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          NEXUS AI delivers enterprise-grade artificial intelligence
          infrastructure to power the next generation of applications.
        </motion.p>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        >
          <span className="text-xs text-zinc-600 uppercase tracking-[0.2em] font-medium">
            Built by
          </span>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mt-1">
            Naumaan Khateeb
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] w-full sm:w-auto outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Explore Platform
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/research"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-zinc-700 text-white font-medium rounded-lg hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Play className="w-4 h-4" aria-hidden="true" />
            View Research
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "<20ms", label: "Latency" },
            { value: "50B+", label: "Tokens/day" },
            { value: "10K+", label: "Enterprise Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-3 sm:p-4 lg:p-6 text-center"
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
