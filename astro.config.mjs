// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'hi',
    sidebar: [
      {slug: 'architecture'},
      {slug: 'getting-started/installation'},
      {label: 'Xilytix', link: 'https://xilytix.com'},
    ]
  })]
});