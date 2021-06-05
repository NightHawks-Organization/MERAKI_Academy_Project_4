const express = require("express");
const appointmentsRouter = express.Router();
const {createNewAppointment , getAllAppointments , deleteAppointmentById } = require("../controllers/appointment");



appointmentsRouter.post("/", createNewAppointment);
appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.delete("/:id", deleteAppointmentById);

module.exports = appointmentsRouter;



// ================ this code in server.js ===============================
const appointmentsRouter = require("./routers/routes/appointment");

app.use("/appointment", appointmentsRouter);
// ======================================================================


