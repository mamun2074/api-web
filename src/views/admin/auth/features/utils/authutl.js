import { z } from "zod";


export const loginSchema = z.object({
    email: z
        .string()
        .min(3, 'Email must be at least 3 characters'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters'),
})