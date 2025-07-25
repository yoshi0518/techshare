import type { Session } from 'next-auth';
import { auth } from '@/auth';
import { createMiddleware } from 'hono/factory';

type AdditionalContext = {
  Variables: {
    session: Session;
  };
};

export const sessionMiddleware = createMiddleware<AdditionalContext>(async (c, next) => {
  const session = await auth();
  if (!session) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  c.set('session', session);
  return next();
});
