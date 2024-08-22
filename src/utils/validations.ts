import { z } from 'zod';

export const PostsSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const PostsListSchema = z.array(PostsSchema);
