import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  // Asegúrate de que el nombre de usuario sea exacto (Atllas1981 o atllas1981)
  site: "https://Atllas1981.github.io",
  base: "/enfermerosBucaramanga", 
  // Eliminamos outDir para usar el estándar 'dist' con GitHub Actions
  vite: {
    plugins: [tailwind()],
  },
});
