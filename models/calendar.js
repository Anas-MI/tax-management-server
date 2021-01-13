const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const config = require("../config");

const Calendar = new Schema({
  title: String,
  startDate: String,
  startTime: String,
  endDate: String,
  endTime: String,
  type: String,
  location: String,
  matter: { type: Schema.Types.ObjectId, ref: "Matters" },
  userId:{type:Schema.Types.ObjectId, ref:"User"},
  notification: { type: Boolean, default: false },
  email: { type: Boolean, default: false },
  timeForReminder: String,
  description: String,
});

module.exports = mongoose.model("Calendar", Calendar);
