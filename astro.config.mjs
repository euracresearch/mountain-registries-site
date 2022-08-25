import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://euracresearch.github.io',
  base: '/mountain-registries-site',
  integrations: [tailwind({
    config: { applyBaseStyles: false },
  })]
});