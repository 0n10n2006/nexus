"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageWrapper } from "../components/layout/page-wrapper";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import {
  BarChart,
  BarChart3,
  LineChart,
  TrendingUp,
  Users,
  CreditCard,
  Activity,
  Zap,
  Server,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function AnimatedNumber({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      start = Math.floor(progress * value);
      setDisplay(start);
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="font-mono">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatusBar({
  label,
  value,
  max = 100,
  color = "bg-cyan-400",
}: {
  label: string;
  value: number;
  max?: number;
  color?: string;
}) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-400">{label}</span>
        <span className="text-zinc-300">
          {value.toLocaleString()} / {max.toLocaleString()}
        </span>
      </div>
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  Analytics <span className="gradient-text">Dashboard</span>
                </h1>
                <p className="text-zinc-400 text-sm">
                  Real-time platform metrics and usage overview.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 glass rounded-lg">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-zinc-300">
                  {time.toLocaleTimeString("en-US", { hour12: false })}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Requests Today",
                value: 2847563,
                icon: Zap,
                color: "text-cyan-400",
              },
              {
                label: "Active Users",
                value: 18452,
                icon: Users,
                color: "text-purple-400",
              },
              {
                label: "Avg Latency",
                value: 18.4,
                icon: Activity,
                color: "text-emerald-400",
                suffix: "ms",
              },
              {
                label: "Uptime",
                value: 99.99,
                icon: CheckCircle2,
                color: "text-amber-400",
                suffix: "%",
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <motion.div
                  className="glass rounded-xl p-5 hover:bg-white/[0.04] transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <span className="text-xs text-zinc-500">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix || ""}
                    />
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400">+12.4%</span>
                    <span className="text-xs text-zinc-500 ml-1">
                      vs yesterday
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <ScrollReveal className="lg:col-span-2">
              <div className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-white">
                    Request Volume (24h)
                  </h3>
                  <div className="flex items-center gap-4">
                    {["API", "Web", "Batch"].map((label) => (
                      <span
                        key={label}
                        className="text-xs text-zinc-500 flex items-center gap-1.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-48 flex items-end gap-1">
                  {Array.from({ length: 24 }, () =>
                    Math.floor(Math.random() * 60 + 20)
                  ).map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-cyan-500/20 rounded-t-sm hover:bg-cyan-500/40 transition-colors"
                      initial={{ height: 0 }}
                      whileInView={{
                        height: `${h}%`,
                        transition: {
                          duration: 0.8,
                          delay: i * 0.02,
                          ease: "easeOut",
                        },
                      }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs text-zinc-500 font-mono">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Region Distribution
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "North America", value: 58200, max: 100000 },
                    { name: "Europe", value: 44100, max: 100000 },
                    { name: "Asia Pacific", value: 38500, max: 100000 },
                    { name: "LATAM", value: 15200, max: 100000 },
                    { name: "Middle East", value: 9800, max: 100000 },
                  ].map((region) => (
                    <StatusBar
                      key={region.name}
                      label={region.name}
                      value={region.value}
                      max={region.max}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="glass rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Model Usage
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "NEXUS Core v3.1", tokens: 245, color: "bg-cyan-400" },
                    { name: "NEXUS Vision", tokens: 128, color: "bg-purple-400" },
                    { name: "NEXUS Agents", tokens: 89, color: "bg-emerald-400" },
                    { name: "NEXUS Memory", tokens: 64, color: "bg-amber-400" },
                    { name: "NEXUS Guard", tokens: 42, color: "bg-rose-400" },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-4">
                      <span className="text-xs text-zinc-400 w-32 truncate">
                        {m.name}
                      </span>
                      <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${m.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${(m.tokens / 245) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-xs text-zinc-500 w-12 text-right">
                        {m.tokens}B
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  System Status
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "API Gateway", status: "Operational", latency: "14ms" },
                    {
                      name: "Inference Cluster",
                      status: "Operational",
                      latency: "18ms",
                    },
                    {
                      name: "Vector Store",
                      status: "Operational",
                      latency: "8ms",
                    },
                    {
                      name: "CDN Edge",
                      status: "Operational",
                      latency: "22ms",
                    },
                    {
                      name: "Authentication",
                      status: "Operational",
                      latency: "5ms",
                    },
                  ].map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Server className="w-4 h-4 text-zinc-500" />
                        <span className="text-sm text-zinc-300">{s.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-zinc-500 font-mono">
                          {s.latency}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {s.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
