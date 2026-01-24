import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://atllas1981.github.io",
  base: "/enfermerosBucaramanga/",
  vite: {
    plugins: [tailwind()],
  },
});
