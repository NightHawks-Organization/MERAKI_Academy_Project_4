const express = require("express");
const { createNewAppointment } = require("../controllers/appointments");
const appointmentsRouter = express.Router();


appointmentsRouter.post("/", createNewAppointment);



module.exports = appointmentsRouter;


// ================ this code in server.js ===============================
const appointmentsRouter = require("./routers/routes/appointments");

app.use("/appointments", appointmentsRouter);
// ======================================================================


