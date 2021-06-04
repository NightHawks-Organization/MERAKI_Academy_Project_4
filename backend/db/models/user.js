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

users.statics.authenticateBasic = async function (email, password) {
    try {
      const user = await this.findOne({ email });
      if (!user) return ["The email does not exist", 404];
  
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        const payload = {
          userId: user._id,
          email: user.email,
          Role: user.role,
        };

        const options = {
            expiresIn: '60m',
        };
  
        return [jwt.sign(payload, process.env.SECRET, options), 200];
      }
      return ["The password you have entered is not correct", 403];
    } catch (error) {
      throw new Error(error.message);
    }
  };

const User1 = mongoose.model("User", users);

module.exports.User = User1;

