"use client";

import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";
import { useI18n } from "@/lib/i18n-context";

export function Hero() {
  const { t } = useI18n();

  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-mono text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {t("hero.available")}
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4">
          <span className="text-foreground">Ángel David</span>{" "}
          <span className="gradient-text">Pinzón</span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl font-semibold text-primary mb-3 tracking-wide">
          {t("hero.role")}
        </p>

        {/* Subtitle */}
        <p className="text-sm font-mono text-muted-foreground mb-6 tracking-widest uppercase">
          {t("hero.subtitle")}
        </p>

        {/* Pitch */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          &ldquo;{t("hero.pitch")}&rdquo;
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <button
            onClick={() => handleScroll("#projects")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            <ExternalLink size={16} />
            {t("hero.viewProjects")}
          </button>
          <a
            href="mailto:servor1230@gmail.com?subject=Portfolio%20Contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground font-semibold text-sm hover:border-primary/60 hover:bg-primary/5 transition-all"
          >
            <Mail size={16} />
            {t("hero.contactMe")}
          </a>
          <a
            href="/cv/angel-pinzon-cv.pdf"
            download="Angel-Pinzon-CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground font-semibold text-sm hover:border-primary/60 hover:bg-primary/5 transition-all"
          >
            <Download size={16} />
            {t("hero.downloadResume")}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <span className="text-border" aria-hidden>|</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <span className="text-border" aria-hidden>|</span>
          <a
            href={`mailto:${personalInfo.email}?subject=Portfolio%20Contact`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => handleScroll("#about")}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors mx-auto animate-bounce"
        >
          <span className="text-xs font-mono">{t("hero.scroll")}</span>
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
