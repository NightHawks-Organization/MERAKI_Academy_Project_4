const express = require('express');


const {addDoctor, getAllDoctors}=require('../controllers/doctor');


const doctorRouter = express.Router();
 

doctorRouter.post('/doctors',addDoctor);
doctorRouter.get('/doctors',getAllDoctors);




module.exports=doctorRouter;