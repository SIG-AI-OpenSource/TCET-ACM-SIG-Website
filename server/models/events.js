const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title:{
    type:String,
    required: true,
  },
  smallDescription:String,
  image:{
    url:String,
    fileName:String,
  },
  date:String,
  optionDate:Number,
  detailInfo:[{
    _id:false,
    title:String,
    paragraph:String,
    sequence:Number,
  }]
});

const event = mongoose.model("event",eventSchema);

module.exports = event;