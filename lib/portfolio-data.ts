export const personalInfo = {
  name: "Ángel David Pinzón",
  github: "https://github.com/servorx",
  linkedin: "https://www.linkedin.com/in/angelpinzondev/",
  email: "servor1230@gmail.com",
  phone: "+57 315 3327502",
};

// Skills with icons (using Simple Icons slugs or custom identifiers)
export const skillsWithLogos = [
  // Languages
  { name: "C#", icon: "csharp", category: "languages" },
  { name: "Python", icon: "python", category: "languages" },
  { name: "JavaScript", icon: "javascript", category: "languages" },
  { name: "TypeScript", icon: "typescript", category: "languages" },
  // Backend
  { name: ".NET", icon: "dotnet", category: "backend" },
  { name: "ASP.NET Core", icon: "dotnet", category: "backend" },
  { name: "Entity Framework", icon: "dotnet", category: "backend" },
  { name: "Node.js", icon: "nodedotjs", category: "backend" },
  { name: "Express", icon: "express", category: "backend" },
  { name: "NestJS", icon: "nestjs", category: "backend" },
  { name: "FastAPI", icon: "fastapi", category: "backend" },
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextdotjs", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
  // Databases
  { name: "MySQL", icon: "mysql", category: "databases" },
  { name: "PostgreSQL", icon: "postgresql", category: "databases" },
  { name: "Redis", icon: "redis", category: "databases" },
  { name: "SQLite", icon: "sqlite", category: "databases" },
  // APIs & Auth
  { name: "Swagger", icon: "swagger", category: "apisAuth" },
  { name: "Postman", icon: "postman", category: "apisAuth" },
  { name: "JWT", icon: "jsonwebtokens", category: "apisAuth" },
  // Automation & AI
  { name: "n8n", icon: "n8n", category: "automationAI" },
  { name: "LangChain", icon: "langchain", category: "automationAI" },
  // Tools
  { name: "Git", icon: "git", category: "tools" },
  { name: "GitHub", icon: "github", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "Nginx", icon: "nginx", category: "tools" },
];

export const experience = {
  es: [
    {
      company: "Solvo / Campuslands",
      role: "Practicante Desarrollador Fullstack",
      year: "2025",
      description:
        "Participé como Desarrollador Fullstack en proyectos empresariales durante mis prácticas en Solvo/Campuslands, trabajando con React, TypeScript, Node.js, Express y APIs REST. Implementé funcionalidades para gestión académica, CRM, PQRSF, reservas, tareas, control por roles, trazabilidad, dashboards y flujos operativos. También utilicé herramientas de IA de forma profesional para apoyar análisis técnico, documentación, especificaciones, revisión de código y optimización del desarrollo.",
      projects: [
        {
          name: "APEX",
          description:
            "Plataforma académica y comercial. Participé en módulos para gestión de formaciones, sesiones, asistencia y CRM, incluyendo control por roles, reportes operativos e integraciones para documentos, comunicación y métricas.",
        },
        {
          name: "PQRS",
          description:
            "Sistema de gestión PQRSF. Construí funcionalidades para radicación, seguimiento, respuesta, cierre y reapertura de casos. Implementé trazabilidad, historial de eventos, adjuntos, chat operativo y paneles internos.",
        },
        {
          name: "HUBUX",
          description:
            "Plataforma de reservas y ocupación. Desarrollé módulos para usuarios, salas, reservas, transferencias y auditoría, aplicando reglas de negocio, autenticación segura y trazabilidad de eventos.",
        },
      ],
    },
    {
      company: "Proyecto Personal",
      role: "AutoTallerManager — Fullstack C#/.NET",
      year: "2025",
      description:
        "Desarrollé un proyecto fullstack con backend en C#/.NET, aplicando arquitectura hexagonal, principios SOLID, APIs REST, autenticación JWT, documentación con Swagger, Docker y conexión a base de datos SQL. Implementé módulos CRUD, validaciones de negocio, separación por capas y buenas prácticas de desarrollo backend.",
      projects: [],
    },
    {
      company: "Proyecto Personal",
      role: "DocsFlow — Fullstack Python/FastAPI + React",
      year: "2025",
      description:
        "Aplicación fullstack para gestión documental, usuarios, departamentos y autenticación. Desarrollé backend con FastAPI, MySQL, JWT, SQLAlchemy/SQLModel, Pydantic y procesamiento de PDFs; frontend con React, TypeScript y TailwindCSS.",
      projects: [],
    },
  ],
  en: [
    {
      company: "Solvo / Campuslands",
      role: "Fullstack Developer Intern",
      year: "2025",
      description:
        "Contributed as a Fullstack Developer Intern to business platforms focused on academic management, CRM, PQRSF, reservations, internal tasks and operational workflows. Worked with React, TypeScript, Node.js, Express and REST APIs, implementing features related to role-based access, traceability, dashboards and business workflows. Also used AI tools professionally to support technical analysis, documentation, functional and technical specifications, assisted code review and development productivity.",
      projects: [
        {
          name: "APEX",
          description:
            "Academic and commercial platform. Worked on modules for training programs, sessions, attendance and CRM, including role-based access, operational reports and integrations for documents, communication and metrics.",
        },
        {
          name: "PQRS",
          description:
            "PQRSF management system. Built features for case filing, tracking, response, closure and reopening. Implemented traceability, event history, attachments, operational chat and internal panels.",
        },
        {
          name: "HUBUX",
          description:
            "Reservations and occupancy platform. Developed modules for users, rooms, bookings, transfers and auditing, applying business rules, secure authentication and event traceability.",
        },
      ],
    },
    {
      company: "Personal Project",
      role: "AutoTallerManager — Fullstack C#/.NET",
      year: "2025",
      description:
        "Developed a fullstack project with a C#/.NET backend, applying hexagonal architecture, SOLID principles, REST APIs, JWT authentication, Swagger documentation, Docker and SQL database connection. Implemented CRUD modules, business validations, layer separation and backend development best practices.",
      projects: [],
    },
    {
      company: "Personal Project",
      role: "DocsFlow — Fullstack Python/FastAPI + React",
      year: "2025",
      description:
        "Fullstack application for document management, users, departments and authentication. Developed backend with FastAPI, MySQL, JWT, SQLAlchemy/SQLModel, Pydantic and PDF processing; frontend with React, TypeScript and TailwindCSS.",
      projects: [],
    },
  ],
};

export const projects = {
  es: [
    {
      title: "APEX",
      type: "Pasantía · Fullstack",
      category: "internship",
      description:
        "Plataforma académica y comercial para programas de formación, sesiones, asistencia y CRM. Contribuí en control por roles, reportes operativos e integraciones para comunicación, documentos y métricas. Link del software: https://apex.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs"],
      github: null,
      githubFrontend: null,
      image: "/images/apex.jpg",
    },
    {
      title: "HUBUX",
      type: "Pasantía · Fullstack",
      category: "internship",
      description:
        "Plataforma de reservas y ocupación. Desarrollé módulos para usuarios, salas, reservas, transferencias y auditoría, con reglas de negocio, autenticación segura y trazabilidad de eventos. Link del software: https://hubux.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "Arquitectura Modular"],
      github: null,
      githubFrontend: null,
      image: "/images/hubux.jpg",
    },
    {
      title: "ViaticApp",
      type: "Pasantía · Fullstack",
      category: "internship",
      description:
        "Aplicación fullstack para la gestión de anticipos, legalizaciones, proveedores, usuarios, políticas de gasto, auditoría, notificaciones y generación documental. Backend con Node.js, TypeScript, Express, Prisma, Better Auth, Zod, MySQL/MariaDB, S3, Swagger y Vitest; frontend con React, TypeScript, Vite, TailwindCSS, Axios y vistas por rol. Link del software: https://anticipos.aiacademy.com.co",
      stack: ["Node.js", "TypeScript", "Express", "Prisma", "MySQL", "MariaDB", "Better Auth", "Zod", "AWS S3", "Swagger", "Vitest", "React", "Vite", "TailwindCSS", "Axios"],
      github: null,
      githubFrontend: null,
      image: "/images/anticipos.jpg",
    },
    {
      title: "AutoTallerManager",
      type: "Proyecto Personal · Fullstack",
      category: "personal",
      description:
        "Proyecto fullstack con backend en C#/.NET, aplicando arquitectura hexagonal, principios SOLID, REST APIs, autenticación JWT, documentación Swagger, Docker y conexión a base de datos SQL.",
      stack: ["C#", ".NET", "ASP.NET Core", "EF Core", "SQL", "JWT", "Swagger", "Docker", "React", "TypeScript"],
      github: "https://github.com/servorx/backend_cs",
      githubFrontend: null,
      image: "/images/autotaller.jpg",
    },
    {
      title: "PQRS",
      type: "Pasantía · Fullstack",
      category: "internship",
      description:
        "Sistema de gestión de solicitudes, quejas, reclamos, sugerencias y retroalimentación. Implementé seguimiento, flujos de respuesta, historial de eventos, adjuntos, chat operativo y paneles internos. Link del software: https://pqrs.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "WebSockets"],
      github: "https://github.com/IA-Academy-Team/PQRSF-backend",
      githubFrontend: "https://github.com/IA-Academy-Team/PQRSF-frontend",
      image: "/images/pqrs.jpg",
    },
    {
      title: "TASKS",
      type: "Pasantía · Fullstack",
      category: "internship",
      description:
        "Plataforma de gestión de tareas y proyectos. Implementé funcionalidades para tareas, proyectos, equipos, dashboards, flujos de estado, permisos, notificaciones y métricas de productividad. Link del software: https://task.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "WebSockets", "Arquitectura Modular"],
      github: "https://github.com/IA-Academy-Team/tasks_backend",
      githubFrontend: "https://github.com/IA-Academy-Team/tasks_frontend",
      image: "/images/tasks.jpg",
    },
  ],
  en: [
    {
      title: "APEX",
      type: "Internship · Fullstack",
      category: "internship",
      description:
        "Academic and commercial platform for training programs, sessions, attendance, and CRM. Contributed to role-based access control, operational reporting, and integrations for communication, document management, and metrics. Software link: https://apex.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs"],
      github: null,
      githubFrontend: null,
      image: "/images/apex.jpg",
    },
    {
      title: "HUBUX",
      type: "Internship · Fullstack",
      category: "internship",
      description:
        "Reservation and space occupancy platform. Developed modules for users, rooms, reservations, transfers, and auditing, implementing business rules, secure authentication, and event traceability. Software link: https://hubux.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "Modular Architecture"],
      github: null,
      githubFrontend: null,
      image: "/images/hubux.jpg",
    },
    {
      title: "ViaticApp",
      type: "Internship · Fullstack",
      category: "internship",
      description:
        "Fullstack application for managing travel advances, expense settlements, suppliers, users, expense policies, auditing, notifications, and document generation. Backend built with Node.js, TypeScript, Express, Prisma, Better Auth, Zod, MySQL/MariaDB, AWS S3, Swagger, and Vitest; frontend developed with React, TypeScript, Vite, TailwindCSS, Axios, and role-based views. Software link: https://anticipos.aiacademy.com.co",
      stack: [
        "Node.js",
        "TypeScript",
        "Express",
        "Prisma",
        "MySQL",
        "MariaDB",
        "Better Auth",
        "Zod",
        "AWS S3",
        "Swagger",
        "Vitest",
        "React",
        "Vite",
        "TailwindCSS",
        "Axios",
      ],
      github: null,
      githubFrontend: null,
      image: "/images/anticipos.jpg",
    },
    {
      title: "AutoTallerManager",
      type: "Personal Project · Fullstack",
      category: "personal",
      description:
        "Fullstack project featuring a C#/.NET backend, applying Hexagonal Architecture, SOLID principles, REST APIs, JWT authentication, Swagger documentation, Docker, and SQL database integration.",
      stack: ["C#", ".NET", "ASP.NET Core", "EF Core", "SQL", "JWT", "Swagger", "Docker", "React", "TypeScript"],
      github: "https://github.com/servorx/backend_cs",
      githubFrontend: null,
      image: "/images/autotaller.jpg",
    },
    {
      title: "PQRS",
      type: "Internship · Fullstack",
      category: "internship",
      description:
        "Management system for requests, complaints, claims, suggestions, and feedback. Implemented case tracking, response workflows, event history, file attachments, operational chat, and internal dashboards. Software link: https://pqrs.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "WebSockets"],
      github: "https://github.com/IA-Academy-Team/PQRSF-backend",
      githubFrontend: "https://github.com/IA-Academy-Team/PQRSF-frontend",
      image: "/images/pqrs.jpg",
    },
    {
      title: "TASKS",
      type: "Internship · Fullstack",
      category: "internship",
      description:
        "Task and project management platform. Implemented features for tasks, projects, teams, dashboards, workflow states, permissions, notifications, and productivity metrics. Software link: https://task.aiacademy.com.co",
      stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "WebSockets", "Modular Architecture"],
      github: "https://github.com/IA-Academy-Team/tasks_backend",
      githubFrontend: "https://github.com/IA-Academy-Team/tasks_frontend",
      image: "/images/tasks.jpg",
    },
  ],
};

export const education = {
  es: [
    {
      institution: "Campuslands",
      degree: "Desarrollador de Software Fullstack",
      year: "2025",
    },
    {
      institution: "Colegio Sagrado Corazón de Jesús",
      degree: "Bachiller Técnico Comercial",
      year: "2024",
    },
  ],
  en: [
    {
      institution: "Campuslands",
      degree: "Fullstack Software Developer",
      year: "2025",
    },
    {
      institution: "Colegio Sagrado Corazón de Jesús",
      degree: "Technical Commercial High School Graduate",
      year: "2024",
    },
  ],
};

export const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];
