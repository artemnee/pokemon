// @ts-check
import { defineConfig } from "astro/config"
import wywInJS from "@wyw-in-js/vite"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [wywInJS()],
  },
  site: "https://artemneepokemon.github.io",
  base: "",
})
