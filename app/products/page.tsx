"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/layout/page-wrapper";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import {
  Brain,
  Cloud,
  Server,
  Cpu,
  Database,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: Brain,
    name: "NEXUS Core",
    tagline: "Foundation Model API",
    description:
      "Access our frontier LLMs via a single API. Text generation, code completion, and reasoning at sub-20ms latency.",
    features: ["2M token context", "Streaming responses", "Fine-tuning support"],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Cloud,
    name: "NEXUS Vision",
    tagline: "Multimodal AI",
    description:
      "Process images, documents, and video alongside text. Extract insights from complex visual data at scale.",
    features: ["Image analysis", "Document parsing", "Video understanding"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Server,
    name: "NEXUS Deploy",
    tagline: "Private AI Infrastructure",
    description:
      "Run AI models in your own environment with full control. Air-gapped deployments for maximum security.",
    features: ["On-premise & VPC", "Custom models", "SOC2 compliant"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Cpu,
    name: "NEXUS Agents",
    tagline: "Autonomous AI Systems",
    description:
      "Build and deploy autonomous agents that reason, plan, and execute complex multi-step tasks.",
    features: ["Tool use", "Multi-step reasoning", "Human-in-the-loop"],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Database,
    name: "NEXUS Memory",
    tagline: "Long-term Context Store",
    description:
      "Persistent memory for AI applications. Store and retrieve user context across sessions.",
    features: ["Vector search", "E2E encryption", "Automatic summarization"],
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: Shield,
    name: "NEXUS Guard",
    tagline: "AI Safety & Monitoring",
    description:
      "Monitor, filter, and protect your AI applications with real-time safety layers and content moderation.",
    features: ["Prompt injection detection", "PII redaction", "Policy enforcement"],
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
];

const integrations = [
  "Python", "TypeScript", "Ruby", "Go", "Java", "REST API", "GraphQL", "WebSocket",
];

export default function ProductsPage() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
                Products
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                The <span className="gradient-text">Platform</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                A complete stack of AI products designed to power every stage of
                your application lifecycle.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.08}>
                <motion.div
                  className="group glass rounded-xl p-6 sm:p-8 h-full flex flex-col hover:bg-white/[0.04] transition-all duration-300 cursor-default"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${p.bg} flex items-center justify-center mb-5`}
                  >
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {p.name}
                  </h3>
                  <p
                    className={`text-sm ${p.color} font-medium mb-3`}
                  >
                    {p.tagline}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-zinc-300"
                      >
                        <div className="w-1 h-1 rounded-full bg-cyan-400/50" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white group-hover:text-cyan-400 transition-colors">
                      Learn more
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Seamless Integrations
              </h2>
              <p className="text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
                SDKs and integrations for every major language and framework.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {integrations.map((sdk) => (
                  <motion.div
                    key={sdk}
                    className="px-4 py-2 rounded-lg glass text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {sdk}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
