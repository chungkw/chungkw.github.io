// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/[^_]*.md"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };
