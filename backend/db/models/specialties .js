const mongoose = require('mongoose');


const specialties  = new mongoose.Schema({
    name : { type: String, required: true },
    internalId: { type: mongoose.Schema.Types.ObjectId , ref:"Doctors" },
    
});



const Specialties1 = mongoose.model("Specialties", specialties);

module.exports.Specialties = Specialties1;
