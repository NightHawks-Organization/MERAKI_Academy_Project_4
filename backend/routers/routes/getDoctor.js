const express = require('express');

const {getDoctors}=require('./../controllers/getDoctor');

const doctorsRouter = express.Router();
 
doctorsRouter.get('/doctors',getDoctors);



module.exports=doctorsRouter;