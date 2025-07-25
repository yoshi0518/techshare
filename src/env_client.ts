import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string(),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

if (!parsedEnv.success) {
  console.error('[Client] ❌ Invalid environment variables:', parsedEnv.error.format());
  throw new Error('[Client] Invalid environment variables');
}

export const envClient = parsedEnv.data;
