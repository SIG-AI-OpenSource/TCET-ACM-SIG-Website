const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("./data.js");
const db_url =  process.env.ATLASDB_URL;
const Event = require("../models/events.js");

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
    await Event.deleteMany({}); // Clear existing data
    console.log("Existing data cleared");

    if (Array.isArray(initData.data)) {
      const insertedData = await Event.insertMany(initData.data);
      console.log(`${insertedData.length} events inserted`);

      // Verify insertion by fetching and logging a sample
      const sample = await Event.findOne();
      if (sample) {
        console.log("Sample event:", {
          title: sample.title,
          smallDescription: sample.smallDescription,
          largeImage: sample.largeImage,
          detailInfo: sample.detailInfo[0],
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
