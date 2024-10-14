const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const magazineSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  smallDescription: String,
  image: {
    url: String,
    fileName: String,
  },
  bookLink: String,
  views:Number,
  optionDate: Number,
  latest:String,
});

const Magazine = mongoose.model("Magazine", magazineSchema); // Changed from "event" to "Event" for convention

module.exports = Magazine;