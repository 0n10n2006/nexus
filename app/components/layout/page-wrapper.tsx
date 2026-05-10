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
      <AnimatedGradient />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
