"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillsWithLogos } from "@/lib/portfolio-data";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";

const iconMeta: Record<string, { slug: string; color: string }> = {
  csharp:          { slug: "csharp",           color: "512BD4" },
  python:          { slug: "python",            color: "3776AB" },
  javascript:      { slug: "javascript",        color: "F7DF1E" },
  typescript:      { slug: "typescript",        color: "3178C6" },
  dotnet:          { slug: "dotnet",            color: "512BD4" },
  aspnetcore:      { slug: "dotnet",            color: "512BD4" },
  entityframework: { slug: "dotnet",            color: "512BD4" },
  nodedotjs:       { slug: "nodedotjs",         color: "5FA04E" },
  express:         { slug: "express",           color: "FFFFFF" },
  nestjs:          { slug: "nestjs",            color: "E0234E" },
  fastapi:         { slug: "fastapi",           color: "009688" },
  react:           { slug: "react",             color: "61DAFB" },
  nextdotjs:       { slug: "nextdotjs",         color: "FFFFFF" },
  tailwindcss:     { slug: "tailwindcss",       color: "06B6D4" },
  mysql:           { slug: "mysql",             color: "4479A1" },
  postgresql:      { slug: "postgresql",        color: "4169E1" },
  redis:           { slug: "redis",             color: "FF4438" },
  sqlite:          { slug: "sqlite",            color: "003B57" },
  swagger:         { slug: "swagger",           color: "85EA2D" },
  postman:         { slug: "postman",           color: "FF6C37" },
  jsonwebtokens:   { slug: "jsonwebtokens",     color: "FB015B" },
  n8n:             { slug: "n8n",               color: "EA4B71" },
  langchain:       { slug: "langchain",         color: "1C3C3C" },
  openai:          { slug: "openai",            color: "74AA9C" },
  git:             { slug: "git",               color: "F05032" },
  github:          { slug: "github",            color: "FFFFFF" },
  docker:          { slug: "docker",            color: "2496ED" },
  vscode:          { slug: "visualstudiocode",  color: "007ACC" },
  nginx:           { slug: "nginx",             color: "009639" },
};

// Inline SVG for C# (always works, never broken)
function CSharpIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M117.5 33.6L69.6 6.1c-3.5-2-7.8-2-11.2 0L10.5 33.6C7 35.6 5 39.3 5 43.2v54.9c0 3.9 2.1 7.5 5.5 9.5l47.9 27.5c3.5 2 7.8 2 11.2 0l47.9-27.5c3.5-2 5.5-5.6 5.5-9.5V43.2c0-3.9-2.1-7.6-5.5-9.6z" fill="#512BD4"/>
      <path d="M51.5 74.8c-2.7 4.7-7.7 7.8-13.5 7.8-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5c5.8 0 10.9 3.2 13.5 7.9l13.3-7.7C59.4 42 50.3 36.5 38 36.5c-15.4 0-27.9 12.5-27.9 27.9S22.6 92.3 38 92.3c12.1 0 21.4-5.7 26.7-14.9l-13.2-7.6z" fill="white"/>
      <path d="M84 50h5.5l-2 14H95l2-14h5.5l-2 14H108v5.5h-8.3l-1.4 9H106V84h-8.5l-2 14H90l2-14h-7.5l-2 14H77l2-14h-7v-5.5h7.8l1.4-9H74V64h8L84 50zm4.7 19.5-1.4 9h7.5l1.4-9h-7.5z" fill="white"/>
    </svg>
  );
}

function getIconUrl(iconKey: string): string {
  const meta = iconMeta[iconKey];
  if (meta) return `${SIMPLE_ICONS_CDN}/${meta.slug}/${meta.color}`;
  return `${SIMPLE_ICONS_CDN}/${iconKey}/FFFFFF`;
}

// Category mapping for filter chips
const categoryLabels: Record<string, { es: string; en: string }> = {
  languages: { es: "Lenguajes", en: "Languages" },
  backend: { es: "Backend", en: "Backend" },
  frontend: { es: "Frontend", en: "Frontend" },
  databases: { es: "Bases de Datos", en: "Databases" },
  apisAuth: { es: "APIs y Auth", en: "APIs & Auth" },
  automationAI: { es: "Automatización e IA", en: "Automation & AI" },
  tools: { es: "Herramientas", en: "Tools" },
};

const CARD_W = 120;
const CARD_GAP = 12;
const STEP = CARD_W + CARD_GAP;

export function Skills() {
  const { locale, t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allSkills = skillsWithLogos;
  const skills = activeCategory 
    ? allSkills.filter(s => s.category === activeCategory) 
    : allSkills;
  
  const categories = Array.from(new Set(allSkills.map(s => s.category)));
  const dotsCount = Math.max(1, Math.ceil(skills.length / 6));

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 4);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 4);
    const dotIndex = Math.round(scrollLeft / (STEP * 6));
    setActiveDot(Math.min(dotIndex, dotsCount - 1));
  }, [dotsCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    return () => el.removeEventListener("scroll", updateState);
  }, [updateState, skills]);

  // Reset scroll when category changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [activeCategory]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -(STEP * 4) : STEP * 4, behavior: "smooth" });
  };

  const scrollToDot = (dot: number) => {
    scrollRef.current?.scrollTo({ left: dot * STEP * 6, behavior: "smooth" });
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") scroll("left");
    if (e.key === "ArrowRight") scroll("right");
  };

  return (
    <section id="skills" className="py-20 sm:py-28" style={{ background: "var(--section-muted)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
            {t("skills.section")}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            {t("skills.title")}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-[15px] max-w-xl mx-auto leading-relaxed">
            {t("skills.description")}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border",
              activeCategory === null
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            )}
          >
            {locale === "es" ? "Todas" : "All"}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {categoryLabels[cat]?.[locale] || cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative group/carousel"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Tech stack carousel"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-10 bg-gradient-to-r from-[var(--section-muted)] to-transparent rounded-l-2xl" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-10 bg-gradient-to-l from-[var(--section-muted)] to-transparent rounded-r-2xl" />

          {/* Prev button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            aria-label="Previous"
            className={cn(
              "absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border bg-card flex items-center justify-center transition-all duration-300",
              canLeft
                ? "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground cursor-pointer shadow-md hover:shadow-lg hover:scale-105 opacity-0 group-hover/carousel:opacity-100"
                : "border-border/30 opacity-0 cursor-not-allowed text-muted-foreground"
            )}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            aria-label="Next"
            className={cn(
              "absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border bg-card flex items-center justify-center transition-all duration-300",
              canRight
                ? "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground cursor-pointer shadow-md hover:shadow-lg hover:scale-105 opacity-0 group-hover/carousel:opacity-100"
                : "border-border/30 opacity-0 cursor-not-allowed text-muted-foreground"
            )}
          >
            <ChevronRight size={18} />
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto py-4 px-4 sm:px-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {skills.map((skill, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <div
                  key={`${skill.name}-${i}`}
                  className="flex-shrink-0 snap-start"
                  style={{ width: CARD_W }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={cn(
                      "flex flex-col items-center gap-2.5 p-4 rounded-xl border bg-card cursor-default select-none h-[120px]",
                      "transition-all duration-300 ease-out",
                      isHovered
                        ? "border-primary/60 bg-primary/5 shadow-lg -translate-y-1 scale-[1.02]"
                        : "border-border/60 hover:border-border"
                    )}
                  >
                    {/* Icon area */}
                    <div className={cn(
                      "w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300",
                      isHovered ? "bg-primary/10 scale-105" : "bg-muted/50"
                    )}>
                      {skill.icon === "csharp" ? (
                        <CSharpIcon size={28} />
                      ) : (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={getIconUrl(skill.icon)}
                            alt={skill.name}
                            width={28}
                            height={28}
                            className={cn(
                              "w-7 h-7 object-contain transition-transform duration-300",
                              isHovered && "scale-110"
                            )}
                            loading="lazy"
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              img.style.display = "none";
                              const fb = img.nextElementSibling as HTMLElement | null;
                              if (fb) fb.style.display = "flex";
                            }}
                          />
                          <span className="hidden w-7 h-7 items-center justify-center text-primary font-bold text-xs rounded bg-primary/10">
                            {skill.name.slice(0, 2)}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Name */}
                    <span className={cn(
                      "text-[11px] font-medium text-center leading-tight transition-colors duration-300 line-clamp-2",
                      isHovered ? "text-primary" : "text-foreground/80"
                    )}>
                      {skill.name}
                    </span>

                    {/* Active indicator */}
                    <div className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300",
                      isHovered ? "w-8 bg-primary" : "w-0 bg-transparent"
                    )} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot navigation */}
        {dotsCount > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-6" role="tablist" aria-label="Carousel pages">
            {Array.from({ length: dotsCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToDot(i)}
                role="tab"
                aria-selected={activeDot === i}
                aria-label={`Page ${i + 1}`}
                className={cn(
                  "rounded-full transition-all duration-300",
                  activeDot === i
                    ? "w-6 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-border hover:bg-primary/40"
                )}
              />
            ))}
          </div>
        )}

        {/* Skills count */}
        <p className="text-center text-xs text-muted-foreground/60 mt-4 font-mono">
          {skills.length} {locale === "es" ? "tecnologías" : "technologies"}
          {activeCategory && ` · ${categoryLabels[activeCategory]?.[locale] || activeCategory}`}
        </p>
      </div>
    </section>
  );
}
