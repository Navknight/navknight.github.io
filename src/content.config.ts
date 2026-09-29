import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

export const slugify = (s: string) => s.toLowerCase().trim().replace(/\s+/g, '-')

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.union([z.string(), z.array(z.string())]).optional(),
    image: z.string().nullish(),
  }),
})

// id = "<kind>/<slug>", kind ∈ problems | topics | reference (from the vault's top-level folder)
const dsa = defineCollection({
  loader: glob({
    base: '../dsa/notes',
    pattern: '{Problems,Topics,Reference}/**/*.md',
    generateId: ({ entry }) => {
      const kind = entry.split('/')[0].toLowerCase()
      const name = entry.split('/').pop()!.replace(/\.md$/, '')
      return `${kind}/${slugify(name)}`
    },
  }),
  schema: z.object({
    difficulty: z.string().optional(),
    topics: z.union([z.string(), z.array(z.string())]).optional(),
    source: z.string().optional(),
    star: z.coerce.boolean().optional(),
    link: z.string().optional(),
    // an empty `date:` in the vault is null, which would coerce to 1970
    date: z.preprocess((v) => v || undefined, z.coerce.date().optional()),
    type: z.string().optional(),
  }).passthrough(),
})

export const collections = { blog, dsa }
