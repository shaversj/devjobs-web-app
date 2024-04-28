import { drizzle } from "drizzle-orm/d1";
import { jobsTable } from "./schema.js";
import localRawData from "@/assets/data.json";

export default {
  async fetch(request, env) {
    const cleanupDatabase = async (db) => {
      try {
        const jobs = await db.delete(jobsTable).run();
        console.log({ jobs });
      } catch (err) {
        console.error("Something went wrong...");
        console.error(err);
      }
    };

    const seedDatabase = async (db) => {
      for (const job of localRawData) {
        try {
          await db.insert(jobsTable).values(job).run();
        } catch (err) {
          console.error("An error occurred while inserting job", err);
        }
      }
    };

    const main = async () => {
      const db = drizzle(env.DB);
      console.log("🧨 Started deleting the database...\n");
      await cleanupDatabase(db);
      console.log("\n🧨 Done deleting the database successfully...\n");

      console.log("🧨 Started seeding the database...\n");
      await seedDatabase(db);
      console.log("\n🧨 Done seeding the database successfully...\n");

      return await db.select().from(jobsTable).all();
    };

    const jobs = await main();

    return Response.json(jobs);
  },
};
