"use client";

import { useMemo, useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

// Deterministic random for consistent hydration
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => {
        const s1 = seededRandom(i * 1.1);
        const s2 = seededRandom(i * 2.2);
        const s3 = seededRandom(i * 3.3);
        const s4 = seededRandom(i * 4.4);
        const s5 = seededRandom(i * 5.5);
        return {
          id: i,
          x: s1 * 100,
          y: s2 * 100,
          size: s3 * 2 + 1,
          duration: s4 * 10 + 15,
          delay: s5 * 10,
          opacity: s1 * 0.4 + 0.1,
        };
      }),
    [count, baseId]
  );

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, p.opacity, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
