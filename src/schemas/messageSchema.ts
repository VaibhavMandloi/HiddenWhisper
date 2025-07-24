import {z} from 'zod';

export const messageSchema = z.object({
   content : 
        z.string()
        .min(1, 'Content must not be empty')
        .max(500, 'Content must not exceed 500 characters'),
});