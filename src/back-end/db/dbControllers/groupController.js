//Handle all queries relating to the creation, viewing and assignment of groups
const db = require('../dbModels/expensieveDB');

const groupController = {};

//Is Router working?
groupController.group = (req, res, next) =>{
  console.log('Group Controller is functioning!');
  next();
};


//Verify Group


//Get all groups
groupController.getAllGroups = async (req, res, next) =>{
console.log('Fetching all groups');

const queryString = `SELECT * FROM groups`;


await db.query(queryString)
.then((data)=>{
  res.locals.allGroups = data.rows;
});

console.log(res.locals.allGroups)
 
next();

}

//Get groups owned by user


//Get groups owned by other users


//Create a group


//Delete a group


//Update a group


module.exports = {groupController};