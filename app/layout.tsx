import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ángel David Pinzón — Junior Fullstack Developer",
  description:
    "Junior Fullstack Developer focused on backend development, REST APIs, databases, automation and AI-integrated solutions. C#/.NET, Node.js, Python/FastAPI, React, TypeScript.",
  keywords: [
    "Junior Fullstack Developer",
    "Backend Developer",
    ".NET Developer",
    "Python FastAPI",
    "Node.js",
    "API Integration",
    "Automation",
    "AI Developer",
  ],
  authors: [{ name: "Ángel David Pinzón" }],
  openGraph: {
    title: "Ángel David Pinzón — Junior Fullstack Developer",
    description:
      "Building clean, scalable and well-documented software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
