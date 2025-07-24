import type { AdapterAccount } from 'next-auth/adapters';
import { boolean, integer, pgSchema, primaryKey, text, timestamp } from 'drizzle-orm/pg-core';

const schema = pgSchema('techshare');

export const usersTable = schema.table('t_users', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: timestamp('email_verified', { mode: 'date' }),
  image: text('image'),
});

export const accountsTable = schema.table(
  't_accounts',
  {
    userId: text('user_id')
      .notNull()
      .references(() => usersTable.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('provider_account_id').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => [
    {
      compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
    },
  ],
);

export const sessionsTable = schema.table('t_sessions', {
  sessionToken: text('session_token').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokensTable = schema.table(
  't_verification_tokens',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (verificationTokens) => [
    {
      compositePk: primaryKey({
        columns: [verificationTokens.identifier, verificationTokens.token],
      }),
    },
  ],
);

export const authenticatorsTable = schema.table(
  't_authenticators',
  {
    credentialID: text('credential_iD').notNull().unique(),
    userId: text('user_id')
      .notNull()
      .references(() => usersTable.id, { onDelete: 'cascade' }),
    providerAccountId: text('provider_account_id').notNull(),
    credentialPublicKey: text('credential_public_key').notNull(),
    counter: integer('counter').notNull(),
    credentialDeviceType: text('credential_device_type').notNull(),
    credentialBackedUp: boolean('credential_backed_up').notNull(),
    transports: text('transports'),
  },
  (authenticator) => [
    {
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID],
      }),
    },
  ],
);

export const articlesTable = schema.table('t_articles', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text('title'),
  content: text('content'),
  icon: text('icon'),
  authorId: text('author_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
  publishedAt: timestamp('published_at', { mode: 'date' }),
});
