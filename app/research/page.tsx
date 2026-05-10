"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/layout/page-wrapper";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import { FileText, ExternalLink, FlaskConical, BarChart4, BookOpen, Network } from "lucide-react";

const papers = [
  {
    title: "Scaling Neural Inference to 1 Trillion Parameters in Real Time",
    authors: "Patel, M., Rivera, A., Liu, J., et al.",
    venue: "NeurIPS 2024",
    category: "Infrastructure",
  },
  {
    title: "Constitutional Agent Alignment via Multi-Objective Optimization",
    authors: "Ahmad, S., Torres, E., Kim, D., et al.",
    venue: "ICML 2024",
    category: "Safety",
  },
  {
    title: "Efficient Long-Context Attention Mechanisms for 2M Tokens",
    authors: "Liu, J., Hassan, O., Patel, M., et al.",
    venue: "IJCAI 2023",
    category: "Architecture",
  },
  {
    title: "Multimodal Reasoning at the Edge: Sub-20ms Inference Strategies",
    authors: "Wong, L., Torres, E., Rivera, A., et al.",
    venue: "ACL 2023",
    category: "Systems",
  },
  {
    title: "Neural Network Robustness Under Active Adversarial Attacks",
    authors: "Kim, D., Ahmad, S., Hassan, O., et al.",
    venue: "AAAI 2023",
    category: "Security",
  },
  {
    title: "Autonomous Agents with Plan-and-Execute Architecture",
    authors: "Torres, E., Rivera, A., Patel, M., et al.",
    venue: "ICLR 2022",
    category: "Agents",
  },
];

const areas = [
  {
    icon: Network,
    title: "Model Architecture",
    description: "Designing more efficient transformer variants with sparse attention, mixture-of-experts, and hybrid architectures.",
  },
  {
    icon: FlaskConical,
    title: "Safety & Alignment",
    description: "Constitutional AI, scalable oversight, and red-teaming methodologies to ensure AI systems remain beneficial.",
  },
  {
    icon: BarChart4,
    title: "Systems & Infrastructure",
    description: "Optimizing distributed training, low-latency inference, and efficient memory management for billion-parameter models.",
  },
  {
    icon: BookOpen,
    title: "Multimodal Intelligence",
    description: "Unified reasoning across text, image, audio, and video with shared representations and cross-modal capabilities.",
  },
];

export default function ResearchPage() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
                Research
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Advancing the <span className="gradient-text">Frontier</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Our research team publishes breakthrough work in AI safety,
                scalable inference, and model architecture. We open our findings to
                the community.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {areas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.1}>
                <motion.div
                  className="glass rounded-xl p-6 sm:p-8 h-full hover:bg-white/[0.04] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-5">
                    <area.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-8">
                Recent <span className="gradient-text">Publications</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 mb-20">
            {papers.map((paper, i) => (
              <ScrollReveal key={paper.title} delay={i * 0.05}>
                <motion.div
                  className="glass rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-xs font-medium text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10">
                          {paper.venue}
                        </span>
                      </div>
                      <h3 className="text-base font-medium text-white group-hover:text-cyan-200 transition-colors mb-1">
                        {paper.title}
                      </h3>
                      <p className="text-xs text-zinc-500">
                        {paper.authors}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="text-xl font-bold mb-4">Join Our Research Team</h3>
              <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-6">
                We're always looking for exceptional researchers to join us in
                pushing the boundaries of AI. Open positions in safety,
                infrastructure, and model architecture.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Open Positions
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
