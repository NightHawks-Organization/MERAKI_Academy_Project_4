const { Appointments } = require("../../db/models/Appointment");
const appointmentsRouter = require("../routes/appointments");

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

module.exports = {
  createNewAppointment,
};
