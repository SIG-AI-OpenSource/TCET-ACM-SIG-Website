const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://localhost:27017/TCET-ACM-SIGAI";
const event = require("./models/events.js");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' })
const port = process.env.PORT||8000;

app.use(cors());

main().then(()=>{
  console.log("connected to DB");
}).catch((err)=>{
  console.log(err);
});

async function main(){
  await mongoose.connect(MONGO_URL);
};

app.get("/events",async (req,res)=>{
  let eventArray = await event.find({optionDate:2023});
  let result = JSON.stringify(eventArray)
  res.json(result);
});

app.listen(port,()=>{
  console.log("Server is listening to port 8000!");
});