const mongoose = require('mongoose');

const specialties = new mongoose.Schema({
    name : { type: String, required: true },
    internalId: { type: mongoose.Schema.Types.ObjectId , ref:"Doctors" },
    
});

const insurance  = new mongoose.Schema({
    name : { type: String, required: true },
    
});

const Specialties1 = mongoose.model("Specialties", specialties);
const insurance1 = mongoose.model("Insurance", insurance);

module.exports.Specialties = Specialties1;
module.exports.Insurance = insurance1;
//updated
