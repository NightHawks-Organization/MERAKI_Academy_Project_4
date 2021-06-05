const { Appointments } = require("../../db/models/Appointment");
const appointmentsRouter = require("../routes/appointment");

const createNewAppointment = (req, res) => {
  const { date, doctor, email, specialty } = req.body;

  const appointment = new Appointments({
    date,
    doctor,
    email,
    specialty,
  });

  appointment
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllAppointments = (req, res) => {
  Appointments.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteAppointmentById = (req, res) => {
  Appointments.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Success Delete Appointment with id => ${req.params.id}`,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createNewAppointment,
  getAllAppointments,
  deleteAppointmentById,
};
