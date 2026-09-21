import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import obsidian from './src/lib/obsidian.mjs'

export default defineConfig({
  site: 'https://navknight.github.io',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [obsidian],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-dimmed' } },
  },
})
