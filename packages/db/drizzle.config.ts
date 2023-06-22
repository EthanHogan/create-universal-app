import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/generated",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "No connection string provided in .env!",
  }
} satisfies Config;
