"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
  Layers,
} from "lucide-react";
import { ScrollReveal } from "../components/ui/scroll-reveal";

const features = [
  {
    icon: Brain,
    title: "Adaptive Learning",
    description:
      "Self-optimizing neural networks that continuously learn from your data, improving accuracy and relevance with every interaction.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "SOC-2 compliant infrastructure with end-to-end encryption, dedicated VPC isolation, and granular access controls.",
  },
  {
    icon: Zap,
    title: "Low-Latency Inference",
    description:
      "Sub-20ms response times across our global edge network. Real-time AI processing at the speed of thought.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Comprehensive dashboards with live metrics, usage insights, and predictive analytics for your AI operations.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Distributed across 50+ regions worldwide. Deploy closer to your users with automatic failover and load balancing.",
  },
  {
    icon: Layers,
    title: "Unified Platform",
    description:
      "One API for everything. Text, vision, audio, and multimodal models under a single, consistent interface.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
              Platform
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Built for the <span className="gradient-text">Frontier</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every layer of our infrastructure is designed for speed,
              reliability, and the relentless pursuit of better AI.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <motion.div
                className="group relative glass rounded-xl p-6 sm:p-8 h-full hover:bg-white/[0.04] transition-all duration-300 cursor-default"
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400/50" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
