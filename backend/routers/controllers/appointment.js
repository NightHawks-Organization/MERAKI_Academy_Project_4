const { Appointments } = require("../../db/models/Appointment");
const appointmentsRouter = require("../routes/appointment");

const createNewAppointment = (req, res) => {
  const { date, doctor, user, specialty } = req.body;
  // const email = req.token
  // console.log(req.token)
  const appointment = new Appointments({
    date,
    doctor,
    user,
    specialty,
  });

  appointment
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ result, message: "appointment scheduled successfully" });
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllAppointments = (req, res) => {
  Appointments
  .find({})
  .populate('user','email-_id')
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
        result,
        message: `Appointment deleted successfully`,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateAppointmentById = (req, res) => {
  Appointments
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json({
        result,
        message: `Appointment updated successfully`,
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
  updateAppointmentById,
};
