"use client";

import { projects } from "@/lib/portfolio-data";
import { useI18n } from "@/lib/i18n-context";
import { ProjectFlipCard } from "./project-flip-card";

export function Projects() {
  const { locale, t } = useI18n();
  const projectList = projects[locale];

  return (
    <section
      id="projects"
      className="py-20 sm:py-28"
      style={{ background: "var(--section-muted)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
            {t("projects.section")}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            {t("projects.title")}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-[15px] max-w-xl leading-relaxed">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project) => (
            <ProjectFlipCard
              key={project.title}
              title={project.title}
              type={project.type}
              category={project.category as "internship" | "personal"}
              description={project.description}
              stack={project.stack}
              github={project.github}
              githubFrontend={project.githubFrontend}
              image={project.image}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
