const express = require("express");
const loginRouter = express.Router();
// require the controller
const performLogin = require("../../controllers/auth/login");




loginRouter.post("/login", performLogin);

module.exports = loginRouter;
