import { db } from "../src/app/db/client.js";
import { jobsTable } from "../src/app/db/schema.js";

import localRawData from "@/assets/data.json" with { type: "json" };

const seedDatabase = async () => {
  try {
    db.insert(jobsTable).values(localRawData).run();
    const jobs = db.select().from(jobsTable).all();
    console.log({ jobs });
  } catch (err) {
    console.error("Something went wrong...");
    console.error(err);
  }
};

const main = () => {
  console.log("🧨 Started seeding the database...\n");
  seedDatabase(db);
  console.log("\n🧨 Done seeding the database successfully...\n");
};

main();
