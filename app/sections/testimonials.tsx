"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NEXUS AI transformed how we build products. Their latency is unmatched in the industry, and the API is a joy to work with.",
    author: "Sarah Chen",
    role: "VP of Engineering, Vercel",
  },
  {
    quote:
      "The reliability and speed of the NEXUS platform allowed us to ship our AI features in weeks, not months. Truly game-changing.",
    author: "David Kim",
    role: "CTO, Linear",
  },
  {
    quote:
      "From research to production, NEXUS provides the infrastructure backbone that makes modern AI possible.",
    author: "Elena Torres",
    role: "Director of AI, OpenAI",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Trusted by <span className="gradient-text">Leaders</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="glass rounded-xl p-6 sm:p-8 h-full flex flex-col hover:bg-white/[0.04] transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
                <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-medium text-white text-sm">
                    {t.author}
                  </div>
                  <div className="text-zinc-500 text-xs mt-1">{t.role}</div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
