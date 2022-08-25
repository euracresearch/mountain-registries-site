import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.mountain-registries.org',
  integrations: [tailwind({
    config: { applyBaseStyles: false },
  })]
});