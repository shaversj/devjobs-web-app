import { db } from "@/app/db";
import { jobsTable } from "@/app/db/drizzle.schema";
import { and, like, sql } from "drizzle-orm";

export async function getJobsByFilters(jobFilter, locationFilter, contractFilter) {
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
