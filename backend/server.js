const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers
const usersRouter = require("./routers/routes/auth/signUp");
const loginRouter = require('./routers/routes/auth/login')

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use("/register", usersRouter);
app.use(loginRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
