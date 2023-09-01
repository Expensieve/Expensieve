//Handle all transaction related queries
const db = require('../dbModels/expensieveDB');

const transactionController = {};

transactionController.transaction = (req, res, next)=>{
  console.log('subscriptionController is functioning!');
  next();
};

//Get all transactions


//Create new transaction


//Get transactions made filtered by specific User


//Get transactions made filtered by Service


//Get transactions made filtered by Group



module.exports = {transactionController};