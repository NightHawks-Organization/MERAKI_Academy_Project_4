const express = require('express');
const {register}= require('./../../controllers/auth/signUp');

const usersRouter = express.Router();

usersRouter.post("/register",register);

module.exports = usersRouter;