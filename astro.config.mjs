import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

// Configuración específica para GitHub Pages
const repo = "enfermerosBucaramanga"; // nombre EXACTO del repo en GitHub

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  site: `https://atllas1981.github.io/${repo}/`,
  base: `/${repo}/`,
  outDir: "dist",
});
