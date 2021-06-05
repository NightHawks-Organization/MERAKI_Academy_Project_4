const { Doctor } = require("./../../db/models/doctor");
const addDoctor = (req, res) => {
  const { internalId, name, specialty } = req.body;

  const Doctor_1 = new Doctor({
    internalId,
    name,
    specialty,
  });
  Doctor_1.save()
    .then((result) => {
      res.status(201).json ({
        result,
        success: true,
        message: 'doctor created successfully'})

    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports={addDoctor}