// model Entry {
//     id       String   @id @default(cuid())
//     entryDay DateTime // the day that the entry is assigned to
  
//     urlFrontPhotoThumbnail String
//     urlFrontPhotoHD        String
  
//     urlBackPhotoThumbnail String
//     urlBackPhotoHD        String
  
//     user   User   @relation(fields: [userId], references: [id])
//     userId String
  
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//   }
  
//   // user model
//   model User {
//     id        String   @id @default(cuid())
//     name      String?
//     email     String   @unique
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     entries   Entry[]
//   }

import { pgTable, serial, text, varchar, date, timestamp, numeric } from "drizzle-orm/pg-core";

export const entry = pgTable('entry', {
  id: serial('id').primaryKey(),
  entryDay: timestamp('entry_day').notNull(),
  urlFrontPhotoThumbnail: text('url_front_photo_thumbnail').notNull(),
  urlFrontPhotoHD: text('url_front_photo_hd').notNull(),
  urlBackPhotoThumbnail: text('url_back_photo_thumbnail').notNull(),
  urlBackPhotoHD: text('url_back_photo_hd').notNull(),
  userId: numeric('user_id').references(() => user.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});