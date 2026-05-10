"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/layout/page-wrapper";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import { Check, Zap } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    name: "Developer",
    description: "For individuals and small projects",
    price: { monthly: 0, yearly: 0 },
    features: [
      "1,000 requests/day",
      "2M context window",
      "Community support",
      "Standard API access",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing teams and applications",
    price: { monthly: 49, yearly: 39 },
    features: [
      "100,000 requests/day",
      "2M context window",
      "Priority email support",
      "Custom fine-tuning",
      "Advanced analytics",
      "Team collaboration",
      "Webhooks & events",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale deployments",
    price: { monthly: null, yearly: null },
    features: [
      "Unlimited requests",
      "2M+ context window",
      "Dedicated support",
      "Custom model training",
      "Enterprise analytics",
      "SSO & audit logs",
      "SLA guarantees",
      "Dedicated infrastructure",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const compareFeatures = [
  { name: "Requests per day", dev: "1,000", growth: "100,000", ent: "Unlimited" },
  { name: "Context window", dev: "2M", growth: "2M", ent: "2M+" },
  { name: "Support", dev: "Community", growth: "Priority", ent: "Dedicated" },
  { name: "Fine-tuning", dev: "—", growth: "Yes", ent: "Yes" },
  { name: "Analytics", dev: "Basic", growth: "Advanced", ent: "Enterprise" },
  { name: "Team seats", dev: "1", growth: "10", ent: "Unlimited" },
  { name: "SLA uptime", dev: "99%", growth: "99.9%", ent: "99.99%" },
  { name: "SSO & SAML", dev: "—", growth: "—", ent: "Yes" },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
                Pricing
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Simple, <span className="gradient-text">Transparent</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                Start free, scale as you grow. No hidden fees, no surprises.
              </p>

              <div className="inline-flex items-center gap-3 bg-zinc-900 rounded-lg p-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    !isYearly
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    isYearly
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Yearly
                  <span className="ml-1.5 text-xs text-cyan-400">-20%</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <motion.div
                  className={`relative glass rounded-xl p-6 sm:p-8 h-full flex flex-col $${
                    tier.popular ? "ring-2 ring-cyan-500/50" : ""
                  } hover:bg-white/[0.04] transition-all duration-300`}
                  whileHover={{ y: -4 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">
                        <Zap className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{tier.description}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {tier.price.monthly === null ? "Custom" : `$${isYearly ? tier.price.yearly : tier.price.monthly}`}
                    </span>
                    {tier.price.monthly !== null && (
                      <span className="text-zinc-400 ml-2 text-sm">/month</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="#"
                    className={`block text-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                      tier.popular
                        ? "bg-white text-black hover:bg-zinc-100"
                        : "border border-zinc-700 text-white hover:border-cyan-500/40 hover:bg-white/5"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tier.cta}
                  </motion.a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6">
                Feature <span className="gradient-text">Comparison</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left p-4 text-sm font-semibold text-white">
                        Feature
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-white">
                        Developer
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-cyan-400">
                        Growth
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-white">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareFeatures.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-b border-zinc-800/50 hover:bg-white/[0.02]"
                      >
                        <td className="p-4 text-sm text-zinc-300">
                          {feature.name}
                        </td>
                        <td className="p-4 text-center text-sm text-zinc-400">
                          {feature.dev}
                        </td>
                        <td className="p-4 text-center text-sm text-cyan-300 font-medium">
                          {feature.growth}
                        </td>
                        <td className="p-4 text-center text-sm text-zinc-400">
                          {feature.ent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
