import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  site: "https://atllas1981.github.io/enfermerosBucaramanga", // 👈 URL completa
  base: "/enfermerosBucaramanga/", // 👈 nombre del repo con /
  outDir: "./dist",
});
