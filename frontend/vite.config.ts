import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";

const themeInit = ` (function () {
  try {
    var t = localStorage.getItem("theme");
    if (t !== "dark" && t !== "light") {
      t = matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.body.classList.add(t);
    document.documentElement.style.colorScheme = t;
  } catch (e) {}
})();`;

function themeInitPlugin(): Plugin {
  return {
    name: "theme-init",
    transformIndexHtml() {
      return [
        {
          tag: "script",
          children: themeInit,
          injectTo: "body-prepend",
        },
      ];
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), themeInitPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },

  build: {
    rolldownOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "index.html"),
        subjects: path.resolve(import.meta.dirname, "subjects.html"),
        integrals: path.resolve(import.meta.dirname, "integrals.html"),
        references: path.resolve(import.meta.dirname, "references.html"),
        notFound:  path.resolve(import.meta.dirname, "404.html"),
      },
    },
  },
});
