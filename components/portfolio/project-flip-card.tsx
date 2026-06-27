"use client";

import { useState } from "react";
import { Github, Lock, Building2, User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  type: string;
  category: "internship" | "personal";
  description: string;
  stack: string[];
  github?: string | null;
  githubFrontend?: string | null;
  image: string;
  locale: "es" | "en";
}

export function ProjectFlipCard({
  title,
  type,
  category,
  description,
  stack,
  github,
  githubFrontend,
  image,
  locale,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isInternship = category === "internship";
  const hasBackend = !!github;
  const hasFrontend = !!githubFrontend;
  const isPrivate = !github && !githubFrontend;
  const hasBothRepos = hasBackend && hasFrontend;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div
      className="group w-full cursor-pointer h-[420px]"
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${title} project card. Press enter to flip.`}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side - Image & Repo Button */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border bg-card overflow-hidden",
            "transition-shadow duration-200",
            "hover:shadow-lg hover:border-primary/40"
          )}
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm",
                isInternship
                  ? "bg-primary/90 text-primary-foreground"
                  : "bg-card/90 border border-border text-foreground"
              )}
            >
              {isInternship ? (
                <>
                  <Building2 size={10} />
                  {locale === "es" ? "Pasantía" : "Internship"}
                </>
              ) : (
                <>
                  <User size={10} />
                  {locale === "es" ? "Personal" : "Personal"}
                </>
              )}
            </span>
          </div>

          {/* Flip hint */}
          <div className="absolute top-4 right-4 z-10">
            <span className="text-[10px] text-muted-foreground/70 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              {locale === "es" ? "Click para detalles" : "Click for details"}
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden bg-muted h-[180px]">
            <Image
              src={image}
              alt={`${title} project preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          {/* Front content */}
          <div className="p-5 flex flex-col h-[calc(100%-180px)]">
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground font-mono">{type}</p>
            
            {/* Spacer - pushes button to bottom */}
            <div className="flex-grow" />

            {/* Repository buttons */}
            <div className="flex flex-col gap-2">
              {hasBackend && hasFrontend && (
                <>
                  <a
                    href={github!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
                  >
                    <Github size={16} />
                    {locale === "es" ? "Repo Backend" : "Backend Repo"}
                  </a>
                  <a
                    href={githubFrontend!}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-semibold hover:border-primary/60 hover:bg-primary/5 transition-all"
                  >
                    <Github size={16} />
                    {locale === "es" ? "Repo Frontend" : "Frontend Repo"}
                  </a>
                </>
              )}
              {hasBackend && !hasFrontend && (
                <a
                  href={github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
                >
                  <Github size={16} />
                  {locale === "es" ? "Ver Repositorio" : "View Repository"}
                </a>
              )}
              {isPrivate && (
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground text-sm font-medium">
                  <Lock size={16} />
                  {locale === "es" ? "Repositorio Privado" : "Private Repository"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Side - Description & Stack */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border bg-card overflow-hidden",
            "flex flex-col"
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Header gradient */}
          <div
            className={cn(
              "h-20 relative",
              isInternship
                ? "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
                : "bg-gradient-to-br from-muted via-muted/50 to-transparent"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5 -mt-6 relative flex flex-col h-[calc(100%-80px+24px)]">
            {/* Title */}
            <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>

            {/* Type */}
            <p className="text-xs text-muted-foreground font-mono mb-3">{type}</p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4 flex-grow">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="skill-badge px-2 py-0.5 rounded text-[10px] font-medium"
                >
                  {tech}
                </span>
              ))}
              {stack.length > 6 && (
                <span className="px-2 py-0.5 rounded text-[10px] font-medium text-muted-foreground bg-muted/50">
                  +{stack.length - 6}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
