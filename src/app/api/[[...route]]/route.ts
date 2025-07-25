import { app as authApp } from '@/features/auth/server/route';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

app.use('*', logger());

const routes = app.route('/authentication', authApp);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
