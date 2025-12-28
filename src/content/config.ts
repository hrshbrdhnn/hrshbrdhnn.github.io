import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
    // type: "content",
    schema: z.object({
        title: z.string(),
        publishedAt: z.date(),
        description: z.string(),
        isPublished: z.boolean(),
        isDraft: z.boolean().default(false),
        isFeatured: z.boolean().default(false),
    }),
});

export const collections = { blog };