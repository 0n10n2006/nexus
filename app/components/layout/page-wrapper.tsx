"use client";

import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { AnimatedGradient } from "../ui/animated-gradient";
import { MouseGlow } from "../ui/mouse-glow";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black">
      <MouseGlow />
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-zinc-950" />
        <AnimatedGradient />
      </div>
      <Navbar />
      <main
        id="main-content"
        className="relative z-10 outline-none"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
