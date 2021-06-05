const express = require('express');

const {addDoctor}=require('./../controllers/addDoctor');

const doctorRouter = express.Router();
 
doctorRouter.post('/doctors',addDoctor);



module.exports=doctorRouter;