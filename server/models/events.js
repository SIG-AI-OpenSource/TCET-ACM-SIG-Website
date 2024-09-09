const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  smallDescription: String,
  image: {
    url: String,
    fileName: String,
  },
  largeImage: {
    // Changed from Largeimage to largeImage for consistency
    url: String,
    fileName: String,
  },
  date: String,
  optionDate: Number,
  detailInfo: [
    {
      _id: false,
      title: String,
      paragraph: String,
      sequence: Number,
    },
  ],
});

const Event = mongoose.model("Event", eventSchema); // Changed from "event" to "Event" for convention

module.exports = Event;
