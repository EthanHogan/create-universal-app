import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const dbConnectionURL = process.env.DATABASE_URL || "No connection string provided in .env!";

// // for migrations
// const migrationClient: postgres.Sql<{}> = postgres(dbConnectionURL, { max: 1 });
// // is this supposed to be a relative path from root? is it supposed to be a path to the directory of the drizzle.config.ts file? not sureeeee
// migrate(drizzle(migrationClient), { migrationsFolder: 'packages/db/drizzle/migrations' })

// for query purposes
const queryClient: postgres.Sql<{}> = postgres(dbConnectionURL);
export const db: PostgresJsDatabase = drizzle(queryClient);
 