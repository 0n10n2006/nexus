"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 40;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => onFinish?.(), 300);
      } else {
        setProgress(Math.min(current, 100));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="text-3xl font-bold tracking-[0.3em] text-white mb-8">
          NEXUS AI
        </div>
        <div className="w-72 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
        </div>
        <div className="mt-4 text-sm font-mono text-zinc-400">
          {progress.toFixed(0)}%
        </div>
      </motion.div>
    </motion.div>
  );
}
