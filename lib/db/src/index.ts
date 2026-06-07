import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";
import path from "path";

const { Pool } = pg;

try {
  process.loadEnvFile(path.resolve(import.meta.dirname, "../../../.env"));
} catch (e) {
  // Ignore if .env is missing
}

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema });

export * from "./schema";
