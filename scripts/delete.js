import { db } from "../src/app/db/client.js";
import { jobsTable } from "../src/app/db/schema.js";

const cleanupDatabase = (db) => {
  try {
    const jobs = db.delete(jobsTable).run();
    console.log({ jobs });
  } catch (err) {
    console.error("Something went wrong...");
    console.error(err);
  }
};

const main = () => {
  console.log("🧨 Started deleting the database...\n");
  cleanupDatabase(db);
  console.log("\n🧨 Done deleting the database successfully...\n");
};

main();
