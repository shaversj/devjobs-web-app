import { db } from "@/app/db";
import { jobsTable } from "@/app/db/drizzle.schema";
import { like, sql } from "drizzle-orm";

export async function getJobsByTitle(title, data) {
  if (!title) return await db.select().from(jobsTable).execute();
  return await db
    .select()
    .from(jobsTable)
    .where(like(sql`lower(${jobsTable.position})`, `%${title.toLowerCase()}%`))
    .execute();
}
