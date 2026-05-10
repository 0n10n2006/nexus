"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/layout/page-wrapper";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import { Target, Rocket, Users, Award } from "lucide-react";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "500+", label: "Team Members" },
  { value: "$2.5B", label: "Total Funding" },
  { value: "50+", label: "Countries" },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We build AI that serves humanity, prioritizing safety, transparency, and societal benefit in everything we do.",
  },
  {
    icon: Rocket,
    title: "Frontier Research",
    description:
      "Our team publishes breakthrough papers at NeurIPS, ICML, and other top venues, pushing the boundaries of what AI can achieve.",
  },
  {
    icon: Users,
    title: "Build in Public",
    description:
      "We share our learnings, open-source tooling, and collaborate broadly. The community is our strongest asset.",
  },
  {
    icon: Award,
    title: "Enterprise Trust",
    description:
      "SOC2 Type II, HIPAA, GDPR compliant. We meet the stringent requirements of Fortune 500 companies and governments.",
  },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", initials: "AR" },
  { name: "Maya Patel", role: "CTO & Co-Founder", initials: "MP" },
  { name: "James Liu", role: "Chief Scientist", initials: "JL" },
  { name: "Sofia Ahmad", role: "VP of Engineering", initials: "SA" },
  { name: "Omar Hassan", role: "Head of Research", initials: "OH" },
  { name: "Lisa Wong", role: "VP of Product", initials: "LW" },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Engineering the <span className="gradient-text">Future</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Founded in 2019, NEXUS AI is dedicated to building
                next-generation AI infrastructure that powers the world's most
                ambitious applications.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  className="glass rounded-xl p-6 text-center hover:bg-white/[0.04] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {s.value}
                  </div>
                  <div className="text-sm text-zinc-400">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-20">
              <div className="glass rounded-2xl p-8 sm:p-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      Our Story
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      NEXUS AI began as a research lab exploring the limits of
                      large-scale neural networks. What started as an academic
                      pursuit quickly revealed a critical gap in the market:
                      enterprise-grade AI infrastructure that could handle
                      billions of requests with sub-20ms latency.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      Today, we power everything from real-time code completion
                      to medical diagnosis systems for thousands of companies
                      worldwide. Our commitment to safety, speed, and
                      reliability has made us the platform of choice for
                      organizations that cannot compromise on performance.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
                      <div
                        key={year}
                        className="glass rounded-lg p-4 text-center"
                      >
                        <div className="text-lg font-bold text-cyan-400">
                          {year}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                          {year === 2019 && "Founded"}
                          {year === 2020 && "First Product"}
                          {year === 2021 && "Series A"}
                          {year === 2022 && "Global Expansion"}
                          {year === 2023 && "Series B"}
                          {year === 2024 && "Frontier Model"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="mb-20">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Our <span className="gradient-text">Values</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <motion.div
                    className="glass rounded-xl p-6 sm:p-8 h-full hover:bg-white/[0.04] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                      <v.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {v.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Leadership <span className="gradient-text">Team</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.05}>
                  <motion.div
                    className="text-center"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-4 border border-zinc-700/50">
                      <span className="text-lg font-bold text-zinc-400">
                        {member.initials}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {member.name}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1">{member.role}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
