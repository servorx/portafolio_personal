"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      setIsVisible(false);
      onComplete();
      return;
    }

    // Start fade out after animation duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "oklch(0.09 0.015 240)" }}
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.15_0.03_220)_0%,_transparent_70%)] opacity-50" />
          
          {/* Main logo container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Outer ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute"
            >
              <svg 
                width="160" 
                height="160" 
                viewBox="0 0 160 160" 
                fill="none"
                className="opacity-30"
              >
                <motion.circle
                  cx="80"
                  cy="80"
                  r="76"
                  stroke="url(#ring-gradient)"
                  strokeWidth="1"
                  strokeDasharray="478"
                  initial={{ strokeDashoffset: 478 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                />
                <defs>
                  <linearGradient id="ring-gradient" x1="0" y1="0" x2="160" y2="160">
                    <stop offset="0%" stopColor="oklch(0.7 0.18 210)" />
                    <stop offset="100%" stopColor="oklch(0.6 0.15 230)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Inner geometric accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="absolute"
            >
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <rect
                  x="10"
                  y="10"
                  width="100"
                  height="100"
                  rx="4"
                  stroke="oklch(0.7 0.18 210)"
                  strokeWidth="0.5"
                  transform="rotate(45 60 60)"
                  className="origin-center"
                />
              </svg>
            </motion.div>

            {/* Logo text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="relative z-10 flex items-baseline"
            >
              <span 
                className="text-5xl sm:text-6xl font-bold tracking-tight"
                style={{ 
                  color: "oklch(0.95 0.01 240)",
                  textShadow: "0 0 40px oklch(0.7 0.18 210 / 0.3)"
                }}
              >
                A
              </span>
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-5xl sm:text-6xl font-bold tracking-tight"
                style={{ 
                  background: "linear-gradient(135deg, oklch(0.7 0.18 210), oklch(0.65 0.16 220))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none"
                }}
              >
                .P
              </motion.span>
            </motion.div>

            {/* Subtle glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute inset-0 blur-3xl"
              style={{
                background: "radial-gradient(circle, oklch(0.7 0.18 210 / 0.15) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-1/3 text-xs tracking-[0.3em] uppercase font-mono"
            style={{ color: "oklch(0.6 0.02 240)" }}
          >
            Developer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
