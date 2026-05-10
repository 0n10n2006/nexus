"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import { Code2, MessageSquare, ImageIcon, AudioLines } from "lucide-react";

const capabilities = [
  { icon: Code2, label: "Code Generation", color: "text-cyan-400" },
  { icon: MessageSquare, label: "Conversational", color: "text-purple-400" },
  { icon: ImageIcon, label: "Vision", color: "text-emerald-400" },
  { icon: AudioLines, label: "Audio", color: "text-amber-400" },
];

export function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              One Platform, <span className="gradient-text">Infinite Modes</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                className="glass rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}

              >
                <cap.icon className={`w-6 h-6 ${cap.color}`} />
                <span className="text-sm font-medium text-zinc-300">
                  {cap.label}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass rounded-2xl p-6 sm:p-8 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-zinc-500 font-mono">
                nexus-ai-v3.1
              </span>
            </div>
            <div className="font-mono text-sm leading-6 space-y-3">
              {[
                '> import nexus from "@nexus/ai"',
                '',
                '> const model = await nexus.deploy({',
                '    name: "frontier-v3",',
                '    architecture: "transformer-xl",',
                '    context: 2_000_000,',
                '    region: "global",',
                '    gpu: "h100-cluster"',
                '  })',
                '',
                '> const response = await model.generate({',
                '    prompt: "Analyze market trends for Q3..."',
                '  })',
                '',
                `> // Response time: 18ms | Tokens/s: 4,200`,
              ].map((line, i) => (
                <motion.p
                  key={i}
                  className={`${
                    line.startsWith("> //")
                      ? "text-zinc-500 italic"
                      : line.startsWith("> ")
                      ? "text-cyan-300"
                      : "text-zinc-400"
                  } ${line === "" ? "h-3" : ""}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {line.startsWith("> //") ? line.slice(3) : line}
                </motion.p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
