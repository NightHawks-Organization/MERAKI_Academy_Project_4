const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const doctors = new mongoose.Schema({
  internalId: Number,
  name: String,
  specialty: String,
});

const Doctor1 = mongoose.model("Doctor", doctors);
module.exports.Doctor = Doctor1;
