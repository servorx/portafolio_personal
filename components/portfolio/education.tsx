"use client";

import { GraduationCap, Globe } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { useI18n } from "@/lib/i18n-context";

export function Education() {
  const { locale, t } = useI18n();
  const educationList = education[locale];

  const languages = [
    { languageKey: "lang.spanish", levelKey: "lang.native" },
    { languageKey: "lang.english", levelKey: "lang.englishLevel" },
  ];

  return (
    <section id="education" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div>
            <div className="mb-6 sm:mb-8">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                {t("education.section")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("education.title")}
              </h2>
            </div>
            <div className="space-y-4">
              {educationList.map((edu) => (
                <div
                  key={edu.institution}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-border bg-card card-glow transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-foreground text-sm leading-tight">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {edu.degree}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-1 rounded-full flex-shrink-0 self-start">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="mb-6 sm:mb-8">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                {t("languages.section")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {t("languages.title")}
              </h2>
            </div>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.languageKey}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-border bg-card card-glow transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t(lang.languageKey)}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {t(lang.levelKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
