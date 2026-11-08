"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Centralizes the dark/light toggle so it's a single source of truth.
// attribute="class" toggles the .dark class Tailwind + globals.css read from.
export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
