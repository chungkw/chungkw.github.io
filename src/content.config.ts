// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { z } from "astro/zod"

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/[^_]*.{md,mdx}"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        blurb: z.string().optional(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };
