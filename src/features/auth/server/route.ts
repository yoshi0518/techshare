import { sessionMiddleware } from '@/libs/session-middleware';
import { Hono } from 'hono';

export const app = new Hono().get('/current', sessionMiddleware, async (c) => {
  const session = c.get('session');
  return c.json({ data: session.user });
});
