import { pgTable, pgEnum, pgSchema, AnyPgColumn, uniqueIndex, text, timestamp, foreignKey } from "drizzle-orm/pg-core"


import { sql } from "drizzle-orm"

export const user = pgTable("User", {
	id: text("id").primaryKey().notNull(),
	name: text("name"),
	email: text("email").notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: 'string' }).notNull(),
},
(table) => {
	return {
		emailKey: uniqueIndex("User_email_key").on(table.email),
	}
});

export const entry = pgTable("Entry", {
	id: text("id").primaryKey().notNull(),
	entryDay: timestamp("entryDay", { precision: 3, mode: 'string' }).notNull(),
	urlFrontPhotoThumbnail: text("urlFrontPhotoThumbnail").notNull(),
	urlFrontPhotoHd: text("urlFrontPhotoHD").notNull(),
	urlBackPhotoThumbnail: text("urlBackPhotoThumbnail").notNull(),
	urlBackPhotoHd: text("urlBackPhotoHD").notNull(),
	userId: text("userId").notNull().references(() => user.id, { onDelete: "restrict", onUpdate: "cascade" } ),
	createdAt: timestamp("createdAt", { precision: 3, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: 'string' }).notNull(),
});