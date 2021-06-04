const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const users = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, min: 0 },
    phoneNumber: { type: Number,required: true  },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String},
    role: { type: mongoose.Schema.ObjectId, ref: "Role" }
});

const roles = new mongoose.Schema({
    role: String,
    permissions: [String]
});

const User1 = mongoose.model("User", users);
const role1 = mongoose.model("Role", roles);

module.exports.User = User1;
module.exports.Role = role1;
