"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "../components/layout/page-wrapper";
import { ScrollReveal } from "../components/ui/scroll-reveal";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Let's <span className="gradient-text">Talk</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you are ready to scale or just exploring, our team is
                here to help you succeed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-6">
                <div className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:hello@nexus.ai"
                      className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      hello@nexus.ai
                    </a>
                  </div>
                </div>
                <div className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href="tel:+14155551234"
                      className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      +1 (415) 555-1234
                    </a>
                  </div>
                </div>
                <div className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office</h3>
                    <p className="text-sm text-zinc-400">
                      100 AI Boulevard, Suite 500
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                <div className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Community
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Join our Discord with 50,000+ developers.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3" delay={0.1}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-300 mb-2">
                        Name <span className="text-cyan-400" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email <span className="text-cyan-400" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-zinc-300 mb-2">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                      placeholder="Acme Inc. (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Message <span className="text-cyan-400" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      aria-required="true"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-100 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? (
                      "Message Sent!"
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
