//Handle all queries related to adding, removing and managing service permissions
const db = require('../dbModels/expensieveDB');

const serviceController = {};

serviceController.service = (req, res, next)=>{
  console.log('serviceController is functioning!');
  next();
};

//VERIFY SERVICE OWNER


//OBTAIN ALL SERVICES

serviceController.getAllServices = async (req, res, next) => {
  const queryString = `SELECT * FROM services`;
  await db.query(queryString)
    .then((data)=>{
      res.locals.allServices = data.rows;
    });
  next();
};

//FETCH SERVICES BY SERVICE OWNER


//FETCH SERVICES OWNED BY OTHERS


//ADD A SERVICE
/*
JSON body format:
 {
  "name": "'string'",
  "owner": number,
  "description": "'string'",
  "password": "'string'",
  "cost": number,
  "url": "'string'",
  "in_group": number
 }
*/
serviceController.addNewService = async (req, res, next) => {
  console.log('Adding New Service');
  const {name, owner, description, password, cost, url, in_group} = req.body;
  console.log(name, owner, description, password, cost, url, in_group);
  const queryString = `INSERT INTO services (name, owner, description, password, cost, url, in_group) VALUES (${name},${owner},${description},${password},${cost},${url}, ${in_group});`;
  res.locals.newService = `${name}`

  db.query(queryString);

  next();
};


//Delete a service


//Update a service

module.exports = {serviceController};