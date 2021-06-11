const express = require("express");
const appointmentsRouter = express.Router();
const {
    createNewAppointment , 
    getAllAppointments , 
    deleteAppointmentById , 
    updateAppointmentById ,
    getAppointmentByUserId,
    checkAvailabilityByDoctor
} = require("../controllers/appointment");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

appointmentsRouter.post("/", createNewAppointment);
appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.delete("/:id", deleteAppointmentById);
appointmentsRouter.put("/:id",updateAppointmentById);
appointmentsRouter.get("/:id", getAppointmentByUserId);
appointmentsRouter.get("/dr/:id", checkAvailabilityByDoctor);

module.exports = appointmentsRouter;
