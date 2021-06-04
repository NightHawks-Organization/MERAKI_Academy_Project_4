const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//built-in middlewares
app.use(express.json());



//routers

// ================ Hasan start ===============
const loginRouter = require('./routers/routes/auth/login')
app.use(loginRouter)




// ================ Hasan end ================



//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
