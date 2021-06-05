const express = require("express");
const appointmentsRouter = express.Router();
const {
    createNewAppointment , 
    getAllAppointments , 
    deleteAppointmentById , 
    updateAppointmentById 
} = require("../controllers/appointment");



appointmentsRouter.post("/", createNewAppointment);
appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.delete("/:id", deleteAppointmentById);
appointmentsRouter.put("/:id", updateAppointmentById);

module.exports = appointmentsRouter;



// ================ this code in server.js ===============================
const appointmentsRouter = require("./routers/routes/appointment");

app.use("/appointment", appointmentsRouter);
// ======================================================================


