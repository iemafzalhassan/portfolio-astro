import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    dateFormatted: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    lastUpdated: z.string(),
    status: z.enum(['Draft', 'Ready', 'Published']),
  }),
});

export const collections = {
  post,
}; 