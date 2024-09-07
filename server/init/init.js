const mongoose = require("mongoose");
const initData = require("./data.js")
const MONGO_URL = "mongodb://localhost:27017/TCET-ACM-SIGAI";
const event = require("../models/events.js");

main().then(()=>{
  console.log("connected to DB");
}).catch((err)=>{
  console.log(err);
})

async function main(){
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await event.deleteMany({});
  await event.insertMany(initData.data);
  let result = await event.find();
  console.log(result[0].detailInfo[0]);
  console.log("data was initialized");
};

initDB();