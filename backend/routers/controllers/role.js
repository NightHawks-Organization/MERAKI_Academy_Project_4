const { Role } = require("../../db/models/Role");

const createNewRole = (req, res) => {
	const { role, permissions } = req.body;

	const newRole = new Role({
		role,
		permissions,
	});

	newRole
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

module.exports = {
	createNewRole,
};
