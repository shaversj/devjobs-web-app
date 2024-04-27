import "dotenv/config";

export default {
  schema: "./src/app/db/schema.js",
  out: "./drizzle",
  driver: "better-sqlite", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    wranglerConfigPath: "wrangler.toml",
    dbName: "jobs",
  },
};
