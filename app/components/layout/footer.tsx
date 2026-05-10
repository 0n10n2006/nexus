"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "AI Dashboard", href: "/dashboard" },
    { label: "API Access", href: "/products" },
    { label: "Research Platform", href: "/research" },
    { label: "Documentation", href: "/" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/" },
  ],
  Resources: [
    { label: "Documentation", href: "/" },
    { label: "Status", href: "/" },
    { label: "Support", href: "/contact" },
    { label: "Privacy", href: "/" },
  ],
};

const socialIcons = [
  {
    label: "GitHub",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.429.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    label: "Twitter",
    path: "M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723c.951.555 2.005.959 3.127 1.184a4.918 4.918 0 00-2.033-4.698 4.916 4.916 0 00-5.478.885c-.42.326-.645.69-.645 1.25v3.24a9.97 9.97 0 01-8.686-4.607 9.878 9.878 0 01-.025-9.791 10.06 10.06 0 017.488 5.688c.318-.005.639-.007.96-.007 3.39 0 6.51 1.123 9.013 3.013",
  },
  {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.5-3.037-1.601 0-1.846 1.25-1.846 2.539v5.067H9.935V9h3.396v1.294h.046c.476-.9 1.637-1.848 3.37-1.848 3.605 0 4.27 2.374 4.27 5.458v5.848zM5.533 8.214c-1.145 0-2.073-.928-2.073-2.073S4.388 4.068 5.533 4.068c1.146 0 2.073.928 2.073 2.073S6.679 8.214 5.533 8.214zm1.776 12.238H3.756V9h3.553v11.452zM22.225 0H1.771C.792 0 0 .78 0 1.737v20.517C0 23.212.792 24 1.771 24h20.451c.979 0 1.771-.788 1.771-1.746V1.737C24 .78 23.204 0 22.225 0z",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-zinc-950" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-5 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-lg p-1 -ml-1"
              aria-label="NEXUS AI Home"
            >
              <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" aria-hidden="true" />
              <span className="text-lg font-bold tracking-[0.15em]">
                NEXUS AI
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Building the future of artificial intelligence. Enterprise-grade
              AI infrastructure for the next generation of applications.
            </p>
            <div className="flex gap-4 mt-6">
              {socialIcons.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-lg p-0.5"
                  aria-label={label}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="text-sm font-semibold text-zinc-300 mb-4 tracking-wide uppercase">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-lg px-1 py-0.5 -ml-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} NEXUS AI. Built by Naumaan
            Khateeb. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-lg px-1 py-0.5 -ml-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
