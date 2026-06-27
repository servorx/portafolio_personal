"use client";

import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { useI18n } from "@/lib/i18n-context";

export function Experience() {
  const { locale, t } = useI18n();
  const jobs = experience[locale];

  // Only show the internship (Solvo/Campuslands), not personal projects
  const internships = jobs.filter(
    (job) => job.company !== "Proyecto Personal" && job.company !== "Personal Project"
  );

  return (
    <section id="experience" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
            {t("experience.section")}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            {t("experience.title")}
          </h2>
        </div>

        <div className="space-y-6">
          {internships.map((job, index) => (
            <div
              key={`${job.company}-${index}`}
              className="rounded-2xl border border-border bg-card card-glow transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-border/50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg leading-tight">
                        {job.role}
                      </h3>
                      <p className="text-primary font-medium text-sm mt-1">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-full self-start bg-muted/30">
                    {job.year}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 sm:p-6">
                <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                  {job.description}
                </p>

                {/* Compact project chips */}
                {job.projects && job.projects.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-border/50">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                      {locale === "es" ? "Proyectos involucrados" : "Projects involved"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.projects.map((proj) => (
                        <span
                          key={proj.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/30 bg-primary/5 text-primary transition-colors hover:bg-primary/10"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {proj.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
