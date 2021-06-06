const { Doctor } = require("../../db/models/doctor");

const addDoctor = (req, res) => {
  const { internalId, name, specialty } = req.body;

  const doctor = new Doctor({
    internalId,
    name,
    specialty,
  });
  doctor
    .save()
    .then((result) => {
      res.status(201).json({
        result,
        message: "doctor created successfully",
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllDoctors = (req, res) => {
  Doctor.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteDoctorById = (req, res) => {
  const id = req.params.id;

  Doctor.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json({
        message: `Success Delete doctor`,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { addDoctor, getAllDoctors,deleteDoctorById };
