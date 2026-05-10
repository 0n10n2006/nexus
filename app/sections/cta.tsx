"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to <span className="gradient-text">Build the Future</span>?
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Join thousands of developers building the next generation of AI
                applications on the world's most reliable infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-white font-medium rounded-lg hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
