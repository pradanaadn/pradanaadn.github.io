// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://pradanaadn.github.io",
  base: "/",
  integrations: [tailwind(), react()],
  redirects: {
    "/portofolio": "/",
    "/about": "/",
    "/aboutme": "/",
  },
  vite: {
    optimizeDeps: {
      include: ["zwitch"],
    },
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    assets: "_astro",
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
