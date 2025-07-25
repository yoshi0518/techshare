import type { AppType } from '@/app/api/[[...route]]/route';
import { envClient } from '@/env_client';
import { hc } from 'hono/client';

export const client = hc<AppType>(envClient.NEXT_PUBLIC_APP_URL);
