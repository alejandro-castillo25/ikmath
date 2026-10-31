import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";

import titles from "./src/langs/titles.json";


const titleInit = (key: string) => `(function () {
  try {
    var titles = ${JSON.stringify(titles)};
    var key = ${JSON.stringify(key)};
    var lang = localStorage.getItem("lang");
    if (!(lang in titles)) {
      lang = navigator.language.split("-")[0];
      if (!(lang in titles)) lang = "en";
    }
    var t = titles[lang];
    if (!(key in t)) return;
    document.documentElement.dataset.titleKey = key;
    document.documentElement.lang = lang;
    document.title = key === "ikmath" ? t[key] : t[key] + " • " + t.ikmath;
  } catch (e) {}
})();`;

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


// ? Disabled for now, because of hang ups
// const viewTransitionCss = `@view-transition {
//     navigation: auto
//   }
//   ::view-transition-old(body),::view-transition-new(body) {
//     animation-duration: 500ms
//   }
// `;

const viewTransitionCss = ``;

const fontCss = `
@font-face{font-family:"Libron";src:url("/fonts/Libron-Regular.woff2") format("woff2");font-weight:400;font-style:normal;font-display:block}
@font-face{font-family:"Libron";src:url("/fonts/Libron-Italic.woff2") format("woff2");font-weight:400;font-style:italic;font-display:block}
@font-face{font-family:"Libron";src:url("/fonts/Libron-Bold.woff2") format("woff2");font-weight:700;font-style:normal;font-display:block}
@font-face{font-family:"Libron";src:url("/fonts/Libron-BoldItalic.woff2") format("woff2");font-weight:700;font-style:italic;font-display:block}
`;

const preloadFonts = ["Libron-Regular", "Libron-Bold"];


function titleKeyPlugin(): Plugin {
  return {
    name: "title-key",
    transformIndexHtml: {
      order: "pre",
      handler: (html) =>
        html.replace(
          /<title>\s*([^<]*?)\s*<\/title>/,
          (_, key) =>
            `<title>ikmath</title><script>${titleInit(key)}</script>`,
        ),
    },
  };
}

function themeInitPlugin(): Plugin {
  return {
    name: "theme-init",
    transformIndexHtml() {
      return [
        ...preloadFonts.map((name) => ({
          tag: "link",
          attrs: {
            rel: "preload",
            as: "font",
            type: "font/woff2",
            href: `/fonts/${name}.woff2`,
            crossorigin: true,
          },
          injectTo: "head-prepend" as const,
        })),
        {
          tag: "style",
          children: viewTransitionCss + fontCss,
          injectTo: "head-prepend" as const,
        },
        {
          tag: "script",
          children: themeInit,
          injectTo: "body-prepend" as const,
        },
      ];
    },
  };
}

function blockingModulesPlugin(): Plugin {
  return {
    name: "blocking-modules",
    transformIndexHtml: {
      order: "post",
      handler: (html) =>
        html.replace(
          /<script type="module"/g,
          '<script type="module" blocking="render"',
        ),
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), titleKeyPlugin(), themeInitPlugin(), blockingModulesPlugin()],
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
        notFound: path.resolve(import.meta.dirname, "404.html"),
      },
    },
  },
});
