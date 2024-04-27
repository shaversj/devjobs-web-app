import { db } from "@/app/db/client";
import { jobsTable } from "@/app/db/schema";
import { and, like, sql, eq } from "drizzle-orm";

export async function getJobsByFilters(jobFilter, locationFilter, contractFilter) {
  console.log("Get data from database...");
  let conditions = [];
  if (jobFilter) conditions.push(like(sql`lower(${jobsTable.position})`, `%${jobFilter.toLowerCase()}%`));
  if (locationFilter) conditions.push(like(sql`lower(${jobsTable.location})`, `%${locationFilter.toLowerCase()}%`));
  if (contractFilter) conditions.push(like(sql`lower(${jobsTable.contract})`, `%${contractFilter.toLowerCase()}%`));

  return conditions.length
    ? await db
        .select()
        .from(jobsTable)
        .where(and(...conditions))
        .execute()
    : await db.select().from(jobsTable).execute();
}

export async function getJobById(id) {
  return db.select().from(jobsTable).where(eq(jobsTable.id, id)).execute();
}
