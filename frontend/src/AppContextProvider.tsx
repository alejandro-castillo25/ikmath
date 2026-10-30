import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { AppContext, type Lang, type Theme } from "./AppContext";

export function AppContextProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [theme, setTheme] = useState<Theme>(
    () => {
      const localTheme = localStorage.getItem("theme") as Theme | null;
      if (localTheme !== null) return localTheme;

      const systemTheme: Theme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
        ? "dark"
        : "light";

      return systemTheme;
    }
  );
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem("lang") as Lang) ?? "es",
  );

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <AppContext.Provider
      value={{
        theme: [theme, setTheme],
        lang: [lang, setLang],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
