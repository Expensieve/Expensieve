//Handle all user related queries, such as creating, deleting, and updating
const db = require('../dbModels/expensieveDB');

const userController = {};

userController.user = (req,res, next)=>{
  console.log('userController is functioning!');
  next();
}

//Verify User


//Create a User


//Delete a User


//Update User Info


//Get a list of all Users associated to current User


module.exports = {userController};