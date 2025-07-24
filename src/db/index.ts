import { env } from '@/env';
import { drizzle } from 'drizzle-orm/neon-http';

export const db = drizzle(env.NEON_DATABASE_URL);
