CREATE TABLE IF NOT EXISTS "entry" (
	"id" serial PRIMARY KEY NOT NULL,
	"entry_day" timestamp NOT NULL,
	"url_front_photo_thumbnail" text NOT NULL,
	"url_front_photo_hd" text NOT NULL,
	"url_back_photo_thumbnail" text NOT NULL,
	"url_back_photo_hd" text NOT NULL,
	"user_id" numeric,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "entry" ADD CONSTRAINT "entry_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
