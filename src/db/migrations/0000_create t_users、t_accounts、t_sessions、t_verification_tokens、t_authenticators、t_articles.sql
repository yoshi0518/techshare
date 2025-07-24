CREATE TABLE "techshare"."t_accounts" (
	"user_id" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text
);
--> statement-breakpoint
CREATE TABLE "techshare"."t_articles" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text,
	"content" text,
	"icon" text,
	"author_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"published_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "techshare"."t_authenticators" (
	"credential_iD" text NOT NULL,
	"user_id" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"credential_public_key" text NOT NULL,
	"counter" integer NOT NULL,
	"credential_device_type" text NOT NULL,
	"credential_backed_up" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "t_authenticators_credential_iD_unique" UNIQUE("credential_iD")
);
--> statement-breakpoint
CREATE TABLE "techshare"."t_sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "techshare"."t_users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"email_verified" timestamp,
	"image" text,
	CONSTRAINT "t_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "techshare"."t_verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "techshare"."t_accounts" ADD CONSTRAINT "t_accounts_user_id_t_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "techshare"."t_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "techshare"."t_articles" ADD CONSTRAINT "t_articles_author_id_t_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "techshare"."t_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "techshare"."t_authenticators" ADD CONSTRAINT "t_authenticators_user_id_t_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "techshare"."t_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "techshare"."t_sessions" ADD CONSTRAINT "t_sessions_userId_t_users_id_fk" FOREIGN KEY ("userId") REFERENCES "techshare"."t_users"("id") ON DELETE cascade ON UPDATE no action;