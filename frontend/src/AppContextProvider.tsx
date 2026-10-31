import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AppContext, type Lang, type Theme } from "./AppContext";

import titlesLang from "./langs/titles.json";

export function AppContextProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;
    if (localTheme !== null) return localTheme;

    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    return systemTheme;
  });

  const [lang, setLang] = useState<Lang>((): Lang => {
    const localLang = localStorage.getItem("lang");
    if (localLang !== null && localLang in titlesLang) return localLang as Lang;

    const systemLanguage = navigator.language.split("-")[0]!;
    if (systemLanguage in titlesLang) return systemLanguage as Lang;

    return "en";
  });
  const titleKey = useRef(
    document.documentElement.dataset.titleKey ?? "ikmath",
  ).current;

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useLayoutEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  
    const titles = titlesLang[lang] as Record<string, string>;
    const translated = titles[titleKey];
  
    if (translated === undefined) {
      console.warn("Missing title:", { key: titleKey, lang });
      return;
    }
  
    document.title =
      titleKey === "ikmath" ? translated : `${translated} • ${titles.ikmath}`;
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
