const express = require("express");

const {
  addDoctor,
  getAllDoctors,
  deleteDoctorById,
} = require("../controllers/doctor");

const doctorRouter = express.Router();

doctorRouter.post("/", addDoctor);
doctorRouter.get("/", getAllDoctors);
doctorRouter.delete("/:id", deleteDoctorById);

module.exports = doctorRouter;
