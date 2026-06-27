"use client";

import { Code2, Cpu, Layers, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function About() {
  const { t } = useI18n();

  const highlights = [
    { icon: Code2, labelKey: "about.cleanCode", descKey: "about.cleanCodeDesc" },
    { icon: Layers, labelKey: "about.fullstack", descKey: "about.fullstackDesc" },
    { icon: Cpu, labelKey: "about.aiReady", descKey: "about.aiReadyDesc" },
    { icon: Zap, labelKey: "about.restApis", descKey: "about.restApisDesc" },
  ];

  const aboutParagraphs = [
    t("about.text1"),
    t("about.text2"),
    t("about.text3"),
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
            {t("about.section")}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-4">
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, labelKey, descKey }) => (
              <div
                key={labelKey}
                className="p-4 rounded-xl border border-border bg-card card-glow transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="font-semibold text-sm text-foreground mb-0.5">{t(labelKey)}</p>
                <p className="text-xs text-muted-foreground leading-snug">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
