import { defineConfig } from "drizzle-kit";
import path from "path";

try {
  process.loadEnvFile(path.resolve(__dirname, "../../.env"));
} catch (e) {
  // Ignore if .env file is missing
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  schema: path.join(__dirname, "./src/schema/index.ts"),
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
