import { z } from 'zod';

// req validation
const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    author: z.string().optional(),
    description: z.string({
      required_error: 'description is required',
    }),
    genre: z.string({
      required_error: 'genre is required',
    }),
    publicationDate: z.string({
      required_error: 'publicationDate is required',
    }),
  }),
});

export const BookValidation = {
  createBookZodSchema,
};
