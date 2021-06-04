const mongoose = require('mongoose');

const roles = new mongoose.Schema({
    role: String,
    permissions: [String]
});

const Role1 = mongoose.model("Role", roles);

module.exports.Role = Role1
