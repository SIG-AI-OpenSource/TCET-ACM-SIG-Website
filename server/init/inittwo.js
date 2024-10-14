const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const db_url =  process.env.ATLASDB_URL;
const mongoose = require("mongoose");
const initData = require("./magazineData.js");
const Magazine = require("../models/magazine.js");

async function main() {
  try {
    await mongoose.connect(db_url);
    console.log("Connected to DB");
    await initDB();
    console.log("Data was initialized");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

const initDB = async () => {
  try {
    await Magazine.deleteMany({}); // Clear existing data
    console.log("Existing data cleared");

    if (Array.isArray(initData.data)) {
      const insertedData = await Magazine.insertMany(initData.data);
      console.log(`${insertedData.length} events inserted`);

      // Verify insertion by fetching and logging a sample
      const sample = await Magazine.findOne();
      if (sample) {
        console.log("Sample event:", {
          title: sample.title,
          smallDescription: sample.smallDescription,
          image: sample.image,
          views:sample.views,
          bookLink:sample.bookLink,
        });
      } else {
        console.log("No events found after insertion");
      }
    } else {
      throw new Error("initData.data is not an array");
    }
  } catch (error) {
    console.error("Error during initialization:", error);
    throw error; // Re-throw to be caught in main
  }
};

main().catch(console.error);
