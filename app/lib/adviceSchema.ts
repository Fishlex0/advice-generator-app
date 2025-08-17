import { z } from 'zod';

export const AdviceSchema = z.object({
  slip: z.object({
    id: z.number(),
    advice: z.string(),
  }),
});
