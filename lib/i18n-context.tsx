"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "es" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

const translations: Record<Locale, Record<string, string>> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero
    "hero.available": "Disponible para oportunidades",
    "hero.role": "Desarrollador Fullstack Junior",
    "hero.subtitle": "Backend | APIs | Automatización | Soluciones con IA",
    "hero.pitch": "Construyo soluciones de software limpias, escalables y bien documentadas usando .NET, Node.js, Python/FastAPI, React, TypeScript y bases de datos SQL.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contactMe": "Contáctame",
    "hero.downloadResume": "Descargar CV",
    "hero.scroll": "scroll",

    // About
    "about.section": "01 / Sobre mí",
    "about.title": "Quién soy",
    "about.text1": "Desarrollador Fullstack Junior enfocado en desarrollo backend, APIs REST, bases de datos, automatización y soluciones integradas con IA. Tengo experiencia práctica con C#/.NET, Node.js, Express, Python/FastAPI, React, TypeScript y bases de datos SQL.",
    "about.text2": "Durante mi pasantía en Solvo/Campuslands, contribuí a plataformas empresariales para gestión académica, CRM, PQRSF, reservas, tareas internas y flujos operativos.",
    "about.text3": "Utilizo herramientas de IA de forma profesional para apoyar análisis técnico, documentación, especificaciones, revisión de código asistida y productividad del desarrollo.",
    "about.cleanCode": "Código Limpio",
    "about.cleanCodeDesc": "SOLID y Arquitectura Hexagonal",
    "about.fullstack": "Fullstack",
    "about.fullstackDesc": "Desarrollo enfocado en backend",
    "about.aiReady": "IA-Ready",
    "about.aiReadyDesc": "LangChain, LangGraph y n8n",
    "about.restApis": "REST APIs",
    "about.restApisDesc": "JWT, Swagger, Postman",

    // Skills
    "skills.section": "02 / Habilidades",
    "skills.title": "Tech Stack",
    "skills.description": "Un desglose de las tecnologías y prácticas con las que trabajo diariamente.",
    "skills.languages": "Lenguajes",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.databases": "Bases de Datos",
    "skills.apisAuth": "APIs y Auth",
    "skills.automationAI": "Automatización e IA",
    "skills.tools": "Herramientas",
    "skills.practices": "Prácticas",

    // Experience
    "experience.section": "03 / Experiencia",
    "experience.title": "Experiencia Laboral",

    // Projects
    "projects.section": "04 / Proyectos",
    "projects.title": "Proyectos Destacados",
    "projects.description": "Proyectos personales y de práctica mostrando trabajo en backend, fullstack y automatización.",
    "projects.viewCode": "Ver Código",
    "projects.liveDemo": "Demo en Vivo",
    "projects.backend": "Backend",
    "projects.frontend": "Frontend",
    "projects.private": "Práctica / Privado",

    // Education
    "education.section": "05 / Educación",
    "education.title": "Formación",
    "languages.section": "06 / Idiomas",
    "languages.title": "Idiomas",
    "lang.spanish": "Español",
    "lang.native": "Nativo",
    "lang.english": "Inglés",
    "lang.englishLevel": "B2.2 — Intermedio Alto",

    // Contact
    "contact.section": "07 / Contacto",
    "contact.title": "Trabajemos juntos",
    "contact.description": "Estoy abierto a roles junior fullstack, backend y APIs. No dudes en contactarme — me encantaría saber sobre tu equipo y proyectos.",

    // Footer
    "footer.copyright": "© 2025 Ángel David Pinzón. Hecho con Next.js y Tailwind CSS.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.available": "Available for opportunities",
    "hero.role": "Junior Fullstack Developer",
    "hero.subtitle": "Backend | APIs | Automation | AI-Integrated Solutions",
    "hero.pitch": "I build clean, scalable and well-documented software solutions using .NET, Node.js, Python/FastAPI, React, TypeScript and SQL databases.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",
    "hero.downloadResume": "Download Resume",
    "hero.scroll": "scroll",

    // About
    "about.section": "01 / About",
    "about.title": "Who I am",
    "about.text1": "Junior Fullstack Developer focused on backend development, REST APIs, databases, automation and AI-integrated solutions. I have practical experience with C#/.NET, Node.js, Express, Python/FastAPI, React, TypeScript and SQL databases.",
    "about.text2": "During my internship at Solvo/Campuslands, I contributed to business platforms for academic management, CRM, PQRSF, reservations, internal tasks and operational workflows.",
    "about.text3": "I use AI tools professionally to support technical analysis, documentation, specifications, assisted code review and development productivity.",
    "about.cleanCode": "Clean Code",
    "about.cleanCodeDesc": "SOLID & Hexagonal Architecture",
    "about.fullstack": "Fullstack",
    "about.fullstackDesc": "Backend-focused development",
    "about.aiReady": "AI-Ready",
    "about.aiReadyDesc": "LangChain, LangGraph & n8n",
    "about.restApis": "REST APIs",
    "about.restApisDesc": "JWT, Swagger, Postman",

    // Skills
    "skills.section": "02 / Skills",
    "skills.title": "Tech Stack",
    "skills.description": "A breakdown of the technologies and practices I work with daily.",
    "skills.languages": "Languages",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.databases": "Databases",
    "skills.apisAuth": "APIs & Auth",
    "skills.automationAI": "Automation & AI",
    "skills.tools": "Tools",
    "skills.practices": "Practices",

    // Experience
    "experience.section": "03 / Experience",
    "experience.title": "Work Experience",

    // Projects
    "projects.section": "04 / Projects",
    "projects.title": "Featured Projects",
    "projects.description": "Personal and practice projects showcasing backend, fullstack and automation work.",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",
    "projects.backend": "Backend",
    "projects.frontend": "Frontend",
    "projects.private": "Practice / Private",

    // Education
    "education.section": "05 / Education",
    "education.title": "Background",
    "languages.section": "06 / Languages",
    "languages.title": "Languages",
    "lang.spanish": "Spanish",
    "lang.native": "Native",
    "lang.english": "English",
    "lang.englishLevel": "B2.2 — Upper Intermediate",

    // Contact
    "contact.section": "07 / Contact",
    "contact.title": "Let's work together",
    "contact.description": "I'm open to junior fullstack, backend and API roles. Feel free to reach out — I'd love to hear about your team and projects.",

    // Footer
    "footer.copyright": "© 2025 Ángel David Pinzón. Built with Next.js & Tailwind CSS.",
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-locale") as Locale | null;
    if (stored && (stored === "es" || stored === "en")) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
  };

  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
