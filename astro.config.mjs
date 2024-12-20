// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://talkysafe143.github.io',
  integrations: [
      react({
        experimentalReactChildren: true
      }),
    tailwind({
      applyBaseStyles: false
    })
  ]
});