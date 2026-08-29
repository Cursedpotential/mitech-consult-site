import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galleryItem = ({ image }: { image: () => ReturnType<typeof z.custom> }) =>
  z.object({
    src: image(),
    alt: z.string(),
    caption: z.string().optional(),
    type: z.enum(['context', 'before', 'process', 'detail', 'finished', 'after', 'diagram', 'interface']).optional(),
    position: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional(),
  });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    year: z.union([z.string(), z.number()]).optional(),
    yearEnd: z.union([z.string(), z.number()]).optional(),
    dateApproximate: z.boolean().default(false),
    location: z.string().optional(),
    chapter: z.string(),
    categories: z.array(z.string()),
    summary: z.string(),
    cover: image().optional(),
    featured: z.boolean().default(false),
    status: z.string().optional(),
    role: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    gallery: z.array(galleryItem({ image })).default([]),
    relatedProjects: z.array(z.string()).default([]),
    sortOrder: z.number().default(0),
  }),
});

export const collections = { projects };
