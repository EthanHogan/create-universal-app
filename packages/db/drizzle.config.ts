import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/generated",
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
