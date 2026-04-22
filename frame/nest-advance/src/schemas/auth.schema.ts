import { z } from 'zod'
export const LoginSchema = z
  .object({
    email: z.email(),
    password: z.string().min(6).max(18),
    name: z.string().min(3).max(6).optional(),
  })
  .meta({
    id: 'user',
  })
export type LoginDto = z.infer<typeof LoginSchema>
