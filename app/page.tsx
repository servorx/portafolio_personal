"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { IntroAnimation } from "@/components/portfolio/intro-animation";

export default function PortfolioPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    try {
      const hasSeenIntro = sessionStorage.getItem("portfolio-intro-seen");
      if (hasSeenIntro) {
        setShowIntro(false);
        return;
      }
    } catch {
      setShowIntro(false);
      return;
    }

    const fallbackTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    try {
      sessionStorage.setItem("portfolio-intro-seen", "true");
    } catch {
      // Storage can be blocked in some browsing modes.
    }
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
