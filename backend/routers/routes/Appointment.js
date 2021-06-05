const express = require('express');
const {deleteAppointments}=require('./../controllers/Appointment');

const doctorRouter = express.Router();


doctorRouter.delete('/:id',deleteAppointments);

module.exports=deleteAppointments