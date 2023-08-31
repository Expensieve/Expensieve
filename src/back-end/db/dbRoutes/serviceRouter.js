const express = require('express');
const { serviceController } = require('../dbControllers/serviceController');



const serviceRouter = express.Router();

//Add routes for '/service' here

serviceRouter.get('/', serviceController.service, (req, res) => {
  console.log('Service Route Completed in serviceRouter')
  res.status(200)
})



module.exports = serviceRouter;