import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const jobsTable = sqliteTable("jobs", {
  id: integer("id").primaryKey(),
  company: text("company"),
  logo: text("logo"),
  logoBackground: text("logoBackground"),
  position: text("position"),
  postedAt: text("postedAt"),
  contract: text("contract"),
  location: text("location"),
  website: text("website"),
  apply: text("apply"),
  description: text("description"),
  requirements: text("requirements", { mode: "json" }),
  role: text("role", { mode: "json" }),
});
