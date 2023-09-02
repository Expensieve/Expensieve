//Handle all queries related to adding, removing and managing service permissions
const db = require('../dbModels/expensieveDB');

const serviceController = {};

serviceController.service = (req, res, next)=>{
  console.log('serviceController is functioning!');
  next();
};

//Verify Service


//Get all services

serviceController.getAllServices = async (req, res, next) =>{

console.log('Fetching all users');

const queryString = `SELECT * FROM services`;


await db.query(queryString)
.then((data)=>{
  res.locals.allServices = data.rows;
});
console.log(res.locals.allServices)
next();
};

//Get services owned by user


//Get services owned by other users


//Create a service


//Delete a service


//Update a service

module.exports = {serviceController};