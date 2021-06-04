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

// Hashing password and lowering case of email
users.pre('save', async function () {
	this.email = this.email.toLowerCase();
	this.password = await bcrypt.hash(this.password, 10);
});

const User1 = mongoose.model("User", users);

module.exports.User = User1;

