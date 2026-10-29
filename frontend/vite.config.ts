import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
