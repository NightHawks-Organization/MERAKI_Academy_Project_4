

const express = require("express");
const loginRouter = express.Router();
// require the controller
const performLogin = require("../../controllers/auth/login");



// http://localhost:5000/login
loginRouter.post("/login", performLogin);

module.exports = loginRouter;
