const {}
const deleteAppointments = (req, res) => {
	const id = req.params.id;

	Appointments
		.findByIdAndDelete(id)
		.then((result) => {
			res.status(200).json({
				success: true,
				message: `Success Delete appointment with id => ${id}`,
			});
		})
		.catch((err) => {
			res.send(err);
		});
};
module.exports={deleteAppointments}