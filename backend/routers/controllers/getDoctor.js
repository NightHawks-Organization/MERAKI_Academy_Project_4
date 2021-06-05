const {Doctor}=require('../../db/models/doctor');
// const {User}=require('../../db/models/user')

const getDoctors = (req, res) => {
	Doctor
		.find({})
		.then((result) => {
			console.log(result)
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};


module.exports={getDoctors}