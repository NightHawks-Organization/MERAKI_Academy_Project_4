const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//built-in middlewares
app.use(express.json());

//routers
const usersRouter = require("./routers/routes/auth/signUp");
const loginRouter = require('./routers/routes/auth/login')
const doctorRouter = require('./routers/routes/doctor')
const appointmentsRouter = require("./routers/routes/appointment");


//third-party middleware
app.use(cors());

//app routers
app.use(usersRouter);
app.use(loginRouter)
app.use("/doctor", doctorRouter);
app.use("/appointment", appointmentsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
