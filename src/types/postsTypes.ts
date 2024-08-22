import { z } from 'zod';
import { PostsSchema } from '../utils/validations';

export type PostType = z.infer<typeof PostsSchema> 