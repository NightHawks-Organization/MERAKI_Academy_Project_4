const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, min: 0 },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String },
  role: { type: mongoose.Schema.ObjectId, ref: "Role" },
});


const roles = new mongoose.Schema({
  role: String,
  permissions: [String],
});



// ================ Hasan start (user auth) ===============
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

      return [jwt.sign(payload, process.env.SECRET), 200];
    }
    return ["The password you have entered is not correct", 403];
  } catch (error) {
    throw new Error(error.message);
  }
};
// ================ Hasan end ================


const User1 = mongoose.model("User", users);
const role1 = mongoose.model("Role", roles);

module.exports.User = User1;
module.exports.Role = role1;
