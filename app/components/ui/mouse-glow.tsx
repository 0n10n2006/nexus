"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const lastMoveRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    lastMoveRef.current = Date.now();
    if (!isVisible) setIsVisible(true);
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });

    setTimeout(() => {
      if (Date.now() - lastMoveRef.current > 1000) {
        setIsVisible(false);
      }
    }, 1200);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  if (typeof window === "undefined" || shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[5] hidden sm:block"
      style={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      animate={{
        opacity: isVisible ? 0.15 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      aria-hidden="true"
    >
      <div
        className="w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
