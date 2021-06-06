const mongoose = require("mongoose");

const appointments = new mongoose.Schema({
  date: Date,
  doctor: { type: mongoose.Schema.ObjectId, ref: "Doctor" },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },

});

const Appointment = mongoose.model("Appointment", appointments);
module.exports.Appointments = Appointment;
