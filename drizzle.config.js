import "dotenv/config";

export default {
  schema: "./src/app/_db/drizzle.schema.js",
  out: "./drizzle",
  driver: "better-sqlite", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: "sqlite.db",
  },
};
