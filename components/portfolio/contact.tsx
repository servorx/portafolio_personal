"use client";

import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";
import { useI18n } from "@/lib/i18n-context";

export function Contact() {
  const { t } = useI18n();

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}?subject=Portfolio%20Contact`,
      display: personalInfo.email,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "servorx",
      href: personalInfo.github,
      display: "github.com/servorx",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "angelpinzondev",
      href: personalInfo.linkedin,
      display: "linkedin.com/in/angelpinzondev",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      display: personalInfo.phone,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28"
      style={{ background: "var(--section-muted)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
            {t("contact.section")}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {contactItems.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-3 p-4 sm:p-5 rounded-xl border border-border bg-card card-glow transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-0.5 uppercase tracking-wider">
                  {label}
                </p>
                <p className="text-xs sm:text-sm font-medium text-foreground break-all leading-snug">
                  {display}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
