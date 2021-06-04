const doctorModel = require('../../db/models/user');

const createNewDoctor = (req, res) => {
	const { firstName, lastName, age, phoneNumber, email, password,gender , role } = req.body;

	const user = new doctorModel({
		firstName,
		lastName,
		age,
		phoneNumber,
		email,
		password,
        gender ,
		role,
	});

	user
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	createNewDoctor,
};