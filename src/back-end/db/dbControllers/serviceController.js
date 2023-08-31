//Handle all queries related to adding, removing and managing service permissions
const db = require('../dbModels/expensieveDB');

const serviceController = {};

serviceController.service = (req, res, next)=>{
  console.log('serviceController is functioning!');
  next();
};

//Verify Service


//Get all services


//Get services owned by user


//Get services owned by other users


//Create a service


//Delete a service


//Update a service

module.exports = {serviceController};