const express = require('express');

const {addDoctor}=require('./../controllers/addDoctor');

const doctorRouter = express.Router();
 
doctorRouter.get('/doctors',addDoctor);



module.exports=doctorRouter;