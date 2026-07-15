// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const notes = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/notes" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { notes };